// 如果配合px2rem的话，单位为100，如果不用，则设计稿尺寸/100即可
export default function screenAutofit(width = 750) {
  let ratio = width / 100;
  document.documentElement.style.fontSize =
    document.documentElement.clientWidth / ratio + 'px';
  window.addEventListener('resize', function() {
    document.documentElement.style.fontSize =
      document.documentElement.clientWidth / ratio + 'px';
  });
}
