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
	<!-- Card header (only renders if header slot has content) -->
	{#if $$slots.header}
		<div class="card-header">
			<slot name="header"></slot>
		</div>
	{/if}

	<!-- Default slot for main card content -->
	<div class="card-body">
		<slot>
			<p class="placeholder">No content provided</p>
		</slot>
	</div>

	<!-- Card footer (only renders if footer slot has content) -->
	{#if $$slots.footer}
		<div class="card-footer">
			<slot name="footer"></slot>
		</div>
	{/if}
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

	.card-header {
		padding: 1rem 1.5rem;
		border-bottom: 1px solid var(--border);
		background: var(--bg-primary);
	}

	.card-footer {
		padding: 1rem 1.5rem;
		border-top: 1px solid var(--border);
		display: flex;
		justify-content: flex-end;
		gap: 0.5rem;
	}
</style>
