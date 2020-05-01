import React, { Component } from 'react';
import axios from 'axios';

import '../../App.css';
import ImgList from '../../components/GalleryImage/ImgList';
import SearchForm from '../../components/Search/Search';
import Spinner from '../../components/UI/Spinner/Spinner';

export default class Gallery extends Component {
	constructor() {
		super();
		this.state = {
			imgs: [],
      loadingState: true,
      error: false
    };
	}
  
	componentDidMount() {
		this.performSearch();
	}

	performSearch = (query = 'night') => {
		axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=12&query=${query}&client_id=tuxLMZ3ZoydOfuVl9hjZFXqWjiStx91WADRWZgPtYqg`
			)
			.then(data => {
				this.setState({ imgs: data.data.results, loadingState: false });
			})
			.catch(err => {
				this.setState({error: true})
			});
	};

	render() {
		return (
			<div>
				<div className="main-header">
					<div className="inner">
						<h1 className="main-title">MyGallery</h1>
						<SearchForm onSearch={this.performSearch} />
					</div>
				</div>
				<div className="main-content">
					{this.state.loadingState
						? <Spinner></Spinner>
						: <ImgList data={this.state.imgs} />}
				</div>
			</div>
		);
	}
}
