interface CategoryTagsProps {
  categories: string[];
}

export const CategoryTags = ({ categories }: CategoryTagsProps) => {
  // 카테고리를 3줄로 나누기
  const thirdPoint = Math.ceil(categories.length / 3);
  const firstRow = categories.slice(0, thirdPoint);
  const secondRow = categories.slice(thirdPoint, thirdPoint * 2);
  const thirdRow = categories.slice(thirdPoint * 2);

  return (
    <div className="mb-8 overflow-hidden -mx-6">
      {/* 첫 번째 줄 - 왼쪽으로 이동 */}
      <div className="mb-2 flex">
        <div
          className="flex gap-2 pr-2 pl-6"
          style={{
            animation: "scrollLeft 30s linear infinite",
          }}
        >
          {[...firstRow, ...firstRow].map((category, index) => (
            <button
              key={`first-${index}`}
              className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 두 번째 줄 - 오른쪽으로 이동 */}
      <div className="mb-2 flex">
        <div
          className="flex gap-2 pr-2 pl-6"
          style={{
            animation: "scrollRight 30s linear infinite",
          }}
        >
          {[...secondRow, ...secondRow].map((category, index) => (
            <button
              key={`second-${index}`}
              className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 세 번째 줄 - 왼쪽으로 이동 */}
      <div className="flex">
        <div
          className="flex gap-2 pr-2 pl-6"
          style={{
            animation: "scrollLeft 30s linear infinite",
          }}
        >
          {[...thirdRow, ...thirdRow].map((category, index) => (
            <button
              key={`third-${index}`}
              className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};
