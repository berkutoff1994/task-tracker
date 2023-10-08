import { AppProps } from 'next/app';

//styles
import 'styles/breakpoints.scss';
import 'styles/colors.scss';
import 'styles/gap.scss';
import 'styles/style.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;