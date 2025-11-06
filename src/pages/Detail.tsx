import { useSearchParams } from "react-router";
import { Header } from "../components";
import { useGetBook } from "../model/useGetBook";
import Button from "../components/Button";

export default function Detail() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") || "";

  const { data } = useGetBook(id);
  return (
    <section>
      <Header />
      <div>
        <img src={data?.imageUrl} alt={data?.title} />
        <h1>{data?.title}</h1>
        <small>{data?.author}</small>
        <Button>읽기</Button>
      </div>
    </section>
  );
}
