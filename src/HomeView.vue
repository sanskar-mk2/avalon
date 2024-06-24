<script setup>
import { ref, onMounted } from "vue";
import B912 from "./assets/images/B912.jpg";
import B162 from "./assets/images/B162.jpg";
import B2122 from "./assets/images/B2122.jpg";
import B323 from "./assets/images/B323.jpg";

const slide_show_images = [B912, B162, B2122, B323];
const current_image = ref(0);
const is_reading_more = ref(false);

import B299 from "./assets/images/B299.jpg";
import B775 from "./assets/images/B775.jpg";
import B913 from "./assets/images/B913.jpg";

onMounted(() => {
    setInterval(() => {
        current_image.value =
            (current_image.value + 1) % slide_show_images.length;
    }, 2000);
});
</script>

<template>
    <div class="flex lg:flex-col flex-col-reverse gap-4 lg:px-32">
        <div class="flex flex-col-reverse lg:flex-row gap-8">
            <div class="basis-2/5 flex flex-col h-[576px] gap-4">
                <div class="basis-1/2 h-[288px] overflow-hidden">
                    <img
                        loading="lazy"
                        class="object-cover w-full h-full"
                        :src="B299"
                        alt="B299"
                    />
                </div>
                <div class="flex h-36 lg:h-[288px] overflow-hidden gap-4">
                    <div class="basis-1/2">
                        <img
                            loading="lazy"
                            class="object-cover w-full h-full"
                            :src="B775"
                            alt="B775"
                        />
                    </div>
                    <div class="basis-1/2">
                        <img
                            loading="lazy"
                            class="object-cover w-full h-full"
                            :src="B913"
                            alt="B913"
                        />
                    </div>
                </div>
            </div>
            <div class="basis-3/5 h-[576px] overflow-hidden">
                <img
                    v-for="(image, index) in slide_show_images"
                    :key="index"
                    class="object-cover w-full h-full"
                    :class="{ hidden: index !== current_image }"
                    :src="image"
                />
            </div>
        </div>
        <hr class="border-2 border-secondary" />
        <div class="px-4 lg:px-0 flex flex-col lg:flex-row gap-4">
            <div
                class="text-center basis-2/5 justify-center flex items-center flex-col gap-2"
            >
                <h2 class="text-2xl lg:text-3xl text-secondary font-extrabold">
                    Furnishing your home
                </h2>
                <h3 class="text-xl lg:text-2xl text-accent font-bold">
                    with style, sophistication, and value
                </h3>
            </div>
            <div class="basis-3/5 text-primary-content flex flex-col gap-4">
                <p>
                    Avalon Furniture, an American-owned furniture supplier based
                    in Houston, Texas has enjoyed a rich heritage in furniture
                    design and development for decades. We take pride in
                    sophisticated design innovation, elegant wood finishes,
                    product quality, and on delivering exceptional value in our
                    price category.
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
                    Transitional, to Modern Farmhouse, Modern, Rustic and Glam.
                    Avalon Furniture brings you the latest in fashion-forward
                    designs with exquisite finishing. Our products offer appeal
                    and excitement across a broad range of discerning consumers
                    with an eye and appreciation for design and craftsmanship.
                </p>
            </div>
        </div>
    </div>
</template>
