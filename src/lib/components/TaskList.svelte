<script>
	import TaskCard from './TaskCard.svelte';

	export let tasks = [];

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
			<TaskCard {task} />
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
