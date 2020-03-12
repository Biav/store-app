import React, { Component} from 'react';

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
	}

	handleInput(name, e) {
		this.setState({
			[name]: e.target.value
		})
	}

	render() {
		return(
			<>
				<div className="product">
					<form className="col-md-10">
						<div className="form-group">
							<label for="inputEmail3" className="col-sm-2 control-label">Produto</label>
							<div className="col-sm-10">
								<input type="text" className="form-control" name="productName" placeholder="Nome do Produto"
											 value={this.state.productName}
											 onChange={(e) => this.handleInput('productName', e)}/>
							</div>
						</div>
						<div className="form-inline col-md-10">
							<div className="form-group">
								<label for="exampleInputEmail3">Quantidade</label>
								<input type="number" className="form-control" name="productTotal" placeholder="Quantidade"
											 value={this.state.productTotal}
											 onChange={(e) => this.handleInput('productTotal', e)}/>
							</div>
							<div className="form-group">
								<label for="exampleInputPassword3">Preço</label>
								<input type="text" className="form-control" name="productPrice" placeholder="Preço"
											 value={this.state.productPrice}
											 onChange={(e) => this.handleInput('productPrice', e)}/>
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
								<input type="textarea" className="form-control" id="description" placeholder="Descrição do Produto"
											 value={this.state.productDescription}
											 onChange={(e) => this.handleInput('productDescription', e)}/>
							</div>
						</div>
						<div className="form-group">
							<div className="col-sm-offset-2 col-sm-10">
									<button type="submit" className="btn btn-primary" >Salvar</button>
							</div>
						</div>
					</form>
				</div>
			</>
		)
	}
}

export default ProductForm;