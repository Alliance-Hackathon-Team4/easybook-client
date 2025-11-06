import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Test2 = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (id) {
        navigate(`/read/${id}/1`);
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate, id]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-700 tracking-tight">
          분석이 완료되었습니다
        </p>
        <div className="mt-4 h-1 w-16 bg-emerald-400 mx-auto rounded-full" />
      </div>
    </div>
  );
};
