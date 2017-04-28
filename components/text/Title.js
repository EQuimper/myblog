import colors from '../../constants/colors';

export default ({ children }) => (
  <h1>
    {children}

    <style jsx>{`
      h1 {
        color: ${colors.accent};
        text-align: center;
        padding: 20px 0;
      }
    `}</style>
  </h1>
);
