<script context="module">
  export function preload() {
    return this.fetch(`index.json`)
      .then((r) => r.json())
      .then((data) => {
        return { data };
      });
  }
</script>

<script>
  import ArticleCard from "../components/ArticleCard.svelte";

  export let data;
  let grid = true;
</script>

<svelte:head>
  <title>{data.user.name}'s Blog</title>

  <meta property="og:description" content={data.user.summary} />
  <meta property="og:title" content="{data.user.name} blog" />
  <meta property="og:url" content={data.site} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={data.user.profile_image} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={data.site} />
  <meta name="twitter:title" content="{data.user.name} blog" />
  <meta name="twitter:description" content={data.user.summary} />
  <meta name="twitter:image" content={data.user.profile_image} />
</svelte:head>

<div class="card">
  <div class="card-img">
    <img alt={data.user.name} src={data.user.profile_image} />
  </div>
  <div class="name">
    <h1>{data.user.name}</h1>
  </div>
  <div class="card-summary">
    <p>{data.user.summary}</p>
  </div>
  <div class="social-links">
    <a href="https://twitter.com/{data.user.twitter_username}" target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        ><path
          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
        /></svg
      >
    </a>
    <a href="https://github.com/{data.user.github_username}" target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        ><path
          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        /></svg
      >
    </a>
    <a href={data.user.website_url} target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        ><path
          d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
        /></svg
      >
    </a>
  </div>
</div>
<ArticleCard posts={data.posts} {grid} />

<style>
  h1 {
    margin: 1em 0;
    text-align: center;
  }
  .card {
    padding: 1em;
    border: 1px solid #ff3e00;
    box-shadow: 6px 3px #ff3e00;
    margin: 5em 0 2em 0;
    display: grid;
    justify-content: center;
    text-align: center;
  }
  .card-img {
    margin-top: -5em;
  }
  .card-img img {
    border-radius: 100%;
    box-shadow: 0px 0px 0px 4px #ff3e00;
    width: 200px;
  }

  a {
    text-decoration: none;
    color: #ff3e00;
  }
  svg {
    fill: #fff;
    margin: 0 0.5em;
  }
</style>
