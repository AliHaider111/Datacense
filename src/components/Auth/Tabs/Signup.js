import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postHttpRequest } from "../../../axios";



const schema = yup.object().shape({
	email: yup.string().email("Invalid email").required("Email is required"),
	password: yup
		.string()
		.required("Password is required")
		.min(6, "Password should be greater then 8 digits")
		.max(32, "Password should be smaller then 32 digits"),
	repeatPassword: yup
		.string()
		.required("Confirm password is required")
		.min(6, "Password should be greater then 8 digits")
		.max(32, "Password should be smaller then 32 digits")
		.oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignUp = ({ setTabIndex }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [passView, setPassView] = useState({
		newPass: false,
		confirmPass: false,
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const onSubmitHandler = async payload => {

		postHttpRequest("http://localhost:5000/v1/auth/register", payload)
			.then(function (res) {
				console.log(res, "resres")
				toast.success(res.data.message);
			})
			.catch(function (error) {

				toast.error(error.response.data.message);
			});
	};

	return (

		<>
			<link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css" />
			<div className="font-semibold self-center text-xl sm:text-2xl text-center captilize text-gray-800 mt-7">Register</div>
			<div className="mt-7">
				<form onSubmit={handleSubmit(onSubmitHandler)}>
					<div className="flex flex-col mb-6">
						<div className="relative">
							<input id="email" type="text" name="email" className="text-sm sm:text-base placeholder-gray-500  rounded border border-black h-12 w-full p-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" {...register("email")} />
							<p className="errors">{errors.email?.message}</p>
						</div>
					</div>
					<div className="flex flex-col mb-6">
						<div className="relative">
							<div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
							</div>
							<input
								id="password"
								type={passView ? "text" : "password"}
								name="password"
								className="text-sm sm:text-base placeholder-gray-500 rounded border border-black h-12 w-full p-2 focus:outline-none focus:border-blue-400" placeholder="Password"
								{...register("password")}
								
							/>
							<p className="errors">{errors.password?.message}</p>
						</div>
					</div>
					<div className="flex flex-col mb-6">

						<div className="relative">
							<div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
							</div>

							<input
								id="password"
								type={passView.confirmPass ? "text" : "password"}
								name="repeatPassword"
								className="text-sm sm:text-base placeholder-gray-500 rounded border border-black h-12 w-full p-2 focus:outline-none focus:border-blue-400" placeholder="RepeatPassword"
								{...register("repeatPassword")}
							/>
							<p className="errors">{errors.repeatPassword?.message}</p>
						</div>
					</div>

					<div className="flex items-center mb-6 -mt-4">
						<div className="flex ml-auto">
							<a href="#" className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700">Forgot Your Password?</a>
						</div>
					</div>

					<div className="flex items-center justify-center">
						<button type="submit" className=" theme-btn flex items-center justify-center focus:outline-none text-white text-sm sm:text-base rounded py-2 w-full transition duration-150 ease-in">
							<span className="capitlize">Register</span>

						</button>
					</div>
				</form>
			</div>

		</>
	);
};

export default SignUp;
