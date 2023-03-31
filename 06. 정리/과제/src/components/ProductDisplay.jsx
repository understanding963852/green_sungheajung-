const ProductDisplay = (props) => {
    return (
        <div>
            <h3>{props.detail.name}</h3>
            
            <ul>
                <li> {props.detail.color} </li>
                <li> {props.detail.stock} </li>
            </ul>
        </div>
    );
}

export default ProductDisplay;