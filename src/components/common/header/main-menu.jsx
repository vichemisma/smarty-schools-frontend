"use client"
import React from "react";
import { Nav } from "react-bootstrap";
import menuItems from "@/helpers/data/main-menu.json";
import Link from "next/link";

const MainMenu = (props) => {
	return (
		<Nav {...props}>
			{menuItems.map((item) => (
				<Nav.Link href={item.link} key={item.link} as={Link}>
					{item.title}
				</Nav.Link>
			))}
		</Nav>
	);
};

export default MainMenu;
