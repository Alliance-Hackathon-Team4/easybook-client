import { searchIcon } from "../../assets";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export const SearchBar = ({
  placeholder = "저자, 제목...",
  onSearch,
}: SearchBarProps) => {
  return (
    <div className="relative w-full">
      {/* 아이콘 */}
      <img
        src={searchIcon}
        alt="검색"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
      />
      {/* 입력창 */}
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch?.(e.target.value)}
        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5eb5a8] focus:border-transparent"
      />
    </div>
  );
};
