import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";

const Help = () => {
	const { isAuth } = useContext(AppContext);

	const content = (
		<div className="flex flex-col justify-center items-center p-10">
			<h2 className="text-[20px] mb-6">Help</h2>
			<div className="bg-white w-[700px] p-4 rounded-md rounded-md h-96 flex items-center">
				<p className="text-[20px] text-center">
					Contact us via email{" "}
					<a
						href="mailto:gilbanksupport.com"
						className="text-skyblue">
						@gilbanksupport.com
					</a>
					or telephone{" "}
					<a
						href="tel:+44762541238"
						className="text-skyblue">
						+44762541238
					</a>{" "}
					for help and support or any other
					enquires
				</p>
			</div>
		</div>
	);
	return (
		<>
			{isAuth ? (
				<DashboardLayout children={content} />
			) : (
				<MainLayout children={content} />
			)}
		</>
	);
};

export default Help;
