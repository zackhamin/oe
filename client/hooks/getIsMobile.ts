import { useEffect, useState } from "react";

export function getIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 724 : false
  );

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 724);
    }

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return { isMobile };
}
