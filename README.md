# Svelte Task Dashboard - Learning Project

Welcome to your incomplete Svelte Task Dashboard! This project is intentionally about 50% complete to help you learn Svelte by filling in the gaps.

## What This Project Does

A task management dashboard built with SvelteKit that allows users to:
- View all tasks with filtering by status
- Add new tasks with validation
- Mark tasks as complete/incomplete
- Delete tasks
- View statistics (total tasks, completion rate, priority breakdown)

## Getting Started

### Installation

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Your Mission

Complete the missing functionality to make the dashboard fully operational! The project will run even in its incomplete state, but features won't work properly until you fix them.

## Completion Checklist

Work through these tasks in order (or jump around if you prefer!):

### Beginner Tasks (Clear TODOs)

- [ ] **TaskCard.svelte** - Add the missing `task` prop export
- [ ] **TaskCard.svelte** - Create the `priorityColors` object mapping (low/medium/high to colors)
- [ ] **TaskCard.svelte** - Implement `handleToggleComplete()` function
- [ ] **TaskCard.svelte** - Implement `handleDelete()` function
- [ ] **+page.svelte** - Implement the `onMount` function to load tasks from API
- [ ] **+page.svelte** - Complete the reactive filtering logic for `filteredTasks`
- [ ] **+page.svelte** - Implement `handleFilterChange()` function
- [ ] **AddTaskForm.svelte** - Implement the `validateForm()` function with validation rules
- [ ] **AddTaskForm.svelte** - Implement the `handleSubmit()` function
- [ ] **StatsCard.svelte** - Calculate `totalTasks` from the tasks array
- [ ] **StatsCard.svelte** - Calculate `completedTasks` count
- [ ] **StatsCard.svelte** - Calculate `completionPercentage`
- [ ] **StatsCard.svelte** - Calculate priority counts (high/medium/low)

### Intermediate Tasks (Less Guidance)

- [ ] **tasks.js** - Implement `addTask()` method in the task store
- [ ] **tasks.js** - Implement `deleteTask()` method in the task store
- [ ] **tasks.js** - Implement `toggleComplete()` method in the task store
- [ ] **tasks.js** - Implement `updateTask()` method in the task store
- [ ] **api.js** - Implement `loadTasks()` async function with mock delay
- [ ] **api.js** - Implement `saveTask()` async function
- [ ] **api.js** - Implement `removeTask()` async function

### Bug Fixes

- [ ] **TaskCard.svelte** - Fix the `getPriorityColor()` function (wrong comparison operator)
- [ ] **TaskList.svelte** - Fix the sorting logic (high priority should come first, not last)

## How to Know You're Done

Once you've completed all the tasks above, you should be able to:

1. ✅ See the dashboard with sample tasks displayed
2. ✅ Filter tasks by status (All, Todo, In Progress, Done) and see the list update
3. ✅ Add a new task using the form (with validation preventing empty fields)
4. ✅ Click the checkbox on a task to mark it complete/incomplete
5. ✅ Delete a task using the delete button
6. ✅ See accurate statistics updating in real-time:
   - Total number of tasks
   - Number of completed tasks
   - Completion percentage
   - Breakdown by priority (high/medium/low)
7. ✅ See proper color coding on task cards based on priority
8. ✅ See tasks sorted with high priority first

## Learning Resources

### Svelte Concepts You'll Practice

- **Component Props**: Passing data between components
- **Event Handlers**: Handling user interactions
- **Reactive Statements**: Using `$:` for computed values
- **Stores**: Managing global state with Svelte stores
- **Lifecycle**: Using `onMount` for initialization
- **Two-way Binding**: Using `bind:value`
- **Conditional Classes**: Using `class:directive`
- **Each Blocks**: Rendering lists with `{#each}`

### Helpful Hints

1. **Svelte Reactivity**: Use `$:` before statements to make them reactive
   ```svelte
   $: doubled = count * 2; // Updates whenever count changes
   ```

2. **Store Updates**: Use `update()` to modify store values
   ```javascript
   update(currentValue => {
     // Modify and return new value
     return newValue;
   });
   ```

3. **Array Filtering**: Use JavaScript's `filter()` method
   ```javascript
   const filtered = array.filter(item => item.status === 'todo');
   ```

4. **Form Validation**: Check string length and emptiness
   ```javascript
   if (!title || title.trim().length < 3) {
     errors.title = 'Title must be at least 3 characters';
   }
   ```

## Project Structure

```
src/
├── routes/
│   ├── +page.svelte          # Main dashboard page
│   └── +layout.svelte         # App layout wrapper
├── lib/
│   ├── components/
│   │   ├── TaskCard.svelte    # Individual task display
│   │   ├── TaskList.svelte    # List of tasks
│   │   ├── StatsCard.svelte   # Statistics display
│   │   └── AddTaskForm.svelte # Form to add tasks
│   ├── stores/
│   │   └── tasks.js           # Global task state
│   └── utils/
│       └── api.js             # Mock API functions
└── app.css                    # Global styles
```

## Tips for Success

1. **Start with the Beginner Tasks**: They have clear TODO comments guiding you
2. **Read the Hints**: Each TODO includes hints about what to implement
3. **Test Frequently**: Run the dev server and test after each change
4. **Check the Console**: Browser console will show errors if something's wrong
5. **Refer to Svelte Docs**: Visit [svelte.dev/docs](https://svelte.dev/docs) when stuck

## Common Issues & Solutions

**Issue**: Tasks don't show up on page load
- **Solution**: Complete the `onMount` function in [+page.svelte](src/routes/+page.svelte) and the `loadTasks()` function in [api.js](src/lib/utils/api.js)

**Issue**: Can't add new tasks
- **Solution**: Implement the `addTask()` method in [tasks.js](src/lib/stores/tasks.js) and complete the form submission in [AddTaskForm.svelte](src/lib/components/AddTaskForm.svelte)

**Issue**: Statistics show as 0
- **Solution**: Complete the reactive calculations in [StatsCard.svelte](src/lib/components/StatsCard.svelte)

**Issue**: Filtering doesn't work
- **Solution**: Complete the reactive statement in [+page.svelte](src/routes/+page.svelte) that filters tasks based on `currentFilter`

**Issue**: Wrong priority colors or sorting
- **Solution**: Fix the bugs in [TaskCard.svelte](src/lib/components/TaskCard.svelte) and [TaskList.svelte](src/lib/components/TaskList.svelte)

## Next Steps After Completion

Once you've completed this project, consider:
- Adding a search feature to find tasks by title
- Implementing task editing functionality
- Adding due dates to tasks
- Creating categories/tags for tasks
- Adding local storage persistence
- Building a dark mode toggle
- Adding animations and transitions

Good luck, and happy learning! 🚀
