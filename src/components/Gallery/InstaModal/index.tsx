import { IResInstagram } from "@/types/insta";
import * as S from "./style";
import { getUploadDate } from "@/utils/parseData";
import { useEffect, useRef, useState } from "react";
import Swiper from "@/components/Common/Swiper";
import { IoCloseOutline, IoLogoInstagram } from "react-icons/io5";
import { ImVolumeMedium, ImVolumeMute2 } from "react-icons/im";
import { Navigation } from "swiper/modules";

const InstaModal = ({ data, closeModal }: { data: IResInstagram; closeModal: () => void }) => {
  const [isScreenSizeMobile, setIsScreenSizeMobile] = useState(false);
  const [scale, setScale] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClickContainer = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    target.classList.contains("container") && closeModal();
  };

  const handleClickInstaLogo = () => {
    window.open(data.permalink);
  };

  const handleResize = () => {
    setIsScreenSizeMobile(window.innerWidth <= 768);
    const width = window.innerWidth;
    const scaleFactor = width < 1100 ? width / 1100 : 1;
    setScale(scaleFactor);
  };

  const handleClickMuted = () => {
    console.log("asdasd");
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <S.Container onClick={handleClickContainer} className="container">
      <S.Wrapper $scale={scale}>
        {isScreenSizeMobile && (
          <div className="title">
            <div className="dateAndName">
              <span>moanda_ve</span>
              <br />
              <span>{getUploadDate(new Date(data.timestamp))}</span>
            </div>
            <div className="button-wrapper">
              <IoLogoInstagram color="#fff9eb" size="25" onClick={handleClickInstaLogo} />
              <IoCloseOutline color="#fff9eb" size="35" onClick={closeModal} />
            </div>
          </div>
        )}
        <div className="media">
          {data.media_type === "IMAGE" && <img src={data.media_url} />}
          {data.media_type === "VIDEO" && (
            <>
              <video src={data.media_url} autoPlay muted loop playsInline ref={videoRef} />
              <div className="sound-button" onClick={handleClickMuted}>
                {isMuted ? <ImVolumeMute2 size="25" color="#fff" /> : <ImVolumeMedium size="25" color="#fff" />}
              </div>
            </>
          )}
          {data.media_type === "CAROUSEL_ALBUM" && data.children && (
            <Swiper
              props={{
                height: "100%",
                width: "100%",
                imageList: data.children?.data.map(item => {
                  return item.media_url;
                }),
                pagination: true,
                useNavigation: true,
                modules: [Navigation],
                spaceBetween: 0,
                loop: false,
                slideperView: 1,
                useTouchSlide: true,
              }}
            />
          )}
        </div>
        <div className="content">
          {!isScreenSizeMobile && (
            <div className="title">
              <div className="dateAndName">
                <span>moanda_ve</span>
                <br />
                <span>{getUploadDate(new Date(data.timestamp))}</span>
              </div>
              <div className="button-wrapper">
                <IoLogoInstagram color="#fff9eb" size="25" onClick={handleClickInstaLogo} />
                <IoCloseOutline color="#fff9eb" size="35" onClick={closeModal} />
              </div>
            </div>
          )}
          <div className="caption">
            {data.caption
              .split("\n")
              .map((item, index) => (item === "" ? <br key={index} /> : <p key={index}>{item}</p>))}
            <p className="date">{getUploadDate(new Date(data.timestamp))}</p>
          </div>
        </div>
      </S.Wrapper>
    </S.Container>
  );
};

export default InstaModal;
