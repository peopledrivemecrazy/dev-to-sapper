// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.
require("dotenv").config();

const API = process.env.DEV_API_KEY
const PER_PAGE = process.env.PER_PAGE

//https://dev.to/api/articles/me
import { send } from 'httpie';


let data = async function getPosts(page) {
	const res = await send("GET", `https://dev.to/api/articles/me?per_page=${PER_PAGE}&page=${page}`, {
		headers: {
			'api-key': API
		}
	});

	let data = res.data;

	return data.map(e => {
		let date = new Date(e.published_at);
		let tags = e.tag_list
		date = date.toLocaleDateString("en-GB", {
			year: "numeric",
			month: "short",
			day: "2-digit",
		})
		let title = e.title
		let slug = e.slug
		let id = parseInt(e.id)
		

		return { title, date,tags,id,slug,tags }
	})

}
export default data;