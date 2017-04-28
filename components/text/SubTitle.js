import colors from '../../constants/colors';

export default ({ children }) => (
  <h3>
    {children}

    <style jsx>{`
      h3 {
        color: ${colors.accent};
        text-align: left;
        padding: 15px 0;
        font-family: 'Fira Mono', monospace;
        font-weight: bold;
      }
    `}</style>
  </h3>
);
