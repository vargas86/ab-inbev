import React from 'react';

export default function Actions(props) {
    return (

        <div class="article-actions">
            <div class="article-meta">
                
                <a href="{`{props.urlActions}`}">
                    <img src={ props.imageActions } />
                </a>

                <div class="info">
                    <a href="" class="author">{ props.name }</a>
                    <span class="date">{ props.date }</span>
                </div>

                <button class="btn btn-sm btn-outline-secondary">
                    <i class="ion-plus-round"></i>
          &nbsp;
          Follow { props.name } <span class="counter"> { props.counterFollow } </span>
                </button>
        &nbsp;
        <button class="btn btn-sm btn-outline-primary">
                    <i class="ion-heart"></i>
          &nbsp;
          Favorite Post <span class="counter">{ props.fav }</span>
                </button>
            </div>
        </div>


    );
}