import React, { useState } from "react";
import CharacterPage from "../CharacterPage/CharacterPage";
import "./character-card.css";
export interface CharacterCardComponent {
	name: String;
	occupation: any;
	dateOfBirth: String;
	charImg: string;
	actorName: String;
	nickName: String;
	status: String;
	OtherData: any;
	id: number;
	showCharInfo: Function;
}
const CharacterCard = ({
	OtherData,
	charImg,
	dateOfBirth,
	name,
	occupation,
	actorName,
	nickName,
	status,
	id,
	showCharInfo,
}: CharacterCardComponent) => {
	// console.log(id);

	return (
		<>
			<div className="card ">
				<div className="card-inner">
					<div className="card-front rounded-lg shadow-md  overflow-hidden flex flex-col ">
						<div className="w-100">
							<img className="w-100" src={charImg} alt="" />
						</div>
						<h1 className="lg:text-xl pt-2 font-semibold tracking-wide text-center">
							{name}
						</h1>
					</div>
					<div className="card-back text-white p-5 rounded-lg shadow-lg  overflow-hidden flex flex-col items-center relative">
						<ul className="w-full">
							<li>
								<strong className="mr-3">Actor Name:</strong>
								{actorName}
							</li>
							<li>
								<strong className="mr-3">Nickname:</strong>
								{nickName}
							</li>
							<li>
								<strong className="mr-3">Birthday:</strong>
								{dateOfBirth}
							</li>
							<li>
								<strong className="mr-3">Status:</strong>
								{status}
							</li>
							<li>
								<strong className="mr-3">Occupation:</strong>
								{occupation}
							</li>
						</ul>
						<button
							className="absolute bottom-5 text-white border-white border-2 px-7 py-2 hover:bg-white hover:font-bold hover:text-black duration-300 rounded-md focus:outline-none"
							onClick={() => showCharInfo(id)}
						>
							Read More
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default CharacterCard;
