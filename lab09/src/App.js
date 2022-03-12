import React from 'react';
import NavBar from './NavBar';
import Profile from './Profile';
import Stories from './Stories';
import Suggestions from './Suggestions';
import Posts from './Posts';
import { getHeaders } from './utils';

class App extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
        this.getUser();
    }

    render () {
        return (
            <div>
                <NavBar title="Photo App" user={this.state.user}/>
                <aside>
                    <Profile />
                    <Suggestions />
                </aside>

                <main className="content">
                    <Stories />
                    <Posts />
                </main>
            </div>
        );
    }

    getUser(){
        fetch('/api/profile/', {
        method: "GET",
        headers: getHeaders()
    })
    .then(response => response.json())
    .then(data => {
        this.setState({
            user: data
        })
    });
    }
}

export default App;