import React from 'react' ;
import {Link} from 'react-router-dom' ;


const Articlelist = ({articles}) => {
    return  (
        <>       
        {articles.map((article,key) => (
            <Link className="article-list-name" key={key} to={`/article/${article.name}`}>
             <h3>{article.title}</h3>
            <p>{article.content[0].substr(0,150)}...</p>
            </Link>
           
        ))}
        </>
    );

}

export default Articlelist
