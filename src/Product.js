import React from 'react';
class Product extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }
    
    render() {
        console.log(this.props);
        return <React.Fragment>
            <div className="card">
                <h1 className="card-header">{this.props.ShelfName}</h1>
                <input className="form-control" defaultValue={this.props.Name}/>
                <input className="form-control" defaultValue={this.props.Price}/>
                <button className="btn" onClick={()=>this.props.buyProduct(this.props.Name,this.props.Price)}>Buy</button>

            </div>
        </React.Fragment>

    }

}
export default Product;