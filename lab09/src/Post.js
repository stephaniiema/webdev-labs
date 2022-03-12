import React from 'react';
import LikeButton from './LikeButton';

class Post extends React.Component { 

    constructor(props) {
        super(props);
    }

    requeryPost() {
        console.log('requery post');
        console.log('when fetch comes back with the post, set the state to trigger the redraw.');
    }

    render () {
        const post = this.props.model;
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
                    <div>
                        <LikeButton 
                            likeId={post.current_user_like_id}
                            postId={post.id}
                            requeryPost={this.requeryPost} />
                    </div>
                    <p>{ post.caption }</p>
                </div>
            </section> 
        ); 
    }
}

export default Post;