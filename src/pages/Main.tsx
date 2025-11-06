import { useState } from "react";
import { SearchBar, CategoryTags } from "../components";

interface Book {
  id: number;
  title: string;
  author: string;
  coverImage: string;
}

export const Main = () => {
  const [showAllBooks, setShowAllBooks] = useState(false);

  const categories = [
    "Nutrition",
    "고전",
    "Feminism",
    "Motivational",
    "Religion",
    "Mindfulness",
    "Business",
    "Habits",
    "Science",
    "Self-help",
    "Decisions",
    "Marketing",
    "Entrepreneurship",
  ];

  const allRecommendedBooks: Book[] = [
    {
      id: 1,
      title: "The Collected Regrets of...",
      author: "Mikki Brammer",
      coverImage: "/books/collected-regrets.jpg",
    },
    {
      id: 2,
      title: "The Collected Regrets of...",
      author: "Mikki Brammer",
      coverImage: "/books/collected-regrets.jpg",
    },
    {
      id: 3,
      title: "The Collected Regrets of...",
      author: "Mikki Brammer",
      coverImage: "/books/collected-regrets.jpg",
    },
    {
      id: 4,
      title: "The Collected Regrets of...",
      author: "Mikki Brammer",
      coverImage: "/books/collected-regrets.jpg",
    },
    {
      id: 5,
      title: "The Collected Regrets of...",
      author: "Mikki Brammer",
      coverImage: "/books/collected-regrets.jpg",
    },
    {
      id: 6,
      title: "The Collected Regrets of...",
      author: "Mikki Brammer",
      coverImage: "/books/collected-regrets.jpg",
    },
  ];

  const displayedBooks = showAllBooks
    ? allRecommendedBooks
    : allRecommendedBooks.slice(0, 3);

  return (
    <div className="min-h-screen bg-white px-6 py-8 pb-20">
      {/* 헤더 문구 */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold leading-tight mb-2">
          단어 하나가 장벽이
          <br />
          되지 않도록.
        </h1>
        <p className="text-gray-500">복잡한 세상을 '이해할 수 있는 언어'로</p>
      </div>

      {/* 검색바 */}
      <div className="mb-6">
        <SearchBar />
      </div>

      {/* 카테고리 태그들 */}
      <CategoryTags categories={categories} />

      {/* 월간 추천도서 섹션 */}
      <div className="mb-6 mt-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">월간 추천도서</h2>
          <button
            onClick={() => setShowAllBooks(!showAllBooks)}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            {showAllBooks ? "접기" : "모두보기"}
          </button>
        </div>

        {/* 책 목록 - 가로 스크롤 or 그리드 */}
        {showAllBooks ? (
          <div className="grid grid-cols-3 gap-4">
            {displayedBooks.map((book) => (
              <div key={book.id} className="flex flex-col">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full object-cover rounded-lg shadow-md mb-2"
                />
                <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                  {book.title}
                </h3>
                <p className="text-xs text-gray-600">{book.author}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {displayedBooks.map((book) => (
              <div key={book.id} className="w-32">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-32 h-48 object-cover rounded-lg shadow-md mb-2"
                />
                <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                  {book.title}
                </h3>
                <p className="text-xs text-gray-600">{book.author}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
