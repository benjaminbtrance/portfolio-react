import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container,
} from 'reactstrap';

const ProfolioNav = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<Navbar className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
			<Container>
				<NavbarBrand className="logo">BBT</NavbarBrand>
				<NavbarToggler className="hamburger" onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ms-auto" navbar>
						<NavItem className="active">
							<NavLink href="#page-top">Home</NavLink>
						</NavItem>
						<NavItem className="active">
							<NavLink href="#about-me">About Me</NavLink>
						</NavItem>
						<NavItem className="active">
							<NavLink href="https://drive.google.com/file/d/18G9c9-1q6elp-J_LYm6fZHo9_KC1Msq3/view?usp=sharing">
								Resume
							</NavLink>
						</NavItem>
						<NavItem className="active">
							<NavLink href="#myPortfolioList">Portfolio</NavLink>
						</NavItem>
						<NavItem className="active">
							<NavLink href="#contact">Contacts</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Container>
		</Navbar>
	);
};

export default ProfolioNav;
