import postData from './_post.js';



export async function get(req, res, next) {
	res.writeHead(200, {
		"Content-Type": "application/json",
	});


	const { slug } = req.params;


	let data = await postData(slug)
	let articles = data.articles
	let comments = data.commentdata
	res.end(JSON.stringify({articles,comments}));



}
