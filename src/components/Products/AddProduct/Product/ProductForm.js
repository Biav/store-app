import React, { Component} from 'react';

class ProductForm extends Component {
    render() {
        return(
            <>
                <div className="product">
                    <form className="col-md-10">
                        <div className="form-group">
                            <label for="inputEmail3" className="col-sm-2 control-label">Produto</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="product" placeholder="Nome do Produto"/>
                            </div>
                        </div>
                        <div className="form-inline col-md-10">
                            <div className="form-group">
                                <label for="exampleInputEmail3">Quantidade</label>
                                <input type="number" className="form-control" id="quantity" placeholder="Quantidade"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword3">Preço</label>
                                <input type="text" className="form-control" id="price" placeholder="Preço"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword3">Categoria</label>
                                <select className="form-control" id="category">
                                    <option>Mulheres</option>
                                    <option>Homens</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputPassword3" className="col-sm-2 control-label">Descrição</label>
                            <div className="col-sm-10">
                            <input type="textarea" className="form-control" id="description" placeholder="Descrição do Produto"/>
                        </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-primary">Salvar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default ProductForm;