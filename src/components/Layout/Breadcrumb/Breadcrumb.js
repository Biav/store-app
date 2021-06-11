import React, { Component } from 'react';

class Breadcrumb extends Component {
    render() {
        return(
            <>
                <section className="banner_area">
                    <div className="banner_inner d-flex align-items-center">
                        <div className="container">
                        <div className="banner_content d-md-flex justify-content-between align-items-center">
                            <div className="mb-3 mb-md-0">
                            <h2> { this.props.name } </h2>
                            <p> { this.props.description }</p>
                            </div>
                            <div className="page_link">
                            <a href="index.html">Home</a>
                            <a href="single-product.html">{ this.props.name }</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Breadcrumb;