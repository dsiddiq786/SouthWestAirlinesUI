import localFont from 'next/font/local';

export const fontArial = localFont({
  src: [
    {
      path: '../public/fonts/arial-webfont/ARIAL.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/arial-webfont/ARIALBD.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-arial', // Define the CSS variable
});
