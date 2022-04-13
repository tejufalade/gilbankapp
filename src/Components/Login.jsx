import React, { useState, useContext, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Login = () => {
	const { setUser, setIsAuth } = useContext(AppContext);
	const [visible] = useState(true);
	const [accountNumber, setAccountNumber] = useState("");
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [pin, setPin] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		let userData = {
			account_number: accountNumber,
			pin,
		};
		e.preventDefault();

		const authUser = localStorage.getItem(userData.account_number);
		const loggedUser = JSON.parse(authUser);
		if (
			userData.account_number === loggedUser.account_number &&
			userData.pin === loggedUser.pin
		) {
			setUser(loggedUser);
			setIsAuth(true);
			navigate("/dashboard");
		} else if (!loggedUser || loggedUser === null) {
			setError(true);
			setErrorMessage("User not Found");
		} else {
			setError(true);
			setErrorMessage("Incorrect Pin");
		}
	};
	return (
		<>
			<div
				className={`h-[700px] w-[600px] bg-white py-8 px-6 ${
					visible ? "" : "right-[-1000px]"
				}`}>
				<div className="flex justify-between items-center text-xl">
					<p>Log In</p>
					{/* <i className="fa-solid fa-xmark" onClick={() => setVisible(!visible)}></i> */}
				</div>

				<form className="mt-8" onSubmit={handleSubmit}>
					{error && (
						<span className="text-red-600 text-[14px]">
							!!! {errorMessage}
						</span>
					)}
					<div className={`${error && "mt-4"}`}>
						<label htmlFor="accountNumber">
							Account number
						</label>
						<input
							type="text"
							id="accountNumber"
							name="account_number"
							className="px-2 py-4 border block h-10 w-[424px] mt-2 bg-stone-200 rounded-md"
							onChange={(e) => {
								setAccountNumber(
									e.target
										.value
								);
								setError(false);
							}}
							required
						/>
					</div>
					<div className="mb-4 mt-6">
						<label htmlFor="pin">Pin</label>
						<input
							type="password"
							id="pin"
							name="pin"
							className="px-2 py-4 border block h-10 w-[424px] mt-2 bg-stone-200 rounded-md"
							onChange={(e) => {
								setPin(
									e.target
										.value
								);
								setError(false);
							}}
							required
						/>
					</div>
					<a href="/">Forgot Pin?</a>
					<button
						type="submit"
						className="bg-skyblue text-white w-32 h-12 flex justify-center items-center rounded-md mt-4 mb-8">
						Log In
					</button>
					<p>
						Do not have access yet?
						<Link
							to="/register"
							className="text-skyblue">
							{" "}
							Register
						</Link>{" "}
						now
					</p>
				</form>
			</div>
		</>
	);
};

export default Login;
