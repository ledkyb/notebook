import React from "react";
import './App.scss';

class App extends React.Component {
    constructor(){
        super();
    }
     
   render(){
       return(
        <div className="container-fluid">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 sidebar--container">

                <div className="show-on-mobile open-mobile-menu">
                <span onClick={() => {
                              console.log('inside');
                              const mobileMenu = document.querySelector('.top--container');
                              mobileMenu.style.left = '0';
                            }}>menu</span>
                </div>
                <div className="sidebar--content animated fadeInDown">
                    <div className="sidebar--wrapper">

                        <section className="sidebar--information">
                            <img className="sidebar--logo"
                                 src='/public/images/logo.svg' />
                            <p className="sidebar--title"><a href="/">lloan alas</a></p>
                            <p className="sidebar--description hide-on-mobile">a record of my<br/>programming adventures</p>
                        </section>

                        <nav className="social-links">
                            <li><a href="https://benwong.cn/index.xml"><i className="fa fa-rss"></i></a>
                            </li>
                            <li><a href="http://weibo.com/ben0036"><i className="fab fa-stack-overflow"></i></a>
                            </li>
                            <li><a href="http://github.com/Ben02"><i className="fab fa-github-alt"></i></a>
                            </li>
                        </nav>

                        <footer className="footer hide-on-mobile">
                            <a target="_blank" href="/">powered by wordpress</a>
                        </footer>
                    </div>
                </div>
            </div>

            <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="col-12 top--container">
                    <div className="top--content animated fadeInDown">
                        <div className="show-on-mobile close-mobile-menu">
                            <span onClick="(() => {
                              console.log('inside onClick');
                              const mobileMenu = document.querySelector('.top--container');
                              mobileMenu.style.left = '-100%';
                            })()">close</span>
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
                                    <button className="input-group-text search--search-icon">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>

                                <input type="text" className="form-control search--input hidden"
                                       aria-label="search for specific articles" style="display: none;" />

                                <div className="input-group-append" style="display: none;">
                                    <button className="input-group-text">search</button>
                                </div>

                            </div>

                        </section>
                    </div>
                </div>
                <div className="col-12 content--container">

                    <div className="content--content">
						 <div className="post animated fadeInDown">
                                    <p className="post--title">
                                        <a href="##">test</a>
                                    </p>

                                    <div className="post--content">
                                        content
                                    </div>

                                    <p className="post--footer">
                                        <i className="far fa-calendar-alt"></i><span
                                                className="date">11/11/1111</span>
                                        <i className="fa fa-tag"></i>
                                        <a href="/tags/666/" title="666" className="tag">react tag</a>
                                    </p>
                                </div>
                    </div>
                </div>
            </div>
        </div>
       </div> 
       );
   }
}


export default App;