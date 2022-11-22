import colors from 'tailwindcss/colors';
import BookIcon from './atoms/BookIcon';
import FabButton from './atoms/FabButton';
import FacebookIcon from './atoms/FacebookIcon';
import HomeIcon from './atoms/HomeIcon';
import LinkedInIcon from './atoms/LinkedInIcon';
import ListIcon from './atoms/ListIcon';
import MenuItem from './atoms/MenuItem';
import SearchIcon from './atoms/SearchIcon';
import SettingsIcon from './atoms/SettingsIcon';
import Footer from './footer';
import Meta from './meta';
import Contact from './organisms/Contact';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className='min-h-screen w-screen overflow-hidden bg-white dark:bg-gray-900'>
        <div className='min-h-screen max-w-screen w-screen-md mx-auto overflow-hidden'>
          <div className='w-full sm:grid sm:grid-cols-[5rem_minmax(0,_1fr)] lg:grid-cols-[5rem_minmax(0,_70rem)_22rem] mx-auto justify-center overflow-hidden'>
            <div
              className='hidden sm:block w-20 h-screen min-h-screen'
              style={{
                minWidth: '5rem',
              }}
            >
              <nav className='w-20 fixed flex flex-col justify-center items-center h-screen top-0 border-r border-gray-200 dark:border-gray-800 px-2 text-gray-500 space-y-2'>
                <MenuItem Icon={<HomeIcon />} label='Home' />
                <MenuItem Icon={<ListIcon />} label='Posts' />
                <MenuItem Icon={<BookIcon />} label='Posts' />
                <MenuItem Icon={<SearchIcon />} label='Search' />
                <MenuItem Icon={<SettingsIcon />} label='Settings' />
                <FabButton className='bg-blue-500 hover:bg-blue-400'>
                  <FacebookIcon fill={colors.white} />
                </FabButton>
                <FabButton className='bg-blue-600 hover:bg-blue-400'>
                  <LinkedInIcon fill={colors.white} />
                </FabButton>
              </nav>
            </div>
            <main className='flex-1'>
              {children}
              <Footer />
            </main>
            <div className='border-l border-gray-200 dark:border-gray-800 hidden lg:block w-full'>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
