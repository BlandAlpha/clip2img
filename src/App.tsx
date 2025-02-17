import { useState, useEffect, useRef } from 'react'
import { Header } from './components/Header'
import { Toolbar } from './components/Toolbar'
import { StyleSettings } from './components/StyleSettings'
import { Preview } from './components/Preview'
import { LayoutControls } from './components/LayoutControls'
import { exportToImage } from './utils/imageExport'

function App() {
  const [text, setText] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const [fontFamily, setFontFamily] = useState('system-ui')
  const [fontSize, setFontSize] = useState('16')
  const [isMarkdown, setIsMarkdown] = useState(false)
  const [layout, setLayout] = useState<'horizontal' | 'vertical'>('horizontal')
  const previewRef = useRef<HTMLDivElement>(null!)

  // 检测系统暗黑模式
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  }, [])

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setText(text)
    } catch (err) {
      console.error('Failed to read clipboard:', err)
    }
  }

  const handleExport = async () => {
    if (!previewRef.current) return
    try {
      await exportToImage(previewRef.current, layout)
    } catch (err) {
      console.error('导出图片失败:', err)
      alert('导出图片失败，请重试')
    }
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Header 
        darkMode={darkMode} 
        onToggleDarkMode={() => setDarkMode(!darkMode)} 
      />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <Toolbar 
            isMarkdown={isMarkdown}
            onPaste={handlePaste}
            onToggleMarkdown={() => setIsMarkdown(!isMarkdown)}
          />

          <StyleSettings 
            darkMode={darkMode}
            fontFamily={fontFamily}
            fontSize={fontSize}
            onFontFamilyChange={setFontFamily}
            onFontSizeChange={setFontSize}
          />

          <Preview 
            darkMode={darkMode}
            isMarkdown={isMarkdown}
            text={text}
            fontFamily={fontFamily}
            fontSize={fontSize}
            layout={layout}
            previewRef={previewRef}
          />

          <LayoutControls 
            darkMode={darkMode}
            layout={layout}
            onLayoutChange={setLayout}
            onExport={handleExport}
          />
        </div>
      </main>
    </div>
  )
}

export default App