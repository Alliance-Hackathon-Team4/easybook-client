import { useQuery } from "@tanstack/react-query";
import { getAllBooks } from "../apis/getAllBooks";

export interface IBookType {
  id: 1;
  title: "어린왕자";
  author: "생텍쥐페리";
  totalPages: 96;
  imageUrl: "string";
}

export const useGetAllBooks = () => {
  return useQuery<IBookType[]>({
    queryKey: ["books"],
    queryFn: getAllBooks,
    staleTime: 60 * 1000,
  });
};
