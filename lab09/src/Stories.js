import React from 'react';

class Stories extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            stories: []
        }
        // constructor logic
        console.log('Stories component created');
        this.getStories();
    }

    componentDidMount() {
        // fetch posts
        console.log('Stories component mounted');
    }
    
    getStories(){
        fetch('/api/stories')
        .then(response => response.json())
        .then(data => {
            console.log("getting stories")
            console.log(data)
            this.setState({
                stories: data
            })
        })
    }
    
    render () {
        console.log("Rendering stories")
        console.log(this.state.stories)
        return (
            <header className="stories">
                {
                    this.state.stories.map(story => {
                       return  <div key={'story-' + story.id}>  
                            <img className="pic" src={story.user.thumb_url}  alt= {story.user.username + "'s profile picture"} />
                            <p>{story.user.username}</p>
                        </div>
                    })
                }
            </header>
        )
    }
}

export default Stories;