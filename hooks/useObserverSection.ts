import { useEffect, useRef, useState } from "react";

type IntersectionObserverOptions = {
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number | number[];
};

const handleIntersectingEntry = (
  entry: IntersectionObserverEntry,
  nodes: React.MutableRefObject<{ node: HTMLDivElement; priority: number }[]>,
  intersectingNodes: React.MutableRefObject<{ node: Element; priority: number }[]>
) => {
  const nodeWithPriority = nodes.current.find((n) => n.node === entry.target);

  if (nodeWithPriority) {
    if (entry.isIntersecting) {
      intersectingNodes.current.push(nodeWithPriority);
    } else {
      intersectingNodes.current = intersectingNodes.current.filter(
        (n) => n.node !== entry.target
      );
    }
  }
};

const sortAndSetActiveSection = (
  intersectingNodes: React.MutableRefObject<{ node: Element; priority: number }[]>,
  scrollDirection: React.MutableRefObject<"up" | "down">,
  setActiveSection: React.Dispatch<React.SetStateAction<string>>
) => {
  if (scrollDirection.current === "up") {
    intersectingNodes.current.sort((a, b) => a.priority - b.priority);
  } else {
    intersectingNodes.current.sort((a, b) => b.priority - a.priority);
  }

  if (intersectingNodes.current.length > 0) {
    setActiveSection(intersectingNodes.current[0].node.id || "");
  }
};

const initializeObserver = (
  nodes: React.MutableRefObject<{ node: HTMLDivElement; priority: number }[]>,
  intersectingNodes: React.MutableRefObject<{ node: Element; priority: number }[]>,
  scrollDirection: React.MutableRefObject<"up" | "down">,
  setActiveSection: React.Dispatch<React.SetStateAction<string>>,
  options?: IntersectionObserverOptions
) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => handleIntersectingEntry(entry, nodes, intersectingNodes));
    sortAndSetActiveSection(intersectingNodes, scrollDirection, setActiveSection);
  }, options || { root: null, rootMargin: "0px", threshold: 0.4 });

  nodes.current.forEach(({ node }) => {
    observer.observe(node);
  });

  return observer;
};

const getThreshold = (width: number) => {
  const thresholds = [
    { max: 419, value: 0.05 },
    { max: 600, value: 0.1 },
    { max: 1024, value: 0.2 },
    { max: 1440, value: 0.4 },
  ];

  const threshold = thresholds.find((t) => width <= t.max) || { value: 0.4 };

  return threshold.value;
};

export const useObserverSection = (
  options?: IntersectionObserverOptions
): [string, (node: HTMLDivElement) => void] => {
  const [activeSection, setActiveSection] = useState("");
  const nodes = useRef<{ node: HTMLDivElement; priority: number }[]>([]);
  const intersectingNodes = useRef<{ node: Element; priority: number }[]>([]);
  const scrollDirection = useRef<"up" | "down">("up");
  const lastScrollY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const [threshold, setThreshold] = useState(
    getThreshold(typeof window !== "undefined" ? window.innerWidth : 0)
  );

  const observer = useRef<IntersectionObserver | null>(null);

  const addNode = (node: HTMLDivElement) => {
    if (node && !nodes.current.some((n) => n.node === node)) {
      nodes.current.push({ node, priority: nodes.current.length });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        scrollDirection.current = window.scrollY > lastScrollY.current ? "down" : "up";
        lastScrollY.current = window.scrollY;
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    observer.current = initializeObserver(
      nodes,
      intersectingNodes,
      scrollDirection,
      setActiveSection,
      { ...options, threshold }
    );

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [options, nodes, threshold]);

  useEffect(() => {
    const handleResize = () => {
      setThreshold(getThreshold(window.innerWidth));
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return [activeSection, addNode];
};
