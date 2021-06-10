import React from 'react';
import TitleArticle from './cards/title';
import Meta from './cards/meta';
import Content from './cards/content';
import Actions from './cards/actions';
import CommentForm from './cards/commentForm';
import Comment from './cards/comment';

const articleData = {
     "article": {
      "slug": "how-to-train-your-dragon",
      "title": "How to train your dragon",
      "description": "Ever wonder how?",
      "body": "It takes a Jacobian",
      "tagList": ["dragons", "training"],
      "createdAt": "2016-02-18T03:22:56.637Z",
      "updatedAt": "2016-02-18T03:48:35.824Z",
      "favorited": false,
      "favoritesCount": 10,
        },
     
    "author": {
        "username": "Eric Simons",
        "bio": "I work at statefarm",
        "image": "https://i.stack.imgur.com/xHWG8.jpg",
        "following": 29
      }
    
}

const bannerArticle = () => {
    return articleData.map(article => {
      return (
            <TitleArticle 
                title="title.article[0]"
            />,

            <Meta 
                urlMeta="#"
                imgMeta={image.article[1]}
                nameMeta={username.article[1]}
                date={createdAt.article[0]}
                //date="January 20th",
                counterFollow={favoritesCount.article[0]}
                counterFav={following.article[1]}
            />
        )
    })
}

export default function ArticleCard() {
    return (

        <div class="article-page">
            <div class="banner">
                <div class="container">

                    { bannerArticle() }
                    {/*< TitleArticle 
                        title="How to build webapps that scale"
                    />

                    <Meta 
                        urlMeta="#"
                        imgMeta="http://i.imgur.com/Qr71crq.jpg"
                        name="Eric Simons"
                        date="January 20th"
                        counterFollow="(10)"
                        counterFav="(29)"
                    /> */}

                </div>
            </div>

            <div class="container page">

                <Content 
                    firstParagraph="Web development technologies have evolved at an incredible clip over the past few years."
                    subTitle="Introducing RealWorld."
                    secondParagraph="It's a great solution for learning how other frameworks work."
                />

                <hr />

                <Actions 
                 imageActions="http://i.imgur.com/Qr71crq.jpg"
                 urlActions="profile.html"
                 name="Eric Simons"
                 date="January 20th"
                 counterFollow="(10)"
                 counterFav="(29)"
                />

                <div class="row">
                    <div class="col-xs-12 col-md-8 offset-md-2">

                        <CommentForm 
                            image="http://i.imgur.com/Qr71crq.jpg"
                        />

                        <Comment 
                            ParagraphComment="With supporting text below as a natural lead-in to additional content."
                            urlComment="#"
                            imgComment="http://i.imgur.com/Qr71crq.jpg"
                            nameComment="Jacob Schmidt"
                            dateComment="Dec 29th"
                        />
                        
                        <Comment 
                            ParagraphComment="With supporting text below as a natural lead-in to additional content."
                            urlComment="#"
                            imgComment="http://i.imgur.com/Qr71crq.jpg"
                            nameComment="Jacob Schmidt"
                            dateComment="Dec 29th"
                        />

                    </div>
                </div>
            </div>
        </div>

    );
}