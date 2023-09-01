import "./App.css";
import Header from "./components/Header/Header.js";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
function App() {
  const numberOfCards = 5;
  const numberOfButtons = 13;

  const cards = Array.from({ length: numberOfCards }, (_, index) => (
    <Card key={index} />
  ));

  const buttons = Array.from({ length: numberOfButtons }, (_, index) => (
    <Button key={index} />
  ));

  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="cards-container">{cards}</div>
        <div className="green-border-container">{buttons}</div>
      </div>
    </div>
  );
}

export default App;
