import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NewsList = ({ news }) => {
  const [featuredNews] = news;

  return (
    <div>
      {featuredNews && (
        <div className="featured-news">
          <img src={featuredNews.image_url} alt={featuredNews.title} />
          <h1><Link to={`/news/${featuredNews.id}`}>{featuredNews.title}</Link></h1>
          <p>{featuredNews.content.substring(0, 200)}...</p>
        </div>
      )}
      <h2>Últimas Notícias</h2>
      <div className="news-section">
        {news.slice(1).map((item) => (
          <div key={item.id} className="news-item">
            <img src={item.image_url} alt={item.title} />
            <Link to={`/news/${item.id}`}>{item.title}</Link>
            <p>{item.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsList;
