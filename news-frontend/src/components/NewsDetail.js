import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../App.css';

const NewsDetail = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/news/${id}`)
            .then(response => setNews(response.data))
            .catch(error => console.error(error));
    }, [id]);

    if (!news) {
        return <div className="container">Loading...</div>;
    }

    return (
        <div className="news-detail">
            <h1>{news.title}</h1>
            <img src={news.image_url} alt={news.title} />
            <p>{news.content}</p>
        </div>
    );
}

export default NewsDetail;