import React, { useState } from "react";

import "./character-grid.css";
import CharacterCard from "../CharacterCard/CharacterCard";
import CharacterPage from "../CharacterPage/CharacterPage";
import Search from "../Search/Search";
import Header from "../Header/Header";

import noResImg from "../../assets/PngItem_2140858.png";
export interface CharacterGridComponent {
	characterData: any;
	searchHandler: Function;
}
const CharacterGrid = ({
	characterData,
	searchHandler,
}: CharacterGridComponent) => {
	const [showInfo, setShowInfo] = useState(false);
	const [charId, setCharId] = useState(0);
	const showModalInfo = (charId: any) => {
		setShowInfo(!showInfo);
		setCharId(charId);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	const closeInfoModal = () => {
		setShowInfo(!showInfo);
	};

	return (
		<>
			{showInfo ? (
				<CharacterPage
					characterData={characterData}
					charId={(charId - 1) % 9}
					closeModal={closeInfoModal}
				/>
			) : (
				""
			)}
			<Header />
			<Search searchCharacter={searchHandler} />

			{characterData.length === 0 ? (
				<div className="flex flex-col justify-center items-center text-3xl mt-4	 text-black font-bold tracking-wider">
					<img className="h-28" src={noResImg} alt="" />
					<p className="mt-3">No Result Found</p>
				</div>
			) : (
				<>
					<div className="cards sm:px-10 lg:px-56 py-10">
						{characterData.map((item: any) => (
							<CharacterCard
								OtherData={item}
								charImg={item.img}
								name={item.name}
								dateOfBirth={item.birthday}
								occupation={item.occupation}
								actorName={item.portrayed}
								nickName={item.nickname}
								status={item.status}
								id={item.char_id}
								showCharInfo={showModalInfo}
								key={item.char_id.toString()}
							></CharacterCard>
						))}
					</div>
				</>
			)}
		</>
	);
};

export default CharacterGrid;
