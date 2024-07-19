<script setup>
import D162 from "../../images/D162.jpg";
import D511 from "../../images/D511.jpg";
import D526 from "../../images/D526.jpg";
import D118 from "../../images/D118.jpg";
import D622 from "../../images/D622.jpg";
import D1623 from "../../images/D1623.jpg";
import CustomLayout from "@/Layouts/CustomLayout.vue";
import { Head } from "@inertiajs/vue3";
import D323 from "../../images/D323.jpg";

const grid_images = [D162, D511, D526, D118, D622, D1623];
</script>

<template>
    <Head title="Dining" />
    <CustomLayout>
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
                        :src="D323"
                        alt="D323"
                    />
                </div>
                <div class="px-4 lg:px-0 flex flex-col gap-4">
                    <h2
                        class="text-2xl lg:text-3xl text-secondary font-extrabold"
                    >
                        Dining
                    </h2>

                    <div
                        class="basis-3/5 text-primary-content flex flex-col gap-4"
                    >
                        <p>
                            From the farmhouses in northern Europe, to the
                            penthouses overlooking a cityscape; these dining
                            inspirations drive our designs at Avalon Furniture.
                            Offerings include Dining height, Gathering height
                            and correlated storage and accent pieces. Materials
                            used include various solids and decorative veneers
                            finished in multi steps. Upholstered in easy care
                            fabrics for durability and longevity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </CustomLayout>
</template>
