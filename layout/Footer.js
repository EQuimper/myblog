import FontAwesome from 'react-fontawesome';

import colors from '../constants/colors';

export default () => (
  <div className="footer">
    <div className="copyright">
      Copyright © 2017 Emanuel Quimper
    </div>

    <div className="social-icons">
      <a
        href="https://github.com/equimper"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesome size="2x" name="github" />
      </a>
      <a
        href="https://www.youtube.com/channel/UC7R7bcH9-KEBDiGNP1mZnmw"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesome size="2x" name="youtube" />
      </a>
      <a
        href="https://www.facebook.com/EQuimperCoding/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesome size="2x" name="facebook" />
      </a>
      <a
        href="https://twitter.com/QuimperEmanuel"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesome size="2x" name="twitter" />
      </a>
    </div>

    <style jsx>{`
      .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: ${colors.primary};
        height: 40px;
        display: flex;
        flex: 1;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
      }

      .social-icons {
        display: flex;
        width: 200px;
        align-self: stretch;
        align-items: center;
        flex-direction: row;
        justify-content: space-around;
        margin-right: 2%;
      }

      a {
        color: ${colors.secondary};
      }

      a:hover {
        color: ${colors.accent};
      }

      .copyright {
        color: ${colors.secondary};
        margin-left: 2%;
      }

      @media (max-width: 500px) {
        .copyright {
          color: ${colors.secondary};
          margin-left: 2%;
          font-size: 10px;
        }
      }
    `}</style>
  </div>
);
