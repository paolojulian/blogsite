import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';

export type NavbarProps = {
  // No Props
};

const Navbar: FunctionComponent<NavbarProps> = (props) => {
  return (
    <Stack className='items-center justify-center sticky top-0 inset-x-0 py-4 bg-bg z-40'>
      <div className='mx-auto max-w-screen-lg w-full'>
        <Row className='justify-start items-center w-full'>
          {/* <h1 className='font-black text-2xl text-slate-50 tracking-wide'>
              <span className='text-slate-50'>PAOLO</span>
              <span className='text-slate-400'>JULIAN</span>
            </h1> */}
          <Row className='space-x-7'>
            <ul className='text-orange-300 font-bold text-base'>Home</ul>
            <ul className='text-slate-500 font-medium text-base'>About</ul>
            <ul className='text-slate-500 font-medium text-base'>Portfolio</ul>
            <ul className='text-slate-500 font-medium text-base'>Contact</ul>
            <ul className='text-slate-500 font-medium text-base'>Components</ul>
          </Row>
        </Row>
      </div>
    </Stack>
  );
};

export default Navbar;
