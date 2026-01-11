<script>
	import { taskStore } from '$lib/stores/tasks.js';
	// NEW: Import transitions for smooth animations
	import { fade } from 'svelte/transition';
	// NEW: Import fly transition for the delete button animation
	// TODO: Uncomment the line below once you're ready to use it
	// import { fly } from 'svelte/transition';

	// NEW: Import createEventDispatcher for custom events
	// This allows child components to communicate with parent components
	import { createEventDispatcher } from 'svelte';

	// Create the event dispatcher
	const dispatch = createEventDispatcher();

	// TODO: Add the missing 'task' prop
	// Hint: export let task;
	let task  = {};


	// TODO: Create a priorityColors object to map priority levels to colors
	// Hint: low -> 'var(--success)', medium -> 'var(--warning)', high -> 'var(--danger)'
	const priorityColors = {
		// Your code here
		low: 'var(--success)',
		medium: 'var(--warning)',
		high: 'var(--danger)',
		// note to self: 'var(--name)' is a css styling attribute call, in this case the colors are assigned to the status name. 
	};

	// NEW: Using custom events instead of calling store directly!
	// This is a better pattern for component communication
	function handleToggleComplete() {
		// OLD WAY (calling store directly - commented out as reference):
		// taskStore.toggleComplete(task.id)

		// NEW WAY: Dispatch a custom 'toggle' event to the parent component
		// The parent will handle updating the store
		dispatch('toggle', { id: task.id });

	}

	function handleDelete() {
		// TODO: Dispatch a 'delete' event instead of calling the store directly
		// Hint: dispatch('delete', { id: task.id });
		// Remove the old taskStore.deleteTask(task.id) call

		// OLD WAY (keep for reference):
		// taskStore.deleteTask(task.id)
	}

	// BONUS TODO: Create a handleEdit function that dispatches an 'edit' event
	// This will prepare the codebase for future task editing functionality
	// Hint: function handleEdit() { dispatch('edit', { task }); }

	// BUG: This function has a wrong comparison operator!
	// It should return the color, but it's checking the wrong thing
	function getPriorityColor(priority) {
		return priorityColors[priority] == 'var(--text-secondary)';
	}
</script>

<!-- NEW: Added fade transition to the card -->
<!-- TODO: Customize the transition! Try adding parameters: -->
<!-- transition:fade={{ duration: 200 }} -->
<div class="task-card" class:completed={task?.completed} transition:fade>
	<div class="task-header">
		<div class="task-title-row">
			<input
				type="checkbox"
				checked={task?.completed}
				on:change={handleToggleComplete}
				class="task-checkbox"
			/>
			<h3 class:completed-text={task?.completed}>{task?.title || 'Untitled'}</h3>
		</div>
		<span class="priority-badge" style="background-color: {getPriorityColor(task?.priority)}">
			{task?.priority || 'low'}
		</span>
	</div>

	<p class="task-description">{task?.description || 'No description'}</p>

	<div class="task-footer">
		<span class="status-badge status-{task?.status}">
			{task?.status || 'todo'}
		</span>
		<!-- TODO: Add a fly transition to the delete button! -->
		<!-- Hint: Import fly from 'svelte/transition' and add: -->
		<!-- transition:fly={{ x: 20, duration: 200 }} -->
		<!-- This will make the button fly in from the right -->
		<button class="btn btn-danger btn-sm" on:click={handleDelete}>
			Delete
		</button>
	</div>
</div>

<style>
	.task-card {
		background: var(--bg-secondary);
		border: 1px solid var(--border);
		border-radius: 0.5rem;
		padding: 1rem;
		margin-bottom: 1rem;
		transition: all 0.2s;
	}

	.task-card:hover {
		box-shadow: 0 4px 6px var(--shadow);
	}

	.task-card.completed {
		opacity: 0.7;
	}

	.task-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 0.75rem;
	}

	.task-title-row {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		flex: 1;
	}

	.task-checkbox {
		width: 1.25rem;
		height: 1.25rem;
		cursor: pointer;
	}

	h3 {
		font-size: 1.125rem;
		font-weight: 600;
		margin: 0;
		color: var(--text-primary);
	}

	.completed-text {
		text-decoration: line-through;
		color: var(--text-secondary);
	}

	.priority-badge {
		padding: 0.25rem 0.75rem;
		border-radius: 0.25rem;
		font-size: 0.75rem;
		font-weight: 600;
		color: white;
		text-transform: uppercase;
	}

	.task-description {
		color: var(--text-secondary);
		font-size: 0.875rem;
		margin-bottom: 0.75rem;
		line-height: 1.5;
	}

	.task-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.status-badge {
		padding: 0.25rem 0.75rem;
		border-radius: 0.25rem;
		font-size: 0.75rem;
		font-weight: 500;
		text-transform: capitalize;
	}

	.status-todo {
		background-color: #e0e7ff;
		color: #4338ca;
	}

	.status-in-progress {
		background-color: #fef3c7;
		color: #92400e;
	}

	.status-done {
		background-color: #d1fae5;
		color: #065f46;
	}

	.btn-sm {
		padding: 0.375rem 0.75rem;
		font-size: 0.75rem;
	}
</style>
