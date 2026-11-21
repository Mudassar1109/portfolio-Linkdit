import {createClient} from 'https://esm.sh/@supabase/supabase-js@2';
const db=createClient('https://sspzsscntnlaopfrgpvr.supabase.co','sb_publishable_eDoA81c2-EHz7PqGLwk1RA_PD5-RYGL');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
(async()=>{
 try{
  const {data:s,error}=await db.from('cms_site_settings').select('*').eq('id',1).single();if(error||!s)return;
  if(s.logo_url)document.querySelectorAll('.brand img').forEach(img=>img.src=s.logo_url);
  if(s.favicon_url){let icon=document.querySelector('link[rel="icon"]');if(icon)icon.href=s.favicon_url;}
  document.querySelectorAll('.footer-inner>span').forEach(el=>el.textContent=s.footer_copyright);
  document.querySelectorAll('a.whatsapp').forEach(a=>a.href='https://wa.me/'+String(s.whatsapp||'').replace(/\D/g,''));
  document.querySelectorAll('a[href^="mailto:"]').forEach(a=>{a.href='mailto:'+s.email;if(a.querySelector('span'))a.querySelector('span').textContent=s.email;});
  const nav=s.nav_links||[];
  if(nav.length){for(const selector of ['.nav-links','.mobile-nav']){const el=document.querySelector(selector);if(!el)continue;el.innerHTML=nav.filter(n=>n.visible).map(n=>'<a href="'+esc(n.url)+'">'+esc(n.label)+'</a>').join('');}}
  if(s.announcement_enabled&&s.announcement_text){const bar=document.createElement('div');bar.className='cms-announcement';bar.textContent=s.announcement_text;bar.style.cssText='position:relative;z-index:99;text-align:center;padding:9px 16px;background:#eaf4ff;color:#164a85;border-bottom:1px solid #d3e7ff;font:600 13px DM Sans,sans-serif';document.body.prepend(bar);}
  if(s.maintenance_mode||!s.site_visible){const banner=document.createElement('div');banner.textContent=s.maintenance_mode?'We are making improvements. Please check back soon.':'This website is temporarily unavailable.';banner.style.cssText='position:fixed;inset:0 0 auto;z-index:99999;padding:14px;text-align:center;background:#fff4d6;color:#77510b;border-bottom:1px solid #f0d58c;font:700 13px DM Sans,sans-serif';document.body.prepend(banner);}
 }catch(e){console.warn('CMS site settings unavailable',e);}
})();
