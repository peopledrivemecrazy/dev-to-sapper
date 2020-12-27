require("dotenv").config();

const API = process.env.DEV_API_KEY
const SITE = process.env.SITE

import { send } from 'httpie';



export async function get(req, res) {
	res.writeHead(200, {
		"Content-Type": "application/json",
	});
	let user = await send("GET", `https://dev.to/api/users/me`, {
		headers: {
			'api-key': API
		}
	});

	let posts = await send("GET", `https://dev.to/api/articles/me?per_page=4`, {
		headers: {
			'api-key': API
		}
	});

	posts = posts.data.map(e => {

		let { title, published_at, tag_list, slug } = e
		let date = new Date(published_at);
		let tags = tag_list
		date = date.toLocaleDateString("en-GB", {
			year: "numeric",
			month: "short",
			day: "2-digit",
		})
		return { title, date, tags, slug }
	})
	let data = {
		user: user.data,
		posts,
		site:SITE
	}
	res.end(JSON.stringify(data));
}




