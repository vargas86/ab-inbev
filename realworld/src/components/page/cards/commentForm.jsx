import React from 'react';

export default function CommentForm(props) {
    return (

        <form class="card comment-form">
            <div class="card-block">
                <textarea
                    class="form-control"
                    placeholder="Write a comment..."
                    rows="3"
                />
            </div>
            <div className="card-footer">
                <img src={ props.image } className="comment-author-img" />
                <button className="btn btn-sm btn-primary">
                    Post Comment
                </button>
            </div>
        </form>



    );
}