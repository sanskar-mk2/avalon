<script setup>
import i_6051 from "./assets/images/6051_Avenger Dolphin-63206.jpg";
import i_1080 from "./assets/images/1080_Puffdaddy Wallstreet-63172.jpg";
import U6020 from "./assets/images/U6020 Mazeltof Flax.jpg";
import U3090 from "./assets/images/U3090 Lucille Lt. Gray.jpg";
import U1280 from "./assets/images/U1280 Bunny Ivory.jpg";
import U3075 from "./assets/images/U3075 Lucille Beige.jpg";

import U6051DC from "./assets/images/U6051DC.jpg";

import U6080 from "./assets/images/U6080 in Puff Daddy Sioenna.jpg";

const grid_images = [i_6051, i_1080, U6020, U3090, U1280, U3075];
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
                    :src="U6051DC"
                    alt="U6051DC"
                />
            </div>
            <div class="px-4 lg:px-0 flex flex-col gap-4">
                <h2 class="text-2xl lg:text-3xl text-secondary font-extrabold">
                    Upholstery
                </h2>

                <div class="basis-3/5 text-primary-content flex flex-col gap-4">
                    <p>
                        Proudly bench made in Texas with more than 15 different
                        styles of sectionals, sofa – loves, chairs and chaises.
                        Deep plush seating abounds throughout the collections of
                        oversized, comfortable models covered in rich
                        serviceable chenille, woven and damask fabrics. Frames
                        constructed of select hardwoods, plywoods and furniture
                        board. All frames use sinuous spring system for optimum
                        ride and comfort. Incorporating our 1.8 pound density or
                        dual density cushions wrapped in fiber for a down like
                        feel...
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
