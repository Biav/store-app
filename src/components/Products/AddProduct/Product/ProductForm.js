import React, { Component} from 'react';
import SimpleReactValidator from 'simple-react-validator';

class ProductForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
				productName: '',
				productTotal: 0,
				productPrice: 0,
				productCategory: '',
				productDescription: ''
		}

		this.validator = new SimpleReactValidator({autoForceUpdate: this});
	}

	handleInput(name, e) {
		this.setState({
			[name]: e.target.value
		})
	}

	addProduct(event) {
		event.preventDefault();

		if (this.validator.allValid()) {
			console.log("test")
		} else {
			this.validator.showMessages();
		}
	}

	render() {
		return(
			<>
				<div className="product">
					<form className="col-md-10">
						<div className="form-group">
							<label for="inputEmail3" className="col-sm-2 control-label">Produto</label>
							<div className="col-sm-10">
								<input type="text" 
									   className="form-control" 
									   name="productName" 
									   placeholder="Nome do Produto"
									   value={this.state.productName}
									   onChange={(e) => this.handleInput('productName', e)}
									   onBlur={() => this.validator.showMessageFor('productName')}/>
								
								{this.validator.message('productName', this.state.productName, 'required')}

							</div>
						</div>
						<div className="form-inline col-md-10">
							<div className="form-group">
								<label for="exampleInputEmail3">Quantidade</label>
								<input type="number" 
											 className="form-control" 
											 name="productTotal" 
											 placeholder="Quantidade"
											 value={this.state.productTotal}
											 onChange={(e) => this.handleInput('productTotal', e)}
											 onBlur={() => this.validator.showMessageFor('productTotal')}/>
								
								{this.validator.message('productTotal', this.state.productTotal, 'required|numeric')}

							</div>
							<div className="form-group">
								<label for="exampleInputPassword3">Preço</label>
								<input type="text" 
											 className="form-control" 
											 name="productPrice" 
											 placeholder="Preço"
											 value={this.state.productPrice}
											 onChange={(e) => this.handleInput('productPrice', e)}
											 onBlur={() => this.validator.showMessageFor('productPrice')}/>
								
								{this.validator.message('productPrice', this.state.productPrice, 'required')}

							</div>
							<div className="form-group">
								<label for="exampleInputPassword3">Categoria</label>
								<select className="form-control" id="category" value={this.state.productCategory}
												onChange={(e) => this.handleInput('productCategory', e)}>
										<option>Mulheres</option>
										<option>Homens</option>
								</select>
							</div>
						</div>
						<div className="form-group">
							<label for="inputPassword3" className="col-sm-2 control-label">Descrição</label>
							<div className="col-sm-10">
								<textarea type="textarea" 
											 className="form-control" 
											 id="description" 
											 rows="3"
											 placeholder="Descrição do Produto"
											 value={this.state.productDescription}
											 onChange={(e) => this.handleInput('productDescription', e)}
											 onBlur={() => this.validator.showMessageFor('productDescription')}/>

									{this.validator.message('productDescription', this.state.productDescription, 'required')}

							</div>
						</div>
						<div className="form-group">
							<div className="col-sm-offset-2 col-sm-10">
								<button type="submit" 
										className="btn btn-primary" 
										onClick={(e) => this.addProduct(e)}>
									Salvar
								</button>
							</div>
						</div>
					</form>
				</div>
			</>
		)
	}
}

export default ProductForm;