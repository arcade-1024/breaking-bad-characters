import axios from "axios";
import React, { useEffect, useState } from "react";
import CharacterGrid from "./components/CharacterGrid/CharacterGrid";
import Pagenation from "./components/Pageination/Pagenation";
function App() {
	const [character, setCharacter] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	// eslint-disable-next-line
	const [currentPage, setCurrentPage] = useState(1);
	//eslint-disable-next-line
	const [postOnPage, setPostOnPage] = useState(9);
	//eslint-disable-next-line
	const [query, setQuery] = useState("");
	useEffect(() => {
		const fetchCharacter = async () => {
			const result = await axios(
				`https://www.breakingbadapi.com/api/characters?name=${query}`
			);

			setCharacter(result.data);
			setLoading(false);
		};
		fetchCharacter();
	}, [query]);
	//pagination
	const lastPostIndex = currentPage * postOnPage;
	const indexFirstPost = lastPostIndex - postOnPage;
	const currentPost = character.slice(indexFirstPost, lastPostIndex);
	// console.log(currentPost);
	const changePageHandler = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	const searchHandler = (charSearch: string) => {
		setQuery(charSearch);
	};
	return (
		<div className="App overflow-hidden">
			{loading ? (
				"loading"
			) : (
				<CharacterGrid
					characterData={currentPost}
					searchHandler={searchHandler}
				/>
			)}
			<div className="pb-7 pt-3">
				<Pagenation
					postPerPage={postOnPage}
					totalPost={character.length}
					changePage={changePageHandler}
					classes={
						"lg:h-10 lg:w-10 lg:mx-2 shadow-lg hover:bg-black hover:text-white hover:font-bold duration-300 focus:bg-gray-400 bg-white"
					}
					type="number"
				/>
			</div>
		</div>
	);
}

export default App;
