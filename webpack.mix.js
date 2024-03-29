let mix = require('laravel-mix');

mix.options({
  postCss: [
    require('autoprefixer')({
      overrideBrowserslist: [
        '> 1%',
        'ie >= 8',
        'edge >= 15',
        'ie_mob >= 10',
        'ff >= 45',
        'chrome >= 45',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4',
        'bb >= 10',
      ],
    }),
    require('cssnano')({
      preset: 'default',
    }),
  ],
  cache: false,
});

mix.sass('works/aa-7/styles.scss', 'works/aa-7');
