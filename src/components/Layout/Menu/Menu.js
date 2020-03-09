import React, { Component } from 'react';
import MenuItem from './MenuItem';
import './Menu.scss';
import { connect } from 'react-redux';

class Menu extends Component {

	render() {
		let menuOptions = [
			{
				label: 'Home', 
				link: '/'
			},
			{
				label: 'Homens',
				link: '/homens'
			},
			{
				label: 'Mulheres',
				link: '/mulheres'
			},
			{
				label: 'Contato',
				link: '/contato'
			}
		];

		if(this.props.token) {
			menuOptions.push({
				label: this.props.name,
				link: '#'
			},{
				label: 'Sair',
				link: '/logout'
			})
		} else {
			menuOptions.push({
				label: 'Login',
				link: '/login'
			})
		}

		const menu = Object.keys(menuOptions).map((index) => {
			return (
				<MenuItem label={menuOptions[index].label} link={menuOptions[index].link} />
			)
		});

		return(
			<div>
				<header className="header_area">
					<div className="main_menu">
						<div className="container">
							<nav className="navbar navbar-expand-lg navbar-light w-100">
								<a className="navbar-brand logo_h" href="/">
									<img src="img/logo-ve-small.png" alt="" />
								</a>
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
									aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
								<div className="collapse navbar-collapse offset w-100" id="navbarSupportedContent">
									<div className="row w-100 mr-0">
										<div className="col-lg-7 pr-0">
											<ul className="nav navbar-nav center_nav pull-right">
												{menu}
											</ul>
										</div>
									</div>
								</div>
							</nav>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		name: state.loginUser.name,
		token: state.loginUser.token
	}
}

export default connect(mapStateToProps, null)(Menu);