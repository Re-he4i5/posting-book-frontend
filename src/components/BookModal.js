import { Button, Modal } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function PostModal(props) {
  const contents = (
    <div
      className="book
Modal"
    >
      <h2>{props.book.title}</h2>
      <p>{props.book.body}</p>
      <Button onClick={props.onClose} variant="contained">
        CLOSE
      </Button>
      <Button
        onClick={(e) => props.onDelete(props.book.id, e)}
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </div>
  );

  return (
    <Modal open={props.open} onClose={props.onClose}>
      {contents}
    </Modal>
  );
}

export default PostModal;
