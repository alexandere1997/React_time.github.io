import React, { Component } from "react";

import '../styles/App.css';

class Button extends Component {
  constructor(props) {
    super(props)
    this.myClick = this.myClick.bind(this);
  }

  myClick() {
    document.getElementsByClassName('wrapper')[0].style.backgroundColor = "#F9F5A6ff";
  }

  render(){
    return (
      <button onClick={this.myClick} className="clicker">Изменить дизайн</button>
    )
  }
}


export default Button;