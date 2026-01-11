<script>
	import { onMount } from 'svelte';
	import { taskStore } from '$lib/stores/tasks.js';
	import { loadTasks } from '$lib/utils/api.js';
	import TaskList from '$lib/components/TaskList.svelte';
	import StatsCard from '$lib/components/StatsCard.svelte';
	import AddTaskForm from '$lib/components/AddTaskForm.svelte';
	// NEW: Import transitions for section animations
	import { fade } from 'svelte/transition';
	// NEW: Import Modal component to demonstrate named slots
	import Modal from '$lib/components/Modal.svelte';

	let tasks = [];
	let currentFilter = 'all';
	let filteredTasks = [];

	// NEW: Modal state for demonstrating slots
	let showInfoModal = false;

	// Subscribe to the task store
	taskStore.subscribe(value => {
		tasks = value;
	});

	// Loads initial tasks from API when component mounts
	onMount(async () => {
		const initialTasks = await loadTasks();
		taskStore.set(initialTasks);
	});

	// Reactively filters tasks based on selected status
	$: {
		if (currentFilter === 'all') {
			filteredTasks = tasks;
		} else {
			filteredTasks = tasks.filter(task => task.status === currentFilter);
		}
	}

	// Updates filter when dropdown selection changes (bind:value also handles this)
	function handleFilterChange(event) {
		currentFilter = event.target.value;
	}

	// NEW: Event handlers for custom events from TaskList component
	// These connect the component events to the task store

	// Toggles task completion status via store
	function handleTaskToggle(event) {
		taskStore.toggleComplete(event.detail.id);
	}

	// Deletes task from store
	function handleTaskDelete(event) {
		taskStore.deleteTask(event.detail.id);
	}

	// BONUS TODO: Implement handleTaskEdit for future editing functionality
	// This can log to console for now
	// Hint: console.log('Edit task:', event.detail.task);
</script>

<div class="container">
	<!-- Statistics Section -->
	<!-- NEW: Added fade transition for smooth appearance -->
	<div class="stats-grid" transition:fade>
		<StatsCard tasks={tasks} />
	</div>

	<!-- Add Task Form with custom in/out transitions -->
	<div class="section" transition:fade={{ duration: 300 }}>
		<h2>Add New Task</h2>
		<AddTaskForm />
	</div>

	<!-- Filter Controls with fade transition -->
	<div class="section" transition:fade={{ duration: 300, delay: 100 }}>
		<h2>Tasks</h2>
		<div class="filter-bar">
			<label for="filter">Filter by status:</label>
			<select id="filter" on:change={handleFilterChange} bind:value={currentFilter}>
				<option value="all">All Tasks</option>
				<option value="todo">To Do</option>
				<option value="in-progress">In Progress</option>
				<option value="done">Done</option>
			</select>
		</div>
	</div>

	<!-- Task List with event handlers for toggle and delete -->
	<TaskList tasks={filteredTasks} on:toggle={handleTaskToggle} on:delete={handleTaskDelete} />

	<!-- NEW: Info button to demonstrate Modal with slots -->
	<!-- TODO: Style this button to match your design -->
	<div class="info-section">
		<button class="btn btn-secondary" on:click={() => showInfoModal = true}>
			ℹ️ About This App
		</button>
	</div>
</div>

<!-- Modal demonstrating named slots (header, body, footer) -->
<Modal isOpen={showInfoModal} on:close={() => showInfoModal = false}>
	<!-- Custom header using named slot -->
	<div slot="header">
		<h2>About This App</h2>
	</div>

	<!-- Default slot content (main body) -->
	<div class="modal-content-text">
		<h3>Welcome to the Svelte Task Dashboard!</h3>
		<p>This is a learning project built with SvelteKit. Key features:</p>
		<ul>
			<li>✨ Smooth transitions and animations</li>
			<li>🎯 Custom events for component communication</li>
			<li>📊 Derived stores for computed values</li>
			<li>🎨 Reusable components with slots</li>
		</ul>
		<p>Complete the TODOs in the code to learn Svelte essentials!</p>
	</div>

	<!-- Custom footer with action button using named slot -->
	<div slot="footer">
		<button class="btn btn-primary" on:click={() => showInfoModal = false}>Got it!</button>
	</div>
</Modal>

<style>
	.stats-grid {
		margin-bottom: 2rem;
	}

	.section {
		margin-bottom: 2rem;
	}

	h2 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: var(--text-primary);
	}

	.filter-bar {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.filter-bar label {
		margin: 0;
		font-weight: 500;
	}

	.filter-bar select {
		width: auto;
		min-width: 200px;
	}

	.info-section {
		margin-top: 2rem;
		text-align: center;
	}

	:global(.modal-content-text) {
		line-height: 1.6;
	}

	:global(.modal-content-text h3) {
		margin-top: 0;
		color: var(--text-primary);
	}

	:global(.modal-content-text ul) {
		margin: 1rem 0;
		padding-left: 1.5rem;
	}

	:global(.modal-content-text li) {
		margin: 0.5rem 0;
		color: var(--text-secondary);
	}
</style>
