import Image from "next/image";
import React, { FunctionComponent } from "react";

export type HeroProps = {
  // No Props
};

const Hero: FunctionComponent<HeroProps> = (props) => {
  return (
    <div className="w-full h-full overflow-hidden relative bg-[#181a25]">
      <Image
        width={3012}
        height={1798}
        src='/assets/portfolio/Background.png'
        alt='Background'
        className='border border-[#181a25]'
        style={{
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default Hero;
