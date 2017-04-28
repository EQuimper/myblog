import Link from 'next/link';

import Page from './Page';
import Logo from '../components/Logo';
import colors from '../constants/colors';

export default ({ children }) => (
  <Page>
    <Logo className="logo-post" />
    <Link href="/articles">
      <backbutton>
        {'<'}
      </backbutton>
    </Link>
    <article>
      {children}
    </article>
    <style jsx>{`
      article {
        max-width: 650px;
        margin: auto;
        font-size: 14px;
        height: auto;
        padding: 100px 0;
      }

      backbutton {
        position: fixed;
        top: 40%;
        left: 10%;
        height: 100px;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${colors.secondary};
        font-size: 100px;
        cursor: pointer;
      }

      backbutton:hover {
        color: ${colors.accentRed};
      }

      @media (max-width: 1100px) {
        backbutton {
          display: none;
        }

        article {
          max-width: 100%;
        }
      }
    `}</style>
    <style jsx global>{`
      body {
        width: 100%;
        overflow-x: hidden;
      }
    `}</style>
  </Page>
);
