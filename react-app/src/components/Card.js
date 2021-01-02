import React from "react";
import { uid } from "react-uid";


const Card = (props) => {
	const card = props.card;

	return (
		<div>
			<div className="card-holder">
				<p>Question: {card.title}</p>
				<p>Subject: {card.subject}</p>
				<p>Choices</p>
				<ul>
					{card.possible_answers.map((choice, i) => (
						<li key={choice.concat(i)}>{choice}</li>
					))}
				</ul>
				<p>Answer: {card.answer}</p>
				<p>Image: {card.image}</p>
			</div>
		</div>
	);
};

export default Card;