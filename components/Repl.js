export default ({ src }) => (
  <div>
    <iframe frameBorder="0" width="100%" height="500px" src={src} />

    <style jsx>{`
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
      }
    `}</style>
  </div>
);
