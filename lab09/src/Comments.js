import React from 'react';

class Comments extends React.Component {  
    constructor(props) {
        super(props);
    }

    render () {
        if(this.props.comments.length != 0){
            const lastComment=this.props.comments[0];
            return (
                <div>
                    <p>
                        <strong>{lastComment.user.username}</strong>
                        {lastComment.text}
                    </p>
                    <p className='timestamp'>
                        timestamp goes here
                    </p>
                </div>
            )
        }else{
            return(null)
        }
    }       
}

export default Comments;