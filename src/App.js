import "./App.css";
import { LandingView } from "./views/landing-view";
import { TechStackView } from "./views/tech-stack-view";
import { useEffect, useMemo, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import {
  Box,
} from "@mui/material";

function App() {
  const containerRef = useRef();
  const targetRef = useRef(null);
  const scrollRef = useRef();

  let scroll;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });
    scrollRef.current = scroll;
    return () => {
      scroll.destroy();
    };
  });

  const handleScroll = () => {
    scrollRef.current.scrollTo(targetRef.current)
  }

  return (
    <>
      <Box data-scroll-container ref={containerRef}>
        <Box>
          <LandingView handleScroll={handleScroll}/>
        </Box>
        <Box ref={targetRef}>
          <TechStackView />
        </Box>
      </Box>
    </>
  );
}

export default App;


function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}