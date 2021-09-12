<template>
  <svg width="0" height="0" class="hidden">
    <symbol
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12.47 24.94"
      id="arrow"
      class="arrow_svg"
    >
      <title>arrow</title>
      <polygon
        points="0 24.94 0 19.66 7.35 12.47 0 5.92 0 0 12.47 12.47 0 24.94"
      />
    </symbol>
  </svg>
  <header class="header">
    <div class="container">
      <div class="header__logo">
        <img src="@/assets/images/logo/logo.png" alt="チームL" />
      </div>
      <div class="header__name">N・S高生制作サイト</div>
    </div>
  </header>
  <router-view />
  <footer class="footer section bg-color--gray">
    <div class="container">
      <p class="text-center">
        授業主催： N・S高<br />協力：株式会社SCRAP<br />企画制作：N・S高生
      </p>
      <p class="text-center">
        「リアル脱出ゲーム」は株式会社SCRAPの登録商標です。
      </p>
      <p class="text-center">
        株式会社SCRAPとN・S高で実施した授業「リアル脱出ゲームの作り方」の一環で<br />生徒が制作したものであり、SCRAPが主催/公認するものではありません。
      </p>
    </div>
  </footer>
</template>
