import React from "react";
import { ImageCard } from "./ImageCard";

const Container = ({ title, allPhotos, handleLikes, handleDislikes }) => {
	//map through the images and render the Image card component

	return (
		<div>
			<h1>{title}</h1>
			{allPhotos.map((photo, index) => {
				return (
					<ImageCard
						key={photo}
						photo={photo}
						index={index}
						handleLikes={handleLikes}
						handleDislikes={handleDislikes}
					/>
				);
			})}
		</div>
	);
};

export default Container;
