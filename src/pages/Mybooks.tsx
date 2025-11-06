import { noImgIcon } from "../assets";
import { useGetAllBooks } from "../hooks/useGetAllBooks";

export const MyBooks = () => {
  const { data, error, isPending } = useGetAllBooks();
  const allBooks = data || [];

  const isValidImageUrl = (url: string | null | undefined): boolean => {
    if (!url) return false;
    return url.startsWith("http://") || url.startsWith("https://");
  };

  if (isPending)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
        <p className="text-base font-medium text-gray-700 mb-2">
          책 목록을 불러오는 중입니다
        </p>
        <p className="text-sm text-gray-500">잠시만 기다려주세요...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
        <p className="text-lg font-semibold text-red-600 mb-1">
          문제가 발생했습니다
        </p>
        <p className="text-sm text-gray-600">
          {error instanceof Error ? error.message : "알 수 없는 오류입니다."}
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-white px-6 py-6">
      <h1 className="text-2xl font-bold mb-6">내 책 목록</h1>

      <div className="space-y-4">
        {allBooks.map((book) => (
          <div
            key={book.id}
            className="flex gap-4 pb-4 border-gray-100 last:border-0"
          >
            {/* 책 표지 */}
            <img
              src={isValidImageUrl(book.imageUrl) ? book.imageUrl : noImgIcon}
              alt={book.title}
              className="w-24 h-36 object-cover rounded shadow-md"
              onError={(e) => {
                e.currentTarget.src = noImgIcon;
              }}
            />

            {/* 책 정보 */}
            <div className="flex flex-col justify-center gap-1">
              <h2 className="font-semibold text-lg leading-tight">
                {book.title}
              </h2>
              <p className="text-gray-600 text-sm">{book.author}</p>
              <p className="text-gray-400 text-sm">{book.totalPages}쪽</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
