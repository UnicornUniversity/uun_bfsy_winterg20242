import { useContext } from "react";
import { UserContext } from "../Users/UserProvider.js";
import Icon from "@mdi/react";
import { mdiDeleteCircleOutline } from "@mdi/js";
import Button from "react-bootstrap/Button";

function ToDoListOverviewItem({ itemData, handleArchive, handleDelete }) {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div
      style={{
        border: "1px solid red",
        borderRadius: "16px",
        padding: "8px",
        background: "wheat",
      }}
    >
      <pre>{JSON.stringify(itemData, null, 2)}</pre>
      {itemData.owner === loggedInUser ? (
        <>
          <button onClick={() => handleArchive({ id: itemData.id })}>
            archivovat
          </button>
          <Button
            variant="danger"
            onClick={() => handleDelete({ id: itemData.id })}
          >
            <Icon path={mdiDeleteCircleOutline} size={1} />
          </Button>
        </>
      ) : null}
    </div>
  );
}

export default ToDoListOverviewItem;
