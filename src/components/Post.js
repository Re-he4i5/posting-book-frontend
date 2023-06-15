import { Button } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from '@mui/material/CardActions';
import Typography from "@mui/material/Typography";
import PostModal from "./PostModal";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      editFormOpen: false,
      editFormInputs: {
        title: "",
        body: "",
      },
    };
    this.handleToggleModalOpen = this.handleToggleModalOpen.bind(this);
  }

  handleToggleModalOpen() {
    this.setState({modalOpen: !this.state.modalOpen});
  }

  render() {
    return (
      <div>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h3" component="h3">
              {this.props.post.title}
            </Typography>
            <Typography variant="body2">
              {this.props.post.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" onClick={this.handleToggleModalOpen}>
              Detail
            </Button>
            <Button variant="contained" onClick={(e) => this.props.onDelete(this.props.post.id, e)}>
              Delete
            </Button>
          </CardActions>
        </Card>
        <PostModal
          post = {this.props.post}
          open={this.state.modalOpen}
          onClose = {this.handleToggleModalOpen}
        />
      </div>
    );
  }
}

export default Post;
