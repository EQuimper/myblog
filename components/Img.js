export default ({ children, alt }) => (
  <div>
    <img src={children} height="100%" alt={alt} />

    <style jsx>{`
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
        height: 500px;
        width: 100%;
        margin: 5% 0;
      }

      @media (max-width: 750px) {
        div {
          height: 350px;
        }
      }

      @media (max-width: 550px) {
        div {
          height: 300px;
        }
      }

      @media (max-width: 450px) {
        div {
          height: 250px;
        }
      }
    `}</style>
  </div>
);
