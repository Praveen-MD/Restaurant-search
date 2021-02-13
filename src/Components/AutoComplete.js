import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
// import "./styles.css";
import PropTypes from "prop-types";
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
class Autocomplete extends Component {
	redirectToHome = () => {
		const { history } = this.props;
		if (history) history.push("/home");
	};
	static propTypes = {
		suggestions: PropTypes.instanceOf(Array),
	};

	static defaultProps = {
		suggestions: [],
	};

	constructor(props) {
		super(props);
		this.state = {
			activeSuggestion: 0,
			filteredSuggestions: [],
			showSuggestions: false,
			userInput: "",
		};
	}
	getData = () => {};
	onChange = (e) => {
		const { suggestions } = this.props;
		const userInput = e.currentTarget.value;

		const filteredSuggestions = suggestions.filter(
			(suggestion) =>
				suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
		);

		this.setState({
			activeSuggestion: 0,
			filteredSuggestions,
			showSuggestions: true,
			userInput: e.currentTarget.value,
		});
	};
	onClick = (e) => {
		console.log("this.state.userInput");

		this.setState({
			activeSuggestion: 0,
			filteredSuggestions: [],
			showSuggestions: false,
			userInput: e.currentTarget.innerText,
		});

		var id = data.indexOf(e.currentTarget.innerText);
		id = id + 1;
		if (id > 9) id = 9;
		window.location = `/Restaurant/${id}`;
	};

	render() {
		const {
			onChange,
			onClick,
			submitData,
			state: {
				activeSuggestion,
				filteredSuggestions,
				showSuggestions,
				userInput,
			},
		} = this;

		let suggestionsListComponent;
		if (showSuggestions && userInput) {
			if (filteredSuggestions.length) {
				suggestionsListComponent = (
					<ul className="suggestions">
						{filteredSuggestions.map((suggestion, index) => {
							let className;

							// Flag the active suggestion with a class
							if (index === activeSuggestion) {
								className = "suggestion-active";
							}
							return (
								<li className={className} key={suggestion} onClick={onClick}>
									{suggestion}
								</li>
							);
						})}
					</ul>
				);
			} else {
				suggestionsListComponent = (
					<div className="no-suggestions">
						<em>No suggestions available.</em>
					</div>
				);
			}
		}
		return (
			<Fragment>
				<input
					type="text"
					onChange={onChange}
					value={userInput}
					placeholder="Search"
				/>

				{suggestionsListComponent}
			</Fragment>
		);
	}
}

export default Autocomplete;
