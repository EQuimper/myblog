import Link from 'next/link';

import colors from '../constants/colors';

export default ({ date, title, id }) => (
  <Link prefetch href={`${new Date(date).getFullYear()}/${id}`}>
    <article>
      <h5>{date}</h5>
      <h4>{title}</h4>

      <style jsx>{`
        article {
          height: 40px;
          display: flex;
          align-items: center;
          flex-direction: row;
          flex: 1;
          justify-content: space-between;
          align-self: stretch;
          cursor: pointer;
        }

        article:hover {
          border-bottom: 2px solid ${colors.accentRed};
          text-decoration: underline;
          transition: all .2s ease-in-out;
        }

        h4 {
          color: ${colors.secondary};
          margin-left: 30px;
          text-align: right;
        }

        h5 {
          color: ${colors.accent};
        }
      `}</style>
    </article>
  </Link>
);
