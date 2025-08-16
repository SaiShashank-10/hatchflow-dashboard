import React from "react";

type AnimatedNumberProps = {
  value: number;
  duration?: number; // ms
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number; // number of decimal places
};

export function AnimatedNumber({
  value,
  duration = 1200,
  prefix = "",
  suffix = "",
  className,
  decimals = 0,
}: AnimatedNumberProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const raf = React.useRef<number>();
  const startTs = React.useRef<number>(0);

  React.useEffect(() => {
    cancelAnimationFrame(raf.current!);
    startTs.current = 0;

    const step = (ts: number) => {
      if (!startTs.current) startTs.current = ts;
      const progress = Math.min((ts - startTs.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = value * eased;
      if (ref.current) {
        const formatted = current.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
      if (progress < 1) {
        raf.current = requestAnimationFrame(step);
      }
    };

    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current!);
  }, [value, duration, prefix, suffix, decimals]);

  return <span className={className} ref={ref} />;
}
