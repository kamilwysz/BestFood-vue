<template>
    <MainHeader />
    <MobileHeader />
    <slot></slot>
    <MainFooter />
</template>
<script setup>
import MainHeader from './MainHeader.vue';
import MobileHeader from './MobileHeader.vue';
import MainFooter from './MainFooter.vue';

// components: { MainHeader, MainFooter, MobileHeader }

</script>