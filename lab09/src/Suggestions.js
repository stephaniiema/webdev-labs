import React from 'react';
import Suggestion from './Suggestion.js';
import {getHeaders} from './utils.js';

class Suggestions extends React.Component {  
    constructor(props) {
        super(props);
        this.state ={
            suggestions: []
        }
        // constructor logic
        console.log('Suggestions component created');
        this.getSuggestions();
    }

    componentDidMount() {
        // fetch posts
        console.log('Suggestions component mounted');
    }

    getSuggestions(){
        fetch("/api/suggestions/", {
        method: "GET",
        headers: getHeaders()
    })
    .then(response => response.json())
    .then(data => {
        this.setState({
            suggestions: data
        })
    });
    }

    render () {
        return (
            <div className="suggestions">
                <p className="suggestion-text">Suggestions for you</p>
                <div>
                    {
                        this.state.suggestions.map(suggestion => {
                            return <Suggestion model={suggestion} key={'suggestion-' + suggestion.id} />
                        })
                    }
                </div>

            </div>
        )     
    }
}

export default Suggestions;