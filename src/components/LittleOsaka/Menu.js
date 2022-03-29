import React from 'react'
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Drink from "./Drink";
import Appetizer from "./Appetizer";
import Entree from "./Entree";
import Dessert from "./Dessert";
import Footer from "./Footer";
import PrintComponent from './PrintComponent';


function Menu() {
    return (
        <div className="bg-stone-900 text-white h-full">
            <Navbar transparent />
            <Header />
            <About />
            <Drink />
            <Appetizer />
            <Entree />
            <Dessert />
            <Footer />
            <PrintComponent />
        </div>
    )
}

export default Menu