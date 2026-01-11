<script>
	import TaskCard from './TaskCard.svelte';
	// NEW: Import Svelte transitions for smooth animations
	import { slide, fade } from 'svelte/transition';

	export let tasks = [];

	// NEW: Event handlers for custom events from TaskCard
	// These will receive events and pass them up to the parent component

	// Receives toggle event from TaskCard and logs it (event forwarding handles parent communication)
	function handleToggle(event) {
		console.log('Task toggle event received:', event.detail);
	}

	// Receives delete event from TaskCard (event forwarding handles parent communication)
	function handleDelete(event) {
		console.log('Delete event:', event.detail);
	}

	// Sorts tasks by priority (high to low)
	$: sortedTasks = [...tasks].sort((a, b) => {
		const priorityOrder = { high: 3, medium: 2, low: 1 };
		return priorityOrder[b.priority] - priorityOrder[a.priority];
	});
</script>

{#if sortedTasks.length === 0}
	<div class="empty-state card">
		<p>No tasks to display. Add a new task to get started!</p>
	</div>
{:else}
	<div class="task-list">
		{#each sortedTasks as task (task.id)}
			<!-- Slide transition for smooth task appearance/removal -->
			<div transition:slide={{ duration: 300 }}>
				<!-- Event forwarding: toggle and delete events bubble up to parent -->
				<TaskCard {task} on:toggle={handleToggle} on:delete={handleDelete} />
			</div>
		{/each}
	</div>
{/if}

<style>
	.task-list {
		display: flex;
		flex-direction: column;
	}

	.empty-state {
		text-align: center;
		padding: 3rem;
		color: var(--text-secondary);
	}

	.empty-state p {
		font-size: 1rem;
	}
</style>
