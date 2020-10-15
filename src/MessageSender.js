import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

function MessageSender() {
	const [input, setInput] = useState("");
	const [imageURL, setImageURL] = useState("");
	const [{ user }, dispatch] = useStateValue();

	const handleSubmit = (e) => {
		e.preventDefault();

		db.collection("posts").add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			profilePic: user.photoURL,
			username: user.displayName,
			image: imageURL,
		});
		setInput("");
		setImageURL("");
	};

	return (
		<div className="messageSender">
			<div className="messageSender__top">
				<Avatar src={user.photoURL} />
				<form action="">
					<input
						className="messageSender__input"
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder={`What's on your mind, ${user.displayName}?`}
					/>
					<input
						type="text"
						value={imageURL}
						placeholder="imageURL"
						onChange={(e) => setImageURL(e.target.value)}
					/>
					<button type="submit" onClick={handleSubmit}>
						hidden submit button
					</button>
				</form>
			</div>

			<div className="messageSender__bottom">
				<div className="messageSender__option">
					<VideocamIcon style={{ color: "red" }} />
					<h3>Live Video</h3>
				</div>
				<div className="messageSender__option">
					<PhotoLibraryIcon style={{ color: "green" }} />

					<h3>Photos/Videos</h3>
				</div>

				<div className="messageSender__option">
					<InsertEmoticonIcon style={{ color: "orange" }} />
					<h3>Feelings/Activity</h3>
				</div>
			</div>
		</div>
	);
}

export default MessageSender;
