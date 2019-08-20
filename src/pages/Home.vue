<template>
  <div class="hello">
    <div class="container-fluid p-0">

      <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div class="w-100">
          <h1 class="mb-0">{{ $t('name') }}
            <span class="text-primary">{{ $t('lastname') }}</span>
          </h1>
          <div class="subheading mb-5">{{ $t('phone') }} | {{ $t('languages') }} |
            <a href="mailto:miguelesquirol@gmail.com">{{ $t('email') }}</a>
          </div>
          <p class="lead mb-5">{{ $t('welcome_message') }}</p>
          <div class="social-icons">
            <a href="https://www.linkedin.com/in/miguel-esquirol-94289337/">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/miguelesquirol">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/miguelesquirol">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/miguelesquirol">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>

      <hr class="m-0">

      <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div class="w-100">
          <h2 class="mb-5">{{ $t('employment.title-section') }}</h2>

          <div v-for="index in 4" :key="index">
            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="resume-content">
                <h3 class="mb-0">{{ $t('employment.company'+index+'.title') }}</h3>
                <div class="subheading mb-3">{{ $t('employment.company'+index+'.name') }}</div>
                <p v-html=" $t('employment.company'+index+'.description') "></p>
                <div class="skills">

                  <a v-for="index in $t('employment.company'+index+'.stack')" :title="$t(index)">
                    <i class="fab" :class="'fa-' + $t(index).toLowerCase()"></i>
                  </a>

                </div>
              </div>

            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
              <h3 class="mb-0">{{ $t('other-employment.title') }}</h3>
              <p v-html=" $t('other-employment.description') "></p>

            </div>

          </div>

        </div>

      </section>
      <hr class="m-0">

      <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="education">
        <div class="w-100">
          <h2 class="mb-5">{{ $t('education.title-section') }}</h2>

          <div v-for="index in 3" :key="index">
            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="resume-content">
                <h3 class="mb-0">{{ $t('education.school'+index+'.school') }}</h3>
                <div class="subheading mb-3">{{ $t('education.school'+index+'.title') }}</div>
                <div>
                  {{ $t('education.school'+index+'.year') }}
                </div>
              </div>

            </div>
          </div>

        </div>

      </section>

      <hr class="m-0">

      <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="skills">
        <div class="w-100">
          <h2 class="mb-5">{{ $t('skills.title-section') }}</h2>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
              <div v-html=" $t('skills.description') "></div>


              <ul class="skills">
                <li v-for="index in $t('skills.programming')">
                  {{ $t(index) }}
                </li>
              </ul>


            </div>

          </div>

        </div>

      </section>

      <hr class="m-0">


      <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="interests">
        <div class="w-100">
          <h2 class="mb-5">{{ $t('interests.title-section') }}</h2>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
              <p v-html=" $t('interests.description') "></p>

            </div>

          </div>

        </div>

      </section>


    </div>

  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

