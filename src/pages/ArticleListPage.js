import React from 'react' ;
import articleContent from './ArticleContent' ;
import ArticleList from '../component/ArticleList'


const ArticlelistPage = () => {
    return  (
        <>       
        <h1>Article List </h1>
        <ArticleList articles = {articleContent}/>
        </>
    );

}

export default ArticlelistPage
