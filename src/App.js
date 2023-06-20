import "./App.css";
import { useState } from "react";
import Container from "./Components/Container";

function App() {
	const photos = [
		"https://images.freeimages.com/images/large-previews/163/dog-watching-you-1640704.jpg", // Pup 1
		"https://images.freeimages.com/images/large-previews/1a5/dogs-eyes-1639845.jpg", // Pup 2
		"https://images.freeimages.com/images/large-previews/116/happy-doggy-1642001.jpg", // Pup 3
		"https://images.freeimages.com/images/large-previews/30a/dog-s-face-1641634.jpg", // Pup 4
		"https://images.freeimages.com/images/large-previews/214/animals-cry-too-1641511.jpg", // Pup 5
		"https://images.freeimages.com/images/large-previews/ab8/reflection-of-a-dog-in-the-mirror-1641517.jpg", // Pup 6
		"https://images.freeimages.com/images/large-previews/d31/aesthetic-dog-1642003.jpg", // Pup 7
		"https://images.freeimages.com/images/large-previews/79a/a-puppy-1642002.jpg", // Pup 8
		"https://images.freeimages.com/images/large-previews/ba1/corgi-puppy-1639723.jpg", // Pup 9
		"https://images.freeimages.com/images/large-previews/b7f/majestic-alfie-the-corgi-1639724.jpg", // Pup 10
		"https://images.freeimages.com/images/large-previews/91c/corgi-pack-1639721.jpg",
		"https://images.freeimages.com/images/large-previews/937/corgi-puppy-teamwork-1639718.jpg", // Pup 11
	];
	const [allPhotos, setAllPhotos] = useState(photos);
	const [likes, setLikes] = useState([]);
	const [disLikes, setDisLikes] = useState([]);

	const handleLikes = (src) => {
		setLikes([...likes, src]);
		const remainingPhotos = allPhotos.filter((photo) => {
			return photo !== src;
		});
		setAllPhotos(remainingPhotos);
	};
	const handleDislikes = (src) => {
		setDisLikes([...disLikes, src]);
		const remainingPhotos = allPhotos.filter((photo) => {
			return photo !== src;
		});
		setAllPhotos(remainingPhotos);
	};

	return (
		<div className="App">
			<Container
				allPhotos={allPhotos}
				title="All Photos"
				handleLikes={handleLikes}
				handleDislikes={handleDislikes}
			/>
			<Container allPhotos={likes} title="Likes" />
			<Container allPhotos={disLikes} title="Dislikes" />
		</div>
	);
}

export default App;
