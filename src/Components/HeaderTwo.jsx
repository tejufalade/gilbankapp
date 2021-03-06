import React from "react";
import { Link } from "react-router-dom";

const HeaderTwo = () => {
	return (
		<div className="w-screen bg-[#E9EEF1] h-16 flex justify-between px-8 items-center border-b-4 sticky top-0 left-0 right-0 z-50 ">
			<div className="logo text-3xl">
				<Link to="/">GilBank</Link>
			</div>
			<nav className="w-1/3 relative px-4">
				<ul className="flex justify-between items-center">
					<li>
						<Link to="/">Search</Link>
					</li>
					<li>
						<Link to="/help">Help</Link>
					</li>
					<li>
						<Link to="/profile">
							Profile
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default HeaderTwo;
