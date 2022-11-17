import colors from 'tailwindcss/colors';
import Alert from './alert';
import BookIcon from './atoms/BookIcon';
import FabButton from './atoms/FabButton';
import FacebookIcon from './atoms/FacebookIcon';
import HomeIcon from './atoms/HomeIcon';
import LinkedInIcon from './atoms/LinkedInIcon';
import ListIcon from './atoms/ListIcon';
import SearchIcon from './atoms/SearchIcon';
import Footer from './footer';
import Meta from './meta';
import Contact from './organisms/Contact';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className='min-h-screen min-w-screen bg-white dark:bg-gray-900'>
        <div className='min-h-screen max-w-screen-2xl mx-auto'>
          <div className='flex'>
            <div
              className='hidden lg:block w-20 h-screen min-h-screen'
              style={{
                minWidth: '5rem',
              }}
            >
              <nav className='w-20 fixed flex flex-col justify-center items-center h-screen top-0 border-r border-gray-200 dark:border-gray-800 px-2 text-gray-500 space-y-2'>
                <FabButton>
                  <HomeIcon />
                </FabButton>
                <FabButton>
                  <ListIcon />
                </FabButton>
                <FabButton>
                  <BookIcon />
                </FabButton>
                <FabButton>
                  <SearchIcon />
                </FabButton>
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
            <div className='border-l border-gray-200 dark:border-gray-800 hidden lg:block lg:w-[600px] xl:w-[600px]'>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
