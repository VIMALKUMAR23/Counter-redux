import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center flex-column w-100 "
        style={{ height: "100vh" }}
      >
        <div
          className="d-flex align-items-center justify-content-center flex-column p-5 rounded"
          style={{ backgroundColor: "white" }}
        >
          <h2 className="text-primary">counter application</h2>
          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
