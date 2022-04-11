import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="w-screen bg-[#E9EEF1] h-16 flex justify-between px-8 items-center border-b-4 sticky top-0 left-0 right-0 z-50 ">
			<div className="logo text-3xl">
				<Link to="/">GilBank</Link>
			</div>
			<nav className="w-1/2 relative">
				<ul className="flex justify-between items-center">
					<li>
						<Link to="/register">
							Register
						</Link>
					</li>
					<li>
						<Link to="/">Search</Link>
					</li>
					<li>
						<Link to="/help">Help</Link>
					</li>
					<li
						className="w-24 h-10 p-2 bg-[#4BBDFD] rounded-md text-white flex items-center justify-center font-semibold cursor-pointer hover:bg-[#01659D]"
						onClick={() => {
							setOpen(!open);
						}}>
						Log In
					</li>
				</ul>
				<div
					className={`absolute top-14 ${
						open
							? "right-0"
							: "right-[-1000px]"
					}`}>
					<Login />
				</div>
			</nav>
		</div>
	);
};

export default Header;
