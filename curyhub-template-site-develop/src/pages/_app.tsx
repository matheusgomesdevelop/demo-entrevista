import type { AppProps } from "next/app";

import "../styles/styles.scss";

// Swiper slide
import "../../node_modules/swiper/swiper-bundle.min.css";
 //import { template1 } from "../config/ThemeConfig";


function MyApp({ Component, pageProps }: AppProps) {
//  console.log(JSON.stringify(template1))


  return <Component {...pageProps} />;
}
export default MyApp;
