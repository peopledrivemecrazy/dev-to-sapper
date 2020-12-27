<script context="module">
	export async function preload({ params }) {
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import Comments from "../../components/Comments.svelte";
	export let data;
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
	<title>{data.article.title}</title>

	<meta property="og:description" content={data.article.description} />
	<meta property="og:title" content={data.article.title} />
	<meta property="og:url" content="{data.site}blog/{data.article.slug}" />
	<meta property="og:type" content="website" />
	{#if data.article.cover_image != null}
		<meta property="og:image" content={data.article.cover_image} />
		<meta name="twitter:image" content={data.article.cover_image} />
	{:else}
		<meta property="og:image" content={data.article.social_image} />
		<meta name="twitter:image" content={data.article.social_image} />
	{/if}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="{data.site}blog/{data.article.slug}" />
	<meta name="twitter:title" content={data.article.title} />
	<meta name="twitter:description" content={data.article.description} />
</svelte:head>

<p><a href="blog">Go back to blogs</a></p>
{#if data.article.cover_image}
	<img src={data.article.cover_image} alt={data.article.title} />
{/if}
<h1>{data.article.title}</h1>

<div class="taglist">
	{#each data.article.tags as tag}<span class="tags">{tag}</span>{/each}
</div>

<p>{data.article.readable_publish_date}</p>
<div class="content">
	{@html data.article.body_html}
</div>
<h2>Comments</h2>

<div class="comments">
	<Comments comments={data.comments} slug={data.article.slug} />
</div>
