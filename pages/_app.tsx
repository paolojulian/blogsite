import { AppProps } from 'next/app';
import '../styles/index.css';
import '../styles/prism/prism-one-dark.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
