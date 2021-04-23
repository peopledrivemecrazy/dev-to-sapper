import postData from "./_posts.js";

require("dotenv").config();
const PER_PAGE = process.env.PER_PAGE;
export async function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  let pageNum = req.query.page;
  let data = await postData(pageNum);
  let postList = data;
  let hasNext = true;
  hasNext = postList.length < PER_PAGE ? !hasNext : hasNext;

  postList = postList.map((post) => {
    let { title, slug, date, id, tags } = post;

    return {
      title,
      slug,
      date,
      id,
      tags,
    };
  });
  res.end(JSON.stringify({ postList, hasNext }));
}
