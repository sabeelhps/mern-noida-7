import { useState } from "react";

const Product = (props) => {

    const [productName, setProductName] = useState(props.name);

    let name = props.name;
    const productClickHandler = () => {
        // name = 'Anonymous';
        // console.log(name);
        setProductName('Anonymous....');
    }

    return (
      <figure onClick={productClickHandler} style={{width:'400px', border:'3px solid #ccc', borderRadius:'8px', padding:'1rem'}}>
          <img style={{width:'100%'}} src="https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHx8MA%3D%3D" alt="product-image"/>
          <figcaption>
                <h2>{ productName }</h2>
                <h2>Price: $100</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, consequatur explicabo! Fugit molestias dolorem similique pariatur consectetur nam blanditiis</p>
          </figcaption>
      </figure>
  )
}

export default Product;