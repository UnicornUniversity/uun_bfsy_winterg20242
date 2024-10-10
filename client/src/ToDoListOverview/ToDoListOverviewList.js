import ToDoListOverviewItem from "./ToDoListOverviewItem";

function ToDoListOverviewList({ itemList }) {
  return (
    <div>
      {itemList.map((itemData) => (
        <ToDoListOverviewItem key={itemData.id} itemData={itemData} />
      ))}
    </div>
  );
}

export default ToDoListOverviewList;
