import { useState, useMemo } from "react";

import Header from "./Header";
import ToDoListOverviewList from "./ToDoListOverviewList";
import Toolbar from "./Toolbar";

function ToDoListOverviewProvider() {
  const [showArchived, setShowArchived] = useState(false);

  console.log("random number: ", Math.random());

  const secondRandom = useMemo(() => {
    return Math.random();
  }, [showArchived]);

  const [itemList, setItemList] = useState([
    {
      id: "td01",
      name: "První úkolovník",
      state: "active",
      isAuthor: true,
    },
    {
      id: "td02",
      name: "Druhý úkolovník",
      state: "archived",
      isAuthor: false,
    },
    {
      id: "td03",
      name: "Třetí úkolovník",
      state: "active",
      isAuthor: false,
    },
    {
      id: "td04",
      name: "čtvrtý úkolovník",
      state: "archived",
      isAuthor: true,
    },
  ]);

  function handleCreate() {
    setItemList((current) => {
      current.push({
        id: Math.random(),
        name: "nový úkol",
        state: "active",
        isAuthor: true,
      });
      return current.slice();
    });
  }

  const filteredItemList = useMemo(() => {
    if (showArchived) {
      return itemList;
    } else {
      return itemList.filter((item) => item.state === "active");
    }
  }, [showArchived, itemList]);

  return (
    <>
      <Header />
      <Toolbar
        handleCreate={handleCreate}
        showArchived={showArchived}
        setShowArchived={setShowArchived}
      />
      <ToDoListOverviewList itemList={filteredItemList} />
    </>
  );
}

export default ToDoListOverviewProvider;
