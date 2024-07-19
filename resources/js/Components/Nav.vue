<script setup>
import Logo from "../../images/logo.png";
import { ref, onMounted, watch } from "vue";
import { Link, usePage } from "@inertiajs/vue3";
import ContactForm from "@/Components/ContactForm.vue";
import AlertSuccess from "@/Components/AlertSuccess.vue";
import AlertError from "@/Components/AlertError.vue";
import AlertWarning from "@/Components/AlertWarning.vue";
import AlertInfo from "@/Components/AlertInfo.vue";
const is_contact_us_open = ref(false);

const page = usePage();
const is_alert_open = ref(false);

const submit_contact_us = () => {
    is_contact_us_open.value = false;
};

const desktop_menu = ref(null);
const mobile_menu = ref(null);

const hide_alert = () => {
    is_alert_open.value = false;
};

const start_alert_timer = () => {
    is_alert_open.value = true;
    setTimeout(hide_alert, 3000);
};

watch(
    () => page.props.flash,
    (new_flash) => {
        if (new_flash.success || new_flash.error || new_flash.warning || new_flash.info) {
            start_alert_timer();
        }
    }
);

onMounted(() => {
    if (["bedroom", "dining", "upholstery"].includes(route().current())) {
        if (!localStorage.getItem("is_contact_us_submitted")) {
            is_contact_us_open.value = true;
        }
    }

    if (page.props.flash.success || page.props.flash.error || page.props.flash.warning || page.props.flash.info) {
        start_alert_timer();
    }
});
</script>

<template>
    <div
        v-if="is_contact_us_open"
        class="z-50 w-screen fixed h-screen flex justify-center items-center bg-base-content/50"
    >
        <ContactForm @submitted="submit_contact_us">
            <div class="text-xl flex justify-between w-full">
                <h3>Fill details to browse products</h3>
                <Link :href="route('home', { 'from-products': 1 })">
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
                </Link>
            </div>
        </ContactForm>
    </div>
    <div v-if="is_alert_open" class="z-50 fixed flex w-full p-6">
        <AlertSuccess v-if="$page.props.flash.success">
            {{ $page.props.flash.success }}
        </AlertSuccess>
        <AlertError v-if="$page.props.flash.error">
            {{ $page.props.flash.error }}
        </AlertError>
        <AlertWarning v-if="$page.props.flash.warning">
            {{ $page.props.flash.warning }}
        </AlertWarning>
        <AlertInfo v-if="$page.props.flash.info">
            {{ $page.props.flash.info }}
        </AlertInfo>
    </div>
    <div class="navbar bg-base-100 lg:px-32">
        <div class="navbar-start" ref="mobile_menu">
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
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about-us">About Us</Link></li>
                    <li>
                        <a ref="products">Our Products</a>
                        <ul class="p-2">
                            <li>
                                <Link href="/bedroom">Bedroom</Link>
                            </li>
                            <li>
                                <Link href="/dining">Dining</Link>
                            </li>
                            <li>
                                <Link href="/upholstery">Upholstery</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <Link href="/">
                <img :src="Logo" class="h-8 lg:h-12" alt="Logo" />
            </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal text-xl px-1">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li>
                    <details>
                        <summary ref="desktop_menu">Our Products</summary>
                        <ul class="p-2">
                            <li>
                                <Link href="/bedroom">Bedroom</Link>
                            </li>
                            <li>
                                <Link href="/dining">Dining</Link>
                            </li>
                            <li>
                                <Link href="/upholstery">Upholstery</Link>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
        <div class="navbar-end">
            <Link href="/contact-us" class="btn btn-primary"> Contact Us </Link>
        </div>
    </div>
</template>
