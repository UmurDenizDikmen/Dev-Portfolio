import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiSunLine, RiMoonFill } from "react-icons/ri";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return;
  }

  return (
    <button
      className="bg-slate-100 p-2 rounded-xl"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <RiSunLine size={25} color="black" />
      ) : (
        <RiMoonFill size={25} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
