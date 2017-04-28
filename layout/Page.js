import Meta from '../components/Meta';
import Footer from './Footer';
import colors from '../constants/colors';

export default ({ children }) => (
  <root>
    <Meta />
    {children}
    <Footer />
    <style jsx>{`
      root {
        background-color: ${colors.primary};
        display: flex;
        padding: 25px 50px;
        overflow: auto;
        z-index: -1;
        justify-content: center;
        align-items: center;
        padding: 25px 50px;
        max-height: 100vh;
        min-height: 100vh;
      }

      @media (max-width: 500px) {
        root {
          padding: 25px 15px;
          width: 100%;
          overflow-x: hidden;
        }
      }
    `}</style>
  </root>
);
