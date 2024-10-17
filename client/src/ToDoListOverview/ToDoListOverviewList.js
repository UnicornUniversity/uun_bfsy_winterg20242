import ToDoListOverviewItem from "./ToDoListOverviewItem";

function ToDoListOverviewList({ itemList, handleArchive, handleDelete }) {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "8px" }}
    >
      {itemList.map((itemData) => (
        <ToDoListOverviewItem
          key={itemData.id}
          itemData={itemData}
          handleArchive={handleArchive}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default ToDoListOverviewList;
