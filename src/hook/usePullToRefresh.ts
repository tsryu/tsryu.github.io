import { useEffect } from 'react';

function usePullToRefresh() {
  useEffect(() => {
    let touchStartY: number = 0;
    let isPullingDown: boolean = false;

    const isAtTop = (): boolean => {
      return window.scrollY === 0 || document.documentElement.scrollTop === 0;
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchCurrentY = e.touches[0].clientY;
      if (isAtTop() && touchCurrentY > touchStartY + 50) {
        isPullingDown = true;
      }
    };

    const handleTouchEnd = () => {
      if (isPullingDown) {
        window.location.reload(); // Force reload
        isPullingDown = false;
      }
    };

    window.addEventListener('touchstart', handleTouchStart as EventListener);
    window.addEventListener('touchmove', handleTouchMove as EventListener);
    window.addEventListener('touchend', handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart as EventListener);
      window.removeEventListener('touchmove', handleTouchMove as EventListener);
      window.removeEventListener('touchend', handleTouchEnd as EventListener);
    };
  }, []);
}

export default usePullToRefresh;
