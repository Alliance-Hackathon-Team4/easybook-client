import { useState } from "react";
import {
  SearchBar,
  CategoryTags,
  LoadingContent,
  ErrorContent,
} from "../components";
import { useGetAllBooks } from "../hooks/useGetAllBooks";
import { noImgIcon } from "../assets";
import { categories } from "../constants";
import { useNavigate } from "react-router";

export const Main = () => {
  const { data, error, isPending } = useGetAllBooks();
  const [showAllBooks, setShowAllBooks] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const allBooks = data ?? [];

  const isValidImageUrl = (url: string | null | undefined): boolean => {
    if (!url) return false;
    return url.startsWith("http://") || url.startsWith("https://");
  };

  // 검색 필터
  const filteredBooks = allBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
  );

  const displayedBooks = showAllBooks
    ? filteredBooks
    : filteredBooks.slice(0, 3);

  const isSearching = query.trim().length > 0;

  if (isPending) return <LoadingContent />;

  if (error) return <ErrorContent error={error} />;

  return (
    <div className="min-h-screen bg-white px-6 py-8 pb-20">
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
        <SearchBar onSearch={setQuery} />
      </div>

      {/* 카테고리 태그 */}
      <CategoryTags categories={categories} />

      {/* 도서 섹션 */}
      <div className="mb-6 mt-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">
            {isSearching
              ? `검색 결과 (${filteredBooks.length})`
              : "월간 추천도서"}
          </h2>
          <button
            onClick={() => setShowAllBooks(!showAllBooks)}
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            {showAllBooks ? "접기" : "모두보기"}
          </button>
        </div>

        {filteredBooks.length === 0 ? (
          <p className="text-sm text-gray-500 text-center py-10">
            검색 결과가 없습니다.
          </p>
        ) : showAllBooks ? (
          <div className="grid grid-cols-3 gap-4">
            {displayedBooks.map((book) => (
              <div key={book.id} className="flex flex-col">
                <img
                  src={
                    isValidImageUrl(book.imageUrl) ? book.imageUrl : noImgIcon
                  }
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-lg shadow-md mb-2 hover:shadow-lg transition-shadow"
                  onError={(e) => {
                    e.currentTarget.src = noImgIcon;
                  }}
                  onClick={() => navigate(`/detail/${book.id}`)}
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
              <div
                key={book.id}
                className=" w-32 hover:scale-105 transition-transform"
                onClick={() => navigate(`/detail/${book.id}`)}
              >
                <img
                  src={
                    isValidImageUrl(book.imageUrl) ? book.imageUrl : noImgIcon
                  }
                  alt={book.title}
                  className="w-32 h-48 object-cover rounded-lg shadow-md mb-2"
                  onError={(e) => {
                    e.currentTarget.src = noImgIcon;
                  }}
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
