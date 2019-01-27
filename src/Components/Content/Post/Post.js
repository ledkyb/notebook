import React from 'react';

class Post extends React.Component{
  render(){
    return(
        <div className="content--content">
          <div className="post animated fadeInDown">
            <p className="post--title">
              <a href="#">{this.props.title}</a>
            </p>

            <div className="post--content">
              {this.props.content}
            </div>

            <p className="post--footer">
              <i className="far fa-calendar-alt"/>
              <span className="date">{this.props.date}</span>
              <i className="fa fa-tag"/>
              <a href="#" title="666" className="tag">{this.props.tags}</a>
            </p>
          </div>
        </div>
    )
  }
}

export default Post;