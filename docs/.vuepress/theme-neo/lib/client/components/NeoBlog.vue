<template>
    <main class="home-blog">
        <div class="hero" :style="{ 'background-image': bgImagePath }">
            <div v-if="bgImageMask" class="hero-mask" :style="{ background: bgImageMask }" />

            <div class="hero-content" :style="{ opacity: headerOpacity }">
                <img class="hero-avatar hide-on-mobile no-zoom" :src="withBase(homeHeaderInfo.avatar)" alt="hero"
                    @mouseover="fetchHitokoto" />

                <div v-if="hitokotoAPI" class="hero-bubble">
                    <div class="hero-bubble__body">
                        <p>{{ hitokotoText }}</p>
                    </div>
                    <div class="hero-bubble__title" />
                </div>

                <div class="hero-info">
                    <h1>{{ homeHeaderInfo.name }}</h1>
                    <p class="description">
                        {{ homeHeaderInfo.description }}
                    </p>
                </div>
                <button class="hero-img-prev hide-on-mobile" @click="switchImage(-1)">
                    <NeoIcon icon="neo-zuojiantou" size="26" />
                </button>
                <button class="hero-img-next hide-on-mobile" @click="switchImage(1)">
                    <NeoIcon icon="neo-youjiantou" size="26" />
                </button>
                <span class="hero-arrow-down hide-on-mobile" @click="scrollToPost()">
                    <NeoIcon icon="neo-xiangxiajiantou" size="60" color="rgba(255,255,255,0.8)" />
                </span>
            </div>
        </div>
        <NeoBubbles selectRef=".hero" />
    </main>
    <NeoBlogLayout>
        <template #content-left>
            <NeoPostList mode="article" :perPage="perPage" :offsetTop="offsetTop" :currentPage="currentPage" />
            <NeoPagination :total="total" :perPage="perPage" :currentPage="currentPage" @getCurrentPage="handlePagination"
                v-show="Math.ceil(total / perPage) > 1" />
        </template>
    </NeoBlogLayout>
</template>

<script setup lang="ts">
import { withBase } from 'vuepress/client';
import { useRoute } from 'vuepress/client';;
import { computed, onMounted, ref, inject } from 'vue';
import { useThemeLocaleData } from '../composables/neoIndex.js';
// @ts-ignore
import NeoBubbles from '@theme/NeoBubbles.vue';
// @ts-ignore
import NeoPostList from '@theme/NeoPostList.vue';
// @ts-ignore
import NeoBlogLayout from '@theme/NeoBlogLayout.vue';
// @ts-ignore
import NeoPagination from '@theme/NeoPagination.vue';
// @ts-ignore
const sortPostsSymbol = inject('sortPostsSymbol').value;

const themeLocale = useThemeLocaleData();
const bgImages = themeLocale.value.homeHeaderImages;

const bgImageIndex = ref(-1);
const headerOpacity = ref(1);
// -------- Pagination --------
const route = useRoute();
let total = ref(0); // 总长
let perPage = ref(10); // 每页长
let currentPage = ref(1); // 当前页
let offsetTop = ref(0); // 一屏的高度
total.value = sortPostsSymbol.length;
function handlePagination(page) {
    currentPage.value = page;
}
// -------- Scroll --------
const scrollToPost = () => {
    window.scrollTo({
        top: offsetTop.value,
        behavior: 'smooth',
    });
};

// -------- Hitokoto --------
const hitokotoAPI = themeLocale.value?.homeHitokotoApi ?? true;
const hitokotoText = ref('正在加载一言...');
let hasFetchedHitokoto = false;

const fetchHitokoto = () => {
    if (!hitokotoAPI || hasFetchedHitokoto) return;
    hasFetchedHitokoto = true;

    let api = hitokotoAPI;
    api = typeof api === 'string' ? api : 'https://v1.hitokoto.cn';
    fetch(api)
        .then((response) => response.json())
        .then((data) => (hitokotoText.value = data.hitokoto))
        .catch((error) => {
            console.log(`Get ${api} error: `, error);
        });
};

onMounted(() => {
    fetchHitokoto();
    // -------- 刷新页面时，获取当前页 --------
    let { p = 1 } = route.query;
    currentPage.value = Number(p);
    // -------- 去除首页一屏的高度 --------
    offsetTop.value = (
        document.querySelector('.home-blog') as HTMLElement
    )?.clientHeight;

    if (bgImages && bgImages.length > 0)
        bgImageIndex.value = Math.floor(Math.random() * bgImages.length);
});

// -------- Header images --------

const switchImage = (n: number) => {
    if (!(bgImages && bgImages.length > 0)) return;
    const len = bgImages.length;
    bgImageIndex.value = (bgImageIndex.value + n + len) % len;
};

const bgImagePath = computed(() => {
    return bgImages && bgImages.length > 0 && bgImageIndex.value !== -1
        ? `url(${withBase(bgImages[bgImageIndex.value].path)})`
        : 'none';
});

const bgImageMask = computed(() => {
    return bgImages && bgImages.length > 0 && bgImageIndex.value !== -1
        ? bgImages[bgImageIndex.value].mask
        : null;
});

// -------- Other configs --------

const homeHeaderInfo = themeLocale.value.homeHeaderInfo;
</script>
<style lang="scss" scoped>
@use '../styles/variables' as *;;

.home-blog {
    padding: 0;
    margin: 0 auto;

    .hero {
        margin: 0 auto;
        position: relative;
        box-sizing: border-box;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        overflow: hidden;
        background-position: center;
        background-size: cover;

        .hero-mask {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 1;
        }

        .hero-content {
            z-index: 2;
            // width: 36%;
            max-width: 600px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .hero-avatar {
                width: 120px;
                height: 120px;
                cursor: auto;
                padding: 5px;
                border-radius: 100%;
                box-shadow: inset 0 0 10px #000;

                &:hover {
                    transform: rotate(360deg);
                    transition: all ease 1s;
                }

                &:hover+.hero-bubble {
                    opacity: 1;
                }
            }

            @keyframes bounce-down {
                from {
                    transform: translateY(-5px);
                }

                to {
                    transform: translateY(5px);
                }
            }

            .hero-bubble {
                opacity: 0;
                position: absolute;
                left: 50%;
                margin-left: 100px;
                top: 50%;
                margin-top: -200px;

                // float up and down
                animation-name: bounce-down;
                animation-duration: 2s;
                animation-timing-function: ease-in-out;
                animation-iteration-count: infinite;
                animation-direction: alternate;

                &__body {
                    min-width: 150px;
                    max-width: 260px;
                    min-height: 80px;
                    background: rgba(0, 0, 0, 0.5);
                    border-radius: 10px;

                    p {
                        font-size: 15px;
                        padding: 10px 20px;
                        color: white;
                        text-align: left;
                        line-height: 1.7;
                    }
                }

                &__title {
                    position: absolute;
                    content: '';
                    margin-left: -23px;
                    top: 0;
                    margin-top: 60px;
                    width: 23px;
                    height: 44px;
                    border-width: 0;
                    border-style: solid;
                    border-top-width: 20px;
                    border-radius: 56px 0 0 0;
                    color: rgba(0, 0, 0, 0.5);
                }
            }

            .hero-info {
                background: rgba(0, 0, 0, 0.5);
                width: 100%;
                padding: 17px;
                letter-spacing: 0;
                border-radius: 10px;
                box-sizing: initial;
                white-space: nowrap;
                margin-top: 20px;
                color: white;

                h1 {
                    display: block;
                    font-size: 25px;
                    line-height: 20px;
                    margin-top: 0;
                }

                p {
                    font-size: 18px;
                    font-weight: 300;
                    line-height: 15px;
                    margin-bottom: 0;
                }
            }

            .sns-wrapper {
                margin-top: 10px;
            }

            .hero-img-prev,
            .hero-img-next {
                cursor: url('https://r2-site.feyoudao.cn/pointer.cur'), pointer;
                position: absolute;
                top: 50%;
                margin-top: -30px;
                width: auto;
                padding: 15px 4px;
                color: rgba(255, 255, 255, 0.6);
                background-color: rgba(0, 0, 0, 0.3);
                border: none;
                outline: none;
                transition: 0.6s ease;

                &:hover {
                    color: white;
                    background-color: rgba(0, 0, 0, 0.6);
                }
            }

            .hero-img-prev {
                left: 0;
                border-radius: 0 3px 3px 0;
            }

            .hero-img-next {
                right: 0;
                border-radius: 3px 0 0 3px;
            }

            .hero-arrow-down {
                position: absolute;
                bottom: 20px;
                left: 50%;
                margin-left: -12px;
                cursor: url('https://r2-site.feyoudao.cn/pointer.cur'), pointer;

                .font-icon {
                    width: 30px;
                    margin: -15px 0;
                    animation-name: bounce-down;
                    animation-duration: 1.5s;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    animation-direction: alternate;
                }
            }
        }
    }
}

@media (min-width: $MQNarrow) {
    .home-blog .hero {
        background-attachment: fixed;
    }
}

@media (max-width: $MQNarrow) {
    .home-blog {
        padding-bottom: 0;

        .hide-on-mobile {
            display: none;
        }

        .hero {
            height: auto !important;
            padding: 150px 0;

            .hero-info {
                background: transparent !important;
                width: auto !important;
                position: relative !important;

                &__text h1 {
                    font-size: 80px !important;
                }
            }
        }

        .home-blog-wrapper {
            padding: 0 13px 0 14px;
        }
    }
}

@media (max-width: $MQMobile) {
    .home-blog .hero {
        padding: 80px 0 60px;

        .hero-mask {
            height: calc(100% + 1.2rem);
        }

        .hero-info__text h1 {
            font-size: 50px !important;
        }
    }
}
</style>
