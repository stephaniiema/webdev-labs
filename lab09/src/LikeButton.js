import React from 'react';
import {getHeaders} from './utils.js';

class LikeButton extends React.Component { 

    constructor(props) {
        super(props);
        // data we need: 
        // 1. whether current post is liked or unliked
        // 2. which post to like/unlike (postid)
        this.likeUnlike = this.likeUnlike.bind(this);
        this.like = this.like.bind(this);
        this.unlike = this.unlike.bind(this);
    }

    likeUnlike (ev) {
        console.log('likeUnlike');
        if(this.props.likeId) {
            this.unlike();
        } else {
            this.like();
        }
    }

    like () {
        console.log('like');
        const postId = this.props.postId;
        fetch('/api/posts/' + postId + '/likes', {
            headers: getHeaders(),
            body: JSON.stringify({}),
            method: "POST"
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            // calling the parent Component (Post's) function.
            this.props.requeryPost();
        })
    }

    unlike () {
        console.log('unlike');
        const postId = this.props.postId;
        const likeId= this.props.likeId;
        fetch('/api/posts/' + postId + '/likes/' + likeId, {
            headers: getHeaders(),
            method: "DELETE"
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            // calling the parent Component (Post's) function.
            this.props.requeryPost();
        })
    }

    render () {
        const likeId = this.props.likeId;
        return (
            <button className='like' 
                onClick={ this.likeUnlike }
                aria-checked={ likeId ? true : false}>
                <i className={ likeId ? 'fas fa-heart' : 'far fa-heart'}></i>
            </button>
        ); 
    }
}

export default LikeButton;