import React, { useState, useEffect } from 'react';
import articleContent from './ArticleContent'
import ArticleList from '../component/ArticleList' ;
import NotFoundpage from '../pages/NotFoundPage' ;
import CommentsList from '../component/CommentsList';
import UpvotesSection from '../component/UpvotesSection';
import AddCommentForm from '../component/AddCommentForm';

const ArticlelPage = ({match}) =>  {
    const name =  match.params.name ;
    const article = articleContent.find(article => article.name ===name) ;
    const otheArticles = articleContent.filter(article => article.name !==name) ;
    
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);

    if(!article) return <NotFoundpage/>
   
    return (
        <>
        <h1>{article.title} </h1>
        <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
        {article.content.map((para,key) => (
            <p key={key}> {para}</p>
        ))}
          <CommentsList comments={articleInfo.comments} />
          <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
        <h1>Other Article</h1>
        <ArticleList articles={otheArticles}></ArticleList>
        </>
    );
    
}
export default ArticlelPage
