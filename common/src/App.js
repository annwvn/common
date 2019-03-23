import React, { Component } from 'react';
import BlogPost from './view/BlogPost'
import CommentList from './view/commentList'
import './common/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <BlogPost />
            <hr/>
            <CommentList />
      </div>
    );
  }
}

export default App;
