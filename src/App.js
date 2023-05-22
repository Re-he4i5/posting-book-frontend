import React from 'react';
import './App.css';
import Post from "./components/Post";
import CreateForm from "./components/CreateForm"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            createFormInputs: {
                title: "",
                content: "",
            },
            posts: [],
        }
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
                    <Post key={post.id} post={post} />
                )
            })
        );
    }

    // ページの表示
    render() {
        return (
            <div className="App">
                <CreateForm
                    inputs={this.state.createFormInputs}
                
                />
                
                {this.getPosts()}
            </div>
        );
    }
}

export default App;