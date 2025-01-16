import { defineConfig } from '@pandacss/dev';
import { readFileSync } from 'node:fs';
import createClientSideTextFileSync from './src/helpers/createClientSideTextFileSync';

//サブセット用テキストファイル作成、読み取り
createClientSideTextFileSync();
const subText = readFileSync('./subset.txt', 'utf-8');

export default defineConfig({
  preflight: false,
  eject: true,

  watch: true,
  hash: true,
  clean: true,

  outdir: 'styled-system',
  include: ['./src/**/*.{tsx,astro}', './panda.config.ts'],

  globalFontface: {
    notoSansJP: {
      //subfont 独自のプロパティを使うのでここのエラーは無視してOK
      src: 'url(/fonts/noto-sans-jp.woff2) format("woff2")',
      fontWeight: '200 900',
      fontStyle: 'normal',
      fontStretch: '100%',
      fontDisplay: 'swap',
      '-subfont-text': subText,
    },
    notoSerifJP: {
      //subfont 独自のプロパティを使うのでここのエラーは無視してOK
      src: 'url(/fonts/noto-serif-jp.woff2) format("woff2")',
      fontWeight: '200 900',
      fontStyle: 'normal',
      fontStretch: '100%',
      fontDisplay: 'swap',
      '-subfont-text': 'x1234567890',
    },
    ZTChintzy: {
      src: 'url(/fonts/ZTChintzy-Heavy.woff2) format("woff2")',
      fontStyle: 'normal',
      fontStretch: '100%',
      fontDisplay: 'swap',
    },
  },

  theme: {
    keyframes: {
      mainModalOpen: {
        '0%': { translate: '0 -50%' },
        '100%': { translate: '0' },
      },
    },
    breakpoints: {
      _base: '0px',
      sp: '428px',
      tab: '768px',
      pc: '1280px',
    },
    tokens: {
      sizes: {
        minSp: { value: '375px' },
        maxSp: { value: '428px' },
        minTab: { value: '768px' },
        maxTab: { value: '960px' },
        minPc: { value: '1280px' },
        maxPc: { value: '1980px' },
      },
    },
    semanticTokens: {
      sizes: {
        skeleton: {
          sectionInsideW: { value: 'calc(min(100svw, {sizes.maxSp}) - 3.75rem)' },
          mainModalInsideW: { value: 'calc(min(100svw, {sizes.maxSp}) - 3rem)' },
        },
      },
      aspectRatios: {
        thumbnail: { value: '280/160' },
        icon: { value: '1/1' },
      },
      spacing: {
        inner: {
          outside: {
            top: { value: '2rem' },
            right: { value: '1rem' },
            bottom: { value: '2rem' },
            left: { value: '.75rem' },
          },
          section: {
            left: { value: '1rem' },
            right: { value: '1rem' },
          },
        },
        row: {
          title: {
            DEFAULT: { value: '1.5rem' },
            object: { value: '1.7rem' },
          },
          p: { value: '.75rem' },
          section: { value: '2rem' },
          text: { value: '1.75rem' },
        },
      },
      colors: {
        text: { value: '#333' },
        bg: {
          DEFAULT: { value: '#333' },
          op20: { value: 'rgba(51, 51, 51, .2)' },
        },
        gray: { value: '#ddd' },
        hue: {
          element: {
            fire: { value: '10' },
            water: { value: '210' },
            earth: { value: '30' },
            wind: { value: '120' },
            light: { value: '60' },
            dark: { value: '270' },
          },
          confirm: {
            ok: { value: '180' },
            cancel: { value: '30' },
          },
          primary: { value: '180' },
        },
        saturation: { value: '80%' },
        lightness: {
          element: {
            DEFAULT: { value: '45%' },
            thin: { value: '90%' },
          },
          confirm: { value: '70%' },
          primary: { value: '70%' },
        },
        fire: {
          DEFAULT: { value: `hsl({colors.hue.element.fire}, {colors.saturation}, {colors.lightness.element})` },
          thin: { value: `hsl({colors.hue.element.fire}, {colors.saturation}, {colors.lightness.element.thin})` },
        },
        water: {
          DEFAULT: { value: `hsl({colors.hue.element.water}, {colors.saturation}, {colors.lightness.element})` },
          thin: { value: `hsl({colors.hue.element.water}, {colors.saturation}, {colors.lightness.element.thin})` },
        },
        earth: {
          DEFAULT: { value: `hsl({colors.hue.element.earth}, {colors.saturation}, {colors.lightness.element})` },
          thin: { value: `hsl({colors.hue.element.earth}, {colors.saturation}, {colors.lightness.element.thin})` },
        },
        wind: {
          DEFAULT: { value: `hsl({colors.hue.element.wind}, {colors.saturation}, {colors.lightness.element})` },
          thin: { value: `hsl({colors.hue.element.wind}, {colors.saturation}, {colors.lightness.element.thin})` },
        },
        light: {
          DEFAULT: { value: `hsl({colors.hue.element.light}, {colors.saturation}, {colors.lightness.element})` },
          thin: { value: `hsl({colors.hue.element.light}, {colors.saturation}, {colors.lightness.element.thin})` },
        },
        dark: {
          DEFAULT: { value: `hsl({colors.hue.element.dark}, {colors.saturation}, {colors.lightness.element})` },
          thin: { value: `hsl({colors.hue.element.dark}, {colors.saturation}, {colors.lightness.element.thin})` },
        },
        ok: { value: `hsl({colors.hue.confirm.ok}, {colors.saturation}, {colors.lightness.confirm})` },
        cancel: { value: `hsl({colors.hue.confirm.cancel}, {colors.saturation}, {colors.lightness.confirm})` },
        primary: { value: `hsl({colors.hue.primary}, {colors.saturation}, {colors.lightness.primary})` },
      },
    },
  },
  staticCss: {
    css: [
      {
        properties: {
          bgColor: ['{colors.fire}'],
        },
      },
    ],
  },
  globalCss: {
    main: {
      w: 'clamp(320px, 100%, 468px)',
    },
  },
  utilities: {
    extend: {
      width: { shorthand: 'w' },
      height: { shorthand: 'h' },
      maxWidth: { shorthand: 'maxW' },
      minWidth: { shorthand: 'minW' },
      maxHeight: { shorthand: 'maxH' },
      minHeight: { shorthand: 'minH' },

      margin: { shorthand: 'mg' },
      marginInline: { shorthand: 'mx' },
      marginBlock: { shorthand: 'my' },
      marginTop: { shorthand: 'mt' },
      marginRight: { shorthand: 'mr' },
      marginLeft: { shorthand: 'ml' },
      marginBottom: { shorthand: 'mb' },

      padding: { shorthand: 'pd' },
      paddingInline: { shorthand: 'px' },
      paddingBlock: { shorthand: 'py' },
      paddingTop: { shorthand: 'pt' },
      paddingRight: { shorthand: 'pr' },
      paddingLeft: { shorthand: 'pl' },
      paddingBottom: { shorthand: 'pb' },

      border: { shorthand: 'bo' },
      borderInline: { shorthand: 'bx' },
      borderBlock: { shorthand: 'by' },
      borderTop: { shorthand: 'bt' },
      borderRight: { shorthand: 'br' },
      borderBottom: { shorthand: 'bb' },
      borderLeft: { shorthand: 'bl' },
      borderRadius: { shorthand: 'radius' },

      display: { shorthand: 'd' },
      position: { shorthand: 'pos' },

      background: { shorthand: 'bg' },
      backgroundColor: { shorthand: 'bgColor' },
      backgroundImage: { shorthand: 'bgImage' },
      backgroundPosition: { shorthand: 'bgPos' },
      backgroundRepeat: { shorthand: 'bgRepeat' },
      backgroundSize: { shorthand: 'bgSize' },
      backgroundClip: { shorthand: 'bgClip' },
      backgroundAttachment: { shorthand: 'bgAttachment' },
      backgroundBlendMode: { shorthand: 'bgBlendMode' },

      maskPosition: { shorthand: 'maskPos' },

      opacity: { shorthand: 'op' },
    },
  },
});
