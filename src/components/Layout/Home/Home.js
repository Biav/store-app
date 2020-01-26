import React, { Component } from 'react';
import Menu from './../Menu/Menu';
import Banner from './../Banner/Banner';
import ListProducts from './../../Products/ListProducts/ListProducts';
import Footer from './../Footer/Footer';

class Home extends Component {
	render() {
		return(
			<>
				<Menu/>
				<Banner/>
				<ListProducts/>
				<Footer/>
			</>
		)
	}
}

export default Home;