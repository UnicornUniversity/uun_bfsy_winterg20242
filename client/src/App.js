import "./App.css";
import ToDoItem from "./ToDoItem";

function App() {
  return (
    <div className="App">
      <ToDoItem
        data={{ id: "td01", name: "kup rohlíky", done: false }}
        category="shopping"
      />
      <ToDoItem data={{ id: "td02", name: "zaběhej si", done: false }} />
      <ToDoItem data={{ id: "td03", name: "kup chleba", done: false }} />
      <ToDoItem data={{ id: "td04", name: "něco", done: false }} />
    </div>
  );
}

export default App;
