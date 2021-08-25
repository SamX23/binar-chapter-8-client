import logo from "./logo.svg";
import "./App.css";

function App({ title = "Home" }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </header>
    </div>
  );
}

// Buat tampilan/UI untuk ﬁtur berikut :
// i. Form untuk membuat player baru, dengan tombol Submit
// ii. Form untuk mengedit player, dengan tombol Submit
// iii. Form untuk pencarian player berdasarkan 4 kriteria pencarian :
// - username, email, experience, dan lvl.
// - jangan lupa juga tombol submit.

export default App;
