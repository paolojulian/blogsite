import Image from "next/image";
import React, { FunctionComponent } from "react";

export type LandingPageProps = {
  // No Props
};

const LandingPage: FunctionComponent<LandingPageProps> = () => {
  return (
    <div className="w-full h-full overflow-hidden relative bg-[#181a25]">
      <Image
        width={3012}
        height={1798}
        src="/assets/portfolio/Background.png"
        alt="Background"
        priority
        className="border border-[#181a25] rounded-[6rem]"
        style={{
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default LandingPage;
