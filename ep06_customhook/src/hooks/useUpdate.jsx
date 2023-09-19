import { useRef, useEffect } from 'react';

export default function useUpdate(cb) {
  const isMountRef = useRef(false);

  useEffect(() => {
    // 지금 마운트 단계를 거치지 않았다면
    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    }
    cb();
  });
}
