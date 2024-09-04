import React, { useState, useEffect } from "react";
import "./style.css";
import Img from "./ctimages";
import Join from "./images/Join.png";
import MOVEEEE3 from "./images/MOVEEEE3.png";
// Set the countdown target to November 9th, 2024 at 00:00:00
const COUNTDOWN_TARGET = new Date("2024-11-09T00:00:00");

const getTimeLeft = () => {
	const totalTimeLeft = COUNTDOWN_TARGET - new Date();
	if (totalTimeLeft <= 0) {
		return { days: 0, hours: 0, minutes: 0, seconds: 0 };
	}
	const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
	const seconds = Math.floor((totalTimeLeft / 1000) % 60);
	return { days, hours, minutes, seconds };
};

const Countdown = () => {
	const [timeLeft, setTimeLeft] = useState(getTimeLeft);

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className='countdown'>
			<h2>Countdown</h2>
			<div className='content'>
				{Object.entries(timeLeft).map(([label, value]) => (
					<div className='box' key={label}>
						<div className='value'>
							<span>{value}</span>
						</div>
						<span className='label'>{label}</span>
					</div>
				))}
			</div>
			<div className='image-container'>
				
				<img className="sideimg" src={MOVEEEE3} alt="1st Image" />
				<Img /> {/* First Image */}
				<img className="sideimg" src={Join} alt="2nd Image" />
			</div>
		</div>
	);
};

export default Countdown;
