<script>
    import { plus } from 'svelte-awesome/icons';
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import { list } from '../to-do-list.js';

    let taskName = '';

    function addTask () {
        list.update(todoList => {
            todoList.push({ name: taskName, done: false });
            localStorage.setItem('to-do-svelte', JSON.stringify(todoList));

            return todoList;
        });

        taskName = '';
    }
</script>

<style lang="scss">
    @import './styles/global.scss';

    .add-task-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-top: 1em;
        padding-left: .5em;
        padding-right: .5em;

        .input-task {
            border-radius: 50px;
            width: 100%;
            height: 4em;
            outline: none;
            margin-right: .5em;
        }

        .btn-add-task {
            border-radius: 50%;
            height: 4em;
            padding: 1.5em;
            // width: 12%;
            background-color: $primary;
            color: $black;
            border: 0;
            outline: none;
            font-weight: bold;
            cursor: pointer;
        }

        .btn-disabled {
            // pointer-events: none;
            /* for "disabled" effect */
            opacity: 0.5;
            background: #CCC;
            cursor: not-allowed;
        }
    }
</style>

<!-- HTML component -->
<div class="add-task-container">
    <input class="input-task" type="text"
           placeholder="Escriba una tarea para hacer"
           bind:value="{ taskName }">

    <button class="btn-add-task" type="button"
            disabled="{ taskName === '' }"
            on:click="{ addTask }"
            class:btn-disabled="{ taskName === '' }">
        <Icon data="{ plus }" scale="1"></Icon>
    </button>
</div>