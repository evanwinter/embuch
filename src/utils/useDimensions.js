import { useState, useEffect } from "react";

function useDimensions(ref, name) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  useEffect(() => {
    if (ref.current.offsetWidth || ref.current.offsetHeight) {
      setDimensions({
        width: ref.current.offsetWidth || 0,
        height: ref.current.offsetHeight || 0,
      });
      document.documentElement.style.setProperty(
        `--${name}-height`,
        `${ref.current.offsetHeight || 0}px`
      );
    }
  }, [ref.current?.offsetWidth, ref.current?.offsetHeight]);
  return dimensions;
}

export default useDimensions;
