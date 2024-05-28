import * as S from "./style";
import GiftItemList from "../GiftItemList";

// const NoticeData = {
//   주문방법: ["카카오톡채널 '모앤더비' or 전화 상담 가능"],
//   주문기간: ["최소 2~3일 전 주문 가능"],
//   스티커제작: ["상담 후 선택 가능(무료로 제공)"],
//   보관방법: ["실온 2일 / 냉동 3주"],
//   배송안내: [
//     "수원지역 일부 배송 가능 / 택배, 퀵 서비스 가능",
//     "토~월 도착은 퀵배송만 가능",
//     "우체국택배 : 발송 후 1~2일 소요",
//   ],
//   취소안내: ["일대일 제작 상품이므로 취소가 어려운 점 참고 부탁드립니다."],
//   "디저트 종류": ["홈페이지 '메뉴소개' 참고"],
// };

const GiftForm = () => {
  return (
    <S.GiftContainer>
      {/* <S.ImageContainer>
        <img src="./gift/poster.png" alt="안내포스터" className="poster" />
        <div className="content">
          <h2>언제나 정성 가득 담은 모앤더비 답례품</h2>
          <div className="notice-data">
            {Object.entries(NoticeData).map(([key, value], index) => (
              <div key={index} className="box">
                <h3 className="key">{key}</h3>
                <div className="value">
                  {value.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </S.ImageContainer> */}
      <img src="./gift/poster.png" alt="안내포스터" className="poster" />

      <GiftItemList />
    </S.GiftContainer>
  );
};

export default GiftForm;
