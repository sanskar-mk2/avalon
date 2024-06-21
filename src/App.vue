<script setup>
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
</script>

<template>
    <div class="flex flex-col">
        <Nav />
        <RouterView />
    </div>
</template>
