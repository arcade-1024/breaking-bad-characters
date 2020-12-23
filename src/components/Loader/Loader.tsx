import React from "react";
import loaderImg from "../../assets/PngItem_1905885.png";
import "./loader.css";
const Loader = () => {
	return (
		<div className="h-screen w-full flex flex-col justify-center items-center">
			<img className="h-48 w-48" src={loaderImg} alt="" />
			<div className="lds-hourglass mt-3"></div>
		</div>
	);
};

export default Loader;
