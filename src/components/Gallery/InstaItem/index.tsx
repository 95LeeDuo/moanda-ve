import { IResInstagram } from "@/types/insta";
import * as S from "./style";
import { IoIosBrowsers } from "react-icons/io";
import { BiMoviePlay } from "react-icons/bi";
import { useState } from "react";
import InstaModal from "../InstaModal";

const InstaItem = ({ data }: { data: IResInstagram }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <S.Container
        onClick={() => setIsOpenModal(true)}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        $isHovered={isHovered}
      >
        {data.media_type === "VIDEO" ? (
          <video src={data.media_url} autoPlay muted loop playsInline />
        ) : (
          <img src={data.media_url} />
        )}
        {data.media_type !== "IMAGE" && (
          <S.SVGWrapper>
            {data.media_type === "CAROUSEL_ALBUM" ? (
              <IoIosBrowsers color="#fff" size={30} />
            ) : (
              <BiMoviePlay color="#fff" size={30} />
            )}
          </S.SVGWrapper>
        )}
        <S.PreviewCaption $isHovered={isHovered}>
          <div className="caption">{data.caption}</div>
        </S.PreviewCaption>
      </S.Container>
      {isOpenModal && <InstaModal data={data} closeModal={() => setIsOpenModal(false)} />}
    </>
  );
};

export default InstaItem;
