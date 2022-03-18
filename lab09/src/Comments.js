import React from 'react';

class Comments extends React.Component {  
    constructor(props) {
        super(props);
    }

    render () {
        if(this.props.comments.length != 0){
            const lastComment=this.props.comments[this.props.comments.length-1];
            return (
                <div>
                    <p>
                        <strong>{lastComment.user.username}</strong>
                        {lastComment.text}
                    </p>
                    <p className='timestamp'>
                        {lastComment.display_time}
                    </p>
                </div>
            )
        }else{
            return(null)
        }
    }       
}

export default Comments;