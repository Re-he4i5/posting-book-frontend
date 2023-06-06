import React from 'react';
import './App.css';
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid";
import Post from "./components/Post";
import CreateForm from "./components/CreateForm"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            createFormInputs: {
                title: "",
                body: "",
            },
            posts: [],
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlePostSubmit = this.handlePostSubmit.bind(this);
    }

    get axios() {
        const axiosBase = require('axios');
        return axiosBase.create({
            baseURL: process.env.REACT_APP_DEV_API_URL,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            responseType: 'json'
        });
    }

    handleInputChange(itemName, e) {
        const newInputs = Object.assign({}, this.state.createFormInputs)
        newInputs[itemName] = e.target.value;

        this.setState({
            createFormInputs: newInputs
        });
    }

    handlePostSubmit(e) {
        e.preventDefault();
        const inputValues = Object.values(this.state.createFormInputs);

        if (inputValues.every(value => value)) {
            this.axios.post("/posts", {
                post: this.state.createFormInputs,
            })
                .then(res => {
                    const posts = this.state.posts.slice();
                    posts.push(res["data"]);
                    this.setState({
                        posts: posts,
                        createFormInputs: {
                            title: "",
                            body: "",
                        },
                    });
                })
                .catch(data => {
                    console.log(data)
                });
        }
    }

    componentDidMount() {
        this.axios.get('/posts')
            .then(results => {
                console.log(results);
                this.setState({
                    posts: results.data
                });
            })
            .catch(data => {
                console.log(data);
            });
    }

    getPosts() {
        return (
            this.state.posts.map((post) => {
                return (
                    <Grid item xs={4} key={post.id}>
                        <Post
                            post={post}
                        />
                    </Grid>
                )
            })
        );
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
                            onSubmit={this.handlePostSubmit}
                        />

                    </Box>
                    <Box p={4}>
                        <Grid container spaceng={5}>
                            {this.getPosts()}
                        </Grid>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default App;