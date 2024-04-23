import * as S from "./style";
import LocationCard from "../LocationCard";
import constant_base from "@/constants/base.json";
import constant_intro from "@/constants/intro.json";
import { MouseEvent, Fragment } from "react";
import { FaRegCopy } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi2";
import IntroHeader from "../IntroHeader";

const WayToCome = () => {
  const handleClickNumber = (e: MouseEvent<HTMLSpanElement>) => {
    // 텍스트 복사
    const text = e.currentTarget.textContent ?? "";
    navigator.clipboard.writeText(text);
  };
  return (
    <>
      <IntroHeader headerText="찾아오시는 길" />
      <S.LocationContainer>
        <LocationCard />
        <S.InformContainer>
          <div className="wayToCome">
            <h3>매장 주소</h3>
            <span>{constant_base.Address}</span>
            <br />
            <span className="clickNotice">지도를 클릭하시면 카카오맵으로 이동합니다.</span>
          </div>
          <div className="parking">
            <h3>주차장 안내</h3>
            <span>
              {constant_intro.WayToCome.ParkingInfo.split("\n").map((span, index) => (
                <Fragment key={index}>
                  {span} <br />
                </Fragment>
              ))}
            </span>
          </div>
          <div className="contact">
            <h3>전화번호</h3>
            <a href={`tel:${constant_base.Contact}`}>
              {constant_base.Contact}
              <HiOutlinePhone />
            </a>
            <span onClick={handleClickNumber}>
              {constant_base.Contact}
              <FaRegCopy />
            </span>
          </div>
          <div>
            <h3>배달의 민족</h3>
            <img src="/Logo/baemin_des.png" onClick={() => window.open(constant_base.baemin)} />
            <br />
            <span className="clickNotice">배민로고를 클릭하시면 배달의 민족 어플로 이동합니다.</span>
          </div>
        </S.InformContainer>
      </S.LocationContainer>
    </>
  );
};

export default WayToCome;
