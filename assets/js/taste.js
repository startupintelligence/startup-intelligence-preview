(() => {
  const root=document.documentElement, theme=document.querySelector('#taste-theme'), menu=document.querySelector('[data-taste-menu]'), mobile=document.querySelector('#taste-mobile');
  const allowed=['dark','light','midnight','forest']; let saved=''; try{saved=localStorage.getItem('si-theme')||''}catch{}
  const apply=t=>{if(!allowed.includes(t))t='dark';root.dataset.theme=t;if(theme)theme.value=t;const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=({dark:'#080e16',light:'#f4f7fa',midnight:'#11151c',forest:'#f5efe3'})[t];};
  apply(allowed.includes(saved)?saved:'dark'); theme?.addEventListener('change',()=>{apply(theme.value);try{localStorage.setItem('si-theme',theme.value)}catch{}});
  const close=()=>{mobile?.classList.remove('is-open');menu?.setAttribute('aria-expanded','false')};
  menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));mobile?.classList.toggle('is-open',open)});
  mobile?.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  document.querySelectorAll('[data-current-year]').forEach(el=>el.textContent=String(new Date().getFullYear()));
})();