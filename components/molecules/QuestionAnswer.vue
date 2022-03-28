<template>
  <v-row justify="center">
    <v-expansion-panels inset>
      <v-expansion-panel>
        <v-expansion-panel-header>
            <v-col style="white-space:pre-wrap; word-wrap:break-word;" cols="12" class="faq-header secondary--text text-h6 text-md-h6 font-weight-black" v-text="question"></v-col>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-col style="white-space:pre-wrap; word-wrap:break-word;" cols="12" class="faq-content" v-text="answer"> </v-col>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>

</template>

<script scoped>
export default {
  name: 'QuestionAnswer',
  props: {
    question: {
      type: String,
      default: '部活に必要な費用はどれくらいですか?'
    },
    answer: {
      type: String,
      default: "選手とマネージャーで異なります！\n選手の主に必要な費用は次の通りです。\n\n・部費：4000円(3か月に1回)\n・合宿費：45000円程度\n・学連登録費：8000円程度(どの都道府県で登録するかによって多少異なる)\n・衣類：ユニフォーム約9300円 / 部ジャージ約22000円 / 部ウィンドブレーカー約23000円\n・その他：試合参加費(種目・記録会によって異なる)・練習場所や試合会場までの交通費・競技場使用費\n\n\nマネージャーの主に必要な費用は次の通りです。\n・部費：0円\n・合宿費：45000円程度\n・衣類：部ウィンドブレーカー　23000円程度\n・その他：練習場所や試合会場までの交通費\n"

    },
  },
  data: () => ({}),
  computed: {},
}
</script>

<style lang="scss" scoped>
.faq-header:before {
  background-color: #9d359d
;
  content: 'Q';
  margin-bottom: 2px;
}
.faq-content:before {
  background-color: #359d41;
  content:  "A";
  margin-bottom: 32px;
}
.faq-content:before,
.faq-header:before {
  display: inline-flex;
  float: left;
  width: 40px;
  height: 40px;
  font-size: 28px;
  color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  margin-right: 10px;
}
</style>