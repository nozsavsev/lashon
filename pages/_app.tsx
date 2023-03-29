import '../styles/globals.css'
import App, { AppProps } from 'next/app';
export type Locale_T = "en" | "he" | "ru";


const MyApp: any = ({ Component, pageProps }: AppProps) => {

  return <Component {...pageProps} />
}

export default MyApp;