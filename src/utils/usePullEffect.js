import useEvent from "@react-hook/event";

export default function usePullEffect(ref) {
  const pull = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    ref.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
  };
  useEvent(document, "mousemove", pull);
}
