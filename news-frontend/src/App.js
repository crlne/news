import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';
import './App.css';

const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/news')
      .then(response => setNews(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Router>
      <header>
        <div>Science</div>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <main className="container">
        <div className="main-content">
          <Routes>
            <Route path="/news" element={<NewsList news={news} />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/" element={<NewsList news={news} />} />
          </Routes>
        </div>
        <aside className="sidebar">
          <div className="sidebar-section">
            <h2>Mais Recentes</h2>
            {news.slice(0, 5).map((item) => (
              <div key={item.id} className="sidebar-item">
                <Link to={`/news/${item.id}`}>{item.title}</Link>
                <span>31 de Dezembro</span>
              </div>
            ))}
          </div>
          <div className="sidebar-section">
            <h2>Mais Lidas</h2>
            {news.slice(0, 5).map((item) => (
              <div key={item.id} className="sidebar-item">
                <Link to={`/news/${item.id}`}>{item.title}</Link>
                <span>31 de Dezembro</span>
              </div>
            ))}
          </div>
        </aside>
      </main>
      <footer className="footer">
        <div>© 2024 DailyNews. All rights reserved.</div>
      </footer>
    </Router>
  );
}

export default App;