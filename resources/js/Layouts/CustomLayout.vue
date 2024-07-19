<script setup>
import Nav from '@/Components/Nav.vue';
</script>

<template>
    <div class="flex flex-col">
        <Nav />
        <slot />
    </div>
</template>
