import { useState, useEffect } from "react";
import './App.css';
import NavInshorts from './components/NavInshorts';
import NewsContent from "./components/NewsContent/NewsContent";
import axios from "axios";
import apiKey from './data/config';
import Footer from './components/Footer/Footer';

function App() {
  const [category, setCategory] = useState('general');
  const [newsArray, setNewsArray] = useState([]);
  const [newsResult, setNewsResult] = useState();
  const [loadmore, setLoadMore] = useState(20);

  const newsApi = async () =>{
    try{
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadmore}`);
      setNewsArray(news.data.articles);
      setNewsResult(news.data.totalResults);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    newsApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[category, newsResult, loadmore]);


  return (
    <div className="App">
      <NavInshorts setCategory={setCategory} />
      <NewsContent newsArray={newsArray} newsResult={newsResult} loadmore={loadmore} setLoadMore={setLoadMore}/>
      <Footer/>
    </div>
  );
}

export default App;
