import React from "react";
import UseFetch from "../helpers/UseFetch";
import Card from "../UI/Card";
import Header from "./Header";

const Home = () => {

    const data = UseFetch('https://dummyjson.com/products/');

    const userData = data.products;

    return (
        <div className="container-fluid" style={{backgroundColor:'#DAE3E7'}} >
            <Header/>
            <div className="row d-flex m-4 ">
            {
                userData && userData.map((item, id) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        cartItem = {item}
                    />
                ))
                }
            </div>
            
        </div>
    )
}

export default Home;