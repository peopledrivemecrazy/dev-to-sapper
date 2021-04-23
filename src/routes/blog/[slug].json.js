import postData from "./_post.js";

const SITE = process.env.SITE;

export async function get(req, res, next) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  const { slug } = req.params;

  let post = await postData(slug);
  let article = post.articles;
  let comments = post.commentdata;
  let data = {
    article,
    comments,
    site: SITE,
  };
  res.end(JSON.stringify(data));
}
