(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(e,t,n){"use strict";n.r(t);n("h3ov");var a=n("aDFv"),l=n.n(a),i=(n("JBxO"),n("FdtR"),{page:1,searchQuery:"",fetchImg:function(){var e=this,t="https://pixabay.com/api/?key=19762047-00a71ca172d97ff67da5d4766&q="+this.searchQuery+"&page="+this.page+"&per_page=12";return fetch(t).then((function(t){return e.page+=1,t.json()})).catch((function(e){return console.log(e)}))},resetPage:function(){this.page=1},get query(){return this.searchQuery},set query(e){this.searchQuery=e}});n("RtS0"),n("3dw1"),document.querySelector(".image-gallery"),new IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio>0&&s()}))}));function o(e){var t=l()(e);d.gallery.insertAdjacentHTML("beforeend",t)}function r(){d.gallery.textContent="",i.searchQuery=d.searchInput.value,""!==i.searchQuery&&" "!==i.searchQuery?(i.resetPage(),i.fetchImg().then((function(e){o(e),d.loadMoreBtn.classList.remove("is-hidden")}))):d.loadMoreBtn.classList.add("is-hidden")}function s(){i.fetchImg().then((function(e){var t;o(e),t=document.querySelector(".image-gallery__item"),window.scrollBy({top:t.clientHeight,behavior:"smooth"})}))}var c=n("jffb"),d={body:document.querySelector("body"),formGroup:document.createElement("div"),searchInput:document.createElement("input"),label:document.createElement("label"),lightbox:document.createElement("div"),lightboxOverlay:document.createElement("div"),lightboxContent:document.createElement("div"),lightboxImage:document.createElement("img"),gallery:document.createElement("ul"),loadMoreBtn:document.createElement("button"),infiniteScrollTrigger:document.createElement("div")};var u=function(){d.lightbox.classList.toggle("is-open"),window.removeEventListener("keydown",m),d.lightboxImage.src=""},m=function(e){"Escape"===e.code&&u()};d.gallery.addEventListener("click",(function(e){e.preventDefault();var t=e.target,n=t.src;"IMG"===t.nodeName&&(d.lightboxImage.src=n,window.addEventListener("keydown",m),d.lightbox.classList.toggle("is-open"))})),d.lightboxOverlay.addEventListener("click",u),d.searchInput.addEventListener("input",c(r,500)),d.loadMoreBtn.addEventListener("click",s),d.formGroup.classList.add("form__group","field"),d.searchInput.classList.add("form__field","is-hidden"),d.searchInput.setAttribute("type"," input"),d.searchInput.setAttribute("placeholder"," Name"),d.searchInput.setAttribute("name"," name"),d.searchInput.setAttribute("id"," name"),d.label.classList.add("form__label"),d.label.setAttribute("for","name"),d.label.textContent="Search images...",d.body.append(d.formGroup),d.formGroup.append(d.searchInput),d.formGroup.append(d.label),d.lightbox.classList.add("lightbox","js-lightbox"),d.lightboxOverlay.classList.add("lightbox__overlay"),d.lightboxContent.classList.add("lightbox__content"),d.lightboxImage.classList.add("lightbox__image"),d.lightboxImage.setAttribute("src","#"),d.lightboxImage.setAttribute("alt",""),d.body.append(d.lightbox),d.lightbox.append(d.lightboxOverlay),d.lightbox.append(d.lightboxContent),d.lightboxContent.append(d.lightboxImage),d.gallery.classList.add("image-gallery","list"),d.body.append(d.gallery),d.loadMoreBtn.setAttribute("data-action","load-more"),d.loadMoreBtn.classList.add("btn","is-hidden"),d.loadMoreBtn.textContent="Show more",d.body.append(d.loadMoreBtn),d.infiniteScrollTrigger.setAttribute("id","infinite-scroll-trigger"),d.body.append(d.infiniteScrollTrigger)},aDFv:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,l){var i,o=e.lambda,r=e.escapeExpression,s=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="image-gallery__item">\r\n    <img src="'+r(o(null!=t?d(t,"largeImageURL"):t,t))+'" alt="'+r(o(null!=t?d(t,"tags"):t,t))+'" width="400" height="280" class="image-gallery__image" />\r\n\r\n    <div class="stats">\r\n        <p class="stats-item">\r\n            <i class="material-icons">thumb_up</i>\r\n        <p class="stat-item">'+r("function"==typeof(i=null!=(i=d(n,"likes")||(null!=t?d(t,"likes"):t))?i:c)?i.call(s,{name:"likes",hash:{},data:l,loc:{start:{line:12,column:29},end:{line:12,column:38}}}):i)+'</p>\r\n        </p>\r\n        <p class="stats-item">\r\n            <i class="material-icons">visibility</i>\r\n        <p class="stat-item">'+r("function"==typeof(i=null!=(i=d(n,"views")||(null!=t?d(t,"views"):t))?i:c)?i.call(s,{name:"views",hash:{},data:l,loc:{start:{line:16,column:29},end:{line:16,column:38}}}):i)+'</p>\r\n        </p>\r\n        <p class="stats-item">\r\n            <i class="material-icons">comment</i>\r\n        <p class="stat-item">'+r("function"==typeof(i=null!=(i=d(n,"comments")||(null!=t?d(t,"comments"):t))?i:c)?i.call(s,{name:"comments",hash:{},data:l,loc:{start:{line:20,column:29},end:{line:20,column:41}}}):i)+'</p>\r\n        </p>\r\n        <p class="stats-item">\r\n            <i class="material-icons">cloud_download</i>\r\n        <p class="stat-item">'+r("function"==typeof(i=null!=(i=d(n,"downloads")||(null!=t?d(t,"downloads"):t))?i:c)?i.call(s,{name:"downloads",hash:{},data:l,loc:{start:{line:24,column:29},end:{line:24,column:42}}}):i)+"</p>\r\n        </p>\r\n    </div>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,l){var i,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"\r\n"+(null!=(i=o(n,"each").call(null!=t?t:e.nullContext||{},null!=t?o(t,"hits"):t,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:5,column:0},end:{line:28,column:9}}}))?i:"")},useData:!0})},h3ov:function(e,t,n){}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.bbb343f5c23d7b9e2bda.js.map