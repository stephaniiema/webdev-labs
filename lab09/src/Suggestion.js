import React from 'react';
import { getHeaders } from './utils';
class Suggestion extends React.Component {  
    constructor(props) {
        super(props);
        // constructor logic
        this.state={
            model: this.props.model,
            followingId: undefined
        }
        console.log('Suggestion component created');
        console.log(this.props.model);
        console.log("If there is a follow id");
        console.log(this.props.model.followingId)

        this.toggleFollow = this.toggleFollow.bind(this);
        this.followUser = this.followUser.bind(this);
        this.unfollowUser = this.unfollowUser.bind(this);
    }

    componentDidMount() {
        // fetch posts
        console.log('Suggestion component mounted');
    }

    toggleFollow(ev){
        if (this.state.followingId){
            this.unfollowUser();
        } else {
            this.followUser();
        }
    }

    followUser(){
        console.log("id passing in " + this.props.model.id)
        const postData = {
            'user_id': this.props.model.id
        };
        const headers = getHeaders();
        headers['Content-Type']= 'application/json';
        fetch("/api/following/", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(postData)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState ({
                    followingId: data.id
                })
            });
    }

    unfollowUser(){
        fetch("/api/following/"+ this.state.followingId, {
        method: "DELETE",
        headers: getHeaders()
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        this.setState({
            followingId: undefined
        })
    });
    }

    render () {
        console.log(this.state.followingId)
        return (
            <section className={'suggestion-' + this.props.model.id}>
                <img src={this.props.model.thumb_url} 
                class="pic" alt={"Profile pic for" + this.props.model.username }></img>
                <div>
                    <p>{this.props.model.username}</p>
                    <p>suggested for you</p>
                </div>
                <div>
                    <button 
                        onClick={ this.toggleFollow }
                        role="switch" 
                        className="link following" 
                        aria-checked="false" 
                        aria-label={"Follow"+ this.props.model.username}>
                        {this.state.followingId ? "unfollow" : "follow"}
                    </button>
                </div>
            </section>
        )     
    }
}

export default Suggestion;