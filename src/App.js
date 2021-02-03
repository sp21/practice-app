import './App.css';
import React from 'react';
import Product from './Product';
import axios from 'axios';
class App extends React.Component {
  constructor() {
    super();
    this.state = { products:[], isDisplay: false, selectedProduct: "", selectedPrice: "" };

  }

  componentDidMount() {
    axios.get("./product.json")
      .then((res) =>{  console.log("Aios");console.log(res);this.setState({ products: res.data}) })
      .catch((err) => { console.log(err); console.log("catch" ) });
  }


  buyProduct(name, price) {
    this.setState({isDisplay:true,selectedProduct:name,selectedPrice:price});
  }
  render() {
    console.log(this.props);
    return <React.Fragment>
      <div className="card-deck" >
        {this.state.products.map((data) => { return <Product key={data.ShelfName} ShelfName={data.ShelfName} Name={data.Name} Price={data.Price} buyProduct={(a, d) => this.buyProduct(a, d)} /> })}
      </div>
      {this.state.isDisplay ? <h1>You Have selected {this.state.selectedProduct} with the price {this.state.selectedPrice}</h1> : null}
    </React.Fragment>
  }

}

export default App;
