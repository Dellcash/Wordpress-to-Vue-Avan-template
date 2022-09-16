<script setup>

</script>

<template>
    <main>
        <section>
            <div class="z8tdq">
                <h1>لطفا آدرس خود را وارد کنید.</h1>
                <div class="f060q">
                    <div class="">
                        <div i-carbon-phone text="red xl" />
                        <h3 text-sm font-bold>۰۹۳۵۳۴۱۷۳۵۲</h3>
                    </div>
                    <div class="">
                        <div i-carbon-email text="red xl" />
                        <h3 text-sm font-bold>omiddellcash@gmail</h3>
                    </div>
                    <div>
                        <div i-carbon-logo-instagram />
                        <div i-carbon-logo-linkedin />
                        <div i-carbon-logo-twitter />
                        <div i-carbon-logo-wechat />
                    </div>
                </div>
            </div>
            <div class="e16yeb">
                <img src="../assets/last.jpg" alt="last photo">
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
main {
    --un-bg-opacity: 1;
    background-color: rgba(229, 238, 246, var(--un-bg-opacity));
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;

    section {
        margin-left: auto;
        margin-right: auto;
        max-width: 420px;
        --un-bg-opacity: 1;
        background-color: rgba(255, 255, 255, var(--un-bg-opacity));

        @screen md {
            max-width: 768px;
        }

        @screen xl {
            max-width: 1170px;
        }

        .z8tdq {
            margin: auto;
            border-bottom-width: 1px;
            border-bottom-style: solid;
            border-color: rgba(191, 219, 254, 0.3);
            padding: 1rem;

            >:not([hidden])~:not([hidden]) {
                --un-space-y-reverse: 0;
                margin-top: calc(1rem * calc(1 - var(--un-space-y-reverse)));
                margin-bottom: calc(1rem * var(--un-space-y-reverse));
            }

            @screen md {
                padding: 1.75rem;
            }

            @screen xl {
                width: 80%;
                padding-top: 2.5rem;
                padding-bottom: 2.5rem;

                >:not([hidden])~:not([hidden]) {
                    --un-space-y-reverse: 0;
                    margin-top: calc(2.5rem * calc(1 - var(--un-space-y-reverse)));
                    margin-bottom: calc(2.5rem * var(--un-space-y-reverse));
                }
            }

            h1 {
                font-size: 1.5rem;
                line-height: 2rem;
                font-weight: 700;

                @screen md {
                    text-align: center;
                }
            }

            .f060q {
                >:not([hidden])~:not([hidden]) {
                    --un-space-y-reverse: 0;
                    margin-top: calc(0.5rem * calc(1 - var(--un-space-y-reverse)));
                    margin-bottom: calc(0.5rem * var(--un-space-y-reverse));
                }

                @screen md {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                div {
                    &:first-child {
                        display: flex;
                        align-items: center;

                        >:not([hidden])~:not([hidden]) {
                            --un-space-x-reverse: 0;
                            margin-left: calc(0.75rem * calc(1 - var(--un-space-x-reverse)));
                            margin-right: calc(0.75rem * var(--un-space-x-reverse));
                            --un-space-x-reverse: 1;
                        }
                    }

                    &:nth-child(2) {
                        display: flex;
                        align-items: center;

                        >:not([hidden])~:not([hidden]) {
                            --un-space-x-reverse: 0;
                            margin-left: calc(0.75rem * calc(1 - var(--un-space-x-reverse)));
                            margin-right: calc(0.75rem * var(--un-space-x-reverse));
                            --un-space-x-reverse: 1;
                        }
                    }

                    &:nth-child(3) {
                        display: none;

                        >:not([hidden])~:not([hidden]) {
                            --un-space-x-reverse: 0;
                            margin-left: calc(0.5rem * calc(1 - var(--un-space-x-reverse)));
                            margin-right: calc(0.5rem * var(--un-space-x-reverse));
                            --un-space-x-reverse: 1;
                        }

                        @screen md {
                            display: flex;
                        }

                        div {
                            font-size: 1.5rem;
                            line-height: 2rem;
                        }
                    }
                }
            }

            .e16yeb {
                padding-left: 1.25rem;
                padding-right: 1.25rem;
                padding-top: 3.75rem;
                padding-bottom: 3.75rem;

                @screen md {
                    padding-top: 1.25rem;
                    padding-bottom: 1.25rem;
                }

                @screen xl {
                    padding-top: 5rem;
                    padding-bottom: 5rem;
                }

                img {
                    height: 20rem;
                    width: 100%;
                    object-fit: cover;

                    @screen xl {
                        width: 50%;
                    }
                }
            }
        }
    }
}
</style>