import colors from '../constants/colors';

export default ({ children }) => (
  <pre>
    <code>{children}</code>
    <style jsx>{`
      pre {
        line-height: 20px;
        margin-bottom: 20px;
        font-size: 12px;
      }

      code {
        color: ${colors.accentRed};
      }

      code::selection {
        background-color: ${colors.secondary};
        color: ${colors.primary};
      }

      @media (max-width: 500px) {
        pre {
          overflow-x: auto;
        }
      }
    `}</style>
  </pre>
);
