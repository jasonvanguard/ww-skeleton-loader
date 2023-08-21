<template>
    <component>
        <div class="skeleton-loader"></div>
    </component>
</template>
<script>
export default {
    name: "SkeletonLoader",
};
</script>

<style>
.skeleton-loader {
    width: inherit;
    height: inherit;
    background-color: #c0c0c0;
    border-radius: 50%;
    animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}
</style>
