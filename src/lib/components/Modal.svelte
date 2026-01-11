<script>
	// NEW: Modal component demonstrating named slots and transitions
	// This shows how slots can be used for flexible, reusable UI components
	import { createEventDispatcher } from 'svelte';
	import { fade, scale } from 'svelte/transition';

	export let isOpen = false;
	export let title = '';

	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close');
	}

	// Close on Escape key (bonus feature - already implemented!)
	function handleKeydown(event) {
		if (event.key === 'Escape' && isOpen) {
			close();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
	<!-- Backdrop with fade transition -->
	<div class="modal-backdrop" transition:fade={{ duration: 200 }} on:click={close}>
		<!-- Modal content with scale transition -->
		<!-- on:click|stopPropagation prevents closing when clicking inside modal -->
		<div class="modal-content" transition:scale={{ duration: 200 }} on:click|stopPropagation>
			<!-- Modal Header with named slot for customization -->
			<div class="modal-header">
				<slot name="header">
					<h2>{title}</h2>
				</slot>
				<button class="close-button" on:click={close} aria-label="Close modal">
					&times;
				</button>
			</div>

			<!-- Modal Body with default slot for main content -->
			<div class="modal-body">
				<slot>No content provided</slot>
			</div>

			<!-- Modal Footer (only renders if footer slot has content) -->
			{#if $$slots.footer}
				<div class="modal-footer">
					<slot name="footer"></slot>
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: 1rem;
	}

	.modal-content {
		background: var(--bg-primary);
		border-radius: 0.5rem;
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
		max-width: 500px;
		width: 100%;
		max-height: 90vh;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem;
		border-bottom: 1px solid var(--border);
	}

	.modal-header h2 {
		margin: 0;
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--text-primary);
	}

	.close-button {
		background: none;
		border: none;
		font-size: 2rem;
		line-height: 1;
		color: var(--text-secondary);
		cursor: pointer;
		padding: 0;
		width: 2rem;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.25rem;
		transition: all 0.2s;
	}

	.close-button:hover {
		background: var(--bg-secondary);
		color: var(--text-primary);
	}

	.modal-body {
		padding: 1.5rem;
		overflow-y: auto;
		flex: 1;
	}

	.modal-footer {
		padding: 1rem 1.5rem;
		border-top: 1px solid var(--border);
		display: flex;
		justify-content: flex-end;
		gap: 0.5rem;
		background: var(--bg-secondary);
	}
</style>
