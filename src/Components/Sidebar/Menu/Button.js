import React from 'react';

class MenuButton extends React.Component {
  reset(){
    const button = document.querySelector('.top--container');
    button.style.left = '0';
  }
  render(){
    return(
        <div className="show-on-mobile open-mobile-menu">
                <span onClick={this.reset}>menu</span>
        </div>
    );
  }
}

export default MenuButton;