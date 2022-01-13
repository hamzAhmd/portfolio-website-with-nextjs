import Theme from '../styles/theme';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hamza Ahmad - Frontend Developer - Freelancer</title>
        <meta
          name='description'
          content='I am Hamza Ahmad, a Frontend Developer, Reactjs Developer building modern applications, business portfolios & ecommerce websites with latest technologies by providing high-performing & efficient solutions. '
        />
        <meta
          name='keywords'
          content='Frontend Developer, MERN Stack, React, MongoDB, Express, Next.js, Materialui, Node.js, Redux, Hooks, Business Portfolio, Ecommerce '
        />
        <meta name='robots' content='index, follow' />
        <meta
          name='google-site-verification'
          content='f6FmwrYYG35XgB7PYcB9PNtkOvIqsgBM8bwB-4HLFWc'
        />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
