import { useQuery } from "@tanstack/react-query";
import { getRead } from "../apis/getRead";

interface BookType {
  page: number;
  readingLevel: number;
  content: string;
}

export const useGetRead = (
  page?: number,
  readingLevel?: number,
  bookId?: string
) => {
  return useQuery<BookType>({
    queryKey: ["read", bookId, page, readingLevel],
    queryFn: () => getRead(page, readingLevel, bookId),
  });
};
