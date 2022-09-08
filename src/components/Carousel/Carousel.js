import React, { useEffect, useRef, useState } from "react";
import { ScrollContainer } from "@styles";

export default function Carousel({ children, backgroundColor }) {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.scrollTo({
      left: -1 * index /* TODO */,
    });
  }, [index]);
  return (
    <>
      <ScrollContainer ref={ref} backgroundColor={backgroundColor}>
        {children}
      </ScrollContainer>
      <div
        style={{
          marginTop: "-3rem",
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          right: 0,
          width: "100%",
          paddingInline: "3rem",
        }}
      >
        <button onClick={() => setIndex(index + 1)}>
          <svg
            width="146"
            height="23"
            viewBox="0 0 146 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M145.068 12.0532C145.65 11.4633 145.643 10.5136 145.053 9.93195L135.441 0.452994C134.851 -0.128682 133.901 -0.122041 133.319 0.467828C132.738 1.0577 132.744 2.00742 133.334 2.5891L141.879 11.0148L133.453 19.5592C132.871 20.1491 132.878 21.0988 133.468 21.6805C134.058 22.2622 135.007 22.2555 135.589 21.6657L145.068 12.0532ZM1.01049 13.5L144.01 12.5L143.99 9.50004L0.989511 10.5L1.01049 13.5Z"
              fill="white"
            />
          </svg>
        </button>
        <button>
          <svg
            width="146"
            height="23"
            viewBox="0 0 146 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M145.068 12.0532C145.65 11.4633 145.643 10.5136 145.053 9.93195L135.441 0.452994C134.851 -0.128682 133.901 -0.122041 133.319 0.467828C132.738 1.0577 132.744 2.00742 133.334 2.5891L141.879 11.0148L133.453 19.5592C132.871 20.1491 132.878 21.0988 133.468 21.6805C134.058 22.2622 135.007 22.2555 135.589 21.6657L145.068 12.0532ZM1.01049 13.5L144.01 12.5L143.99 9.50004L0.989511 10.5L1.01049 13.5Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
