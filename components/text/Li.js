export default ({ lists }) => (
  <lists>
    {lists.map((item, i) => (
      <div key={i}>
        {item}
      </div>
    ))}
    <style jsx>{`
      lists {
        height: auto;
        margin: 5%;
        background-color: red;
      }
    `}</style>
  </lists>
);
