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

<style>
 .language-selector {
    list-style-type: none;
    margin: 25px 0 0 0;
    padding: 0;
   display: flex;
   flex-wrap: nowrap;
   width: 244px;
  }

  .language {
    width: 100%;
    text-align: left;
    font-weight: 800;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: #2f2013;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }

  .LanguageSwitcher {
    margin-bottom: 1rem;
  }



  .language-selector li {
    float: left;
    margin: 0 5px 0 0;
    width: 100px;
    height: 40px;
    position: relative;
    text-align: center;
  }

  .language-selector label, .language-selector input {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .language-selector input[type="radio"] {
    opacity: 0.01;
    z-index: 100;
  }

  .language-selector input[type="radio"]:checked + label,
  .Checked + label {
    background: #2f2013;
    color: #fff;
    border: 1px solid #2f2013;

  }

  .language-selector label {
    padding: 5px;
    background: rgba(255, 255, 255, 0.48);
    border: 1px solid #CCC;
    cursor: pointer;
    z-index: 90;
  }

  .language-selector label:hover {
    background: #DDD;
  }
</style>
