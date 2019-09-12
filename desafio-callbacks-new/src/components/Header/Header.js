import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      inputVal: ""
    };
  }

  handleChange(e) {
    this.setState({
      inputVal: e.target.value
    });
  }

  handleKeyPress(e) {
    let stateVal = this.state.inputVal;
    if (e.key === "Enter") {
      this.props.buttonClickCallback(stateVal);
    }
  }

  handleClick() {
    let stateVal = this.state.inputVal;
    this.props.buttonClickCallback(stateVal);
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navigation-container">
          <div className="nav-wrapper">
            <div className="brand-title">
              <h4>
                <a href="/">Buscador de api mercado libre</a>
              </h4>
            </div>
            <div className="input-container">
              <input
                onChange={e => {
                  this.handleChange(e);
                }}
                onKeyPress={e => {
                  this.handleKeyPress(e);
                }}
                placeholder="Buscar productos, servicios, etc..."
              />
              <button onClick={val => this.handleClick(val)}>Buscar</button>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
