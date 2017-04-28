import colors from '../constants/colors';

export default ({ children }) => (
  <code>
    {children}
    <style jsx>{`
      code {
        color: ${colors.accentRed};
        font-family: monospace;
      }
    `}</style>
  </code>
);
