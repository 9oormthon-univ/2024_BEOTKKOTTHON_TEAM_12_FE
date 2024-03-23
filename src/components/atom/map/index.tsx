import { useEffect, useRef, useState } from 'react';
import { BeatLoader } from 'react-spinners';
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
    width: '100%',
    height: '74svh',
    margin: '15px 0',
  };

  return (
    <>
      {isLoaded ? null : (
        <Loading>
          <BeatLoader color="var(--green-primary)" />
        </Loading>
      )}
      <div ref={mapRef} style={mapStyle}>
        {selectedPlace && (
          <PlaceInfo>
            <PlaceName>{selectedPlace.place_name}</PlaceName>
            <hr style={{ borderColor: 'var(--grey-4)' }} />
            <PlaceDetail>{selectedPlace.road_address_name}</PlaceDetail>
            <PlaceDetail>{selectedPlace.phone}</PlaceDetail>
            <a href={selectedPlace.place_url} target="_blank" rel="noreferrer">
              <StyledButton>
                <StyledImage
                  src="https://developers.kakao.com/tool/resource/static/img/logo/map/kakaomap_basic.png"
                  alt="KakaoMap"
                />
                카카오 지도로 보기
              </StyledButton>
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
  width: 85%;
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

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px 10px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #f8e04c;
  color: var(--grey-7);
  font-weight: bold;
  transition: all 300ms ease-in-out;
  cursor: pointer;
`;

// Styled image inside the button
const StyledImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  margin-left: -20px;
`;

const Loading = styled.div`
  width: 100%;
  height: 74svh;
  margin: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
