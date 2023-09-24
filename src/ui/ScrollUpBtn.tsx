import { FC, useEffect, useState } from 'react';
import { BackToTop } from './ScrollUpBtn.styles.tsx';

const ScrollUpBtn: FC = () => {
  const [scrollTop, setScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return scrollTop ? (
    <BackToTop onClick={bottomToTop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
      </svg>
    </BackToTop>
  ) : null;
};
export default ScrollUpBtn;
