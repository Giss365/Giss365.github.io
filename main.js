let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #79B473;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #79B473; font-family: Courier, monospace; font-weight: Bold;">Apasionada del conocimiento, aprendiz de programación ♡</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
