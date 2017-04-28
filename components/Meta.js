import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';

import colors from '../constants/colors';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>EQuimper's Blog</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </Head>

    <style jsx global>{`
      * {
        box-sizing: border-box;
        margin: 0;
      }

      body {
        font: 13px Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
      }

      a {
        text-decoration: none;
      }

      #nprogress {
        pointer-events: none;
      }

      ::selection {
        background-color: ${colors.accentRed};
      }

      #nprogress .bar {
        background: ${colors.accentRed};
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${colors.accentRed}, 0 0 5px ${colors.accentRed};
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }

    `}</style>
  </div>
);
