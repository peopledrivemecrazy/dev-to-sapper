<script context="module">
	export async function preload({ params }) {
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { post: data.articles, comments: data.comments };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import Comments from "../../components/Comments.svelte";

	export let post;
	export let comments;
</script>

<style>
	:global(.highlight__panel) {
		display: none;
	}
	.tags {
		margin: 0.25em;
		border: 1px solid #ff3e00;
		padding: 0.25em;
	}
	.taglist {
		display: flex;
		flex-flow: wrap;
	}
	.content {
		border: 1px solid #ff3e00;
		padding: 2em;
	}
	h2 {
		margin: 1em 0;
	}
	.comments {
		border: 1px solid #ff3e00;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<p><a href="blog">Go back to blogs</a></p>
{#if post.cover_image}<img src={post.cover_image} alt={post.title} />{/if}

<h1>{post.title}</h1>

<div class="taglist">
	{#each post.tags as tag}<span class="tags">{tag}</span>{/each}
</div>

<p>{post.readable_publish_date}</p>
<div class="content">
	{@html post.body_html}
</div>
<h2>Comments</h2>

<div class="comments">
	<Comments {comments} slug={post.slug} />
</div>
