import { Map, MapMarker } from "react-kakao-maps-sdk";
import * as S from "./style";
import constant_base from "@/constants/base.json";

const LocationCard = () => {
  return (
    <S.LocationCardContainer>
      <Map
        center={{ lat: constant_base.Latitude, lng: constant_base.Longitude }}
        style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        onClick={() => window.open(`https://map.kakao.com/link/to/${constant_base.KakaoLocationID}`)}
      >
        <MapMarker position={{ lat: constant_base.Latitude, lng: constant_base.Longitude }}></MapMarker>
      </Map>
    </S.LocationCardContainer>
  );
};

export default LocationCard;
