import colors from '../../constants/colors';

export default ({ children, className }) => (
  <p className={className}>
    {children}

    <style jsx>{`
      p {
        color: ${colors.secondary};
        margin: 5%;
        text-align: left;
        line-height: 20px;
      }

      p.list {
        color: ${colors.accentRed};
        margin: 1%;
        text-align: left;
        line-height: 15px;
      }

      p.list::selection {
        background-color: ${colors.secondary};
        color: ${colors.primary};
      }
    `}</style>
  </p>
);
