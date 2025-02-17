import { PaintBrushIcon } from '@heroicons/react/24/outline'

interface StyleSettingsProps {
  darkMode: boolean
  fontFamily: string
  fontSize: string
  onFontFamilyChange: (value: string) => void
  onFontSizeChange: (value: string) => void
}

const FONT_OPTIONS = [
  { 
    label: '系统字体',
    options: [
      { value: 'system-ui', label: '系统默认字体' },
      { value: "'Microsoft YaHei'", label: '微软雅黑' },
      { value: 'SimSun', label: '宋体' },
    ]
  },
  {
    label: '中文字体',
    options: [
      { value: "'Noto Sans SC'", label: 'Noto Sans 黑体' },
      { value: "'Noto Serif SC'", label: 'Noto Serif 宋体' },
      { value: "'ZCOOL KuaiLe'", label: '站酷快乐体' },
      { value: "'ZCOOL QingKe HuangYou'", label: '站酷庆科黄油体' },
      { value: "'ZCOOL XiaoWei'", label: '站酷小薇体' },
    ]
  },
  {
    label: '等宽字体',
    options: [
      { value: "'JetBrains Mono'", label: 'JetBrains Mono' },
      { value: "'Fira Code'", label: 'Fira Code' },
      { value: "'Roboto Mono'", label: 'Roboto Mono' },
    ]
  },
  {
    label: '英文衬线字体',
    options: [
      { value: "'Playfair Display'", label: 'Playfair Display' },
      { value: "'Lora'", label: 'Lora' },
    ]
  },
  {
    label: '英文无衬线字体',
    options: [
      { value: "'Montserrat'", label: 'Montserrat' },
      { value: "'Open Sans'", label: 'Open Sans' },
    ]
  },
]

export function StyleSettings({ 
  darkMode, 
  fontFamily, 
  fontSize, 
  onFontFamilyChange, 
  onFontSizeChange 
}: StyleSettingsProps) {
  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow rounded-lg`}>
      <div className={`p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} flex items-center`}>
          <PaintBrushIcon className="h-5 w-5 mr-2" />
          样式设置
        </h2>
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative">
          <select
            value={fontFamily}
            onChange={(e) => onFontFamilyChange(e.target.value)}
            className={`appearance-none w-full rounded-lg border ${darkMode
                ? 'bg-gray-700 border-gray-600 text-gray-100'
                : 'bg-white border-gray-300 text-gray-900'
              } px-4 py-2.5 pr-8 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
          >
            {FONT_OPTIONS.map(group => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map(option => (
                  <option 
                    key={option.value} 
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <SelectArrow darkMode={darkMode} />
        </div>

        <div className="relative">
          <select
            value={fontSize}
            onChange={(e) => onFontSizeChange(e.target.value)}
            className={`appearance-none w-full rounded-lg border ${darkMode
                ? 'bg-gray-700 border-gray-600 text-gray-100'
                : 'bg-white border-gray-300 text-gray-900'
              } px-4 py-2.5 pr-8 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
          >
            <option value="14">小号 (14px)</option>
            <option value="16">中号 (16px)</option>
            <option value="20">大号 (20px)</option>
            <option value="24">特大 (24px)</option>
          </select>
          <SelectArrow darkMode={darkMode} />
        </div>
      </div>
    </div>
  )
}

function SelectArrow({ darkMode }: { darkMode: boolean }) {
  return (
    <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ${
      darkMode ? 'text-gray-400' : 'text-gray-500'
    }`}>
      <svg 
        className="h-4 w-4" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
  )
} 