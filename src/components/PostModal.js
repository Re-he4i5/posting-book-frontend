import { Button, Modal } from "@mui/material";

function PostModal(props){
  const contents = (
    <div>
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
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
      close = {props.onClose}
    >
      {contents}
    </Modal>
  );
}

export default PostModal;