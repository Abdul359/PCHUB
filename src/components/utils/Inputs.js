import React, { useState, useEffect, useRef } from "react";
import useUserContext from "../context/user/useUserContext";
import useUtilsContext from "../context/utilsContext/useUtilsContext";
import "./input.css";

const Inputs = (props) => {
	const [values, setValues] = useState([]);
	const [state, setState] = useState(null);
	const inputRef = useRef([]);
	const selectRef = useRef(null);
	const { signupAndLoginWithEmail } = useUserContext();
	const { setError, error } = useUtilsContext();
	useEffect(() => {
		inputRef.current = [];
		selectRef.current = {};
		Object.keys(props).forEach((prop) => {
			if (prop === "btn") {
				setButton(prop);
			} else {
				inputRef.current.push(prop);
			}
		});
		setValues([...inputRef.current]);
		Object.keys(props).forEach((prop) => {
			if (prop !== "btn") {
				selectRef.current[prop] = "";
			}
		});
		setState(selectRef.current);
	}, [props]);
	const [button, setButton] = useState("");
	const changeHandler = (e) => {
		const { name, value } = e.target;
		if (error) {
			return;
		}
		setState({
			...state,
			[name]: value,
		});
	};
	const submitHandler = (e) => {
		e.preventDefault();
		for (let pair in state) {
			if (!state[pair]) {
				setError(`${pair} is required`);
				return;
			}
		}
		signupAndLoginWithEmail(state, props[button]);
		const currentState = {};
		values.forEach((value) => {
			currentState[value] = "";
		});
		setState(currentState);
	};
	const handleKeyPress = (e) => {
		if (e.which === 13) {
			submitHandler(e);
		}
	};
	return (
		<form onKeyPress={handleKeyPress} className="form">
			{values.map((value, index) => {
				return (
					<div key={index} className="form__group">
						<input
							type={`${
								value === "password" ? "password" : "text"
							}`}
							value={state[value]}
							name={value}
							onChange={changeHandler}
							id={value}
							className="form__input"
							required
						/>
						<label htmlFor={value} className="form__label">
							{" "}
							{value.toUpperCase()}
							{""}
						</label>
						<div className="line"></div>
					</div>
				);
			})}
			{button && (
				<div className="btn__group form__group">
					<a href="!#" onClick={submitHandler} className="form__btn">
						{props[button]}
					</a>
				</div>
			)}
		</form>
	);
};

export default Inputs;
