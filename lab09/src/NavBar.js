import React from 'react';
import { getHeaders } from './utils';

class NavBar extends React.Component {  

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // fetch posts
        // console.log('NavBar component mounted');
    }

    render () {
        return (
            <nav className="main-nav">
                <h1>{this.props.title}</h1>
                <ul>   
                    <li><a href="/api">API Docs</a></li>
                    <li><span>{this.props.user.username}</span></li>
                    <li><a href="/logout">Sign out</a></li>
                </ul> 
            </nav>       
        );
    }
}

export default NavBar;