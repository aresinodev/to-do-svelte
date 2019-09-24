<script>
    import { pencil } from 'svelte-awesome/icons';
    import Icon from 'svelte-awesome/components/Icon.svelte';

    export let title;
</script>

<style lang="scss">
    @import './styles/global.scss';

    .header-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom-style: dashed;
        padding-bottom: .5em;

        &-title {
            font-weight: bold;
            font-size: 3em;
        }
    }
</style>

<!-- HTML component -->
<div class="header-container">
    <span class="header-container-title">
        { title }
    </span>
    <div class="header-container-icon">
        <Icon data={ pencil }
              scale="3"></Icon>
    </div>
</div>