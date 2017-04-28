export default ({ children }) => (
  <pre>
    {children}
    <style jsx>{`
      pre {
        line-height: 20px;
        margin-bottom: 20px;
        font-size: 12px;
        display: block;
        padding: 1em;
        background-color: #fff;
        overflow-x: auto;
      }
    `}</style>
  </pre>
);
