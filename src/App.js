import React, { Component } from "react";
import "./App.css";
import HomePage from "./views/home/HomePage";
import TopHeader from "./components/header/TopHeader";
import Aside from "./components/blabla/Aside";
import BoxList from "./components/blabla/BoxList";
import Footer from "./components/footer/Footer";
import Layout from "./components/Layout";
import {  Routes, Switch, Route, Link } from "react-router-dom";
import Contact from "./components/nav/Contact";
import About from "./components/nav/About";
import Product from "./components/nav/Product";
import Cart from "./components/nav/Cart";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="contact" element={<Contact />} />
					<Route path="about" element={<About />} />
					<Route path="product" element={<Product />} />
					<Route path="Cart" element={<Cart />} />
				</Route>
			</Routes>

		</>
	);
}

export default App;
