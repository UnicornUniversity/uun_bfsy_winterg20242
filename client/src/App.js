import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Overview from "./Overview/Overview";
import Detail from "./Detail/Detail";
import UserProvider from "./Users/UserProvider";
import Header from "./Header";
import { useState } from "react";

function App() {
  let params = new URLSearchParams(document.location.search);
  let id = params.get("id");

  const [selected, setSelected] = useState(id);

  console.log(selected);

  return (
    <div className="App">
      <UserProvider>
        <Header />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
          <div>
            <Overview setSelected={setSelected} />
          </div>
          <div>{!selected ? "nothing selected" : <Detail />}</div>
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
