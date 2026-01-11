<script>
	import { taskStore } from '$lib/stores/tasks.js';

	let title = '';
	let description = '';
	let priority = 'medium';
	let status = 'todo';
	let errors = {};

	// Validates form fields: title (min 3 chars) and description (required)
	function validateForm() {
		errors = {};

		if (!title.trim()) {
			errors.title = 'Title is required';
		} else if (title.trim().length < 3) {
			errors.title = 'Title must be at least 3 characters';
		}

		if (!description.trim()) {
			errors.description = 'Description is required';
		}

		return Object.keys(errors).length === 0;
	}

	// Validates and submits form, adding task to store and resetting on success
	function handleSubmit() {
		if (!validateForm()) {
			return;
		}

		taskStore.addTask({
			title: title.trim(),
			description: description.trim(),
			priority,
			status
		});

		resetForm();
	}

	function resetForm() {
		title = '';
		description = '';
		priority = 'medium';
		status = 'todo';
		errors = {};
	}
</script>

<div class="form-container card">
	<form on:submit|preventDefault={handleSubmit}>
		<div class="form-group">
			<label for="title">
				Task Title *
				{#if errors.title}
					<span class="error-text">{errors.title}</span>
				{/if}
			</label>
			<input
				id="title"
				type="text"
				bind:value={title}
				placeholder="Enter task title"
				class:error={errors.title}
			/>
		</div>

		<div class="form-group">
			<label for="description">
				Description *
				{#if errors.description}
					<span class="error-text">{errors.description}</span>
				{/if}
			</label>
			<textarea
				id="description"
				bind:value={description}
				placeholder="Describe the task"
				rows="3"
				class:error={errors.description}
			/>
		</div>

		<div class="form-row">
			<div class="form-group">
				<label for="priority">Priority</label>
				<select id="priority" bind:value={priority}>
					<option value="low">Low</option>
					<option value="medium">Medium</option>
					<option value="high">High</option>
				</select>
			</div>

			<div class="form-group">
				<label for="status">Status</label>
				<select id="status" bind:value={status}>
					<option value="todo">To Do</option>
					<option value="in-progress">In Progress</option>
					<option value="done">Done</option>
				</select>
			</div>
		</div>

		<div class="form-actions">
			<button type="submit" class="btn btn-primary">
				Add Task
			</button>
			<button type="button" class="btn btn-secondary" on:click={resetForm}>
				Reset
			</button>
		</div>
	</form>
</div>

<style>
	.form-container {
		margin-bottom: 2rem;
	}

	.form-group {
		margin-bottom: 1rem;
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.error-text {
		color: var(--danger);
		font-size: 0.75rem;
		margin-left: 0.5rem;
	}

	input.error,
	textarea.error {
		border-color: var(--danger);
	}

	.form-actions {
		display: flex;
		gap: 0.75rem;
		margin-top: 1.5rem;
	}

	textarea {
		resize: vertical;
		min-height: 80px;
	}
</style>
