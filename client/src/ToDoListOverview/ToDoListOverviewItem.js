function ToDoListOverviewItem({ itemData }) {
  return (
    <div>
      {itemData.name}{" "}
      {itemData.isAuthor ? (
        <>
          <button>archivovat</button>
          <button>smazat</button>
        </>
      ) : null}
    </div>
  );
}

export default ToDoListOverviewItem;
