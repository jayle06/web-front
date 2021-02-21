import React from 'react';
import banner from '../images/banner-sp.jpg';
import '../css/Home.css';
import Product from './Product.js';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src={banner} alt="banner"/>
            <div className="home__row">
                <Product 
                    id = {123}
                    title = "abc"
                    image = "https://cf.shopee.vn/file/438e5e3f7f38759b4a1e06a1e926a83f"
                    price = {111}
                    rating = {5}
                />
                <Product 
                    id = {123}
                    title = "abc"
                    image = "https://cf.shopee.vn/file/438e5e3f7f38759b4a1e06a1e926a83f"
                    price = {111}
                    rating = {5}
                />
            </div>
            <div className="home__row">
                <Product 
                    id = {123}
                    title = "abc"
                    image = "https://cf.shopee.vn/file/438e5e3f7f38759b4a1e06a1e926a83f"
                    price = {111}
                    rating = {5}
                />
                <Product 
                    id = {123}
                    title = "abc"
                    image = "https://cf.shopee.vn/file/438e5e3f7f38759b4a1e06a1e926a83f"
                    price = {111}
                    rating = {5}
                />
                <Product 
                    id = {123}
                    title = "abc"
                    image = "https://cf.shopee.vn/file/438e5e3f7f38759b4a1e06a1e926a83f"
                    price = {111}
                    rating = {5}
                />
            </div>
            <div className="home__row">
                <Product 
                    id = {123}
                    title = "abc"
                    image = "https://cf.shopee.vn/file/438e5e3f7f38759b4a1e06a1e926a83f"
                    price = {111}
                    rating = {5}
                />
            </div>
        </div>
    )
}

export default Home
