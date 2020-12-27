<script>
    export let posts;
    export let grid = false;
</script>

<style>
    ul {
        margin: 0;
        padding: 0;
        line-height: 1.5;
    }
    .grid-card {
        display: grid;
		gap: 0 1.5em;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
        border: 1px solid #033d2a;
        box-shadow: 8px 6px #033d2a;
        transition: box-shadow 0.3s ease-in-out;
        color: #033d2a;
    }
    a {
        text-decoration: none;
        color: #ff3e00;
    }
    .date {
        font-size: 0.7em;
    }
    .tags {
        margin: 0.25em;
        border: 1px solid #ff3e00;
        padding: 0.25em;
    }
    .taglist {
        display: flex;
        flex-flow: wrap;
        font-size: 0.7em;
    }
</style>

{#if posts.length != 0}
    <h1>Recent posts</h1>
    <ul class:grid-card="{grid===true}">
        {#each posts as post}
            <li>
                <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
                <p class="date">{post.date}</p>
                <div class="taglist">
                    {#each post.tags as tag}
                        <span class="tags">{tag}</span>
                    {/each}
                </div>
            </li>
        {/each}
    </ul>
{:else}
    <p>No Posts</p>
{/if}
