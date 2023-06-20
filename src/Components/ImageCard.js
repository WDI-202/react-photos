import React from "react";

export const ImageCard = ({ photo, index, handleLikes, handleDislikes }) => {
	console.log(index, photo);
	//this holds one image at a time
	//add a like and dislike button
	return (
		<div>
			{" "}
			<img
				src={photo}
				style={{ width: "200px", height: "200px", objectFit: "cover" }}
			/>
			{handleLikes && (
				<div>
					<button onClick={() => handleLikes(photo)}>Like</button>
					<button onClick={() => handleDislikes(photo)}>Dislike</button>
				</div>
			)}
		</div>
	);
};
