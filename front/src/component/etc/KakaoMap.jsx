import React, { useEffect } from 'react';

const KakaoMap = ({id}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=d905026482ca3aa93e1bfb1b14993634`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const container2 = document.getElementById('map2');
        const container3 = document.getElementById('map3');
        const container4 = document.getElementById('map4');
        const options = {
          center: new window.kakao.maps.LatLng(37.4935555, 127.0302509),
          level: 3
        };
        const options2 = {
          center: new window.kakao.maps.LatLng(37.5008274, 127.0268113),
          level: 3
        };
        const options3 = {
          center: new window.kakao.maps.LatLng(37.5138394, 127.1013279),
          level: 3
        };
        const options4 = {
          center: new window.kakao.maps.LatLng(37.5138565, 127.0991962),
          level: 3
        };
        const map = new window.kakao.maps.Map(container, options);
        const map2 = new window.kakao.maps.Map(container2, options2);
        const map3 = new window.kakao.maps.Map(container3, options3);
        const map4 = new window.kakao.maps.Map(container4, options4);

        // 마커를 표시할 위치입니다
        const markerPosition  = new window.kakao.maps.LatLng(37.4935555, 127.0302509); 
        const markerPosition2  = new window.kakao.maps.LatLng(37.5008274, 127.0268113); 
        const markerPosition3  = new window.kakao.maps.LatLng(37.5138394, 127.1013279); 
        const markerPosition4  = new window.kakao.maps.LatLng(37.5138565, 127.0991962); 

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
            position: markerPosition
        });
        const marker2 = new window.kakao.maps.Marker({
            position: markerPosition2
        });
        const marker3 = new window.kakao.maps.Marker({
            position: markerPosition3
        });
        const marker4 = new window.kakao.maps.Marker({
            position: markerPosition4
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
        marker2.setMap(map2);
        marker3.setMap(map3);
        marker4.setMap(map4);
      });
    };
  }, []);

  return (
    <div>
      <div id={id} style={{ width: '400px', height: '209px' }}></div>
    </div>
  );
};

export default KakaoMap;



