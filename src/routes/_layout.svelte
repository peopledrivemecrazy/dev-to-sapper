<script>
	import Nav from "../components/Nav.svelte";

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		min-height: calc(100vh - 40px);
	}
	footer {
		text-align: center;
	}
	footer a {
		color: #ff3e00;
	}
</style>

<Nav {segment} />

<main>
	<slot />
</main>

<footer>
	<p>
		Know how to build deploy Portfolio/Personal blog generator from
		<a href="https://dev.to">dev.to</a>
		API on
		<a href="https://sapper.svelte.dev" target="_blank">Sapper</a>. Check
		out the
		<a href="https://github.com/peopledrivemecrazy/dev-to-sapper">github
			repo.</a>
	</p>
</footer>
