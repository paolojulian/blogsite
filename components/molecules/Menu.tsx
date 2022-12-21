import React, { FunctionComponent, useCallback, useState } from 'react';
import colors from 'tailwindcss/colors';
import useSearchStore from '../../store/search';
import BookIcon from '../atoms/BookIcon';
import FabButton from '../atoms/FabButton';
import FacebookIcon from '../atoms/FacebookIcon';
import HomeIcon from '../atoms/HomeIcon';
import LinkedInIcon from '../atoms/LinkedInIcon';
import ListIcon from '../atoms/ListIcon';
import MenuItem from '../atoms/MenuItem';
import SearchIcon from '../atoms/SearchIcon';
import SettingsIcon from '../atoms/SettingsIcon';
import SearchModal from '../organisms/SearchModal';
import SettingsModal from '../organisms/SettingsModal';

export type MenuProps = {
  // No Props
};

const Menu: FunctionComponent<MenuProps> = (props) => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  return (
    <>
      <nav className='w-20 fixed flex flex-col justify-center items-center h-screen top-0 border-r border-gray-200 dark:border-gray-800 px-2 text-gray-500 space-y-2'>
        <MenuItem href='/' Icon={<HomeIcon />} label='Home' />
        <a href={'https://paolojulian.github.io'} target='__blank'>
          <MenuItem Icon={<BookIcon />} label='Portfolio' />
        </a>
        <MenuItem Icon={<ListIcon />} label='Components' />
        <MenuItem
          Icon={<SearchIcon />}
          label='Search'
          onClick={() => setIsSearchModalOpen((prev) => !prev)}
        />
        <MenuItem
          Icon={<SettingsIcon />}
          label='Settings'
          onClick={() => setIsSettingsModalOpen((prev) => !prev)}
        />
        <FabButton className='bg-blue-500 hover:bg-blue-400'>
          <a
            href={'https://www.facebook.com/profile.php?id=100078321445396'}
            target='__blank'
          >
            <FacebookIcon fill={colors.white} />
          </a>
        </FabButton>
        <FabButton className='bg-blue-600 hover:bg-blue-400'>
          <a href={'https://www.linkedin.com/in/pipz/'} target='__blank'>
            <LinkedInIcon fill={colors.white} />
          </a>
        </FabButton>
      </nav>

      <SearchModal
        open={isSearchModalOpen}
        onClose={setIsSearchModalOpen}
        onDismiss={() => setIsSearchModalOpen(false)}
      />

      <SettingsModal
        open={isSettingsModalOpen}
        onClose={setIsSettingsModalOpen}
      />
    </>
  );
};

export default Menu;
