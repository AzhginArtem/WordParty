import Header from "./Components/Header/Header";
import './App.sass'

function App() {
  return (
    <div>
      <Header/>
      <main className="main">
        <h1 className="main__title">
          word party
        </h1>
        <button className="main__btn">
          PLAY
        </button>
      </main>
    </div>
  );
}

export default App;
