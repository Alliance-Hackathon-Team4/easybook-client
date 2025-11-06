import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../components";
import { useGetBook } from "../model/useGetBook";
import Button from "../components/Button";

export default function Detail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data } = useGetBook(id);

  const handleClick = () => {
    navigate("/read/" + id + "/" + data?.currentPage);
  };
  return (
    <div>
      <Header />
      <section className="px-4">
        <div className="flex justify-center mt-16 flex-col items-center">
          <img
            className="w-[120px] h-[180px]"
            src={data?.imageUrl}
            alt={data?.title}
          />
          <div className="my-3 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold">{data?.title}</h1>
            <small className="text-[12px]">{data?.author}</small>
          </div>
          <Button onClick={handleClick}>읽기</Button>
        </div>
        <hr className="my-6 border-t border-gray-200" />
        <h4 className="font-bold">설명</h4>
        <p>{data?.description}</p>
      </section>
    </div>
  );
}
