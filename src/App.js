import React from 'react';
import './App.css';
import Header from './components/Header';
import MainArticle from './components/MainArticle';
import NewsNotifications from './components/NewsNotifications';
import SideArticle from './components/SideArticles';



function App() {
  return (
    <div >

      <Header />
       <NewsNotifications  topic= 'PÄIVÄN TIMANTTI' body= 'Tutkija kertoo: Näin sota näkyy meissä edelleen' />
       <NewsNotifications  topic= 'PÄIVÄN TIMANTTI' body= 'Harriet Rabb tajusi avioliiton taloudelliset hyödyt ja kosi - Näin hän säästäisi aviopuolisona 19 200 euroa'/>
       <NewsNotifications  topic= 'MAINOS' body= 'Faktoille on nyt suurempi tarve kuin koskaan - tutustu Hesariin 2 viikkoa maksutta!'/>
      
       <MainArticle />   <SideArticle />
    </div>
  );
}

export default App;
