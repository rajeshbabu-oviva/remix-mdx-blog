import { useState } from "react";
import { Sun, Moon } from "lucide-react";

const iconThemeMap = new Map([
  ["light", Sun],
  ["dark", Moon],
]);
const themes = [...iconThemeMap.keys()];

interface ThemeToggleIconProps {
  theme: string;
  checked: boolean;
}

const ThemeToggleIcon = ({ theme, checked }: ThemeToggleIconProps) => {
  const Component = iconThemeMap.get(theme);
  console.log(theme, checked);

  if (Component) {
    return <Component key={theme} className={checked ? "checked" : ""} />;
  }

  return <></>;
};

export const ThemeToggle = () => {
  const [theme, setTheme] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newTheme = event.target.value;
    setTheme(newTheme);
    console.log("current theme ", newTheme);
  }

  const labelClass =
    "relative flex cursor-pointer items-center justify-center opacity-50 text-text-main";

  return (
    <div className="theme-toggle ml-2.5 inline-flex h-full items-center gap-[0.6em] rounded-[99em] px-[0.67em] py-[0.33em] pt-2">
      {themes.map((t, i) => (
        <label
          key={t}
          className={theme === t ? `checked ${labelClass}` : labelClass}
        >
          <ThemeToggleIcon theme={t} checked={theme === t} />
          <input
            type="radio"
            name="theme-toggle"
            className="absolute inset-0 z-[-1] opacity-0"
            checked={theme === t}
            value={t}
            title={`Use ${t} theme`}
            aria-label={`Use ${t} theme`}
            onChange={handleChange}
          />
        </label>
      ))}
    </div>
  );
};

export default ThemeToggle;
