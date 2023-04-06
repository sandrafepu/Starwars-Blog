import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJedi } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Dropdown from 'react-bootstrap/Dropdown'
import { Badge } from "react-bootstrap";
import { Context } from "../store/appContext";


export const Navbar = (props) => {

	const { store, actions } = useContext(Context)
	
	const dropdownFavorites = store.favorites.map((favorite, i) => {
		return(
		<Dropdown.Item key={i}>{favorite}<FontAwesomeIcon className="float-end" icon={faTrash} onClick={() => actions.deleteFavorites(i)}/></Dropdown.Item> 
		)
	})
	
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/130px-Star_wars2.svg.png" className="nav-logo" alt="logo" />
				</Link>
			<div className="ml-auto">
			<Dropdown>
				<Dropdown.Toggle variant="primary" id="dropdown-basic">
					Favorites<Badge bg="secondary">{store.favorites.length}</Badge>
				</Dropdown.Toggle>
				<Dropdown.Menu>
				{store.favorites.length === 0 ? <Dropdown.Item>None</Dropdown.Item> : dropdownFavorites} 
				</Dropdown.Menu>
			</Dropdown>
			</div>
		</nav>
	);
};

export default Navbar;
