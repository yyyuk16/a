const book = document.getElementById('book');
const pages = document.getElementById('pages');
const genres = document.querySelectorAll('.genre');

book.addEventListener('click', () => {
  // 本を少し押し込むアニメーション
  gsap.to(book, {scale: 0.8, duration: 0.2, yoyo: true, repeat: 1, ease: "power1.inOut"});
  
  // 見開きページをフェードイン
  gsap.to(pages, {opacity: 1, duration: 1, ease: "power2.inOut"});
  
  // 光の拡散アニメーション（簡易）
  gsap.fromTo("#light", 
    {scale: 0.5, opacity: 0.3}, 
    {scale: 1.2, opacity: 0.6, duration: 1.5, repeat: -1, yoyo: true, ease:"sine.inOut"}
  );
  
  // ジャンルアイコンを順に表示
  genres.forEach((genre, i) => {
    gsap.to(genre, {opacity: 1, scale: 1.1, duration: 0.6, delay: i*0.3, yoyo:true, repeat:1});
  });
});