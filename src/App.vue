<template>
  <div id="app">

    <router-view/>


    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">{{ $t('name') }} {{ $t('lastname') }}</span>
        <span class="d-none d-lg-block">
        <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="./assets/profile.jpg" alt="">
      </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about"> {{ $t('pages.about') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">{{ $t('pages.employment') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">{{ $t('pages.education') }}</a>
          </li>

          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">{{ $t('pages.skills') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests">{{ $t('pages.interests') }}</a>
          </li>
        </ul>
        <div class="language w-100">
          <TheLanguageSwitcher/>
        </div>
      </div>

    </nav>

  </div>


</template>

<script>
  import TheLanguageSwitcher from '@/components/TheLanguageSwitcher'

  export default {
    name: 'app',
    components: {
      TheLanguageSwitcher
    },

    mounted () {
      const $ = this.jquery
      this.$nextTick(() => {
        $('#frontbildtitle').css('top', 100)
        let windowSize = $(window).width()

        if (windowSize > 1024) {
          $('#sideNav').css('width', '100vw')
          setTimeout(
            function () {
              $('#sideNav').animate({
                width: 272
              }, 500, function () {
                // Animation complete.
              })
            }, 1500)
        } else {
          $('#sideNav').css('height', '100vh')
          setTimeout(
            function () {
              $('#sideNav').animate({
                height: 56
              }, 500, function () {
                $('#sideNav').css('height', 'auto')
              })
            }, 1500)
        }
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
          if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash)
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
            if (target.length) {
              $('html, body').animate({
                scrollTop: (target.offset().top)
              }, 1000, 'easeInOutExpo')
              return false
            }
          }
        })

        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').click(function () {
          $('.navbar-collapse').collapse('hide')
        })

        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
          target: '#sideNav'
        })
      })
    }
  }
</script>

<style lang="scss">
  @import './scss/style.scss';
</style>
