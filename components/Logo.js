import Link from 'next/link';

import colors from '../constants/colors';

export default ({ className }) => (
  <div>
    <Link prefetch href="/">
      <a className={`title ${className}`}>
        <span className="title-square">
          EQuimper's Blog
        </span>
      </a>
    </Link>
    <style jsx>{`
      .title {
        color: ${colors.accent};
        position: fixed;
        top: 2%;
        left: 2%;
        font-size: 20px;
        text-decoration: none;
        font-family: 'Fira Mono', monospace;
        font-weight: bold;
      }

      .title-square {
        border: 2px solid ${colors.secondary};
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      @media (max-width: 1100px) {
        a.logo-post {
          display: none;
        }
      }
    `}</style>
  </div>
);
