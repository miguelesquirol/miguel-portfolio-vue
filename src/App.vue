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
            <a class="nav-link js-scroll-trigger" href="#experience">{{ $t('pages.education') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">{{ $t('pages.employment') }}</a>
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
  import TheNavigation from '@/components/TheNavigation'

  export default {
    name: 'app',
    components: {
      TheLanguageSwitcher,
      TheNavigation
    },

    mounted () {
      const $ = this.jquery
      this.$nextTick(() => {
        $('#frontbildtitle').css('top', 100)
        let windowSize = $(window).width()

        if (windowSize > 990) {
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
          $('#sideNav').css('height', '50vh')
          setTimeout(
            function () {
              $('#sideNav').animate({
                height: 56
              }, 500, function () {
                $('#sideNav').css('height', 'auto')
              })
            }, 1500)
        }

        // our custom jQuery code goes here
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

<style>

  /*!
   * Start Bootstrap - Resume v5.0.7 (https://startbootstrap.com/template-overviews/resume)
   * Copyright 2013-2019 Start Bootstrap
   * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
   */

  body {
    font-family: 'Muli', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    padding-top: 54px;
    color: #868e96;
  }

  @media (min-width: 992px) {
    body {
      padding-top: 0;
      padding-left: 17rem;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Saira Extra Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-weight: 700;
    text-transform: uppercase;
    color: #343a40;
  }

  h1 {
    font-size: 6rem;
    line-height: 5.5rem;
  }

  h2 {
    font-size: 3.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  p.lead {
    font-size: 1.15rem;
    font-weight: 400;
  }


  .subheading {
    text-transform: uppercase;
    font-weight: 500;
    font-family: 'Saira Extra Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-size: 1.5rem;
  }

  .social-icons a {
    font-family: fontawesome;
    display: inline-block;
    height: 3.5rem;
    width: 3.5rem;
    background-color: #495057;
    color: #fff !important;
    border-radius: 100%;
    text-align: center;
    font-size: 1.5rem;
    line-height: 3.5rem;
    margin-right: 1rem;
  }

  .social-icons a:last-child {
    margin-right: 0;
  }

  .social-icons a:hover {
    background-color: #BD5D38;
  }

  .dev-icons {
    font-size: 3rem;
  }

  .dev-icons .list-inline-item i:hover {
    color: #BD5D38;
  }

  #sideNav {
    background-image: url("./assets/bg.jpg");
  }

  #sideNav .navbar-nav .nav-item .nav-link {
    font-weight: 800;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: #2f2013;
  }

  #sideNav .navbar-toggler:focus {
    outline-color: #d48a6e;
  }

  @media (max-width: 992px) {
    #sideNav {
      background-size: 100% auto;
      background-position: top right;
      background-repeat: no-repeat;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    #sideNav .navbar-brand span {
      color: #fff !important;
      font-weight: bold;

    }
  }

  @media (min-width: 992px) {
    #sideNav {
      text-align: center;
      position: fixed;
      top: 0;
      left: 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 17rem;
      height: 100vh;
      background-size: auto 100%;
    }

    #sideNav .navbar-brand {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin: auto auto 0 0;
      padding: 0.5rem;
      width: 100%;
      color: #70252a !important;
    }


    #sideNav .navbar-brand .img-profile {
      max-width: 10rem;
      max-height: 10rem;
      border: 0.5rem solid rgba(255, 255, 255, 0.2);
    }

    #sideNav .navbar-collapse {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
      -webkit-box-flex: 0;
      -ms-flex-positive: 0;
      flex-grow: 0;
      width: 100%;
      margin-bottom: auto;
      flex-direction: column;
    }

    #sideNav .navbar-collapse .navbar-nav {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
    }

    #sideNav .navbar-collapse .navbar-nav .nav-item {
      display: block;
    }

    #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
      display: block;
    }
  }

  section.resume-section {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
    max-width: 75rem;
  }

  section.resume-section .resume-item .resume-date {
    min-width: none;
  }

  @media (min-width: 768px) {
    section.resume-section {
      min-height: 100vh;
    }

    section.resume-section .resume-item .resume-date {
      min-width: 18rem;
    }
  }

  @media (min-width: 992px) {
    section.resume-section {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
  }

  .bg-primary {
    background-color: #BD5D38 !important;
  }

  .text-primary {
    color: #BD5D38 !important;
  }

  a {
    color: #BD5D38;
  }

  a:hover, a:focus, a:active {
    color: #824027;
  }
</style>
