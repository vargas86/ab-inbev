import React from 'react';

export default function Comment(props) {
    return (

        <div className="card">

            <div className="card-block">
                <p className="card-text">
                    { props.ParagraphComment}
                </p>
            </div>

            <div class="card-footer">
                <a href={`{props.urlComment}`} className="comment-author">
                    <img 
                        src={props.imgComment}
                        className="comment-author-img" 
                    />
                </a>
                &nbsp;

                <a href={`{props.urlComment}`} class="comment-author">
                    { props.nameComment }
                </a>

                <span class="date-posted">
                    { props.dateComment }
                </span>

                <span class="mod-options">
                    <i class="ion-edit"></i>
                    <i class="ion-trash-a"></i>
                </span>

            </div>
        </div>



    );
}