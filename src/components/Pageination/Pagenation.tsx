import React from "react";
import "./pagenation.css";
export interface PaginationComponent {
	postPerPage: number;
	totalPost: number;
	changePage: Function;
	classes: String;
	type: String;
}
const Pagenation = ({
	postPerPage,
	totalPost,
	changePage,
	classes,
	type,
}: PaginationComponent) => {
	let numberOfPages = [];
	for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
		numberOfPages.push(i);
	}
	const clickHandler = (pageNumber: any) => {
		changePage(pageNumber);
	};
	return (
		<div className="flex flex-row justify-center flex-wrap">
			<ul className="flex flex-row pagination-nav">
				{numberOfPages.map((page) => (
					<li key={page}>
						<div
							className={`${classes} flex flex-row justify-center items-center  rounded-full cursor-pointer page-number`}
							onClick={() => clickHandler(page)}
						>
							{type === "number" ? page : null}
							{type === "dots" ? (
								<div className="h-2 w-2 bg-gray-400 rounded-full pointer-events-none dots-nav"></div>
							) : (
								""
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Pagenation;
