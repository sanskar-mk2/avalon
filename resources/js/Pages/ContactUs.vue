<script setup>
import CustomLayout from "@/Layouts/CustomLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";
import ContactForm from "@/Components/ContactForm.vue";
const props = defineProps({
    success: {
        type: String,
        required: false,
        default: "",
    },
});
</script>

<template>
    <Head title="Contact Us" />

    <CustomLayout>
        <div class="lg:px-32 flex flex-col lg:flex-row lgw-full mb-4">
            <div class="lg:basis-1/2 flex flex-col items-center">
                <h2
                    class="lg:self-start text-2xl lg:text-3xl text-secondary font-extrabold my-8"
                >
                    Contact Us
                </h2>

                <ContactForm show_message_textbox="true" />
            </div>

            <div class="flex flex-col lg:basis-1/2 gap-8">
                <div class="shadow-lg p-4">
                    <h2 class="text-xl font-semibold mb-2">Houston</h2>
                    <p>6900 Overmyer Dr.</p>
                    <p>Houston, TX 77008</p>
                    <p>713-747-1167</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.5057252905356!2d-95.42133508489!3d29.793805981967592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c6e7c4af2711%3A0xd13f1e07e0f74a47!2s6900%20Overmyer%20Dr%2C%20Houston%2C%20TX%2077008!5e0!3m2!1sen!2sus!4v1626288287646!5m2!1sen!2sus"
                        width="100%"
                        height="300"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>
                <div class="shadow-lg p-4">
                    <h2 class="text-xl font-semibold mb-2">
                        High Point Showroom
                    </h2>
                    <p>The Atrium - Suite 100,</p>
                    <p>430 South Main St.</p>
                    <p>High Point, NC 27260</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.40548388845!2d-80.00580668465043!3d35.95537968013396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8853e78f26c481e5%3A0x2e7b6f8c9e8f7f7a!2s430%20S%20Main%20St%2C%20High%20Point%2C%20NC%2027260!5e0!3m2!1sen!2sus!4v1626288366486!5m2!1sen!2sus"
                        width="100%"
                        height="300"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    </CustomLayout>
</template>
