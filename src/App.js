import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="yoga" />
        </main>

        <footer>
          <a
            href="https://github.com/Katia610/dictionary-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Coded{" "}
          </a>
          by{" "}
          <a
            href="https://uk.linkedin.com/in/catherine-razafindralambo-7832b127"
            target="_blank"
            rel="noreferrer"
          >
            Catherine Razafindralambo
          </a>{" "}
          and
          <a
            href="https://tangerine-basbousa-2e39fd.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {""} hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
