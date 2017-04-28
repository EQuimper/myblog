import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';

import colors from '../constants/colors';
import config from '../constants/config';

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
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', '${config.GA_ID}', 'auto');
        ga('send', 'pageview');`,
        }}
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
