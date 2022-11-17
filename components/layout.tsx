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

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className='min-h-screen max-w-screen-2xl mx-auto'>
        <div className='flex'>
          <div className='hidden lg:block w-20 h-screen min-h-screen'>
            <nav className='w-20 fixed flex flex-col justify-center items-center h-screen top-0 border-r px-2 text-stone-500 space-y-2'>
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
              <FabButton>
                <FacebookIcon />
              </FabButton>
              <FabButton>
                <LinkedInIcon />
              </FabButton>
            </nav>
          </div>
          <main className='flex-1'>
            {children}
            <Footer />
          </main>
          <div className='border-l lg:w-[300px] xl:w-[400px]'></div>
        </div>
      </div>
    </>
  );
};

export default Layout;
