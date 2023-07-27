import { Button } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import BookModal from "./BookModal";
import DeleteIcon from "@mui/icons-material/Delete";
import EditForm from "./EditForm";

class Book extends React.Component {
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
    this.handleToggleEditFormOpen = this.handleToggleEditFormOpen.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleToggleModalOpen() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  handleToggleEditFormOpen() {
    this.setState({
      editFormOpen: !this.state.editFormOpen,
    });
  }

  handleInputChange(itemName, e) {
    const newInputs = Object.assign({}, this.state.editFormInputs);
    newInputs[itemName] = e.target.value;
    this.setState({
      editFormInputs: newInputs,
    });
  }

  render() {
    return (
      <div>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h3" component="h3">
              {this.props.book.title}
            </Typography>
            <Typography variant="body2">{this.props.book.body}</Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" onClick={this.handleToggleModalOpen}>
              Detail
            </Button>
            <Button variant="contained" onClick={this.handleToggleEditFormOpen}>
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={(e) => this.props.onDelete(this.props.book.id, e)}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
        <BookModal
          book={this.props.book}
          open={this.state.modalOpen}
          onClose={this.handleToggleModalOpen}
          onDelete={this.props.onDelete}
        />
        {this.state.editFormOpen && (
          <EditForm
            book={this.props.book}
            inputs={this.state.editFormInputs}
            onChange={this.handleInputChange}
            onSubmit={this.props.onUpdate}
          />
        )}
      </div>
    );
  }
}

export default Book;
