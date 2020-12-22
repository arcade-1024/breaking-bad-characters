import React, { useState, useRef } from "react";
import { FiSearch, FiX } from "react-icons/fi";
export interface SearchComponent {
	searchCharacter: Function;
}
const Search = ({ searchCharacter }: SearchComponent) => {
	const inputRef = useRef<HTMLInputElement>(document.createElement("input"));
	const onChangeHandler = () => {
		console.log(inputRef.current?.value);
		searchCharacter(inputRef.current?.value);
	};
	// eslint-disable-next-line
	const [icon, setIcon] = useState(true);
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
				<div className="absolute top-1/2 right-2 -translate-x-1/2">
					{icon ? <FiSearch /> : <FiX />}
				</div>
			</form>
		</section>
	);
};

export default Search;
