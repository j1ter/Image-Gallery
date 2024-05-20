import React, { useRef, useEffect, useState } from 'react';

const LazyImage = ({ src, alt, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const imgRefCurrent = imgRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });
  
    if (imgRefCurrent) {
      observer.observe(imgRefCurrent);
    }
  
    return () => {
      if (imgRefCurrent) {
        observer.unobserve(imgRefCurrent);
      }
    };
  }, []);
  

  return (
    <img 
      ref={imgRef}
      src={isVisible ? src : ''}
      alt={alt}
      className={className}
    />
  );
};

export default LazyImage;
