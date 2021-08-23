import Theme from '../styles/theme';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Hamza Ahmad - Full Stack Developer - MERN Stack - Reactjs Developer
        </title>
        <meta
          name='description'
          content='I am Hamza Ahmad, a Full Stack MERN Developer, Reactjs Developer building modern applications, business portfolios & ecommerce websites with latest technologies by providing high-performing & efficient solutions. '
        />
        <meta
          name='keywords'
          content='Full Stack Developer, MERN Stack, React, MongoDB, Express, Next.js, Materialui, Node.js, Redux, Hooks, Business Portfolio, Ecommerce '
        />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
