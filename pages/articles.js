import Head from 'next/head';

import Page from '../layout/Page';
import ArcticleItem from '../components/ArcticleItem';
import Logo from '../components/Logo';
import data from '../posts.json';

export default () => (
  <Page>
    <Head>
      <title>Acticles</title>
    </Head>
    <Logo />
    <articles-list>
      {data.map(item => <ArcticleItem key={item.id} {...item} />)}
    </articles-list>

    <style jsx>{`
      articles-list {
        height: auto;
        width: 625px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
      }

      @media (max-width: 500px) {
        articles-list {
          width: 90%;
        }
      }
    `}</style>
  </Page>
);
