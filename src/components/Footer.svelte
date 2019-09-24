<script>
    let currentYear = new Date().getFullYear();
</script>

<style lang="scss">
    @import './styles/global.scss';

    .footer-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-top-style: dashed;
        padding-top: .5em;
        padding-bottom: .5em;
        bottom: 0;
        top: auto;
        background-color: $white;

        &-text {
            font-size: .8em;
        }
    }
</style>

<!-- HTML component -->
<div class="footer-container">
    <span class="footer-container-text">
        Design by Aarón RJ &#128526; { currentYear }
    </span>
</div>