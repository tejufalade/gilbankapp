import React, { useState, useContext, useEffect } from "react";
import MainLayout from "../Layout/MainLayout";
import check from "../Images/check.png";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Registration = ({ auth }) => {
	const { setUser } = useContext(AppContext);
	const [isRegistered, setIsRegistered] = useState(false);
	const [firstName, setFirstname] = useState("");
	const [lastName, setLastname] = useState("");
	const [accountNumber, setAccountNumber] = useState("");
	const [pin, setPin] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			if (isRegistered) {
				setIsRegistered(false);
			}
		}, 3000);
	}, [isRegistered]);

	const handleSubmit = (e) => {
		let userData = {
			userName: `${firstName} ${lastName}`,
			firstName,
			lastName,
			pin: pin,
			account_number: accountNumber,
		};
		e.preventDefault();
		setUser(userData);

		localStorage.setItem(
			userData.account_number,
			JSON.stringify(userData)
		);
		auth(true);
		setIsRegistered(true);
		navigate("/dashboard");
	};

	return (
		<MainLayout>
			{isRegistered ? (
				<img src={check} alt="" />
			) : (
				<div className="flex flex-col items-center content-center px-8 h-[90vh] relative mb-8">
					<div className="leading-10 mt-8">
						<h1 className="text-3xl font-semibold text-navyblue">
							Register a new account
						</h1>
						<h6 className="text-ml mt-2 mb-4 text-center">
							Fill out the form to get
							started.
						</h6>
					</div>

					<form
						className=""
						onSubmit={handleSubmit}>
						<div>
							<label htmlFor="firstName">
								First name
							</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								className="px-2 py-4 border block h-10 w-[424px] mt-2 bg-stone-200 rounded-md"
								onChange={(e) =>
									setFirstname(
										e
											.target
											.value
									)
								}
								required
							/>
						</div>

						<div className="mt-8">
							<label htmlFor="lastName">
								Last name
							</label>
							<input
								type="text"
								id="lastName"
								name="lastName"
								onChange={(e) =>
									setLastname(
										e
											.target
											.value
									)
								}
								className="px-2 py-4 border block h-10 w-[424px] mt-2 bg-stone-200 rounded-md"
								required
							/>

							<div className="mt-8">
								<label htmlFor="accountNumber">
									Account
									Number
								</label>
								<input
									type="text"
									id="accountNumber"
									name="account_number"
									onChange={(
										e
									) =>
										setAccountNumber(
											e
												.target
												.value
										)
									}
									className="px-2 py-4 border block h-10 w-[424px] mt-2 bg-stone-200 rounded-md"
									required
								/>

								<div className="mt-8">
									<label htmlFor="pin">
										Pin
										(six-digit)
									</label>
									<input
										type="password"
										id="transaction_pin"
										name="pin"
										onChange={(
											e
										) =>
											setPin(
												e
													.target
													.value
											)
										}
										className="px-2 py-4 border block h-10 w-[424px] mt-2 bg-stone-200 rounded-md"
										required
									/>
								</div>
							</div>

							<button
								type="submit"
								className="bg-skyblue text-white w-32 h-12 flex justify-center items-center rounded-md mt-4 mb-8">
								Resgister
							</button>
							<p>
								Already have an
								account?{" "}
								<a
									href="/"
									className="text-skyblue">
									Log In
									{
										""
									}{" "}
								</a>{" "}
							</p>
						</div>
					</form>
				</div>
			)}
		</MainLayout>
	);
};

export default Registration;
