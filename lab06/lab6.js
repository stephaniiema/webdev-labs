const toggleFollow = ev => {
    console.log(ev);
    const elem = ev.currentTarget;
    if (elem.innerHTML === 'follow'){
        // issue new follow request
        followUser(elem.dataset.userId, elem)
    } else {
        unfollowUser(elem.dataset.followingId, elem)
    }
    //     
    // } else {
    //     elem.innerHTML = 'follow'
    //     elem.classList.add('follow');
    //     elem.classList.remove('unfollow');
    // }
}

const followUser = (userId, elem) => {
    const postData = {
        "user_id": userId
    };
    
    fetch("/api/following/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            elem.innerHTML = 'unfollow'
            elem.setAttribute('aria-checked', 'true')
            elem.classList.add('unfollow');
            elem.classList.remove('follow');
            // in the event that we want to unfollow
            elem.setAttribute('data-following-id',data.id);
        });

}

const unfollowUser = (followingId, elem)=> {
    const deleteURL = `/api/following/${followingId}`;

    fetch(deleteURL, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        elem.innerHTML = 'follow'
        elem.setAttribute('aria-checked', 'false')
        elem.classList.add('follow');
        elem.classList.remove('unfollow');
        elem.removeAttribute('data-follinwg-id');
    });
}

const user2Html = user => {
    return `<div class="suggestion">  
        <img src="${user.thumb_url} " />
        <div>
            <p class="username">${user.username}</p>
            <p class="suggestion-text">suggested for you</p>
        </div>
        <div>
            <button class="follow" 
            aria-label="Follow"
            aria-checked="false"
            data-user-id="${user.id}" onclick="toggleFollow(event);">follow</button>
        </div>
    </div>`;
};

const getSuggestions = () => {
    fetch('/api/suggestions/')
        .then(response => response.json())
        .then(users  => {
            console.log(users);
            const html = users.map(user2Html).join('\n');
            document.querySelector('#suggestions').innerHTML = html;
        });
}

getSuggestions();