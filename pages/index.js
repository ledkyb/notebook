import React from 'react';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import '../src/resources/styles/styles.scss';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';

import Sidebar from '../src/Sidebar';
import Content from '../src/Components/Content/Content';

import Fetch from 'isomorphic-unfetch';
import axios from 'axios';

class Home extends React.Component {
  static async getInitialProps({req}) {
    const res = await Fetch(
        'https://wp.lloanalas.com/wp-json/ledkyb/api/posts?number=12'),
        data = await res.json();

    return req
        ? {posts: data}
        : {posts: []};
  }

  render() {
    return (
        <div className="container-fluid">
          <div className="row">
            <Sidebar/>

            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="col-12 top--container">
                <div className="top--content animated fadeInDown">
                  <div className="show-on-mobile close-mobile-menu">
                            <span onClick={() => {
                              console.log('inside onClick');
                              const mobileMenu = document.querySelector(
                                  '.top--container');
                              mobileMenu.style.left = '-100%';
                            }}>close</span>
                  </div>
                  <nav className="nav">
                    <li className="current"><a href="/">home</a>
                    </li>
                    <li><a href="/about">about</a>
                    </li>
                    <li><a href="/archives">archive</a>
                    </li>
                    <li><a href="/links">projects</a>
                    </li>
                  </nav>

                  <section className="search--container hide-on-mobile">

                    <div className="input-group mb-3 search--group">

                      <div className="input-group-prepend">
                        <button
                            className="input-group-text search--search-icon">
                          <i className="fas fa-search"/>
                        </button>
                      </div>

                      <input type="text"
                             className="form-control search--input hidden"
                             aria-label="search for specific articles"
                             style={{display: 'none'}}/>

                      <div className="input-group-append"
                           style={{display: 'none'}}>
                        <button className="input-group-text">search</button>
                      </div>

                    </div>

                  </section>
                </div>
              </div>

              <Content posts={this.props.posts}/>

            </div>
          </div>
        </div>
    );
  }

}

export default Home;