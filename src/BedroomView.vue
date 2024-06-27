<script setup>
import { ref } from "vue";
import B961 from "./assets/images/B961.jpg";
import B1495 from "./assets/images/B1495.jpg";
import B1209 from "./assets/images/B1209.jpg";
import B1623 from "./assets/images/B1623.jpg";
import B193 from "./assets/images/B193.jpg";
import B566 from "./assets/images/B566.jpg";

import B226 from "./assets/images/B226.jpg";

const grid_images = [B961, B1495, B1209, B1623, B193, B566];
const is_reading_more = ref(false);
</script>

<template>
    <div class="flex gap-4 lg:px-32 flex-col-reverse lg:flex-row">
        <div class="basis-2/5 grid grid-cols-2 gap-2">
            <img
                loading="lazy"
                v-for="(image, index) in grid_images"
                :key="index"
                class="object-cover w-full h-full"
                :src="image"
                alt="Grid Image"
            />
        </div>
        <div class="basis-3/5 flex lg:flex-col flex-col-reverse gap-8">
            <div>
                <img
                    loading="lazy"
                    class="object-cover w-full h-96"
                    :src="B226"
                    alt="B226"
                />
            </div>
            <div class="px-4 lg:px-0 flex flex-col gap-4">
                <h2 class="text-2xl lg:text-3xl text-secondary font-extrabold">
                    Bedroom
                </h2>

                <div class="basis-3/5 text-primary-content flex flex-col gap-4">
                    <p>
                        Our master bedroom line has exciting style, innovation,
                        features and function. The impressive scale and focus on
                        detail is what distinguishes the Avalon bedroom design.
                        Quality materials and craftsmanship, along with natural,
                        and clear, yet distinctive color and finish, provide a
                        canvas for the many curves and lines of our storage
                        pieces and beds.
                    </p>
                    <p
                        @click="is_reading_more = !is_reading_more"
                        class="cursor-pointer lg:hidden"
                        v-if="!is_reading_more"
                    >
                        Read more...
                    </p>
                    <p :class="{ 'hidden lg:block': !is_reading_more }">
                        Whether it is the elegant look of quarter – sawn Ash, or
                        brushed finishes on Cherry, Ash and Acacia. The
                        beautiful clarity our master bedrooms delivers on your
                        highest aspirations. Loaded with high end features
                        typically found in much more expensive goods. Most
                        collections offer 5-piece, dovetailed drawers that are
                        sanded, stained to match and sealed. Velvet lined with
                        jewelry trays and bonus drawers in most collections.
                        Cedar lined bottom drawers for storage of seasonal
                        items. Some of our more popular sets also feature solid
                        wood edges around each case for extra strength and
                        durability.
                    </p>
                    <p :class="{ 'hidden lg:block': !is_reading_more }">
                        Our nightstands offer power charging for your devices
                        atop your nightstand. Some nightstands offer wireless
                        rapid charging with dual USB ports mounted on the back
                        of each nightstand to charge additional devices as well
                        as a low voltage, cool to the touch LED night light that
                        illuminates your late-night pathway to safely reach your
                        destination without stepping on pets or toys on your
                        way. Others offer A and C dual port charging capability
                        only and others have this plus an LED nightlight. Coming
                        soon is our new “TECH - STAND”™️ that features charging
                        of your phone, air pods and watch simultaneously and
                        safely.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
