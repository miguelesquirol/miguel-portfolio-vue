<template>
  <form
    class="LanguageSwitcher"
    name="language"
    @change="changeLanguage"
  >
    <ul class="language-selector">
      <li v-for="lang in supportedLanguages" :key="lang">
        <input type="radio" :click="isCurrentLanguage(lang)" :class="{ 'is-selected': isCurrentLanguage(lang) }"
               :value="lang"
               :name="lang"
               :id="lang"
               v-model="picked"
        >
        <label :for="lang">{{lang}}</label>
      </li>
    </ul>
  </form>
</template>
<script>
  import {Trans} from '@/plugins/Translation'

  export default {
    data () {
      return {
        content: this.value,
        picked: 'en'
      }
    },
    computed: {
      supportedLanguages () {
        return Trans.supportedLanguages
      },
      currentLanguage () {
        return Trans.currentLanguage
      }
    },
    methods: {
      changeLanguage (e) {
        const lang = e.target.value
        const to = this.$router.resolve({params: {lang}})
        return Trans.changeLanguage(lang).then(() => {
          this.$router.push(to.location)
        })
      },
      isCurrentLanguage (lang) {
        return lang === this.currentLanguage
      }
    }
  }
</script>

