<script context="module">
	import { nextCursor } from "../store";

	export function preload({ query }) {
		return this.fetch(`blog.json?page=${query.page}`)
			.then((r) => r.json())
			.then((pageData) => {
				nextCursor.update(() => pageData.hasNext);
				return { pageData, currentpage: query.page || 1 };
			});
	}
</script>

<script>
	import ArticleCard from "../../components/ArticleCard.svelte";

	export let pageData;
	export let currentpage;
	let posts = pageData.postList;
	let hasNext = pageData.hasNext;

	async function navigate(page) {
		window.location.href = `blog?page=${page}`; //query+hasNext workaround
	}
</script>

<style>
	.page-nav {
		display: flex;
		justify-content: center;
	}
	.page-nav button {
		margin: 0.25em;
		border: none;
		padding: 1em;
		background-color: white;
		cursor: pointer;
	}
	.page-nav button:focus {
		outline: none;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>
<ArticleCard {posts} />
<div class="page-nav">
	{#if currentpage > 1}
		<button
			on:click={() => navigate(parseInt(currentpage) ? 1 : currentpage - 1)}><svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"><path
					d="M0 12l9-8v6h15v4h-15v6z" /></svg></button>
	{/if}

	{#if hasNext}
		<button on:click={() => navigate(parseInt(currentpage) + 1)}><svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"><path
					d="M24 12l-9-8v6h-15v4h15v6z" /></svg></button>
	{/if}
	<!-- {#if currentpage > 1}
		<a
			href="./blog?page={currentpage < 1 ? parseInt(currentpage) - 1 : 1}"><svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"><path
					d="M0 12l9-8v6h15v4h-15v6z" /></svg></a>
	{/if}

	{#if $nextCursor}
		<a href="./blog?page={parseInt(currentpage) + 1}"><svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"><path
					d="M24 12l-9-8v6h-15v4h15v6z" /></svg></a>
	{/if} -->
</div>
