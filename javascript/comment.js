async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const post_id = document.querySelector('input[name="post-id"]').value.trim();
    if(body) {
        const response = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                post_id,
                comment_text,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if(response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert(response.statusText);
        }
    }
}

document
.querySelector("create-post-btn")
.addEventListener("submit", commentFormHandler);