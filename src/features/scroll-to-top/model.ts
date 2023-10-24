import { useEffect, useState } from 'react';

export const useScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const userScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
        return;
      }

      setIsVisible(false);
    };

    window.addEventListener('scroll', userScroll);

    return () => {
      window.removeEventListener('scroll', userScroll);
    };
  }, []);

  return {
    isVisible,
    onScrollToTop: handleScrollToTop,
  };
};
