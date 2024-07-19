<script setup>
import { useForm } from "@inertiajs/vue3";
import { defineEmits } from "vue";
const form = useForm({
    name: "",
    email: "",
    phone: "",
    interest: "",
});
const emit = defineEmits(["submitted"]);
const submit_form = () => {
    localStorage.setItem("is_contact_us_submitted", true);
    form.reset();
    emit("submitted");
};
</script>
<template>
    <form
        @submit.prevent="
            form.post('/contacts', {
                onSuccess: submit_form,
            })
        "
        class="bg-base-100 flex flex-col p-4 gap-4 rounded-box shadow-lg w-full max-w-lg mb-8"
    >
        <slot name="default" />
        <div class="form-control">
            <label class="label">
                <span class="label-text text-primary-content">Name</span>
            </label>
            <input
                type="text"
                name="name"
                v-model="form.name"
                placeholder="Your Name"
                class="input input-primary"
            />
            <div class="text-error">
                <span v-if="form.errors.name" v-text="form.errors.name"></span>
            </div>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text text-primary-content">Email</span>
            </label>
            <input
                type="email"
                name="email"
                v-model="form.email"
                placeholder="Your Email"
                class="input input-primary"
            />
            <div class="text-error text-sm">
                <span
                    v-if="form.errors.email"
                    v-text="form.errors.email"
                ></span>
            </div>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text text-primary-content">Phone</span>
            </label>
            <input
                type="tel"
                name="phone"
                v-model="form.phone"
                placeholder="Your Phone"
                class="input input-primary"
            />
            <div class="text-error text-sm">
                <span
                    v-if="form.errors.phone"
                    v-text="form.errors.phone"
                ></span>
            </div>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text text-primary-content"
                    >Interested Product</span
                >
            </label>
            <select
                name="interest"
                class="select select-bordered select-primary"
                v-model="form.interest"
            >
                <option value="">Select</option>
                <option value="bedroom">Bedroom</option>
                <option value="dining">Dining</option>
                <option value="upholstery">Upholstery</option>
            </select>
            <div class="text-error text-sm">
                <span
                    v-if="form.errors.interest"
                    v-text="form.errors.interest"
                ></span>
            </div>
        </div>
        <button type="submit" class="btn btn-primary w-full mt-auto">
            Submit
        </button>
    </form>
</template>
