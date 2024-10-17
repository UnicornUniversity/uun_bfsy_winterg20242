import { useState, useMemo, useContext } from "react";
import { UserContext } from "../Users/UserProvider.js";

import Header from "./Header";
import ToDoListOverviewList from "./ToDoListOverviewList";
import Toolbar from "./Toolbar";

function ToDoListOverviewProvider() {
  const [showArchived, setShowArchived] = useState(false);
  const { loggedInUser } = useContext(UserContext);

  const [itemList, setItemList] = useState([
    {
      id: "td01",
      name: "První úkolovník",
      state: "active",
      owner: "u1",
      memberList: ["u2", "u3"],
    },
    {
      id: "td02",
      name: "Druhý úkolovník",
      state: "archived",
      owner: "u2",
      memberList: ["u3"],
    },
    {
      id: "td03",
      name: "Třetí úkolovník",
      state: "active",
      owner: "u3",
      memberList: ["u1"],
    },
    {
      id: "td04",
      name: "čtvrtý úkolovník",
      state: "archived",
      owner: "u1",
      memberList: [],
    },
  ]);

  function handleCreate() {
    setItemList((current) => {
      current.push({
        id: Math.random(),
        name: "nový úkol",
        state: "active",
        owner: loggedInUser,
        memberList: [],
      });
      return current.slice();
    });
  }

  function handleArchive({ id }) {
    setItemList((current) => {
      const itemIndex = current.findIndex((item) => item.id === id);
      current[itemIndex] = { ...current[itemIndex], state: "archived" };
      return current.slice();
    });
  }

  function handleDelete({ id }) {
    setItemList((current) => {
      const itemIndex = current.findIndex((item) => item.id === id);
      current.splice(itemIndex, 1);
      return current.slice();
    });
  }

  const filteredItemList = useMemo(() => {
    if (showArchived) {
      return itemList.filter(
        (item) =>
          item.owner === loggedInUser || item.memberList.includes(loggedInUser)
      );
    } else {
      return itemList.filter(
        (item) =>
          item.state === "active" &&
          (item.owner === loggedInUser ||
            item.memberList.includes(loggedInUser))
      );
    }
  }, [showArchived, itemList, loggedInUser]);

  return (
    <>
      <Header />
      <Toolbar
        handleCreate={handleCreate}
        showArchived={showArchived}
        setShowArchived={setShowArchived}
      />
      <ToDoListOverviewList
        itemList={filteredItemList}
        handleArchive={handleArchive}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default ToDoListOverviewProvider;
