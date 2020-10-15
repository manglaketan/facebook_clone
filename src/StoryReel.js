import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
	return (
		<div className="storyReel">
			<Story
				profileSrc="https://thispersondoesnotexist.com/image"
				image="https://images.unsplash.com/photo-1600055882386-5d18b02a0d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=321&q=80"
				title="Ketan Mangla"
			/>
			<Story
				profileSrc="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-8.jpg"
				image="https://images.unsplash.com/photo-1538606292861-b0b447c16db1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=374&q=80"
				title="Sweta Agarwal"
			/>
			<Story
				profileSrc="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-7.jpg"
				image="https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=731&q=80"
				title="Bishal Chettri"
			/>
			<Story
				profileSrc="https://www.bestfunnies.com/wp-content/uploads/2015/06/Funny-Fat-People-Faces-21.jpg"
				image="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
				title="Ravi Tejaswina"
			/>
			<Story
				profileSrc="https://petapixel.com/assets/uploads/2019/02/download-1-800x800.jpeg"
				image="https://images.unsplash.com/photo-1600371876594-ec79e58dd092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
				title="Bangalore Blues"
			/>
		</div>
	);
}

export default StoryReel;
