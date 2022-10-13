import { useEffect } from "react";

export default function usePullEffect(ref) {
  const pull = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    ref.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
  };
  useEffect(() => {
    document.addEventListener("mousemove", pull);
    return () => document.removeEventListener("mousemove", pull);
  }, []);
}
