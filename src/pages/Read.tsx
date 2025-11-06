import { useParams, useNavigate } from "react-router-dom";
import { useGetRead } from "../model/useGetRead";
import { useEffect, useState } from "react";

export default function Read() {
  const { id, page } = useParams<{ id: string; page: string }>();
  const [level, setLevel] = useState<number>(3);

  const { data } = useGetRead(Number(page), level, id);

  const navigate = useNavigate();

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const deltaX = touchEndX - touchStartX;

      if (Math.abs(deltaX) > 80) {
        const currentPage = Number(page);
        if (deltaX < 0 && currentPage + 1 <= (data?.totalPage ?? currentPage)) {
          navigate(`/read/${id}/${currentPage + 1}`);
        } else if (deltaX > 0) {
          navigate(`/read/${id}/${currentPage - 1}`);
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [navigate, page, id, data]);

  return (
    <div>
      <div className="bg-[#d7efe9] h-screen p-6 md:p-8 shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
        <div className="mt-2 text-center">
          <div className="text-sm font-semibold">33장 중 제1장</div>
          <div className="mt-1 text-base font-bold">홍길동전</div>
          <div className="mt-1 text-sm text-slate-600">
            허균(許筠, 1569-1618)
          </div>
        </div>
        <div className="mt-6 space-y-6 text-[17px] leading-9 text-slate-900/90">
          <p>{data?.content}</p>
        </div>

        <hr className="my-6 border-t border-slate-300/60" />

        <div className="space-y-3">
          <div className="text-lg font-semibold">난이도</div>
          <div className="flex items-center justify-between text-sm text-slate-700">
            <span>쉬움</span>
            <span>어려움</span>
          </div>
          <div className="relative">
            <input
              type="range"
              min={1}
              max={5}
              value={level}
              onChange={(e) => setLevel(Number(e.target.value))}
              className="range w-full accent-[#5eb5a8]"
              aria-label="난이도 조절"
            />
            <div className="pointer-events-none absolute inset-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
