const App1 = (props) => {
  const { title, body } = props;
  return (
    <section>
      <h2 className="Title">{title}</h2>
      <h3 className=" Body">{body}</h3>
    </section>
  );
};

export default App1;
