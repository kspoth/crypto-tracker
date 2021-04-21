import "./App.css";

function App() {
  return (
    <div>
      <div className="header">
        <h1 className="brand">
          <i className="fas fa-coins"></i>Crypto Tracker
        </h1>
        <form>
          <input
            className="inputField"
            type="text"
            placeholder="Search Currency"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default App;
