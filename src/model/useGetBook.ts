import { useQuery } from "@tanstack/react-query";
import { getBook } from "../apis/getBook";

interface BookType {
  id: number;
  title: string;
  author: string;
  totalPages: number;
  currentPage: number;
  currentReadingLevel: number;
  imageUrl: string;
}

export const useGetBook = (id?: string) => {
  return useQuery<BookType>({
    queryKey: [id, "post"],
    queryFn: () => getBook(id),
    enabled: !!id,
  });
};
