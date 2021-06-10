import React from 'react';

export default function Meta(props) {
    return (

        <div class="article-meta">
            <a href="{`{urlMeta}`}"><img src={ props.imgMeta } /></a>
            <div class="info">
                <a href="" class="author">{ props.name }</a>
                <span class="date">{ props.date }</span>
            </div>
            <button class="btn btn-sm btn-outline-secondary">
                <i class="ion-plus-round"></i>
                 &nbsp;
                Follow { props.name } <span class="counter">{ props.counterFollow }</span>
            </button>
                &nbsp;&nbsp;

            <button class="btn btn-sm btn-outline-primary">
                <i class="ion-heart"></i>
                &nbsp;
                Favorite Post <span class="counter">{ props.counterFav }</span>
            </button>
        </div>


    );
}