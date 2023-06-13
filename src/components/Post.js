import { Button } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
  }

  render() {
    return (
      <div>
        <Card
          variant="outlined"
        >
          <CardContent>
            <Typography variant="h3" component="h3">
              {this.props.post.title}
            </Typography>
            <Typography variant="body2">{this.props.post.body}</Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Post;
