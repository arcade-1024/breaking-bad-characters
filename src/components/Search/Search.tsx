import React, { useState, useRef } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import "./search.css";
export interface SearchComponent {
	searchCharacter: Function;
}
const Search = ({ searchCharacter }: SearchComponent) => {
	const inputRef = useRef<HTMLInputElement>(document.createElement("input"));
	// eslint-disable-next-line
	const [icon, setIcon] = useState(true);
	const onChangeHandler = () => {
		setIcon(false);
		console.log(inputRef.current?.value);
		searchCharacter(inputRef.current?.value);
		if (inputRef.current.value === "") {
			setIcon(true);
		}
	};
	const clearInput = () => {
		inputRef.current.value = "";
	};
	return (
		<section className="flex flex-row justify-center">
			<form className="w-2/4 relative">
				<input
					type="text"
					className="h-10 w-full focus:outline-none border-2 border-gray-200 focus:border-gray-400 duration-75 px-3 my-5 rounded-lg"
					placeholder="Search Characters"
					ref={inputRef}
					onChange={onChangeHandler}
				/>
				<div className="absolute top-1/2 right-2 input-icon">
					{icon ? (
						<FiSearch />
					) : (
						<button onClick={clearInput}>
							<FiX />
						</button>
					)}
				</div>
			</form>
		</section>
	);
};

export default Search;
