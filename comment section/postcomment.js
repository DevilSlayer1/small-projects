// readcomment.js

function readPreviousComments() {
    const details = document.querySelector('.details');

    // Fetch comments from the server (replace the URL with your server endpoint)
    fetch('/api/comments')
        .then(response => response.json())
        .then(comments => {
            details.innerHTML = ''; // Clear existing comments

            comments.forEach((comment, index) => {
                details.insertAdjacentHTML('beforeend', `
                    <div class="username">
                        <span id="user">user${index}</span>
                        <span id="time">1 hour</span>
                    </div>
                    <div class="body">
                        <span id="content">${comment}</span>
                    </div>
                `);
            });

            // Update the comment count
            document.getElementById('count').textContent = `Comments (${comments.length})`;
        })
        .catch(error => console.error('Error fetching comments:', error));
}

// Call the function to read and display previous comments
readPreviousComments();

// postcomment.js

function postComment() {
    const commentInput = document.getElementById('input-comment');
    const commentData = commentInput.value;

    if (commentData === '') {
        alert('Please add a comment!');
        commentInput.focus();
        return;
    }

    const details = document.querySelector('.details');

    // Post the new comment to the server (replace the URL with your server endpoint)
    fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment: commentData }),
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);

        // Fetch and display updated comments after posting
        readPreviousComments();

        // Clear the input field
        commentInput.value = '';
    })
    .catch(error => console.error('Error posting comment:', error));
}

function cancelComment() {
    // Implement logic to cancel the comment (if needed)
}

// Attach click event listeners to the buttons
document.getElementById('post-btn').addEventListener('click', postComment);
document.getElementById('cancel-btn').addEventListener('click', cancelComment);
