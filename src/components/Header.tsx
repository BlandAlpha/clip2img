import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

interface HeaderProps {
  darkMode: boolean
  onToggleDarkMode: () => void
}

export function Header({ darkMode, onToggleDarkMode }: HeaderProps) {
  return (
    <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow`}>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          剪贴板文字转图片
        </h1>
        <button
          onClick={onToggleDarkMode}
          className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} `}
        >
          {darkMode ? (
            <SunIcon className="h-6 w-6 text-gray-100" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-900" />
          )}
        </button>
      </div>
    </header>
  )
} 