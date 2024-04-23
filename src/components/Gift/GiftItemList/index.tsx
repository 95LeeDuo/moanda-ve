import * as S from "./style";
import GiftItems from "@/constants/GiftData.json";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";
import constant from "@/constants/base.json";

const GiftItemList = () => {
  const [swiperView, setSwiperView] = useState(1);
  const containerRef = useRef<HTMLInputElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  const addItemRef = (el: HTMLDivElement) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setSwiperView(3);
    } else if (window.innerWidth > 450) {
      setSwiperView(2);
    } else {
      setSwiperView(1);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (itemRefs.current.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.2 },
    );

    itemRefs.current.forEach(el => {
      observer.observe(el);
    });

    return () => {
      itemRefs.current.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, [itemRefs.current.length]);

  const getBoxImgName = (paths: string) => {
    const parts = paths.split("/");
    const fileName = parts[parts.length - 1];
    return fileName.split(".")[0].trim();
  };

  const clickImage = () => {};
  return (
    <S.GiftItems ref={containerRef}>
      <S.Contact>
        <div onClick={() => window.open(constant.KakaoChannel)}>
          <p>답례품 문의</p>
          <img src="/Logo/kakao.png" />
        </div>
      </S.Contact>
      <S.GiftLine></S.GiftLine>
      {Object.entries(GiftItems).map(([title, item], index) => (
        <S.GiftItem key={index} ref={addItemRef} className="observer">
          <S.GiftItemHeader>
            <p>{title}</p>
          </S.GiftItemHeader>
          <S.GiftItemBoxImg>
            <Swiper
              className="swiper"
              modules={[Navigation, Autoplay, Pagination]}
              slidesPerView={swiperView}
              autoplay={{ delay: 3000 }}
              loop={true}
              spaceBetween={10}
              pagination={swiperView === 1}
            >
              {item.boxImages.map((img, index) => (
                <SwiperSlide key={index} className="swiperSlide">
                  <img src={img} alt="박스이미지" className="swiperImage" />
                  <p>{getBoxImgName(img)}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </S.GiftItemBoxImg>
          <h2 className="subtitle">구성품목</h2>
          <S.GiftItemImg>
            {item.components.map((data, index) => (
              <div key={index}>
                <img src={data.src} alt="이미지" onClick={clickImage} />
                <div>
                  <h1>{data.name}</h1>
                  <h2>{data.price}원</h2>
                </div>
              </div>
            ))}
          </S.GiftItemImg>
          <S.GiftItemInfo>
            {item.info.map((data, index) => (
              <div key={index}>
                <p>* {data}</p>
              </div>
            ))}
            <p>* 모든 이미지는 참고용입니다.</p>
          </S.GiftItemInfo>
        </S.GiftItem>
      ))}
    </S.GiftItems>
  );
};

export default GiftItemList;
