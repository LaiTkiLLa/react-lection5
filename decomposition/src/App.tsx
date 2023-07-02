import React from 'react';
import './App.css';
import {NewsCategories} from "./components/news-categories.component";
import {LastNews} from "./components/last-news.component";
import {Currency} from "./components/currency.component";
import {SearchCategories} from "./components/search-categories.component";
import {Search} from "./components/search.component";
import {Banner} from "./components/banner.component";
import {Interesting} from "./components/interesting.component";

function App() {
  return (
    <div className='container'>
        <div className='news'>
            < NewsCategories />
            < LastNews />
            < Currency />
        </div>
        <div className='search'>
            <SearchCategories />
            <Search />
        </div>
        <div className='banner'>
            <Banner />
        </div>
        <div className='footer'>
            <Interesting />
        </div>
    </div>
  );
}

export default App;
