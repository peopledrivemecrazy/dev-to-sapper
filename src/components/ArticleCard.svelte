<script>
  export let posts;
  export let grid = false;
</script>

{#if posts.length != 0}
  <h1>Recent posts</h1>
  <ul class:grid-card={grid === true}>
    {#each posts as post}
      <a rel="prefetch" href="blog/{post.slug}">
        <li>
          <p>{post.title}</p>
          <p class="date">{post.date}</p>
          <div class="taglist">
            {#each post.tags as tag}
              <span class="tags">{tag}</span>
            {/each}
          </div>
        </li>
      </a>
    {/each}
  </ul>
{:else}
  <p>No Posts</p>
{/if}

<style>
  ul {
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }
  .grid-card {
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  .grid-card li {
    margin: 0;
  }
  li {
    list-style-type: none;
    padding: 1em;
    border: 1px solid #ff3e00;
    margin: 2em 0;
    box-shadow: 6px 3px #ff3e00;
    font-size: 1.5em;
  }
  li:hover {
    border: 1px solid #7ed07e;
    box-shadow: 8px 6px #7ed07e;
    transition: box-shadow 0.3s ease-in-out;
    color: #7ed07e;
  }
  a {
    text-decoration: none;
  }
  .date {
    font-size: 0.7em;
  }
  .tags {
    margin: 0.25em;
    border: 1px solid #ff3e00;
    padding: 0.25em;
    color: #fff;
  }
  .taglist {
    display: flex;
    flex-flow: wrap;
    font-size: 0.7em;
  }
</style>
