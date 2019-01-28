import React from 'react';
import './Post.scss';

class Post extends React.Component {
  render() {
    return (
        <div className="content--content">
          <div className="post animated fadeInDown">
            <p className="post--title">
              <a href="#">{this.props.post.title}</a>
            </p>

            <div className="post--content" dangerouslySetInnerHTML={{__html: (this.props.post.excerpt)}} />

            <p className="post--footer">
              <i className="far fa-calendar-alt"/>
              <span className="date">{this.props.post.date}</span>
              {this.props.post.tags.length !== 0 && (
                  <i className="fa fa-tag"/>
              )}
              {this.props.post.tags.map((tag, index) =>
                  <a key={index} href="#" title={tag.name} className="tag">{tag.name}</a>)
              }

            </p>
          </div>
        </div>
    );
  }
}

export default Post;