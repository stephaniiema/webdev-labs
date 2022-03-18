import React from 'react';
import LikeButton from './LikeButton';
import BookmarkButton from './BookmarkButton';
import Comments from './Comments'
import {getHeaders} from './utils.js';
import AddComment from './AddComment.js';

class Post extends React.Component { 

    constructor(props) {
        super(props);
        this.state={
            model: this.props.model
        }
        // console.log(this.state.model); 
        this.requeryPost = this.requeryPost.bind(this)
        
    }

    requeryPost() {
        // get post with updated 
        fetch('/api/posts/' + this.props.model.id, { 
            headers:  getHeaders()
        })
        .then(response => response.json())
        .then (data => {
            console.log ('Updated post:', data);
            //redraw component
            this.setState({
                model: data
            })
        })
    }

    render () {
        const post = this.state.model;
        return (
            <section className="card">
                <div className="header">
                    <h3>{ post.user.username }</h3>
                    <i className="fa fa-dots"></i>
                </div>
                
                <img 
                    src={ post.image_url } 
                    alt={'Image posted by ' +  post.user.username } 
                    width="300" 
                    height="300" />
                
                <div className="info">
                    <div className="buttons">
                        <div>
                            <LikeButton 
                                likeId={post.current_user_like_id}
                                postId={post.id}
                                requeryPost={this.requeryPost} />
                            
                            <i class="far fa-comment"></i>
                            <i class="far fa-paper-plane"></i>
                        </div>
                        <div>    
                            <BookmarkButton 
                                bookmarkId={post.current_user_bookmark_id}
                                postId={post.id}
                                requeryPost={this.requeryPost} />
                        </div>
                    </div>
                    <p className='likes'>
                        <strong>
                            {this.state.model.likes.length} like{this.state.model.likes.length == 1 ? "" : "s"}
                        </strong>
                    </p>
                    <div className='caption'>
                        <p>
                            <strong>{this.state.model.user.username}</strong>
                            {this.state.model.caption}
                        </p>
                        <p className='timestamp'>
                            {this.state.model.display_time}
                        </p>
                    </div>
                    {this.state.model.comments.length > 1 ? 
                    <button class="link">View all {this.state.model.comments.length} comments</button> : null}
                    <div className='comments'>
                        <Comments comments={this.state.model.comments}/>
                    </div>
                </div>
                <AddComment 
                    postId={post.id}
                    requeryPost={this.requeryPost}/>
            </section> 
        ); 
    }
}

export default Post;