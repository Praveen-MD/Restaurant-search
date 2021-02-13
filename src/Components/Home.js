import React from "react";
import { useHistory } from "react-router-dom";
import { restaurants } from "./restaurants";
import Autocomplete from "./AutoComplete";
import Header from "./Header";
import Footer from "./Footer";
const data = [
	"Mission Chinese Food",
	"Emily",
	"Kang Ho Dong Baekjeong",
	"Katz's Delicatessen",
	"Roberta's Pizza",
	"Hometown BBQ",
	"Superiority Burger",
	"The Dutch",
	"Mu Ramen",
	"Casa Enrique",
];
const Home = () => {
	let history = useHistory();
	// var navigateUrl = " ";
	function handleClick(id) {
		var navigateUrl = `/Restaurant/${id}`;
		history.push(navigateUrl);
		// history.push("/Restaurant");
	}
	return (
		<div className="container-fluid">
			<Header />
			<Autocomplete suggestions={data} />
			<div className="row items">
				{restaurants.map((restaurant) => {
					return (
						<div
							key={restaurant.id}
							className="item"
							onClick={() => handleClick(restaurant.id)}
						>
							<img src={restaurant.photograph} alt="restaurant "></img>
							<h3>{restaurant.name}</h3>
						</div>
					);
				})}
			</div>
			<Footer />
		</div>
	);
};

export default Home;
