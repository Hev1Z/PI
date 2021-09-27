<template>
    <div class="container">
        <div class="row ">
            <div class="col-md-12">
                <h1 class="text-center title">
                    Удмуртский Государственный Университет
                    <br />
                    Институт нефти и газа имени М. С. Гуцериева
                </h1>
            </div>
            <div class="col-md-12">
                <b-carousel
                    id="carousel-1"
                    v-model="slide"
                    :interval="4000"
                    class="ff"
                    controls
                    indicators
                    background="#ababab"
                    img-width="1024"
                    img-height="480"
                    style="text-shadow: 1px 1px 2px #333;"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                >
                    <!-- Four slide -->
                    <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                    <b-carousel-slide>
                        <template #img>
                            <img
                                class="d-block img-fluid w100 ff"
                                src="http://nat922.narod.ru/house/iz1_resize.jpg"
                                alt="image slot"
                            />
                        </template>
                    </b-carousel-slide>

                    <b-carousel-slide>
                        <template #img>
                            <img
                                class="d-block img-fluid w100 ff"
                                src="/static/4.jpg"
                                alt="image slot"
                            />
                        </template>
                    </b-carousel-slide>

                    <b-carousel-slide>
                        <template #img>
                            <img
                                class="d-block img-fluid w100 ff"
                                src="/static/5.jpg"
                                alt="image slot"
                            />
                        </template>
                    </b-carousel-slide>
                </b-carousel>
            </div>
            <div class="col-md-12">
                <div class="text card ">
                    <p class="col-md-12">
                        Текст (от лат. textus — ткань; сплетение, сочетание) —
                        зафиксированная на каком-либо материальном носителе
                        человеческая мысль; в общем плане связная и полная
                        последовательность символов. Существуют две основные
                        трактовки понятия «текст»: имманентная (расширенная,
                        философски нагруженная) и репрезентативная (более
                        частная). Имманентный подход подразумевает отношение к
                        тексту как к автономной реальности, нацеленность на
                        выявление его внутренней структуры. Репрезентативный —
                        рассмотрение текста как особой формы представления
                        информации о внешней тексту действительности. В
                        лингвистике термин «текст» используется в широком
                        значении, включая и образцы устной речи. Восприятие
                        текста изучается в рамках лингвистики текста и
                        психолингвистики. Так, например, И. Р. Гальперин
                        определяет текст следующим образом: «Это письменное
                        сообщение, объективированное в виде письменного
                        документа, состоящее из ряда высказываний, объединённых
                        разными типами лексической, грамматической и логической
                        связи, имеющее определённый моральный характер,
                        прагматическую установку и соответственно литературно
                        обработанное»[1].
                    </p>
                </div>
            </div>
            <div class="col-md-12 ">
                <VueRssFeed
                    class=""
                    :feedUrl="feedUrl"
                    :name="name"
                    :limit="limit"
                />
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import VueRssFeed from "vue-rss-feed/src/VueRssFeed";
export default {
    data() {
        return {
            slide: 0,
            sliding: null,
            news: null,
            feedUrl: "http://lenta.ru/rss",
            name: "",
            limit: 6
        };
    },
    components: {
        VueRssFeed
    },
    methods: {
        onSlideStart() {
            this.sliding = true;
        },
        onSlideEnd() {
            this.sliding = false;
        }
    },
    mounted() {
        axios
            .get("http://lenta.ru/rss")
            .then(response => (this.news = response));
    }
};
</script>
<style>
.title {
    color: rgb(0, 0, 0);
    width: 100%;
    margin: 15px 0 20px;
}
.text {
    margin-top: 2%;
    text-indent: 1%;
}
.news {
    margin-top: 2%;
    text-indent: 1%;
    width: 50%;
}
.ff {
    min-height: 480px;
    margin: auto;
}
</style>
