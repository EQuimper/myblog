export default ({ src }) => (
  <div>
    <iframe width="600" height="400" src={src} />

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
