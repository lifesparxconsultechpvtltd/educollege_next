import PlusSvg from "../assets/pluse-svg";

interface SectionSvgProps {
  crossesOffset?: string; // or number, depending on how you use it
}

export default function SectionSvg({ crossesOffset }: SectionSvgProps) {
  return (
    <>
      <PlusSvg
        className={`hidden absolute -top-[0.3125rem] left-[1.5625rem] ${
          crossesOffset || ""
        } pointer-events-none lg:block xl:left-[2.1875rem]`}
      />

      <PlusSvg
        className={`hidden absolute -top-[0.3125rem] right-[1.5625rem] ${
          crossesOffset || ""
        } pointer-events-none lg:block xl:right-[2.1875rem]`}
      />
    </>
  );
}
