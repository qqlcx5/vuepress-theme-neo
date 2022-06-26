<template>

    <main class="main-wrapper">
        <div class="main-left">
            <slot name="mainLeft" />
        </div>

        <div class="main-right">
            <slot name="mainRight" />
        </div>
    </main>
</template>
<style lang="scss">
@import '../styles/_variables';

.custom-page {
    padding-top: var(--navbar-height);
    padding-bottom: 2rem;
}
.main-wrapper {
    max-width: $homePageWidth;
    padding: 0.9rem;
    margin: 0 auto;
    position: relative;
    display: flex;
    .main-left {
        flex: 1;
    }
    .main-right {
        > * {
            width: 245px;
            @media (max-width: 900px) {
                width: 235px;
            }
        }
        .card-box {
            margin: 0 0 0.9rem 0.9rem;
            padding-top: 0.95rem;
            padding-bottom: 0.95rem;
        }
    }
}
// 719px以下
@media (max-width: $MQMobile) {
    .main-wrapper {
        padding: 0.9rem;
        display: block;
        .main-left {
            width: 100%;
            .post-list {
                margin-bottom: 3rem;
                .post {
                    border-radius: 0;
                }
            }
            .pagination {
                margin-bottom: 3rem;
            }
        }
        .main-right {
            .blogger-wrapper {
                display: none;
            }
            .card-box {
                margin: 0 0 0.9rem 0;
                border-radius: 0;
                width: 100%;
            }
        }
    }
}
</style>
