import { useEffect, useRef, useState } from "react";

type IntersectionObserverOptions = {
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export const useSectionObserver = (
  options?: IntersectionObserverOptions
): [string, (node: HTMLDivElement) => void] => {
  const [activeSection, setActiveSection] = useState("");
  const nodes = useRef<HTMLDivElement[]>([]);

  const observer = useRef<IntersectionObserver | null>(null);

  const addNode = (node: HTMLDivElement) => {
    if (node && !nodes.current.includes(node)) {
      nodes.current.push(node);
    }
  };

  useEffect(() => {
    console.log("useEffect");

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const { current: currentObserver } = observer;

    nodes.current.forEach((node) => {
      currentObserver.observe(node);
    });

    return () => {
      console.log("unmount");
      currentObserver.disconnect();
    };
  }, [options, nodes]);

  return [activeSection, addNode];
};
