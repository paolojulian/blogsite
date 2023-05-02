import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';

export type HeroProps = {
  // No Props
};

const Hero: FunctionComponent<HeroProps> = (props) => {
  return (
    <div className='w-full h-full overflow-hidden relative bg-[#181a25]'>
      <Image
        width={3012}
        height={1798}
        src='/assets/portfolio/Background.png'
        alt='Background'
        className='border border-[#181a25]'
        style={{
          objectFit: 'contain',
        }}
      />
      {/* Navbar */}
      <Stack className='items-center justify-center sticky top-0 inset-x-0'>
        <div className='mx-auto max-w-screen-lg w-full'>
          <Row className='justify-between items-center w-full'>
            <h1 className='text-white font-extrabold text-2xl'>{`<PaoloJulian />`}</h1>
            <Row className='space-x-4'>
              <ul className='text-cyan-500 font-bold text-base'>Home</ul>
              <ul className='text-gray-500 font-medium text-base'>#About</ul>
              <ul className='text-gray-500 font-medium text-base'>
                #Portfolio
              </ul>
              <ul className='text-gray-500 font-medium text-base'>#Contact</ul>
              <ul className='text-gray-500 font-medium text-base'>
                #Components
              </ul>
            </Row>
          </Row>
        </div>
      </Stack>
    </div>
  );
};

export default Hero;
