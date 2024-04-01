import logo from "./logo.svg";
import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>helmet async</title>
          <meta name="description" content="helmet async description"></meta>

          <meta property="og:title" content={"제목"} />
          <meta property="og:description" content={"설명"} />
          <meta property="og:image" content={"/logo512.png"} />
          <meta property="og:url" content={"http://localhost:3000"} />
          <meta property="og:type" content="website" />

          <meta name="twitter:title" content={"제목"} />
          <meta name="twitter:description" content={"설명"} />
          <meta name="twitter:image" content={"/logo512.png"} />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </HelmetProvider>
  );
}

export default App;
