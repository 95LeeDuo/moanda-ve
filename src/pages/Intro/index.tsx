import * as S from "./style";
import WayToCome from "@/components/WayToCome";
import LogoDescription from "@/components/LogoDescription";
import VeganDescription from "@/components/VeganDescription";
import { useEffect, useRef } from "react";
import Baemin from "@/components/Baemin";

const sections = [<LogoDescription />, <VeganDescription />, <WayToCome />, <Baemin />];

const Intro = () => {
  const LogoDesRef = useRef<HTMLDivElement>(null);
  const VeganDesRef = useRef<HTMLDivElement>(null);
  const WayToComeRef = useRef<HTMLDivElement>(null);
  const BaeminRef = useRef<HTMLDivElement>(null);
  const refs = [LogoDesRef, VeganDesRef, WayToComeRef, BaeminRef];

  useEffect(() => {
    const handleScroll = () => {
      refs.forEach(ref => {
        const offset = ref.current?.getBoundingClientRect().y as number;
        if (window.scrollY + window.innerHeight >= offset) {
          ref.current?.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.IntroSection>
      {sections.map((section, index) => (
        <div key={index} ref={refs[index]}>
          {section}
        </div>
      ))}
      {/* <LogoDescription />
      <VeganDescription />
      <WayToCome /> */}
    </S.IntroSection>
  );
};

export default Intro;
