import { useCallback, useEffect, useState, memo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetRead } from "../model/useGetRead";
import { useGetBook } from "../model/useGetBook";

const SWIPE_THRESHOLD_PX = 80;

type ReadContentProps = {
  title?: string;
  author?: string;
  content?: string;
  page?: number;
  totalPage?: number;
};

const ReadContent = memo(function ReadContent({
  title,
  author,
  content,
  page,
  totalPage,
}: ReadContentProps) {
  return (
    <div className="flex flex-col h-full animate-fadeIn">
      <div className="text-center mb-6">
        <div className="text-sm font-semibold text-slate-700">
          {totalPage}장 중 제{page}장
        </div>
        <div className="mt-2 text-xl font-bold text-slate-900">{title}</div>
        <div className="mt-1 text-sm text-slate-600">{author}</div>
      </div>

      <div className="flex-1 overflow-y-auto px-2">
        <div className="space-y-6 text-[17px] leading-9 text-slate-900/90">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
});

type LevelSliderProps = {
  value: number;
  onCommit: (next: number) => void;
};

const LevelSlider = memo(function LevelSlider({
  value,
  onCommit,
}: LevelSliderProps) {
  const [temp, setTemp] = useState<number>(value);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setTemp(value);
  }, [value]);

  const commit = useCallback(() => {
    setIsDragging(false);
    const clamped = Math.min(5, Math.max(1, temp));
    if (clamped !== value) onCommit(clamped);
  }, [temp, value, onCommit]);

  return (
    <div className="relative">
      <input
        type="range"
        min={1}
        max={5}
        value={temp}
        onChange={(e) => setTemp(Number(e.target.value))}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={commit}
        onTouchStart={(e) => {
          e.stopPropagation();
          setIsDragging(true);
        }}
        onTouchMove={(e) => e.stopPropagation()}
        onTouchEnd={(e) => {
          e.stopPropagation();
          commit();
        }}
        className={`range w-full accent-[#5eb5a8] transition-all ${
          isDragging ? "scale-105" : ""
        }`}
        aria-label="난이도 조절"
      />
      <div className="flex justify-between mt-2 px-1">
        {[1, 2, 3, 4, 5].map((lvl) => (
          <div
            key={lvl}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              temp >= lvl ? "bg-[#5eb5a8] scale-110" : "bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
});

export default function Read() {
  const { id, page } = useParams<{ id: string; page: string }>();
  const [level, setLevel] = useState<number>(3);
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(
    null
  );

  const { data } = useGetRead(Number(page), level, id);
  const { data: book } = useGetBook(id);

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
      if (Math.abs(deltaX) > SWIPE_THRESHOLD_PX) {
        const currentPage = Number(page);
        if (deltaX < 0 && currentPage + 1 <= (data?.totalPage ?? currentPage)) {
          setSwipeDirection("left");
          setTimeout(() => {
            navigate(`/read/${id}/${currentPage + 1}`);
            setSwipeDirection(null);
          }, 200);
        } else if (deltaX > 0 && currentPage - 1 >= 1) {
          setSwipeDirection("right");
          setTimeout(() => {
            navigate(`/read/${id}/${currentPage - 1}`);
            setSwipeDirection(null);
          }, 200);
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
    <div className="h-screen w-full overflow-hidden">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideOutLeft {
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        
        @keyframes slideOutRight {
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideOutLeft {
          animation: slideOutLeft 0.2s ease-out forwards;
        }
        
        .animate-slideOutRight {
          animation: slideOutRight 0.2s ease-out forwards;
        }
      `}</style>

      <div
        className={`bg-[#d7efe9] h-full flex flex-col p-6 md:p-8 transition-transform duration-200 ${
          swipeDirection === "left" ? "animate-slideOutLeft" : ""
        } ${swipeDirection === "right" ? "animate-slideOutRight" : ""}`}
      >
        <div className="flex-1 flex flex-col min-h-0">
          <ReadContent
            title={data?.title}
            author={book?.author}
            content={data?.content}
            page={data?.page}
            totalPage={data?.totalPage}
          />
        </div>

        <div className="mt-auto pt-6 border-t border-slate-300/60 animate-fadeIn">
          <div className="space-y-3">
            <div className="text-lg font-semibold text-slate-800">난이도</div>
            <div className="flex items-center justify-between text-sm text-slate-700">
              <span>쉬움</span>
              <span>어려움</span>
            </div>
            <LevelSlider value={level} onCommit={setLevel} />
          </div>
        </div>
      </div>
    </div>
  );
}
