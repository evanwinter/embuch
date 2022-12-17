import React, { useEffect } from "react";
import useResizeObserver from '@react-hook/resize-observer';
import { motion, useViewportScroll, useTransform } from "framer-motion";

import { Grid, Preview, Reveal } from "@components";
import { WORK_PROJECTS } from "@data";
import { spacing } from "@styles";

export default function DesignsPage() {

  const isEven = (num) => {
    return num % 2 === 0;
  }

  const container = React.useRef(null);
  const { scrollY } = useViewportScroll();
  const item = React.useRef(null);

  const [startParallax, setStartParallax] = React.useState(200);
  const [slowBy, setSlowBy] = React.useState(500);

  useResizeObserver(item, (entry) => {
    console.log(entry);
    setStartParallax(entry.target.offsetTop);
    const newSlowBy = entry.target.offsetHeight + (parseInt(spacing.lg.split('rem')[0]) * 16)
    console.log('newSlowBy', newSlowBy)
    setSlowBy(newSlowBy);
    console.log(spacing.lg)
  });

  const y = useTransform(scrollY, [startParallax, 1000], [0, slowBy]);

  useEffect(() => {
    console.log('slowBy', slowBy);
  }, [slowBy])

  // scrollY.onChange((y) => {
  //   console.log(y);
  // });

  // useEffect(() => {
  //   console.log('y2', y2.current);
  // })

  return (
    <>
      <h1 className="sr-only">Design Work</h1>
      {/* <Reveal effect="fadeInUp"> */}
      <h3 className="h2 mx-xl mt-xl w-md fw-500">
        A collection of my professional design work.
      </h3>
      {/* </Reveal> */}
      {/* <Grid gridGap="var(--spacing-xl)" padding="var(--spacing-xl)">
        {WORK_PROJECTS.map((project, index) => (
          <Preview
            key={project.title}
            project={project}
            kind="designs"
            index={index}
          />
        ))}
      </Grid> */}

      <div className="parallax-container p-xl" ref={container}>
        {WORK_PROJECTS.map((project, index) => (
          <motion.div ref={index === 0 ? item : undefined} className="preview-wrapper" key={project.title} style={{ y: !isEven(index) ? y : undefined }}>
            <Preview
              project={project}
              kind="designs"
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export const Head = () => (
  <>
    <title>Work | Emily Buchberger</title>
    <meta
      name="description"
      content="Design work by Emily Buchberger, a designer in Chicago."
    />
  </>
);
