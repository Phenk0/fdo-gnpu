import { useEffect, useRef, useState } from 'react';

export function usePDFContainer() {
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.clientWidth * 0.9);
    }
  }, []);

  return { width, containerRef };
}
