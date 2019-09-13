import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
      headerInputVal: ""
    };
  }

  async componentDidUpdate() {
    const mlData = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${this.state.headerInputVal}`
    );
    const jsonData = await mlData.json();
    this.setState({
      products: jsonData.results
    });
  }

  handleClickCallback(e) {
    this.setState({
      headerInputVal: e
    });
  }

  filterProducts(e) {
    const inputValue = e.target.value;
    const filteredProducts = this.state.products.filter(elem => {
      const loweredElem = elem.title.toLowerCase();
      if (loweredElem.indexOf(inputValue) >= 0) {
        return loweredElem;
      }
    });

    this.setState({
      filteredProducts: filteredProducts
    });
  }

  render() {
    return (
      <div>
        <Header buttonClickCallback={val => this.handleClickCallback(val)} />
        <div className="autocomplete-container">
          <input
            placeholder="Filtrar por nombre"
            onChange={e => {
              this.filterProducts(e);
            }}
          />
        </div>
        <div className="cards-container">
          {this.state.filteredProducts.length > 0
            ? this.state.filteredProducts.map((elem, key) => {
                return (
                  <Card
                    title={elem.title}
                    img={elem.thumbnail}
                    alt={elem.id}
                    key={key}
                  />
                );
              })
            : this.state.products.map((elem, key) => {
                return (
                  <Card
                    title={elem.title}
                    img={elem.thumbnail}
                    alt={elem.id}
                    key={key}
                  />
                );
              })}
        </div>
      </div>
    );
  }
}

export default App;
