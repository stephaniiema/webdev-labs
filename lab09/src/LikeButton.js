import React from 'react';
import {getHeaders} from './utils.js';

class LikeButton extends React.Component { 

    constructor(props) {
        super(props);

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

    }

    render () {
        const likeId = this.props.likeId;
        return (
            <button 
                onClick={ this.likeUnlike }>
                <i className={ likeId ? 'fas fa-heart' : 'far fa-heart'}></i>
            </button>
        ); 
    }
}

export default LikeButton;