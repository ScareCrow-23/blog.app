import { useSelector } from "react-redux";

export default function ThemeProvider({ childern }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[#333333]">
        {childern}
      </div>
    </div>
  );
}
