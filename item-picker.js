(() => {
 'use strict';
 const fields=['hair','top','bottom','shoes','mask','face','action'];
 const labels={hair:'Tóc',top:'Áo',bottom:'Quần',shoes:'Chân',mask:'Nạ',face:'Mặt',action:'Hành động'};
 const supplied=new Set(["hair-lang-khach-tim","hair-soi-cong-nghe","hair-hac-tinh","hair-bich-vang","top-bushido","bottom-bushido","shoes-bushido","mask-bushido","hair-bushido","top-bushido-cao-cap","bottom-bushido-cao-cap","shoes-bushido-cao-cap","mask-bushido-cao-cap","hair-bushido-cao-cap","hair-chien-binh-tho","hair-tho-quay","hair-tho-purple","hair-tho-thien-ha","hair-tho-yellow","hair-chien-than-phong-cach-do","hair-chien-than-phong-cach-tim","hair-chien-than-phong-cach-xanh","hair-chien-than-phong-cach-vang","hair-dao-si-do","hair-duong-pho-cao-cap","hair-duong-pho","hair-ghet-su-gia-doi","hair-su-gia-ac-ma","hair-lan-song-nang-dong","hair-quai-nhan-hu-khong","hair-soai-ca-cuong-thi","hair-phu-thuy","hair-tho-san-huyet-quy","hair-tieu-tien","hair-titan-tien-cong","mask-titan-tien-cong","top-titan-tien-cong","hair-titan-thiet-giap","mask-titan-thiet-giap","top-titan-thiet-giap","hair-trai-ngo-ngao","top-ngu-thanh-phong","top-nguoi-choi-squid","top-qua-den","top-quai-nhan-hu-khong","bottom-quai-nhan-hu-khong","top-quy-lua","top-thich-khach-bong-dem","top-thiet-quyen","top-tho-neon","top-tho-quay","top-tho-yellow","top-thu-linh-binh-doan","top-trai-ngo-ngao","top-ve-binh-tinh-tu","top-vo-dien-loi-than","face-tiec-cuong-loan","shoes-bong-ro","shoes-bong-gau-do","shoes-ca-map","shoes-ca-sau","shoes-dep-di-bien","shoes-hacker","shoes-hac-tinh","shoes-he-vui-ve","shoes-hoa-quyen-su","shoes-hoang-de-hai-huoc","shoes-to-ong","shoes-vo-dien-loi-than","top-dau-si-huyen-thoai","top-duong-pho","top-duong-pho-cao-cap","top-gojo","top-hac-ginh","top-lv-up","bottom-ac-quy","bottom-angelic-neon","bottom-bang-cuop-dem","bottom-bo-rach-roi","bottom-bong-chay","bottom-chien-binh-tho","bottom-dau","bottom-dau-si-tho","bottom-dau-sy-huyen-thoai","bottom-dong-phuc-anh","top-3-lo-trang","top-bong-ma-phia-tay","top-cau-thu-tay-dai","top-chien-binh-tho","top-co-rua-den","top-co-rua-trang","top-cuop-bien-nam","top-da-biker","top-da-bong-anh","top-da-bong-argentina","top-ao-bong-bi","top-da-bong-brazill","top-da-bong-den","top-da-bong-duc","top-peru","shoes-thanh-phong","top-thich-khach-kim-long","top-tho-purple","bottom-duong-pho","bottom-duong-pho-cao-cap","bottom-gojo","bottom-hac-tinh","bottom-hoa-quyen-su","bottom-ky-hoi","bottom-ngu-thanh-phong","bottom-nguoi-choi-squid-game","bottom-phong-cach-street","bottom-pyjama-gau-truc","bottom-sooc-den","bottom-tham-hiem-hong-thien","bottom-thien-than-thanh-thien","bottom-thien-than-hoang-kim","bottom-tho-red","bottom-tho-purple","bottom-tre-trau","bottom-tho-yellow","bottom-ve-binh-tinh-tu","bottom-vo-dien-loi-than","bottom-tho-thien-ha","mask-bang-che-mat-ao-lot","mask-bang-che-mat-quan-lot","mask-chien-than-dung-nham","mask-chien-than","mask-ffws-2025","mask-hac-tinh","mask-ma-bup-be","mask-ma-bup-be-nham-thach","mask-noel","mask-su-gia-ac-ma","mask-tien-si-con-trung","mask-trai-ngo-ngao","mask-vo-dien-loi-than","action-phuong-hoang-xuat-the","action-huyet-nguyet-tram","action-dia-chan-sac-mau","action-hac-thach-long","action-trieu-hoi-manh-ho","action-ac-nhan-bo-cap","action-phat-sung-sac-mau","action-ho-mua-goi-sung","action-long-vu-vang","action-sinh-ra-tu-lua","action-trieu-hoi-sung","action-thi-uy-long-trao","action-con-thinh-no","action-duong-kiem-anh-sang","action-thuc-tinh-long-toc","action-trieu-hoi-rong","action-vo-luong-thoi-khong","action-tu-long-xuat-hien","action-trieu-hoi-cuong-long","action-m60-pha-mong","action-booyah-phong-cach","action-gia-nhap-chinh-phuc","action-luot-tren-may"]);
 const selects=new Map(fields.map(field=>[field,document.getElementById(field)]));
 const browser=document.getElementById('item-browser');
 if(!browser)return;
 browser.innerHTML='<div class="item-browser-tools"><label class="item-search-wrap"><span aria-hidden="true">⌕</span><input id="item-search" type="search" placeholder="Tìm trang phục…" aria-label="Tìm trang phục"></label><button id="item-clear" type="button">Bộ mặc định</button></div><div class="item-category-tabs" role="tablist" aria-label="Danh mục trang phục"></div><div class="item-grid" role="listbox" aria-label="Các món trang phục"></div><p class="item-empty" hidden>Không tìm thấy món phù hợp.</p>';
 const tabs=browser.querySelector('.item-category-tabs'),grid=browser.querySelector('.item-grid'),empty=browser.querySelector('.item-empty'),search=browser.querySelector('#item-search');
 let active='hair';
 function icon(field,option){
  const id=option?.dataset.itemId;
  return supplied.has(id)?'./assets/item-icons/'+id+'.webp':'./assets/category-icons/'+field+'.webp';
 }
 function makeIcon(field,option){
  const image=new Image();image.src=icon(field,option);image.alt='';image.width=54;image.height=54;image.loading='lazy';return image;
 }
 function buildTabs(){
  tabs.replaceChildren();
  for(const field of fields){
   const button=document.createElement('button');button.type='button';button.className='item-category-tab';button.setAttribute('role','tab');button.setAttribute('aria-selected',String(field===active));button.setAttribute('aria-controls','item-grid');
   const img=new Image();img.src='./assets/category-icons/'+field+'.webp';img.alt='';img.width=25;img.height=25;button.append(img,document.createTextNode(labels[field]));
   button.addEventListener('click',()=>{active=field;search.value='';render();});tabs.append(button);
  }
 }
 function render(){
  for(const button of tabs.querySelectorAll('[role=tab]'))button.setAttribute('aria-selected',String(button.textContent===labels[active]));
  const select=selects.get(active),term=search.value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  grid.replaceChildren();
  for(const option of select.options){
   if(!option.textContent.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(term))continue;
   const button=document.createElement('button');button.type='button';button.className='item-card';button.setAttribute('role','option');button.setAttribute('aria-selected',String(option.selected));button.setAttribute('aria-label',option.textContent);
   button.append(makeIcon(active,option));const name=document.createElement('span');name.textContent=option.textContent;button.append(name);
   const check=document.createElement('span');check.className='item-card-check';check.setAttribute('aria-hidden','true');check.textContent='✓';button.append(check);
   button.addEventListener('click',()=>{select.value=option.value;select.dispatchEvent(new Event('change',{bubbles:true}));render();});
   grid.append(button);
  }
  empty.hidden=grid.children.length>0;
 }
 for(const [field,select] of selects){
  if(!select)continue;
  select.parentElement.classList.add('picker-ready');
  select.addEventListener('change',render);
  new MutationObserver(render).observe(select,{childList:true,attributes:true,subtree:true});
 }
 browser.querySelector('#item-clear').addEventListener('click',()=>window.resetWardrobeToDefault?.());
 search.addEventListener('input',render);
 window.addEventListener('wardrobe-change',render);
 buildTabs();render();
})();
