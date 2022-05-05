import React, { Component } from 'react'
import ReusableCompo from './ReusableCompo';

export default class compo extends Component {
  render() {
    return (
      <div>
          <div className="col-md-6 col-lg-4 col-xl-3">
								<div id="product-1" className="single-product">
										<div className="part-1">
												<ul>
														<li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
														<li><a href="#"><i className="fas fa-heart"></i></a></li>
														<li><a href="#"><i className="fas fa-plus"></i></a></li>
														<li><a href="#"><i className="fas fa-expand"></i></a></li>
												</ul>
										</div>
										<div className="part-2">
												<h3 className="product-title">Here Product Title</h3>
												<h4 className="product-old-price">$79.99</h4>
												<h4 className="product-price">$49.99</h4>
										</div>
								</div>
						</div>
						
      </div>
    )
  }
}
