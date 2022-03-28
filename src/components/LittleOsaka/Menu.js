import React from 'react'
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Drink from "./Drink";
import Appitizer from "./Appitizer";
import Entree from "./Entree";
import Dessert from "./Dessert";
import Footer from "./Footer";


function Menu() {
    return (
        <div>
            <Navbar transparent />
            <Header />
            <About />
            <Drink />
            <Appitizer />
            <Entree />
            <Dessert />
            <Footer />
        </div>
    )
}

export default Menu