import React from 'react';
import MenuButton from './Components/Sidebar/Menu/Button';
import Content from './Components/Sidebar/Content/Content';
import Social from './Components/Sidebar/Social/Social';

class Sidebar extends React.Component {
  render(){
    return(
        <div className="col-lg-4 col-md-4 col-sm-12 sidebar--container">

          <MenuButton/>

          <div className="sidebar--content animated fadeInDown">
            <div className="sidebar--wrapper">

              <Content/>

              <Social/>

              <footer className="footer hide-on-mobile">
                <a target="_blank" href="/">powered by wordpress</a>
              </footer>
            </div>
          </div>
        </div>
    );
  }
}

export default Sidebar;