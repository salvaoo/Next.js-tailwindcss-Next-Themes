import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "next-themes";
import { useState, useEffect } from 'react'

function ChangeDarkMode() {

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="absolute bg-[#121212] dark:bg-white rounded-full p-2 top-2 right-2">
      <div className="cursor-pointer">
        {theme == "light" ? (
          <HiMoon
            onClick={() => setTheme("dark")}
            className="h-8 w-8 text-white sm:mt-0"
          />
        ) : (
          <HiSun
            onClick={() => setTheme("light")}
            className="h-8 w-8 text-gray-900 sm:mt-0"
          />
        )}
      </div>
    </div>
  )
}

export default ChangeDarkMode;
