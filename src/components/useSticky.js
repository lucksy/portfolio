import { useEffect, useRef, useState } from 'react';

const useSticky = () => {
  const stickyRef = useRef(null);
  const [sticky, setSticky] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!stickyRef.current) {
      return;
    }
    setOffset(stickyRef.current.offsetTop);
  }, [stickyRef, setOffset]);

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current) {
        return;
      }

      const isWindowWide = window.innerWidth >= 700;
      setSticky(isWindowWide && window.scrollY > offset);
    };

    const handleResize = () => {
      // Update sticky state when window is resized
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [setSticky, stickyRef, offset]);

  return { stickyRef, sticky };
};

export default useSticky;
