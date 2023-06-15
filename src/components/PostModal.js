import { Button, Modal } from "@mui/material";

function PostModal(props){

  const contents = (
    <div className = "postModal">
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
      <Button
          onClick={(e) => props.onDelete(props.post.id, e)}
          variant="contained"
        >
          Delete
        </Button>
      <Button
          onClick={props.onClose}
          variant="contained"
        >
          CLOSE
        </Button>
    </div>
  );

  return (
    <Modal
      open = {props.open}
      onClose = {props.onClose}
    >
      {contents}
    </Modal>
  );
}

export default PostModal;