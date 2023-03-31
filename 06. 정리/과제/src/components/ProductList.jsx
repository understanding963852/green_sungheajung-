import { useState } from "react";
import ProductDisplay from "./ProductDisplay";


const ProductList = () => {
    const [items, setItems] = useState([
        { id : 1, name : '모자', color: "white", stock : 3 },
        { id : 2, name : '양말', color: "red", stock : 5 },
        { id : 3, name : '신발', color: "black", stock : 3 }
    ]);
    const [wish, setWish] = useState(0);
    
    return (
        <div>  
            <p>장바구니 : {wish}</p> 
            {
            items.map((item)=> (
                <div  key={item.id}>
                    <ProductDisplay detail={item} />
                    <button onClick={ ()=> {
                        setItems(items.map(i=>i.id === item.id ? {...i , stock: item.stock-1 } : i ));
                        setWish(wish+1)
                        }}
                    >추가</button>
                </div>
                ))}
        </div>
    );
}

export default ProductList;