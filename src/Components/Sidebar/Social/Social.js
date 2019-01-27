import React from 'react';

class Social extends React.Component {
  constructor(props){
    super(props);
    this.outlets = [
      {url: 'https://linkedin.com/in/lloan', class: 'fab fa-linkedin-in'},
      {url: 'https://stackoverflow.com/users/2424622/lloan-alas?tab=profile', class: 'fab fa-stack-overflow'},
      {url: 'http://github.com/lloan', class: 'fab fa-github-alt'},
    ]
  }

  render(){
    return(
        <nav className="social-links">
          {this.outlets.map((outlet, index) =>
                {
                return(
                    <li key={index}>
                      <a href={outlet.url}><i className={outlet.class}/></a>
                    </li>
                )}

            )}
        </nav>
    )
  }
}

export default Social;