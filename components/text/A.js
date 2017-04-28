import colors from '../../constants/colors';

export default ({ children, href, className }) => (
  <a
    href={href}
    className={className}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}

    <style jsx>{`
      a {
        color: ${colors.accent};
        font-weight: bolder;
        font-size: 16px;
        text-decoration: underline;
      }

      a:hover {
        color: ${colors.accentRed};
        transition: all .2s ease-in-out;
      }

      a.small {
        font-size: 14px;
        font-weight: normal;
      }

      a.small:hover {
        transition: all .2s ease-in-out;
      }
    `}</style>
  </a>
);
