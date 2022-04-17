import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Many kinds of data needed, <br /> Botanical take care all of them.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Apr 04, 2022" text="AI Model" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Apr 04, 2022" text="Temperature" />
        <Article imgUrl={blog03} date="Apr 04, 2022" text="Humidity" />
        <Article imgUrl={blog04} date="Apr 04, 2022" text="Air pressure" />
        <Article imgUrl={blog05} date="Apr 04, 2022" text="Wind speed" />
      </div>
    </div>
  </div>
);

export default Blog;