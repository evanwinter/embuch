import { useCallback, useEffect, useState } from "react";

export default function usePullEffect(ref) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const pull = useCallback(
    (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      // ref.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
      setX(x);
      setY(y);
    },
    [ref]
  );

  useEffect(() => {
    document.addEventListener("mousemove", pull);
    return () => document.removeEventListener("mousemove", pull);
  }, [pull]);

  return { x, y };
}
