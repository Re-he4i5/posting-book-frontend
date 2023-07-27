import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Book from "./components/Book";
import CreateForm from "./components/CreateForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createFormInputs: {
        title: "",
        body: "",
      },
      books: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBookSubmit = this.handleBookSubmit.bind(this);
    this.handleBookDelete = this.handleBookDelete.bind(this);
    this.handleBookUpdate = this.handleBookUpdate.bind(this);
  }

  get axios() {
    const axiosBase = require("axios");
    return axiosBase.create({
      baseURL: process.env.REACT_APP_DEV_API_URL,
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      responseType: "json",
    });
  }

  handleInputChange(itemName, e) {
    const newInputs = Object.assign({}, this.state.createFormInputs);
    newInputs[itemName] = e.target.value;

    this.setState({
      createFormInputs: newInputs,
    });
  }

  handleBookSubmit(e) {
    e.preventDefault();
    const inputValues = Object.values(this.state.createFormInputs);

    if (inputValues.every((value) => value)) {
      this.axios
        .post("/api/books", {
          book: this.state.createFormInputs,
        })
        .then((res) => {
          const books = this.state.books.slice();
          books.push(res["data"]);
          this.setState({
            books: books,
            createFormInputs: {
              title: "",
              body: "",
            },
          });
        })
        .catch((data) => {
          console.log(data);
        });
    }
  }

  handleBookDelete(id, e) {
    e.preventDefault();
    this.axios
      .delete(`/api/books/${id}`)
      .then((res) => {
        const targetIndex = this.state.books.findIndex((book) => {
          return book["id"] === res["data"]["id"];
        });
        console.log(targetIndex);
        const books = this.state.books.slice();
        books.splice(targetIndex, 1);
        console.log(books);

        this.setState({
          books: books,
        });
      })
      .catch((data) => {
        console.log(data);
      });
  }

  handleBookUpdate(id, inputs, e) {
    e.preventDefault();
    const inputValues = Object.values(inputs);

    if (inputValues.every((value) => value)) {
      this.axios
        .patch(`/api/books/${id}`, {
          book: inputs,
        })
        .then((results) => {
          const books = this.state.books.slice();
          const index = books.findIndex((book) => book["id"] === id);
          books.splice(index, 1, results["data"]);

          this.setState({
            books: books,
          });
        })
        .catch((data) => {
          console.log(data);
        });
    }
  }

  componentDidMount() {
    this.axios
      .get("/api/books")
      .then((results) => {
        console.log(results);
        this.setState({
          books: results.data,
        });
      })
      .catch((data) => {
        console.log(data);
      });
  }

  getBooks() {
    return this.state.books.map((book) => {
      return (
        <Grid item xs={4} key={book.id}>
          <Book
            book={book}
            onDelete={this.handleBookDelete}
            onUpdate={this.handleBookUpdate}
          />
        </Grid>
      );
    });
  }

  // ページの表示
  render() {
    return (
      <div className="App">
        <Box p={5}>
          <Box p={5}>
            <CreateForm
              inputs={this.state.createFormInputs}
              onChange={this.handleInputChange}
              onSubmit={this.handleBookSubmit}
            />
          </Box>
          <Box p={4}>
            <Grid container spaceng={5}>
              {this.getBooks()}
            </Grid>
          </Box>
        </Box>
      </div>
    );
  }
}

export default App;
