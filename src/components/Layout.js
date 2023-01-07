import React, { Component } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet, Link } from "react-router-dom";
import "./layoutStyle.css";

function Layout({ childrend }) {
	return (
		<>
			<Header></Header>
			<Outlet />
			{/* {childrend} */}
			<Footer></Footer>
		</>
	);
}
export default Layout;
