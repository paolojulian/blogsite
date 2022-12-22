import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { getTheme } from '../lib/helpers';
import '../styles/index.css';
import '../styles/prism/prism-one-dark.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let theme = localStorage.theme;
    if (!theme) {
      theme = getTheme();
    }
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return <Component {...pageProps} />;
}
