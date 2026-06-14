// Syntax highlighting for code samples
if (window.hljs) {
  hljs.highlightAll();
}

// Copy-to-clipboard for composer / shell commands
document.querySelectorAll('.copy').forEach(function (btn) {
  btn.addEventListener('click', function () {
    navigator.clipboard.writeText(btn.dataset.cmd).then(function () {
      var prev = btn.textContent;
      btn.textContent = 'copied!';
      btn.classList.add('done');
      setTimeout(function () {
        btn.textContent = prev;
        btn.classList.remove('done');
      }, 1600);
    });
  });
});
