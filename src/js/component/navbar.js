import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/130px-Star_wars2.svg.png" className="nav-logo" alt="logo" />
				</Link>
			<div className="ml-auto">
				<Link >
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
