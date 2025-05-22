import { useEffect, useRef } from "react"

export const useDaumPostCode = (onComplete) => {
  const scriptLoadedRef = useRef(false);
  useEffect(() => {
    if (!scriptLoadedRef.current) {
      const script = document.createElement('script');
      script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
      script.async = true;
      script.onload = () => {
        scriptLoadedRef.current = true;
      };
      document.body.appendChild(script);
    }
  }, []);

  const open = () => {
    if (!window.daum?.Postcode) return;

    new window.daum.Postcode({
      oncomplete: (data) => {
        let fullRoadAddr = data.roadAddress;
        let extraRoadAddr = '';

        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
          extraRoadAddr += data.bname;
        }
        if (data.buildingName !== '' && data.apartment === 'Y') {
          extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
        }
        if (extraRoadAddr !== '') {
          extraRoadAddr = ' (' + extraRoadAddr + ')';
        }

        const result = {
          zonecode: data.zonecode,
          roadAddress: fullRoadAddr,
          jibunAddress: data.jibunAddress,
          extraAddress: extraRoadAddr,
          autoRoadAddress: data.autoRoadAddress,
          autoJibunAddress: data.autoJibunAddress,
        };

        onComplete?.(result);
      },
    }).open();
  };

  return open;
}