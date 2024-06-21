<script setup>
import Logo from "../assets/images/logo.png";
</script>

<template>
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
            <a class="btn btn-primary">Contact Us</a>
        </div>
    </div>
</template>
