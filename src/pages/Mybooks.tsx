interface Book {
  id: number;
  title: string;
  author: string;
  totalPages: number;
  coverImage?: string;
  timeAgo?: string;
}

export const MyBooks = () => {
  const books: Book[] = [
    {
      id: 1,
      title: "어린왕자",
      author: "생텍쥐페리",
      totalPages: 96,
      coverImage: "/books/little-prince.jpg",
    },
    {
      id: 2,
      title: "어린왕자",
      author: "생텍쥐페리",
      totalPages: 96,
      coverImage: "/books/little-prince.jpg",
    },
    {
      id: 3,
      title: "어린왕자",
      author: "생텍쥐페리",
      totalPages: 96,
      coverImage: "/books/little-prince.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-6">
      <h1 className="text-2xl font-bold mb-6">내 책 목록</h1>

      <div className="space-y-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="flex gap-4 pb-4 border-gray-100 last:border-0"
          >
            {/* 책 표지 */}
            <img
              src={book.coverImage || "/books/default.jpg"}
              alt={book.title}
              className="w-24 h-36 object-cover rounded shadow-md"
            />

            {/* 책 정보 */}
            <div className="flex flex-col justify-center gap-1">
              <h2 className="font-semibold text-lg leading-tight">
                {book.title}
              </h2>
              <p className="text-gray-600 text-sm">{book.author}</p>
              <p className="text-gray-400 text-sm">{book.totalPages}쪽</p>
              {book.timeAgo && (
                <p className="text-gray-400 text-sm">{book.timeAgo}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
