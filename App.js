import App1 from "./App1";
import Data from "./Data";

const App = () => {
  return (
    <section className="Omen">
      {Data.map((eachObj) => {
        const { id, title, body } = eachObj;
        return <App1 id={id} title={title} body={body} />;
      })}
    </section>
  );
};

export default App;
