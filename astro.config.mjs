// @ts-check
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { subfont } from './subfont-integration';

// https://astro.build/config
export default defineConfig({
  site: 'https://gbf-helper.com',

  integrations: [
    react(),
    // purgecss({
    //   variables: true,
    //   //:where を登録しないとtokens が問答無用で消える
    //   safelist: [/:where/, /data-.*?/],
    //   content: [cwd + '/dist/**/*.html'],
    //   css: [cwd + '/dist/_astro/*.css'],
    //   extractors: [
    //     {
    //       // Example using a taiwindcss compatible class extractor
    //       extractor: content => {
    //         // return content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

    //         // class htmlTag dataAttr だけ抽出できるが、className のhash化が必須
    //         // const classNamesRaw = content.match(/((?<=class=")|(?<=data-.*?-class-name=")).*?(?=")/g) || [];
    //         const classNamesRaw = content.match(/((?<=class=")|(?<=style=")).*?(?=")/g) || [];
    //         const classNames = classNamesRaw.toString().split(' ').toString().split(',');
    //         const tagNamesRaw = content.match(/(?<=<)[a-z|h1-6]*?(?=>|\s|\/>)/g) || [];
    //         console.log(classNames.filter(Boolean).filter(data => data.match(/--.*?-.*?/)));
    //         return [...classNames, ...tagNamesRaw].filter(Boolean);
    //       },
    //       extensions: ['astro', 'html', 'css', 'tsx']
    //     }
    //   ]
    // })
    subfont(),
    sitemap()
  ]
});
