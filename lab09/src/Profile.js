import React from 'react';

class Profile extends React.Component {  

    constructor(props) {
        super(props);
        // constructor logic
        console.log('Profile component created');
    }

    componentDidMount() {
        // fetch posts
        console.log('Profile component mounted');
    }

    render () {
        const altText= this.props.user.username + '\'s profile picture'
        return (
            <header id="myprofile">
                <img class="pic" src={this.props.user.thumb_url} alt={altText} />
                <h2>{this.props.user.username}</h2>
            </header>
        );
    }
}

export default Profile;