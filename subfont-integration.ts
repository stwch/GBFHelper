import type { AstroIntegration, RouteData } from 'astro';
import kleur from 'kleur';
import { execSync } from 'node:child_process';

export function subfont(): AstroIntegration {
  return {
    name: 'subfont',
    hooks: {
      'astro:build:done': (options: { dir: URL; routes: RouteData[]; pages: { pathname: string }[] }) => {
        console.log(`${kleur.cyan('[subfont]\n')}`);

        //処理
        const distDirPath = options.dir.pathname;
        const filePaths = options.pages.reduce((accu, page) => {
          const filePath = _fix404PagePath(page.pathname);
          console.log(`filePath: ${kleur.cyan(filePath)}`);

          accu = `${accu} ${filePath}`;
          return accu;
        }, '');
        // コマンド実行
        try {
          console.log(`total: ${filePaths.length} Pages`);
          console.log('実行中...（ 6分程かかります ）');
          execSync(`subfont ${filePaths} -i --formats woff2 --root ${distDirPath} --no-fallbacks --inline-css`);
          console.log('完了');
        } catch (err) {
          console.error('エラー');
          console.log(err);
        }

        console.log(`${kleur.cyan('------------------------\n')}`);
      },
    },
  };
}

function _fix404PagePath(pagePathName: string) {
  const is404Page = pagePathName.match('404');
  const path = is404Page ? '404.html' : pagePathName + 'index.html';
  return 'dist/' + path;
}

/*
  dir オブジェクト
  {
    href: 'file:///D:/Desktop/PROJEECTS/web-creation-note/dist/',
    origin: 'null',
    protocol: 'file:',
    username: '',
    password: '',
    host: '',
    hostname: '',
    port: '',
    pathname: '/D:/Desktop/PROJEECTS/web-creation-note/dist/',
    search: '',
    searchParams: URLSearchParams {},
    hash: ''
  }

  pages
  [ 
    { pathname: '' },
    { pathname: 'test/' }
  ]

  routes
  [
    {
      route: '/',
      isIndex: true,
      type: 'page',
      pattern: /^\/$/,
      segments: [],
      params: [],
      component: 'src/pages/index.astro',
      generate: [Function (anonymous)],
      pathname: '/',
      prerender: true,
      fallbackRoutes: [],
      distURL: URL {
        href: 'file:///D:/Desktop/PROJEECTS/web-creation-note/dist/index.html',
        origin: 'null',
        protocol: 'file:',
        username: '',
        password: '',
        host: '',
        hostname: '',
        port: '',
        pathname: '/D:/Desktop/PROJEECTS/web-creation-note/dist/index.html',
        search: '',
        searchParams: URLSearchParams {},
        hash: ''
      }
    }
  ]
*/
