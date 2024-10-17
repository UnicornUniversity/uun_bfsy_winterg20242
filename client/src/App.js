import "./App.css";
import ToDoListOverview from "./ToDoListOverview/ToDoListOverview";
import UserProvider from "./Users/UserProvider";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ToDoListOverview />
      </UserProvider>
    </div>
  );
}

export default App;
