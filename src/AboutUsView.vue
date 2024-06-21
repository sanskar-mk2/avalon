<script setup>
import { ref } from "vue";
import D118 from "./assets/images/D118.jpg";
import B362 from "./assets/images/B362.jpg";
import D162 from "./assets/images/D162.jpg";
import B2404 from "./assets/images/B2404.jpg";
import D253 from "./assets/images/D253.jpg";
import B1550 from "./assets/images/B1550.jpg";

import B518 from "./assets/images/B518.jpg";

const grid_images = [D118, B362, D162, B2404, D253, B1550];
const is_reading_more = ref(false);
</script>

<template>
    <div class="flex gap-4 lg:px-32 flex-col-reverse lg:flex-row">
        <div class="basis-2/5 grid grid-cols-2 gap-2">
            <img
                v-for="(image, index) in grid_images"
                :key="index"
                class="object-cover w-full h-full"
                :src="image"
                alt="Grid Image"
            />
        </div>
        <div class="basis-3/5 flex lg:flex-col flex-col-reverse gap-8">
            <div>
                <img class="object-cover w-full h-96" :src="B518" alt="B518" />
            </div>
            <div class="px-4 lg:px-0 flex flex-col lg:flex-row gap-4">
                <h2 class="text-2xl lg:text-3xl text-secondary font-extrabold">
                    About Us
                </h2>

                <div class="basis-3/5 text-primary-content flex flex-col gap-4">
                    <p>
                        Avalon Furniture, an American-owned furniture supplier
                        based in Houston, Texas has enjoyed a rich heritage in
                        furniture design and development for decades. We take
                        pride in sophisticated design innovation, elegant wood
                        finishes, product quality, and on delivering exceptional
                        value in our price category.
                    </p>
                    <p
                        @click="is_reading_more = !is_reading_more"
                        class="cursor-pointer lg:hidden"
                        v-if="!is_reading_more"
                    >
                        Read more...
                    </p>
                    <p :class="{ 'hidden lg:block': !is_reading_more }">
                        With a range of product categories from on-trend
                        Transitional, to Modern Farmhouse, Modern, Rustic and
                        Glam. Avalon Furniture brings you the latest in
                        fashion-forward designs with exquisite finishing. Our
                        products offer appeal and excitement across a broad
                        range of discerning consumers with an eye and
                        appreciation for design and craftsmanship.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
