<script>
    import { trash, check } from 'svelte-awesome/icons';
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import { list } from '../to-do-list.js';

    export let position;
    export let name;
    export let done;

    function completeTask () {
        list.update(tasksList => {
            let task = tasksList[position];
            task.done = true;
            tasksList[position] = task;
            localStorage.setItem('to-do-svelte', JSON.stringify(tasksList));

            return tasksList;
        });
    }

    function deleteTask () {
        list.update(tasksList => {
            tasksList.splice(position, 1);
            localStorage.setItem('to-do-svelte', JSON.stringify(tasksList));

            return tasksList;
        });
    }
</script>

<style lang="scss">
    @import './styles/global.scss';
    .task-container {
        width: 100%;
        height: 6em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid $eoeoeo;
        padding: 1em;

        &-info {
            .name {
                font-weight: bold;
                font-size: 1.5em;
            }
        }

        &-actions {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            button {
                border: 0;
                background-color: transparent;
                cursor: pointer;
            }

            .btn-check {
                color: green;
            }

            .btn-delete {
                color: red;
                z-index: 1;
            }
        }
    }

    .bg-disabled {
        /* for "disabled" effect */
        opacity: 0.5;
        background: #CCC;
    }

    .text-disabled {
        text-decoration: line-through;
    }
</style>

<!-- HTML component -->
<div class="task-container"
     class:bg-disabled="{ done }">
    <div class="task-container-info">
        <span class="name"
              class:text-disabled="{ done }">{ name }</span>
    </div>
    <div class="task-container-actions">
        { #if !done }
            <button type="button" class="btn-check"
                    on:click="{ completeTask }">
                <Icon data="{ check }" scale="1"></Icon>
            </button>
        { /if }
        <button type="button" class="btn-delete"
                on:click="{ deleteTask }">
            <Icon data="{ trash }" scale="1"></Icon>
        </button>
    </div>
</div>