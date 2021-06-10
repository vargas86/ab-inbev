import React from 'react';

export default function Actions(props) {
    return (

        <div class="article-actions">
            <div class="article-meta">
                <a href="{`{props.urlActions}`}"><img src={ props.imageActions } /></a>
                <div class="info">
                    <a href="" class="author">Eric Simons</a>
                    <span class="date">January 20th</span>
                </div>

                <button class="btn btn-sm btn-outline-secondary">
                    <i class="ion-plus-round"></i>
          &nbsp;
          Follow Eric Simons <span class="counter">(10)</span>
                </button>
        &nbsp;
        <button class="btn btn-sm btn-outline-primary">
                    <i class="ion-heart"></i>
          &nbsp;
          Favorite Post <span class="counter">(29)</span>
                </button>
            </div>
        </div>


    );
}