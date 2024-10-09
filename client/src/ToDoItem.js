function ToDoItem({ data, category }) {
  let color;
  switch (category) {
    case "shopping":
      color = "red";
      break;
    case "activity":
      color = "green";
      break;
    default:
      color = "blue";
  }

  return (
    <div style={{ widht: "100%", background: color, textAlign: "left" }}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default ToDoItem;
