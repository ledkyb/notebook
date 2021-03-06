import React from 'react';
import Post from './Post/Post';

class Content extends React.Component {
  render() {
    return (
        <div className="col-12 content--container">
          {this.props.posts.map((post, index) => <Post key={index} post={post}/>)}
        </div>
    );
  }
}

export default Content;