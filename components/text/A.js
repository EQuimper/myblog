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
        text-decoration: underline;
        font-family: 'Fira Mono', monospace;
        font-weight: bold;
        margin: 4px;
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
