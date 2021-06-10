import React from 'react';

export default function Content(props) {
    return (

        <div class="row article-content">
            <div class="col-md-12">
                
                <p>
                    { props.firstParagraph }
                </p>

                <h2 id="introducing-ionic">
                    { props.subTitle }
                </h2>

                <p>
                    { props.secondParagraph }
                </p>

            </div>
        </div>


    );
}