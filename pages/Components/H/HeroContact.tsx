import React, { useEffect, useRef } from "react";

const HeroContact = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const w = window.innerWidth;
  const h = window.innerHeight;
  const rate = 60;
  const arc = 150;
  const size = 7;
  const speed = 10;
  const colors = ["#00bf63", "#f57900", "#ff6e4e", "#ff6e4e", "#00bf63"];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!ctx) {
      console.error("Could not get 2D context from canvas");
      return;
    }

    let time = 0;
    let count = 0;
    const parts: any[] = [];

    canvas?.setAttribute("width", w.toString());
    canvas?.setAttribute("height", h.toString());

    const create = () => {
      time = 0;
      count = 0;

      for (let i = 0; i < arc; i++) {
        parts[i] = {
          x: Math.ceil(Math.random() * w),
          y: Math.ceil(Math.random() * h),
          toX: Math.random() * 5 - 1,
          toY: Math.random() * 2 - 1,
          c: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * size,
        };
      }
    };

    const particles = () => {
      ctx.clearRect(0, 0, w, h);
      canvas?.addEventListener("mousemove", mouseMove, false);

      for (let i = 0; i < arc; i++) {
        const li = parts[i];
        let distanceFactor = distanceBetween(mouse.current, parts[i]);
        distanceFactor = Math.max(Math.min(15 - distanceFactor / 10, 10), 1);
        ctx.beginPath();
        ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
        ctx.fillStyle = li.c;
        ctx.strokeStyle = li.c;
        if (i % 2 === 0) ctx.stroke();
        else ctx.fill();

        li.x = li.x + li.toX * (time * 0.05);
        li.y = li.y + li.toY * (time * 0.05);

        if (li.x > w) {
          li.x = 0;
        }
        if (li.y > h) {
          li.y = 0;
        }
        if (li.x < 0) {
          li.x = w;
        }
        if (li.y < 0) {
          li.y = h;
        }
      }

      if (time < speed) {
        time++;
      }
      requestAnimationFrame(particles);
    };

    const mouseMove = (e: MouseEvent) => {
      const rect = canvas?.getBoundingClientRect();
      mouse.current.x = e.clientX - (rect?.left ?? 0);
      mouse.current.y = e.clientY - (rect?.top ?? 0);
    };

    const distanceBetween = (
      p1: { x: number; y: number },
      p2: { x: number; y: number }
    ) => {
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    create();
    particles();

    return () => {
      canvas?.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return <div className='relative w-full h-fit'>
  <canvas ref={canvasRef} className='absolute bg-[var(--primary-color)] top-0 left-0 w-full h-full z-[-1]' />
  <div className='relative z-[1] text-right grid align-middle py-[50px] pr-[30px]'>
    <h4 className="text-gray-700 text-[40px] font-bold">READY TO</h4>
    <h4 className="text-[var(--secondary-color)] text-[60px] font-black">TALK?</h4>
    <h4 className="text-gray-700 text-[45px] font-bold">SO ARE WE.</h4>
    <p className="text-[var(--secondary-color)] font-bold">From queries to feedback, we value every word from you.</p>
  </div>
</div>;
};

export default HeroContact;
