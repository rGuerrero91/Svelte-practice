<script>
	import TaskCard from './TaskCard.svelte';
	// NEW: Import Svelte transitions for smooth animations
	import { slide, fade } from 'svelte/transition';

	export let tasks = [];

	// NEW: Event handlers for custom events from TaskCard
	// These will receive events and pass them up to the parent component

	function handleToggle(event) {
		// Example implementation (50% complete - just logs for now)
		console.log('Task toggle event received:', event.detail);

		// TODO: Forward this event to the parent component
		// You can do this by adding on:toggle to the TaskCard component below
		// and the event will automatically bubble up (event forwarding)
	}

	// TODO: Create a handleDelete function to handle delete events from TaskCard
	// Hint: function handleDelete(event) { console.log('Delete event:', event.detail); }

	// This computed property is supposed to sort tasks by priority
	// BUG: The comparison logic is wrong! High priority should come first
	// Currently low priority comes first (wrong!)
	$: sortedTasks = [...tasks].sort((a, b) => {
		const priorityOrder = { low: 3, medium: 2, high: 1 };
		// BUG: This comparison is backwards!
		return priorityOrder[a.priority] - priorityOrder[b.priority];
	});
</script>

{#if sortedTasks.length === 0}
	<div class="empty-state card">
		<p>No tasks to display. Add a new task to get started!</p>
	</div>
{:else}
	<div class="task-list">
		{#each sortedTasks as task (task.id)}
			<!-- NEW: Added slide transition for smooth task appearance -->
			<!-- The task will slide in when added and slide out when removed -->
			<!-- TODO: Experiment with transition parameters! Try adding: -->
			<!-- transition:slide={{ duration: 300, delay: 0 }} -->
			<!-- Or try other transitions like fade, fly, or scale -->
			<div transition:slide>
				<!-- NEW: Added on:toggle event listener to handle toggle events from TaskCard -->
				<!-- TODO: Add on:delete event listener to handle delete events -->
				<!-- Hint: on:delete={handleDelete} -->
				<!-- Note: Events automatically forward to parent if you use on:toggle on this component -->
				<TaskCard {task} on:toggle={handleToggle} />
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
