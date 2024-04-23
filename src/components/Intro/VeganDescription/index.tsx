import constant_intro from "@/constants/intro.json";
import * as S from "./style";
import { Fragment } from "react";
import IntroHeader from "../IntroHeader";

const VeganDescription = () => {
  return (
    <>
      <S.Container>
        <S.ImageContainer>
          <img src="/Intro/outside_9.jpg" />
        </S.ImageContainer>
        <S.DescriptionContaier>
          <IntroHeader headerText="비건이란?" />
          {Object.entries(constant_intro.VeganDescription).map(([key, value]) => (
            <div key={key} id={key}>
              <S.SubTitle>
                <span>{value.title[0]}</span>
                {value.title[1]}
              </S.SubTitle>
              <S.Descriptions>
                {value.description.map((item, index) => (
                  <Fragment key={index}>
                    {item.includes("**") ? (
                      <>
                        {item.substring(0, item.indexOf("**"))}
                        <span>{item.substring(item.indexOf("**") + 2, item.lastIndexOf("**"))}</span>
                        {item.substring(item.lastIndexOf("**") + 2)}
                      </>
                    ) : (
                      item
                    )}
                    <br />
                  </Fragment>
                ))}
              </S.Descriptions>
            </div>
          ))}
        </S.DescriptionContaier>
      </S.Container>
    </>
  );
};

export default VeganDescription;
