<script setup>
import Logo from "../assets/images/logo.png";
import { ref } from "vue";
const is_contact_us_open = ref(false);
</script>

<template>
    <div
        v-if="is_contact_us_open"
        class="w-screen fixed h-screen flex justify-center items-center bg-base-content/50"
    >
        <form
            v-on:submit.prevent="is_contact_us_open = !is_contact_us_open"
            class="bg-base-100 flex flex-col p-4 rounded-box shadow-lg w-full max-w-lg h-96"
            action=""
            method="POST"
        >
            <div class="text-xl flex justify-between w-full">
                <h3>Fill details to browse products</h3>
                <svg
                    @click="is_contact_us_open = !is_contact_us_open"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-primary-content cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text text-primary-content">Name</span>
                </label>

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    class="input input-primary"
                />
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text text-primary-content">Email</span>
                </label>

                <input
                    type="email"
                    name="_replyto"
                    placeholder="Your Email"
                    class="input input-primary"
                />
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text text-primary-content">Phone</span>
                </label>

                <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    class="input input-primary"
                />
            </div>

            <!-- Submit -->
            <button type="submit" class="btn btn-primary w-full mt-auto">
                Submit
            </button>
        </form>
    </div>
    <div class="navbar bg-base-100 lg:px-32">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </div>
                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li><RouterLink to="/">Home</RouterLink></li>
                    <li><RouterLink to="about-us">About Us</RouterLink></li>
                    <li>
                        <a>Our Products</a>
                        <ul class="p-2">
                            <li>
                                <RouterLink to="/bedroom">Bedroom</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/dining">Dining</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/upholstery"
                                    >Upholstery</RouterLink
                                >
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <RouterLink to="/">
                <img :src="Logo" class="h-8 lg:h-12" alt="Logo" />
            </RouterLink>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal text-xl px-1">
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="about-us">About Us</RouterLink></li>
                <li>
                    <details>
                        <summary>Our Products</summary>
                        <ul class="p-2">
                            <li>
                                <RouterLink to="/bedroom">Bedroom</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/dining">Dining</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/upholstery"
                                    >Upholstery</RouterLink
                                >
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
        <div class="navbar-end">
            <button
                @click="is_contact_us_open = !is_contact_us_open"
                class="btn btn-primary"
            >
                Contact Us
            </button>
        </div>
    </div>
</template>
