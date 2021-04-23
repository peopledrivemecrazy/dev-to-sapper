// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.
require("dotenv").config();

const API = process.env.DEV_API_KEY;
const USERNAME = process.env.DEV_USERNAME;
const COMMENTS = process.env.COMMENTS;

//https://dev.to/api/articles/me
import { send } from "httpie";

let data = async function getPosts(sluginput) {
  const res = await send(
    "GET",
    `https://dev.to/api/articles/${USERNAME}/${sluginput}`,
    {
      headers: {
        "api-key": API,
      },
    }
  );

  let data = res.data;

  let commentdata;
  if (COMMENTS) {
    const comments = await send(
      "GET",
      `https://dev.to/api/comments?a_id=${data.id}`,
      {
        headers: {
          "api-key": API,
        },
      }
    );
    commentdata = comments.data;
  } else {
    return { commentdata: null };
  }
  return {
    articles: data,
    commentdata,
  };
};
export default data;
