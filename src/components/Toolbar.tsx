import { ClipboardDocumentIcon } from '@heroicons/react/24/outline'

interface ToolbarProps {
  isMarkdown: boolean
  onPaste: () => void
  onToggleMarkdown: () => void
}

export function Toolbar({ isMarkdown, onPaste, onToggleMarkdown }: ToolbarProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={onPaste}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <ClipboardDocumentIcon className="h-5 w-5 mr-2" />
        从剪贴板获取
      </button>
      <button
        onClick={onToggleMarkdown}
        className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm ${
          isMarkdown 
            ? 'bg-purple-600 hover:bg-purple-700' 
            : 'bg-gray-600 hover:bg-gray-700'
        } text-white focus:outline-none`}
      >
        Markdown: {isMarkdown ? '开启' : '关闭'}
      </button>
    </div>
  )
} 