import { HiSun, HiMoon } from "react-icons/hi";
import { RiHome2Fill, RiUser3Fill } from "react-icons/ri";
import { useTheme } from "next-themes";

function ChangeDarkMode() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="absolute bg-[#121212] dark:bg-white rounded-full p-2 top-2 right-2">
      <div className="cursor-pointer">
      {theme === "light" ? (
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
    </header>
  );
}

export default ChangeDarkMode;
