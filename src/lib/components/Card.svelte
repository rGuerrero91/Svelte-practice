<script>
	// NEW: Reusable Card component demonstrating Svelte slots
	// Slots allow you to pass content INTO a component from the parent
	// This is perfect for wrapper/container components!

	// TODO: Add optional props for customization
	// export let padding = '1.5rem';
	// export let shadow = true;
	// export let rounded = true;
</script>

<div class="card">
	<!-- TODO: Add a named slot for the card header -->
	<!-- Named slots let you define multiple content areas -->
	<!-- Hint: <slot name="header"></slot> -->
	<!-- Wrap it in a div with class="card-header" -->

	<!-- DEFAULT SLOT: Main content area (COMPLETED as example) -->
	<!-- The default slot is where content goes when no slot name is specified -->
	<div class="card-body">
		<slot>
			<!-- Fallback content if no content is provided -->
			<p class="placeholder">No content provided</p>
		</slot>
	</div>

	<!-- TODO: Add a named slot for the card footer -->
	<!-- Hint: <slot name="footer"></slot> -->
	<!-- Wrap it in a div with class="card-footer" -->
	<!-- Make this optional - only show if content is provided -->
	<!-- BONUS: Look up Svelte's $$slots to check if a slot has content -->
</div>

<style>
	.card {
		background: var(--bg-secondary);
		border: 1px solid var(--border);
		border-radius: 0.5rem;
		overflow: hidden;
		box-shadow: 0 1px 3px var(--shadow);
	}

	.card-body {
		padding: 1.5rem;
	}

	.placeholder {
		color: var(--text-secondary);
		font-style: italic;
		text-align: center;
		margin: 0;
	}

	/* TODO: Add styles for .card-header */
	/* Suggested: padding, border-bottom, background color */
	/* Example:
	.card-header {
		padding: 1rem 1.5rem;
		border-bottom: 1px solid var(--border);
		background: var(--bg-primary);
	}
	*/

	/* TODO: Add styles for .card-footer */
	/* Suggested: padding, border-top, flex layout for buttons */
	/* Example:
	.card-footer {
		padding: 1rem 1.5rem;
		border-top: 1px solid var(--border);
		display: flex;
		justify-content: flex-end;
		gap: 0.5rem;
	}
	*/
</style>
