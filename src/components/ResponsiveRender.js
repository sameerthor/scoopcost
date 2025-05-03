import { useEffect, useState } from 'react';

export default function ResponsiveRender({ mobile, desktop, breakpoint = 991 }) {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [breakpoint]);

  if (isMobile === null) return null;

  return isMobile ? mobile : desktop;
}
