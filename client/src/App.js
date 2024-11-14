import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Overview from "./Overview/Overview";
import Detail from "./Detail/Detail";
import Layout from "./Layout";
import UserProvider from "./Users/UserProvider";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Overview />} />
              <Route path="detail" element={<Detail />} />
              <Route path="*" element={"no page"} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
