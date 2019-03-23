import React, { Component } from 'react';
import DataSource from '../components/DataSource';
import withSubScript from '../components/withSubScript'

class BlogPost extends Component {
  constructor(props){
      super(props);
      this.change = this.change.bind(this)
  }
  render() {
    return (
      <div>
          <h1>{this.props.data.content}</h1>
          <button onClick={this.change}>巴啦啦能量</button>
      </div>
    )
  }
  change(){
      let newBlog = {id:1,content:'搓搓的版╮(╯▽╰)╭'};
      DataSource.upBlogs(newBlog)
  }

}

export default withSubScript(BlogPost,(ds)=>{return ds.getBlogById(1)});
