import React from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import App from "../components/App";

const navbar = <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
	<a className="navbar-brand" href="#">The<font size="1">30days</font>Challenge</a>
	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
	</button>

	<div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
		<ul className="navbar-nav">
			<li className="nav-item active">
				<a className="nav-link" href="/">Login <span className="sr-only">(current)</span></a>
			</li>
			<li className="nav-item active">
				<a className="nav-link" href="/">Signup</a>
			</li>
		</ul>
	</div>
</nav>;

document.addEventListener("DOMContentLoaded", () => {
  render(
    navbar,
    document.body.appendChild(document.createElement("div"))
  );
});
