import OverviewItem from "./OverviewItem";

function OverviewList({ toDoListOverviewList, handleArchive, handleDelete, setSelected }) {
  return (
    <div>
      {toDoListOverviewList.map((toDoList) => (
        <OverviewItem
          key={toDoList.id}
          toDoList={toDoList}
          handleArchive={handleArchive}
          handleDelete={handleDelete}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
}

export default OverviewList;
