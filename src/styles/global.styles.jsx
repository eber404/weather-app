import { createGlobalStyle } from 'styled-components'

import NeueHaasDisplayLight from '@/assets/fonts/neue-haas/NeueHaasDisplayLight.ttf'
import NeueHaasDisplayRoman from '@/assets/fonts/neue-haas/NeueHaasDisplayRoman.ttf'
import NeueHaasDisplayMedium from '@/assets/fonts/neue-haas/NeueHaasDisplayMedium.ttf'
import NeueHaasDisplayBold from '@/assets/fonts/neue-haas/NeueHaasDisplayBold.ttf'

import TTCommonsLight from '@/assets/fonts/tt-commons/TTCommonsLight.otf'
import TTCommonsRegular from '@/assets/fonts/tt-commons/TTCommonsRegular.otf'
import TTCommonsMedium from '@/assets/fonts/tt-commons/TTCommonsMedium.otf'
import TTCommonsBold from '@/assets/fonts/tt-commons/TTCommonsBold.otf'

export const GlobalStyle = createGlobalStyle`
// config font Neue Haas Display
@font-face {
  font-family: 'NeueHaasDisplay';
  src: local('NeueHaasDisplay'), url(${NeueHaasDisplayLight}) format('truetype');
  font-weight: 300;
  font-style: normal;

@font-face {
  font-family: 'NeueHaasDisplay';
  src: local('NeueHaasDisplay'), url(${NeueHaasDisplayRoman}) format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'NeueHaasDisplay';
  src: local('NeueHaasDisplay'), url(${NeueHaasDisplayMedium}) format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'NeueHaasDisplay';
  src: local('NeueHaasDisplay'), url(${NeueHaasDisplayBold}) format('truetype');
  font-weight: 700;
  font-style: normal;
}

// config font TTCommons
@font-face {
  font-family: 'TTCommons';
  src: local('TTCommons'), url(${TTCommonsLight}) format('opentype');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'TTCommons';
  src: local('TTCommons'), url(${TTCommonsRegular}) format('opentype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'TTCommons';
  src: local('TTCommons'), url(${TTCommonsMedium}) format('opentype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'TTCommons';
  src: local('TTCommons'), url(${TTCommonsBold}) format('opentype');
  font-weight: 700;
  font-style: normal;
}


*, *::before, *::after {
  box-sizing: border-box;
}

html {
  margin: 0;
  padding: 0;
  font-family: 'NeueHaasDisplay', 'TTCommons', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
