<script>
    import { list } from '../to-do-list.js';
    import Task from './Task.svelte';

    let elementsList;

    const unsubscribe = list.subscribe(value => {
        elementsList = value;
    });
</script>

<style lang="scss">
    @import './styles/global.scss';

    .task-list-container {
        width: 100%;
        height: 100%;
        max-height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
    }

    .no-tasks {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        font-weight: bold;
        font-size: 2em;
    }
</style>

<!-- HTML component -->
{ #if elementsList && elementsList.length > 0 }
    <div class="task-list-container">
        { #each elementsList as item, i }
            <Task position={ i }
                name={ item.name }
                done={ item.done }></Task>
        { /each }
    </div>
{ :else }
    <div class="no-tasks">
        No tiene tareas por hacer &#128546;
    </div>
{ /if }
