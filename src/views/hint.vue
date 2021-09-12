<template>
  <main class="main hint-page">
    <!-- タイトルエリアここから -->
    <h1 class="main-title">
      <img
        src="@/assets/images/main-image.png"
        alt="封鎖された家庭科室からの脱出"
      />
    </h1>
    <!-- タイトルエリアここまで -->
    <section class="section">
      <div class="container">
        <div class="box bg-color--subcolor">
          <h2 class="section-title--border">ヒント集</h2>
          <p class="text-center">
            ちょっと難しかったですか？<br />
            謎のヒントと答えは下記から確認できます。
          </p>
        </div>
      </div>
    </section>
    <!-- STAGE1ヒントここから -->
    <section id="stage1" class="section bg-color--gray">
      <div class="container">
        <h2 class="section-title section-title--keycolor">
          STAGE：{{ stage }}
        </h2>
        <div class="row">
          <div class="column">
            <div class="card" :class="{ 'is-open': isOpen['hint'] }">
              <h3 class="card__title" @click="this.cardToggle('hint')">
                ヒント<svg class="card__arrow">
                  <use xlink:href="#arrow"></use>
                </svg>
              </h3>
              <p class="card__content">{{ hint }}</p>
            </div>
          </div>
          <div class="column">
            <div class="card" :class="{ 'is-open': isOpen['answer'] }">
              <h3 class="card__title" @click="this.cardToggle('answer')">
                答え<svg class="card__arrow">
                  <use xlink:href="#arrow"></use>
                </svg>
              </h3>
              <p class="card__content">{{ answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- STAGE1ヒントここまで -->
  </main>
</template>

<script>
export default {
  name: "hint",
  props: {
    stage: {
      type: String,
      required: true,
    },
    hint: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: {
        hint: false,
        answer: false,
      },
    };
  },
  methods: {
    cardToggle(card) {
      this.isOpen[card] = !this.isOpen[card];
    },
  },
};
</script>

<style scoped></style>
