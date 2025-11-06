import { useParams, useNavigate } from "react-router";
import { Header } from "../components";
import { useGetBook } from "../model/useGetBook";
import Button from "../components/Button";
import { noImgIcon } from "../assets";

export default function Detail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data } = useGetBook(id);

  const handleClick = () => {
    navigate(`/test1/${id}`);
  };

  const isValidImageUrl = (url: string | null | undefined): boolean => {
    if (!url) return false;
    return url.startsWith("http://") || url.startsWith("https://");
  };

  return (
    <div>
      <Header />
      <section className="px-4">
        <div className="flex justify-center mt-16 flex-col items-center">
          <img
            className="w-[120px] h-[180px]"
            src={isValidImageUrl(data?.imageUrl) ? data?.imageUrl : noImgIcon}
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
