import React from "react";
import {Link} from "react-router-dom";
import DeckService from "../services/DeckService";

class SearchComponent extends React.Component {

	state = {
		search: this.props.match.params.keyword,
		decks: []
	}

	componentDidMount() {
		this.search()
	}

	search() {
		DeckService.searchKeyword(this.state.search).then(
			decks => this.setState({decks: decks})
		)
	}

	render() {
		return (
			<div>
				<h2>Search for Decks</h2>
				<div className="form-inline">
					<input className="form-control" value={this.state.search} placeholder="Keyword"
								 onChange={(e) => this.setState({search: e.target.value})}/>
					<Link to={`/search/${this.state.search}`} className="btn btn-primary text-white"
								onClick={() => this.search()}>
						Search
					</Link>
				</div>
				<br/>
				<br/>
				<ul className="list-group">
					{
						this.state.decks.map(deck =>
							<li key={deck.id} className="list-group-item">
								<Link to={`/details/${deck.id}`}>
									{deck.name}
								</Link>
							</li>)
					}
				</ul>
			</div>

		)
	}
}

export default SearchComponent