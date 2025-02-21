<script setup lang="ts">
import { useRouteLocale } from 'vuepress/client';
import { useThemeLocaleData } from '../composables/neoIndex.js';

const routeLocale = useRouteLocale();
const themeLocale = useThemeLocaleData();

const homeLink = themeLocale.value.home ?? routeLocale.value;
const homeText = themeLocale.value.backToHome ?? 'Back to home';
</script>

<template>
    <div class="theme-container pkfrom-container">
        <div class="theme-default-content">
            <div class="pkfrom-info">
                <img src="https://r2-site.feyoudao.cn/404-light.gif" alt="404 error" />
                <!-- end Rabbit -->
                <p class="pkfrom-info__desc">The page you are looking for was moved, removed,<br />
                    renamed or might never existed.</p>
                <RouterLink class="pkfrom-info__btn" :to="homeLink">{{ homeText }}</RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.pkfrom-container {
    min-height: 100vh;
    width: 100%;
    background-color: #eaff6f;
    display: flex;
    justify-content: center;
    align-items: center;

    .pkfrom-info {
        margin-top: -12vh;
        font-family: 'Raleway', Helvetica, Arial, sans-serif;
        font-weight: 300;
        text-align: center;

        &__desc {
            line-height: 1.6rem;
            color: #1b334d;
            margin: 1rem 0;
        }

        &__btn {
            font-size: 18px;
            font-weight: 600;
            color: #ffffff;
            border: 0px solid;
            border-bottom: 2px solid;
            border-color: #ec9228;
            padding: 10px 41px;
            border-radius: 5px;
            background: none;
            text-transform: uppercase;
            display: inline-block;
            background-color: #ffad32;
            transition: all 0.5s ease-in-out;
            text-decoration: none;
            cursor: url('https://r2-site.feyoudao.cn/pointer.cur'), pointer;

            &:hover {
                background: #ec9228;
                color: #ffffff;
                text-decoration: none;
            }
        }
    }
}
</style>