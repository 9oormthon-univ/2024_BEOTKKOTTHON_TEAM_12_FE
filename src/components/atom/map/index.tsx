import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

declare global {
  interface Window {
    kakao: any;
  }
}

type Place = {
  place_name: string;
  distance: string;
  place_url: string;
  category_name: string;
  address_name: string;
  road_address_name: string;
  id: string;
  phone: string;
  category_group_code: string;
  category_group_name: string;
  x: string;
  y: string;
};

const KakaoMap = () => {
  const { kakao } = window;
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>();
  const [isLoaded, setIsLoaded] = useState(false);
  const permissionDenied = sessionStorage.getItem('locationPermissionDenied')
    ? sessionStorage.getItem('locationPermissionDenied')
    : 'false';
  const defaultLatitude = 37.351681144933;
  const defaultLongitude = 127.07058392437;

  const initializeMap = (latitude: any, longitude: any) => {
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 9,
    };

    const map = new kakao.maps.Map(container, options);
    const places = new kakao.maps.services.Places();

    kakao.maps.event.addListener(map, 'click', function () {
      setSelectedPlace(null);
    });

    places.keywordSearch('아름다운가게', placesSearchCB, {
      useMapBounds: true,
    });

    function placesSearchCB(data: any, status: any) {
      if (status === kakao.maps.services.Status.OK) {
        setIsLoaded(true);
        data.forEach(displayMarker);
      }
    }

    function displayMarker(place: any) {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      kakao.maps.event.addListener(marker, 'click', function () {
        setSelectedPlace(place);
      });
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          sessionStorage.setItem('locationPermissionDenied', 'false');
          initializeMap(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            sessionStorage.setItem('locationPermissionDenied', 'true');
            if (permissionDenied === 'true') {
              initializeMap(defaultLatitude, defaultLongitude);
            } else {
              alert('위치정보 권한을 확인해주세요. 기본 위치로 설정합니다.');
              initializeMap(defaultLatitude, defaultLongitude);
            }
          }
        }
      );
    } else {
      alert('브라우저가 GPS를 지원하지 않습니다. 기본 위치로 설정합니다.');
      initializeMap(defaultLatitude, defaultLongitude);
    }
  };

  useEffect(() => {
    getLocation();
  }, [mapRef]);

  const mapStyle = {
    width: '335px',
    height: '335px',
    margin: '15px 0',
    borderRadius: '10px',
  };

  return (
    <>
      {isLoaded ? null : <Loading>지도 불러오는 중...</Loading>}
      <div ref={mapRef} style={mapStyle}>
        {selectedPlace && (
          <PlaceInfo>
            <PlaceName>{selectedPlace.place_name}</PlaceName>
            <hr />
            <PlaceDetail>{selectedPlace.road_address_name}</PlaceDetail>
            <PlaceDetail>{selectedPlace.phone}</PlaceDetail>
            <a href={selectedPlace.place_url} target="_blank" rel="noreferrer">
              <StyleBtn>카카오 지도로 보기</StyleBtn>
            </a>
          </PlaceInfo>
        )}
      </div>
    </>
  );
};

export default KakaoMap;

const PlaceInfo = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  width: 250px;
  padding: 20px;
  border-radius: 16px;
  background-color: white;
`;
const PlaceName = styled.div`
  font-size: 13px;
  font-weight: bold;
`;
const PlaceDetail = styled.div`
  font-size: 11px;
  margin-bottom: 10px;
`;
const StyleBtn = styled.button`
  width: 100%;
  padding: 16px 0;
  border-radius: 10px;
  font-size: 15px;
  margin-bottom: 10px;
  transition: all 300ms ease-in-out;
  background-color: var(--green-6);
  color: white;
`;

const Loading = styled.div`
  width: 335px;
  height: 335px;
  margin: 15px 0;
  border-radius: 10px;
  background-color: var(--grey-2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
