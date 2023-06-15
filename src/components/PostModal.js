import { Button, Modal } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function PostModal(props){

  const contents = (
    <div className = "postModal">
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
        <Button
          onClick={props.onClose}
          variant="contained"
        >
          CLOSE
        </Button>
        <Button
          onClick={(e) => props.onDelete(props.post.id, e)}
          variant="contained"
          color="error"
          startIcon={< DeleteIcon/>}
          >
          Delete
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