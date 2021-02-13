import React from "react";
import { useLocation } from "react-router-dom";
import { restaurants } from "./restaurants";
import Header from "./Header";
import Footer from "./Footer";
const Restaurant = () => {
	let location = useLocation();
	var id = location.pathname.split("/")[2];

	console.log(location.pathname);
	console.log(id);
	// var id = 5;
	return (
		<div>
			<Header />
			<div className="row items">
				{restaurants.map((restaurant) => {
					if (restaurant.id == id) {
						return (
							<>
								<div key={restaurant.id} className="one-item">
									<img
										src={restaurant.photograph}
										alt="restaurant"
										className="restaurant-image"
									></img>
									<h3>{restaurant.name}</h3>
									<p>{restaurant.address}</p>
									<h4>{restaurant.cuisine_type}</h4>
								</div>

								<br></br>
								<div className="timings">
									<h2
										style={{
											color: "pink",
											marginLeft: "10px",
										}}
									>
										Working Hours
									</h2>
									<h4>Monday :{restaurant.operating_hours.Monday}</h4>
									<h4>Tuesday :{restaurant.operating_hours.Tuesday}</h4>
									<h4>Wednesday :{restaurant.operating_hours.Wednesday}</h4>
									<h4>Thursday :{restaurant.operating_hours.Thursday}</h4>
									<h4>Friday :{restaurant.operating_hours.Friday}</h4>
									<h4>Saturday :{restaurant.operating_hours.Saturday}</h4>
									<h4>Sunday :{restaurant.operating_hours.Sunday}</h4>
								</div>

								<div className="col">
									<h1
										style={{
											color: "pink",
											width: "400px",
										}}
									>
										Reviews
									</h1>
								</div>
								<div className="row">
									{restaurant.reviews.map((review) => {
										return (
											<>
												<div className="review">
													<div className="detail">
														<h4>Name:{review.name}</h4>
														<h4>Date:{review.date}</h4>
														<h4>Rating:{review.rating}</h4>
													</div>

													<div className="comments">
														<p>{review.comments}</p>
													</div>
												</div>
											</>
										);
									})}
								</div>
							</>
						);
					}
				})}
			</div>
			<Footer />
		</div>
	);
};

export default Restaurant;
