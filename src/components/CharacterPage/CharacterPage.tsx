import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiX } from "react-icons/fi";
import "./character-page.css";

import Pagenation from "../Pageination/Pagenation";

export interface CharacterPageComponent {
	characterData: any;
	charId: number;
	closeModal: Function;
}
const CharacterPage = ({
	characterData,
	charId,
	closeModal,
}: CharacterPageComponent) => {
	const [qoutes, setQoutes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	//eslint-disable-next-line
	const [quoteOnPage, setQuoteOnPage] = useState(3);
	let charName = characterData[charId].name;
	charName = charName.replace(" ", "+");

	useEffect(() => {
		document.body.style.position = "fixed";

		return () => {
			document.body.style.position = "relative";
		};
	}, []);

	//fetch quote
	useEffect(() => {
		const fetchQoute = async () => {
			const result = await axios(
				`https://www.breakingbadapi.com/api/quote?author=${charName}`
			);
			setQoutes(result.data);
			setLoading(false);
		};
		fetchQoute();
	}, [charName]);
	const lastQuoteIndex = currentPage * quoteOnPage;
	const indexFirstQoute = lastQuoteIndex - quoteOnPage;
	const currentQuote = qoutes.slice(indexFirstQoute, lastQuoteIndex);
	const changePageHandler = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};
	return (
		<div className="character-container h-screen w-screen absolute z-50 lg:px-32 lg:py-5 ">
			<div className="w-full h-full relative lg:px-20 bg-white py-5 lg:rounded-lg shadow-2xl overflow-scroll character-main">
				<button
					className="absolute top-5  right-5 h-10 w-10 flex flex-row  justify-center items-center shadow-lg rounded-full focus:outline-none bg-yellow-400 hover:bg-yellow-300 duration-300"
					onClick={() => closeModal()}
				>
					<FiX />
				</button>
				<div className="char-info-img-row flex flex-row  justify-between items-center">
					<div>
						<h1 className="char-info-portrayed lg:text-5xl font-semibold">
							{characterData[charId].portrayed}
						</h1>
						<p className="char-info-name lg:mt-5 flex items-center">
							a.k.a
							<span className=" ml-3 font-medium lg:text-2xl">
								{characterData[charId].name}
							</span>
						</p>
						{characterData[charId].nickname ? (
							<p className="char-info-alias flex items-center lg:mt-3 mt-2">
								Alias -
								<span className="ml-2 font-medium">
									{characterData[charId].nickname}
								</span>
							</p>
						) : (
							""
						)}
					</div>
					<div className="char-img rounded-full overflow-hidden">
						<img src={characterData[charId].img} alt="" />
					</div>
				</div>
				<div className="char-info-appear">
					<h1 className="font-semibold text-lg">Appearence</h1>
					<div className="flex flex-row flex-wrap">
						{characterData[charId].appearance
							? characterData[charId].appearance.map((season: any) => (
									<div className="bg-gray-100 rounded-lg mx-2 p-2 my-2 shadow-md">
										season {season}
									</div>
							  ))
							: ""}
					</div>
				</div>
				<div className="char-info-occpation lg:mt-3">
					<h1 className="font-semibold text-lg">Occupation</h1>
					<div className="flex flex-row flex-wrap">
						{characterData[charId].occupation.map((job: any) => (
							<p className="mx-2 my-1 text-sm" key={`${job}`}>
								{job}
							</p>
						))}
					</div>
				</div>
				<div className="char-info-qoute lg:mt-3">
					<h1 className="font-semibold text-lg">Quotes</h1>
					{loading ? (
						<div className="lds-ellipsis">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					) : (
						<>
							<ul className="mb-3">
								{currentQuote.map((qoute: any) => (
									<li className="italic my-2 text-sm font-medium">
										<span className="font-extrabold">" </span> {qoute.quote}
										<span className="font-extrabold"> "</span>
									</li>
								))}
							</ul>
							<div className="pt-5">
								<Pagenation
									postPerPage={quoteOnPage}
									totalPost={qoutes.length}
									changePage={changePageHandler}
									classes={"h-7 w-7 mx-2 "}
									type={"dots"}
								/>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default CharacterPage;
