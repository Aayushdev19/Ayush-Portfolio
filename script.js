const menu=document.getElementById('menu'),nav=document.getElementById('navlinks');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
document.getElementById('year').textContent=new Date().getFullYear();
const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%'},{passive:true});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const lightbox=document.getElementById('imageLightbox'),lightboxImage=document.getElementById('lightboxImage'),lightboxClose=document.getElementById('lightboxClose');
document.querySelectorAll('.certificate-preview').forEach(button=>button.addEventListener('click',()=>{lightboxImage.src=button.dataset.full;lightbox.classList.add('open');document.body.style.overflow='hidden';lightboxClose.focus()}));
function closeLightbox(){lightbox.classList.remove('open');lightboxImage.removeAttribute('src');document.body.style.overflow=''}
lightboxClose.addEventListener('click',closeLightbox);lightbox.addEventListener('click',event=>{if(event.target===lightbox)closeLightbox()});document.addEventListener('keydown',event=>{if(event.key==='Escape'&&lightbox.classList.contains('open'))closeLightbox()});
