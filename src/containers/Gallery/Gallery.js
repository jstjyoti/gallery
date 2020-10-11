import React, { Component } from 'react';
import axios from 'axios';

import './Gallery.css';
import ImgList from '../../components/GalleryImage/ImgList';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import SearchForm from '../../components/Search/Search';
import Spinner from '../../components/UI/Spinner/Spinner';
import Toolbar from '../../components/UI/Toolbar/Toolbar';

class Gallery extends Component {
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
				`https://api.unsplash.com/search/photos/?page=1&per_page=18&query=${query}&client_id=tuxLMZ3ZoydOfuVl9hjZFXqWjiStx91WADRWZgPtYqg`
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
				<Toolbar toggledrawer={this.sideDrawerHandler}></Toolbar>
				<div className="main-header">
					
					<div className="inner-header">
						<h3>Look for themed photographs</h3>
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

export default withErrorHandler(Gallery, axios)