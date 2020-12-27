<script>
    export let comments = [];
    export let slug;
</script>

<style>
    ul {
        list-style: none;
        padding: 0;
    }
    .comment {
        border: 1px solid #ff3e00;
        padding: 1em;
    }
    ul li {
        display: grid;
        grid-template-columns: 0.5fr 2fr;
        padding: 1em;
    }
    .meta {
        margin: auto;
    }
    ul li img {
        border-radius: 100%;
        box-shadow: 0px 0px 0px 4px #ff3e00;
        width: 45px;
    }
    .comment p {
        font-weight: bold;
    }

    @media screen and (max-width: 600px) {
        ul li {
            grid-template-columns: 1fr;
        }
        .meta {
            margin: auto 0 0 0;
        }
        ul li img {
            width: 45px;
        }
    }
    ul :global(ul) {
        margin-left: 1em;
    }
    a {
        color: #ff3e00;
        text-decoration: none;
    }
    .new-comment {
        padding: 1em;
    }
</style>

{#if comments.length != 0}
    <ul>
        {#each comments as comment}
            <li>
                <div class="meta">
                    <a
                        href="https://dev.to/{comment.user.username}"
                        target="_blank">
                        <img
                            src={comment.user.profile_image_90}
                            alt={comment.user.name} />
                    </a>
                </div>

                <div class="comment">
                    <a
                        href="https://dev.to/{comment.user.username}"
                        target="_blank">
                        <p>{comment.user.name}</p>
                    </a>

                    {@html comment.body_html}
                </div>
            </li>
            {#if comment.children.length != 0}
                <svelte:self comments={comment.children} />
            {/if}
        {/each}
    </ul>
{:else}
    <div class="new-comment">
        <p>No comments</p>
        <a href="https://dev.to/shriji/{slug}" target="_blank">Write a new comment</a>
    </div>
{/if}
