import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom' ;
import NavBar from './NavBar' ;

import HomePage from './pages/HomePage' ;
import AboutPage from './pages/AboutPage' ;
import ArticleListPage from './pages/ArticleListPage' ;
import ArticlePage from './pages/ArticlePage' ; 
import HelpPage from './pages/HelpPage' ; 
import NotFoundPage from './pages/NotFoundPage' ;

function App() {
  return (
    <Router>
       <div className="App">
         <NavBar></NavBar>
         <div id="page-body">
           <Switch>
           <Route path="/" component={HomePage} exact/>
           <Route path="/about" component={AboutPage} />   
           <Route path="/article-list" component={ArticleListPage}/>   
           <Route path="/article/:name" component={ArticlePage}/>
           <Route path="/help" component={HelpPage}/>  
           <Route component={NotFoundPage}/>  
           </Switch>

         </div>       
      </div>
    </Router>   
  );
}

export default App;
