/* Maa Kamakhya Enterprises - site behaviour (no dependencies) */
(function () {
  'use strict';
  var C = typeof COMPANY !== 'undefined' ? COMPANY : null;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* 1. Fill company details from js/company-config.js */
  if (C) {
    $$('[data-company]').forEach(function (el) {
      var k = el.getAttribute('data-company');
      if (k === 'address' && C.address) el.innerHTML = Object.keys(C.address).map(function (a) { return C.address[a]; }).join('<br>');
      else if (C[k] != null) el.textContent = C[k];
    });
    $$('[data-company-href]').forEach(function (el) {
      var t = el.getAttribute('data-company-href');
      if (t === 'tel') el.href = 'tel:' + C.phone.replace(/[^\d+]/g, '');
      if (t === 'mailto') el.href = 'mailto:' + C.email;
      if (t === 'wa') el.href = 'https://wa.me/' + C.whatsapp + '?text=' + encodeURIComponent(el.getAttribute('data-text') || 'Hello, I would like to discuss a rice mill project.');
    });
  }

  /* 2. Mobile menu */
  var btn = $('.menu'), nav = $('#site-nav');
  function setMenu(open) {
    if (!btn || !nav) return;
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  if (btn && nav) {
    btn.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    document.addEventListener('click', function (e) { if (!e.target.closest('.header')) setMenu(false); });
  }

  /* 3. Header shadow after scrolling */
  var header = $('.header');
  function onScroll() { if (header) header.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* 4. Photos: if a file exists at data-img (+ .jpg/.jpeg/.webp/.png) it replaces the placeholder */
  $$('[data-img]').forEach(function (box) {
    var exts = ['jpg', 'jpeg', 'webp', 'png'], i = 0, base = box.getAttribute('data-img');
    (function next() {
      if (i >= exts.length) return;
      var im = new Image();
      im.onload = function () {
        im.alt = box.getAttribute('data-alt') || '';
        if (!box.hasAttribute('data-eager')) im.loading = 'lazy';
        box.insertBefore(im, box.firstChild);
        box.classList.add('has-img');
      };
      im.onerror = function () { i++; next(); };
      im.src = base + '.' + exts[i];
    })();
  });

  /* 5. Contact form: no backend on GitHub Pages, so send via WhatsApp or the visitor's email app */
  var form = $('#enquiry-form');
  if (form && C) {
    var msg = $('.form-msg', form);
    function build() {
      var f = new FormData(form), g = function (k) { return (f.get(k) || '').toString().trim(); };
      return {
        ok: g('name') && g('phone') && g('message'),
        text: 'Hello ' + C.name + ',\n\nName: ' + g('name') + '\nPhone: ' + g('phone') +
          (g('email') ? '\nEmail: ' + g('email') : '') +
          (g('project') ? '\nProject: ' + g('project') : '') +
          '\n\n' + g('message')
      };
    }
    function check() {
      var d = build();
      if (!d.ok) { msg.textContent = 'Please fill in your name, phone number and message.'; msg.className = 'form-msg err'; return null; }
      msg.className = 'form-msg'; return d;
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = check(); if (!d) return;
      window.open('https://wa.me/' + C.whatsapp + '?text=' + encodeURIComponent(d.text), '_blank', 'noopener');
      msg.textContent = 'Opening WhatsApp with your message.';
    });
    var mailBtn = $('#send-email');
    if (mailBtn) mailBtn.addEventListener('click', function () {
      var d = check(); if (!d) return;
      location.href = 'mailto:' + C.email + '?subject=' + encodeURIComponent('Rice mill enquiry') + '&body=' + encodeURIComponent(d.text);
      msg.textContent = 'Opening your email app.';
    });
  }
})();
