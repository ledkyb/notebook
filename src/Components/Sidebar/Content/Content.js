import React from 'react';

class Content extends React.Component {
  constructor(props){
    super(props);
    this.descriptions = [
        'Full-stack Developer',
        'PHP Developer',
        'WordPress Developer',
        'Back-end Developer',
        'Front-end Developer',
    ];
    this.state = {
      description: this.getDescription()
    };
  }

  componentDidMount(){
    this.updateDescription();
  }

  getDescription(){
    return this.descriptions[Math.floor((Math.random() * this.descriptions.length))];
  }

  updateDescription(){
    setInterval(() => {
      console.log('within interval');
      this.setState({
        description: this.getDescription()
      });
    }, 7000);
  }

  render(){
    return(
        <section className="sidebar--information">
          <img className="sidebar--logo" src={require('../../../resources/images/logo.svg')} />
          <p className="sidebar--title"><a href="/">lloan alas</a></p>
          <p className="sidebar--description hide-on-mobile">{this.state.description}</p>
        </section>
    );
  }
}

export default Content;