import { PhotoIcon } from '@heroicons/react/24/outline'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  oneDark,
  oneLight
} from 'react-syntax-highlighter/dist/esm/styles/prism'

interface PreviewProps {
  darkMode: boolean
  isMarkdown: boolean
  text: string
  fontFamily: string
  fontSize: string
  layout: 'horizontal' | 'vertical'
  previewRef: React.RefObject<HTMLDivElement>
}

export function Preview({ 
  darkMode, 
  isMarkdown, 
  text, 
  fontFamily, 
  fontSize, 
  layout,
  previewRef 
}: PreviewProps) {
  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow rounded-lg`}>
      <div className={`p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} flex items-center`}>
          <PhotoIcon className="h-5 w-5 mr-2" />
          预览
        </h2>
      </div>
      <div 
        ref={previewRef}
        className={`p-6 min-h-[200px] ${
          isMarkdown ? `prose ${darkMode ? 'prose-invert' : ''} max-w-none` : ''
        }`}
        style={{
          fontFamily,
          fontSize: `${fontSize}px`,
          color: darkMode ? '#e5e7eb' : '#000000',
          maxWidth: layout === 'horizontal' ? 'none' : '600px',
          margin: layout === 'horizontal' ? '0' : '0 auto',
          minHeight: layout === 'horizontal' ? '200px' : '600px',
          padding: layout === 'horizontal' ? '24px' : '32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: darkMode ? '#1f2937' : '#ffffff',
          borderRadius: '8px',
        } as React.CSSProperties}
      >
        <div style={{
          width: '100%',
          height: '100%',
          overflow: 'auto'
        }}>
          {isMarkdown ? (
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({node, ...props}) => <h1 style={{
                  fontSize: `${Number(fontSize) * 1.5}px`,
                  borderBottom: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                  paddingBottom: '0.3em',
                  marginBottom: '16px',
                  color: darkMode ? '#e5e7eb' : '#000000'
                }} {...props} />,
                h2: ({node, ...props}) => <h2 style={{
                  fontSize: `${Number(fontSize) * 1.3}px`,
                  borderBottom: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                  paddingBottom: '0.3em',
                  marginBottom: '16px',
                  color: darkMode ? '#e5e7eb' : '#000000'
                }} {...props} />,
                h3: ({node, ...props}) => <h3 style={{
                  fontSize: `${Number(fontSize) * 1.1}px`,
                  marginBottom: '16px',
                  color: darkMode ? '#e5e7eb' : '#000000'
                }} {...props} />,
                ul: ({node, ...props}) => <ul style={{
                  listStyleType: 'disc',
                  paddingLeft: '2em',
                  marginBottom: '16px',
                  color: darkMode ? '#e5e7eb' : '#000000'
                }} {...props} />,
                ol: ({node, ...props}) => <ol style={{
                  listStyleType: 'decimal',
                  paddingLeft: '2em',
                  marginBottom: '16px',
                  color: darkMode ? '#e5e7eb' : '#000000'
                }} {...props} />,
                li: ({node, ...props}) => <li style={{
                  marginTop: '0.25em',
                  color: darkMode ? '#e5e7eb' : '#000000'
                }} {...props} />,
                p: ({node, ...props}) => <p style={{
                  marginBottom: '16px',
                  lineHeight: '1.6',
                  color: darkMode ? '#e5e7eb' : '#000000'
                }} {...props} />,
                hr: ({node, ...props}) => <hr style={{
                  height: '1px',
                  border: 'none',
                  backgroundColor: darkMode ? '#374151' : '#e5e7eb',
                  margin: '24px 0',
                }} {...props} />,
                code: ({node, className, children, ...props}) => {
                  const match = /language-(\w+)/.exec(className || '')
                  const language = match ? match[1] : ''
                  const isInline = !match

                  if (isInline) {
                    return (
                      <code
                        style={{
                          padding: '0.2em 0.4em',
                          margin: 0,
                          fontSize: '85%',
                          backgroundColor: darkMode ? '#282c34' : '#f3f4f6',
                          borderRadius: '4px',
                          color: darkMode ? '#e5e7eb' : 'inherit',
                          fontFamily: 'monospace'
                        }}
                        {...props}
                      >
                        {children}
                      </code>
                    )
                  }

                  return (
                    <SyntaxHighlighter
                      style={darkMode ? oneDark : oneLight}
                      language={language}
                      PreTag="div"
                      customStyle={{
                        margin: '16px 0',
                        padding: '16px',
                        backgroundColor: darkMode ? '#282c34' : '#f3f4f6',
                        borderRadius: '6px',
                        fontSize: '85%',
                        fontFamily: 'monospace'
                      }}
                      codeTagProps={{
                        style: {
                          backgroundColor: 'transparent',
                          fontFamily: 'monospace'
                        }
                      }}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  )
                },
                pre: ({children}) => <>{children}</>,
                blockquote: ({node, ...props}) => <blockquote style={{
                  padding: '0 1em',
                  color: darkMode ? '#9ca3af' : '#6b7280',
                  borderLeft: `0.25em solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                  marginBottom: '16px'
                }} {...props} />,
                a: ({node, ...props}) => <a style={{
                  color: darkMode ? '#60a5fa' : '#3b82f6',
                  textDecoration: 'none'
                }} {...props} />,
              }}
            >
              {text || '在这里显示 Markdown 格式的文字...'}
            </ReactMarkdown>
          ) : (
            <div style={{ whiteSpace: 'pre-wrap' }}>
              {text || '在这里显示普通文字...'}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 