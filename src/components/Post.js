import React from "react";

class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.post.title}
                {this.props.post.content}
            </div>
        );
    }
}

export default Post;
