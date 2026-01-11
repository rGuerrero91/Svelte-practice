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

### Advanced Tasks (Essential Svelte Concepts)

**Transitions & Animations:**
- [ ] **TaskList.svelte** - Customize the slide transition with duration and delay parameters
- [ ] **TaskCard.svelte** - Add custom duration to the fade transition on the card
- [ ] **TaskCard.svelte** - Add fly transition to the delete button (uncomment import and implement)
- [ ] **+page.svelte** - Add separate in/out transitions to the Add Task Form section
- [ ] **+page.svelte** - Add fade transition with custom parameters to the Filter Controls section

**Custom Events (createEventDispatcher):**
- [ ] **TaskCard.svelte** - Implement the `handleDelete()` function to dispatch a 'delete' event
- [ ] **TaskCard.svelte** - BONUS: Create `handleEdit()` function that dispatches an 'edit' event
- [ ] **TaskList.svelte** - Create `handleDelete()` function to handle delete events from TaskCard
- [ ] **TaskList.svelte** - Add `on:delete` event listener to TaskCard component
- [ ] **+page.svelte** - Implement `handleTaskToggle()` to update the store
- [ ] **+page.svelte** - Implement `handleTaskDelete()` to update the store
- [ ] **+page.svelte** - Add `on:delete` event listener to TaskList component
- [ ] **+page.svelte** - BONUS: Implement `handleTaskEdit()` for future editing functionality

**Derived Stores:**
- [ ] **derived.js** - Implement `completedTasksCount` derived store
- [ ] **derived.js** - Implement `completionPercentage` derived store
- [ ] **derived.js** - Implement `tasksByPriority` derived store
- [ ] **derived.js** - BONUS: Create a derived store that combines multiple stores
- [ ] **StatsCard.svelte** - Replace manual calculations with derived store subscriptions
- [ ] **StatsCard.svelte** - Use `$totalTasksCount` for total tasks
- [ ] **StatsCard.svelte** - Use `$completedTasksCount` for completed tasks
- [ ] **StatsCard.svelte** - Use `$completionPercentage` for completion rate
- [ ] **StatsCard.svelte** - Use `$tasksByPriority` for priority counts

**Slots (Default and Named Slots):**
- [ ] **Card.svelte** - Add named slot for card header
- [ ] **Card.svelte** - Add named slot for card footer (make it optional)
- [ ] **Card.svelte** - Add styles for `.card-header` and `.card-footer`
- [ ] **Card.svelte** - BONUS: Add optional props for customization (padding, shadow, rounded)
- [ ] **Modal.svelte** - Replace title h2 with named slot for custom header
- [ ] **Modal.svelte** - Add default slot for modal body content
- [ ] **Modal.svelte** - Add named slot for modal footer (make it optional)
- [ ] **Modal.svelte** - Add styles for `.modal-footer`
- [ ] **Modal.svelte** - BONUS: Use `$$slots` to conditionally render header/footer
- [ ] **StatsCard.svelte** - BONUS: Wrap content in Card component with named slots
- [ ] **+page.svelte** - Add custom header content to Modal using named slot
- [ ] **+page.svelte** - Add custom footer with action buttons to Modal

## How to Know You're Done

Once you've completed all the tasks above, you should be able to:

**Basic Functionality:**
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

**Advanced Features:**
9. ✅ See smooth transitions when tasks are added, removed, or filtered (slide, fade animations)
10. ✅ Observe event flow from TaskCard → TaskList → Page → Store (check browser console)
11. ✅ See statistics auto-update via derived stores (no manual calculations in components)
12. ✅ Open the "About This App" modal and see custom slot content
13. ✅ Customize modal header and footer using named slots
14. ✅ (BONUS) See StatsCard wrapped in Card component with header/footer slots

## Learning Resources

### Svelte Concepts You'll Practice

**Core Concepts (Original):**
- **Component Props**: Passing data between components
- **Event Handlers**: Handling user interactions
- **Reactive Statements**: Using `$:` for computed values
- **Stores (Writable)**: Managing global state with Svelte stores
- **Lifecycle**: Using `onMount` for initialization
- **Two-way Binding**: Using `bind:value`
- **Conditional Classes**: Using `class:directive`
- **Each Blocks**: Rendering lists with `{#each}`

**Advanced Concepts (NEW):**
- **Transitions & Animations**: Using `transition:`, `in:`, `out:` directives with built-in transitions (fade, slide, fly, scale)
- **Custom Events**: Creating and dispatching events with `createEventDispatcher` for component communication
- **Derived Stores**: Creating computed values that automatically update when source stores change
- **Slots**: Building reusable components with default and named slots for flexible content composition
- **Event Forwarding**: Bubbling events up through component hierarchies
- **Store Auto-subscription**: Using `$` prefix to automatically subscribe to stores

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

5. **Transitions**: Import and use built-in transitions
   ```svelte
   <script>
     import { fade, slide } from 'svelte/transition';
   </script>
   <div transition:fade={{ duration: 300 }}>Content</div>
   ```

6. **Custom Events**: Create and dispatch events
   ```javascript
   import { createEventDispatcher } from 'svelte';
   const dispatch = createEventDispatcher();
   dispatch('eventName', { data: value });
   ```

7. **Derived Stores**: Create computed stores
   ```javascript
   import { derived } from 'svelte/store';
   export const doubled = derived(count, $count => $count * 2);
   ```

8. **Slots**: Use default and named slots
   ```svelte
   <!-- Parent -->
   <Card>
     <div slot="header">Header</div>
     Main content
     <div slot="footer">Footer</div>
   </Card>

   <!-- Card.svelte -->
   <slot name="header"></slot>
   <slot>Default content</slot>
   <slot name="footer"></slot>
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
│   │   ├── AddTaskForm.svelte # Form to add tasks
│   │   ├── Card.svelte        # NEW: Reusable card wrapper (slots)
│   │   └── Modal.svelte       # NEW: Modal component (slots)
│   ├── stores/
│   │   ├── tasks.js           # Global task state (writable store)
│   │   └── derived.js         # NEW: Derived stores for computed values
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

**Issue**: Transitions not working
- **Solution**: Make sure you imported the transitions from 'svelte/transition' and added them to the correct elements

**Issue**: Custom events not firing
- **Solution**: Check that you've created the dispatcher with `createEventDispatcher()`, dispatched the event with the correct name, and added the `on:eventname` listener to the parent component

**Issue**: Derived stores showing 0 or undefined
- **Solution**: Complete the derived store implementations in [derived.js](src/lib/stores/derived.js) and use the `$` prefix when accessing them in components (e.g., `$completedTasksCount`)

**Issue**: Modal not appearing
- **Solution**: Make sure `isOpen` is set to `true` when you click the button, and check that you've added the Modal component outside the main container div

## Next Steps After Completion

Once you've completed this project, you'll have learned the essential Svelte concepts! Here are some ideas to continue your learning:

**Feature Enhancements:**
- Add a search feature to find tasks by title or description
- Implement task editing functionality (use the edit event you created!)
- Add due dates to tasks with date pickers
- Create categories/tags for tasks
- Add drag-and-drop to reorder tasks
- Implement task priorities with visual indicators

**Technical Improvements:**
- Add local storage persistence (save tasks to browser)
- Build a dark mode toggle (use context API or stores)
- Implement more complex animations (crossfade, custom transitions)
- Add form validation with a validation library
- Create a toast notification system using slots
- Build a confirmation modal for deletions

**Advanced Svelte Concepts to Explore:**
- **Actions** (`use:` directive) - for click-outside, tooltips, focus trap
- **Context API** - for dependency injection and avoiding prop drilling
- **Readable Stores** - for read-only computed state
- **Module Context** (`<script context="module">`) - for shared component state
- **SvelteKit Features** - load functions, form actions, API routes, SSR
- **Svelte Special Elements** - `<svelte:window>`, `<svelte:head>`, `<svelte:component>`
- **Motion** - spring and tweened stores for smooth animations
- **Component Bindings** - `bind:this` to get component instances

**Resources:**
- [Svelte Tutorial](https://svelte.dev/tutorial) - Official interactive tutorial
- [Svelte Documentation](https://svelte.dev/docs) - Complete API reference
- [SvelteKit Documentation](https://kit.svelte.dev/docs) - Full-stack framework
- [Svelte Society](https://sveltesociety.dev/) - Community recipes and resources

Good luck, and happy learning! 🚀
