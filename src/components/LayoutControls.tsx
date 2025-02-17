interface LayoutControlsProps {
  darkMode: boolean
  layout: 'horizontal' | 'vertical'
  onLayoutChange: (layout: 'horizontal' | 'vertical') => void
  onExport: () => void
}

export function LayoutControls({ 
  darkMode, 
  layout, 
  onLayoutChange,
  onExport 
}: LayoutControlsProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>布局：</span>
        <div className="flex gap-2">
          <button
            onClick={() => onLayoutChange('horizontal')}
            className={`px-3 py-1.5 rounded ${
              layout === 'horizontal'
                ? 'bg-indigo-600 text-white'
                : `${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`
            }`}
          >
            横版
          </button>
          <button
            onClick={() => onLayoutChange('vertical')}
            className={`px-3 py-1.5 rounded ${
              layout === 'vertical'
                ? 'bg-indigo-600 text-white'
                : `${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`
            }`}
          >
            竖版
          </button>
        </div>
      </div>
      <button 
        onClick={onExport}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        导出图片
      </button>
    </div>
  )
} 