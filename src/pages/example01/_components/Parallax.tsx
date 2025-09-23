// src/pages/example01/_components/Parallax.tsx
import { useEffect, useRef } from "react";
import type { PropsWithChildren } from "react";

export type LayerProps = {
  /** 0.1 ~ 1.0 くらい。大きいほど手前でよく動く */
  speed: number;
  className?: string;
};

export function Layer({
  speed,
  className = "",
  children,
}: PropsWithChildren<LayerProps>) {
  return (
    <div
      className={`parallax-layer absolute inset-0 will-change-transform ${className}`}
      data-speed={speed}
    >
      {children}
    </div>
  );
}

export default function ParallaxScene({
  height = 90, // vh
  children,
}: PropsWithChildren<{ height?: number }>) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const rafId = useRef<number | null>(null);
  const dirty = useRef(false);

  useEffect(() => {
    const root = rootRef.current!;
    const layers = Array.from(
      root.querySelectorAll<HTMLDivElement>(".parallax-layer")
    );

    const update = () => {
      dirty.current = false;

      // セクションのページ上位置とサイズを取得
      const sectionTop = root.offsetTop; // ドキュメント基準
      const sectionHeight = root.offsetHeight;
      const viewTop = window.scrollY;
      const viewBottom = viewTop + window.innerHeight;

      // 画面に入っている時のみ計算
      if (viewBottom >= sectionTop && viewTop <= sectionTop + sectionHeight) {
        // 0(入る前) → 1(出る直前) の進行度
        const progress =
          (viewBottom - sectionTop) / (window.innerHeight + sectionHeight);

        // -0.5〜+0.5 の中心基準にして、セクション高×係数で移動量を作る
        const centered = progress - 0.5;

        for (const el of layers) {
          const speed = Number(el.dataset.speed || 0);
          // 動きが分かりやすいようにセクション高の ~80% を上限に
          const y = centered * speed * sectionHeight * 0.8;
          el.style.transform = `translate3d(0, ${y}px, 0)`;
        }
      }
      rafId.current = null;
    };

    const requestTick = () => {
      if (!rafId.current && !dirty.current) {
        dirty.current = true;
        rafId.current = window.requestAnimationFrame(update);
      }
    };

    // 初回 & スクロール/リサイズで更新
    requestTick();
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", requestTick);
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative w-full overflow-hidden"
      style={{ height: `${height}vh` }}
      aria-label="Parallax scene"
    >
      {children}
    </section>
  );
}
