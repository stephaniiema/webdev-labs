import React from 'react';
import { getHeaders } from './utils';

class AddComment extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render () {
        return <form className='add-comment' onSubmit={this.handleSubmit}>
            <div class="input-holder">
                <input 
                    class="comment-textbox" 
                    aria-label="Add a comment" 
                    placeholder="Add a comment..." 
                    value={this.state.value}
                    onChange={this.handleChange}/>
            </div>
            <button class="link">Post</button>
        </form>
    }     
    
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("submitting " + this.state.value);
        const postId = this.props.postId;
        const commentText = this.state.value;
        const postData = {
            "post_id": postId,
            "text": commentText
        };
        const headers = getHeaders();
        headers['Content-Type']= 'application/json';
        fetch("/api/comments", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(postData)
            })
            .then(response => response.json())
            .then(data => {
                console.log("postid is " + postId + " with text " + commentText);
                this.props.requeryPost();
                this.setState({
                    value: ''
                })
            });
        
    }
    
}



export default AddComment;