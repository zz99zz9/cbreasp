/*! no_rails_asset_compression */
webpackJsonp([4,49],{1e3:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=n(0),r=i(a),s=n(4),l=i(s),u=n(2431),c=n(632),d=i(c),f={serverInitialize:function(e){var t=r.default.Children.count(e.children),n=e.rtl?t-1-e.initialSlide:e.initialSlide
this.setState({slideCount:t,currentSlide:n})},initialize:function(e){var t,n=l.default.findDOMNode(this.list),i=r.default.Children.count(e.children),o=this.getWidth(n),a=this.getWidth(l.default.findDOMNode(this.track))
if(e.vertical)t=this.getWidth(l.default.findDOMNode(this))
else{var s=e.centerMode&&2*parseInt(e.centerPadding)
t=(this.getWidth(l.default.findDOMNode(this))-s)/e.slidesToShow}var c=this.getHeight(n.querySelector('[data-index="0"]')),f=c*e.slidesToShow,p=e.rtl?i-1-e.initialSlide:e.initialSlide
this.setState({slideCount:i,slideWidth:t,listWidth:o,trackWidth:a,currentSlide:p,slideHeight:c,listHeight:f},function(){var t=(0,u.getTrackLeft)((0,d.default)({slideIndex:this.state.currentSlide,trackRef:this.track},e,this.state)),n=(0,u.getTrackCSS)((0,d.default)({left:t},e,this.state))
this.setState({trackStyle:n})
this.autoPlay()})},update:function(e){var t,n=l.default.findDOMNode(this.list),i=r.default.Children.count(e.children),o=this.getWidth(n),a=this.getWidth(l.default.findDOMNode(this.track))
if(e.vertical)t=this.getWidth(l.default.findDOMNode(this))
else{var s=e.centerMode&&2*parseInt(e.centerPadding)
t=(this.getWidth(l.default.findDOMNode(this))-s)/e.slidesToShow}var c=this.getHeight(n.querySelector('[data-index="0"]')),f=c*e.slidesToShow
e.autoplay||this.pause()
this.setState({slideCount:i,slideWidth:t,listWidth:o,trackWidth:a,slideHeight:c,listHeight:f},function(){var t=(0,u.getTrackLeft)((0,d.default)({slideIndex:this.state.currentSlide,trackRef:this.track},e,this.state)),n=(0,u.getTrackCSS)((0,d.default)({left:t},e,this.state))
this.setState({trackStyle:n})})},getWidth:function(e){return e.getBoundingClientRect().width||e.offsetWidth},getHeight:function(e){return e.getBoundingClientRect().height||e.offsetHeight},adaptHeight:function(){if(this.props.adaptiveHeight){var e='[data-index="'+this.state.currentSlide+'"]'
if(this.list){var t=l.default.findDOMNode(this.list)
t.style.height=t.querySelector(e).offsetHeight+"px"}}},canGoNext:function(e){var t=!0
e.infinite||(e.centerMode?e.currentSlide>=e.slideCount-1&&(t=!1):(e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(t=!1))
return t},slideHandler:function(e){var t,n,i,o,a,r=this
if(!this.props.waitForAnimate||!this.state.animating)if(this.props.fade){n=this.state.currentSlide
if(!1===this.props.infinite&&(e<0||e>=this.state.slideCount))return
t=e<0?e+this.state.slideCount:e>=this.state.slideCount?e-this.state.slideCount:e
this.props.lazyLoad&&this.state.lazyLoadedList.indexOf(t)<0&&this.setState({lazyLoadedList:this.state.lazyLoadedList.concat(t)})
a=function(){r.setState({animating:!1})
r.props.afterChange&&r.props.afterChange(t)
delete r.animationEndCallback}
this.setState({animating:!0,currentSlide:t},function(){this.animationEndCallback=setTimeout(a,this.props.speed)})
this.props.beforeChange&&this.props.beforeChange(this.state.currentSlide,t)
this.autoPlay()}else{t=e
n=t<0?!1===this.props.infinite?0:this.state.slideCount%this.props.slidesToScroll!=0?this.state.slideCount-this.state.slideCount%this.props.slidesToScroll:this.state.slideCount+t:t>=this.state.slideCount?!1===this.props.infinite?this.state.slideCount-this.props.slidesToShow:this.state.slideCount%this.props.slidesToScroll!=0?0:t-this.state.slideCount:t
i=(0,u.getTrackLeft)((0,d.default)({slideIndex:t,trackRef:this.track},this.props,this.state))
o=(0,u.getTrackLeft)((0,d.default)({slideIndex:n,trackRef:this.track},this.props,this.state))
!1===this.props.infinite&&(i=o)
this.props.beforeChange&&this.props.beforeChange(this.state.currentSlide,n)
if(this.props.lazyLoad){for(var s=!0,l=[],c=t;c<t+this.props.slidesToShow;c++){s=s&&this.state.lazyLoadedList.indexOf(c)>=0
s||l.push(c)}s||this.setState({lazyLoadedList:this.state.lazyLoadedList.concat(l)})}if(!1===this.props.useCSS)this.setState({currentSlide:n,trackStyle:(0,u.getTrackCSS)((0,d.default)({left:o},this.props,this.state))},function(){this.props.afterChange&&this.props.afterChange(n)})
else{var f={animating:!1,currentSlide:n,trackStyle:(0,u.getTrackCSS)((0,d.default)({left:o},this.props,this.state)),swipeLeft:null}
a=function(){r.setState(f)
r.props.afterChange&&r.props.afterChange(n)
delete r.animationEndCallback}
this.setState({animating:!0,currentSlide:n,trackStyle:(0,u.getTrackAnimateCSS)((0,d.default)({left:i},this.props,this.state))},function(){this.animationEndCallback=setTimeout(a,this.props.speed)})}this.autoPlay()}},swipeDirection:function(e){var t,n,i,o
t=e.startX-e.curX
n=e.startY-e.curY
i=Math.atan2(n,t)
o=Math.round(180*i/Math.PI)
o<0&&(o=360-Math.abs(o))
return o<=45&&o>=0||o<=360&&o>=315?!1===this.props.rtl?"left":"right":o>=135&&o<=225?!1===this.props.rtl?"right":"left":!0===this.props.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},play:function(){var e
if(!this.state.mounted)return!1
if(this.props.rtl)e=this.state.currentSlide-this.props.slidesToScroll
else{if(!this.canGoNext(o({},this.props,this.state)))return!1
e=this.state.currentSlide+this.props.slidesToScroll}this.slideHandler(e)},autoPlay:function(){this.state.autoPlayTimer||this.props.autoplay&&this.setState({autoPlayTimer:setInterval(this.play,this.props.autoplaySpeed)})},pause:function(){if(this.state.autoPlayTimer){clearInterval(this.state.autoPlayTimer)
this.setState({autoPlayTimer:null})}}}
t.default=f},1001:function(e,t,n){"use strict"
function i(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(25),a=function(e){return e&&e.__esModule?e:{default:e}}(o),r=n(1),s=i(r),l=n(15),u=i(l),c=n(651),d=void 0,f=s.assign({},a.default.prototype,{emitChange:function(){this.emit("element_measurements_event_id")},init:function(e){e.set(new u.Map)
d=e},hydrate:function(e,t){if("s5-theme"===t){var n=(0,c.getNavThemeDesignPropsFromPageData)(e),i=0
i=n.navObject.estimateNavHeight?n.navObject.estimateNavHeight(n):50+2*n.padding
d.set("navHeight",i)}},getBinding:function(){return d},set:function(e,t){d.set(e,t)
this.emitChange()},get:function(e){return d.get(e)}})
t.default=f
e.exports=t.default},1002:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){function e(e,t){var n=[],i=!0,o=!1,a=void 0
try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done);i=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){o=!0
a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),d=n(0),f=i(d),p=n(12),m=(i(p),n(6)),h=i(m),g=n(8),v=i(g),y=n(1003),b=i(y),_=n(2436),w=i(_),C=function(e,t){return function(n){function i(e){o(this,i)
return a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e))}r(i,n)
c(i,[{key:"_getColumnClassNames",value:function(){var e=v.default.getTheme().get("name"),t=(0,h.default)("#s-content").hasClass("side-menu-opened")?(0,h.default)(window).width()-220:(0,h.default)(window).width(),n=void 0,i=void 0
switch(e){case"persona":n="columns six alpha"
i="columns six omega"
break
case"onyx_new":if(t>875){n="columns seven"
i="columns seven"}else{n="columns eight"
i="columns eight"}break
case"ion":case"sleek":if(t>1400){n="columns eight"
i="columns six"}else if(t>1100){n="columns eight"
i="columns seven"}else{n="columns eight"
i="columns eight"}break
case"minimal":n="columns eight"
i="columns eight"
break
default:if(t>875){n="columns seven offset-one"
i="columns seven"}else{n="columns eight"
i="columns eight"}}return{imgColumnClassName:n,infoColumnClassName:i}}},{key:"_renderProductsAsRow",value:function(){var e=this._getColumnClassNames(),n=this.props,i=n.products,o=n.pageId,a=n.hasMultipleProducts,r=n.settings,s=n.cartData,c=n.layout,d=n.fromProductPage,p=i.map(function(n,i){var l={product:n,pageId:o,hasMultipleProducts:a,fromProductPage:d,settings:r,cartData:s,imgColumnClassName:e.imgColumnClassName,infoColumnClassName:e.infoColumnClassName,layout:c}
return f.default.createElement(t,u({},l,{key:i}))})
return l("div",{className:"s-ecommerce-row-view-wrapper"},void 0,p)}},{key:"_renderProductsAsCard",value:function(){var t=this._getColumnClassNames(),n=this.props,i=n.products,o=n.pageId,a=n.hasMultipleProducts,r=n.settings,s=n.cartData,l=n.layout,u=n.changeToDetailMode,c=n.changeToNormalMode,d=n.fromProductPage,p={products:i,pageId:o,hasMultipleProducts:a,settings:r,cartData:s,imgColumnClassName:t.imgColumnClassName,infoColumnClassName:t.infoColumnClassName,layout:l,changeToDetailMode:u,changeToNormalMode:c,fromProductPage:d}
return f.default.createElement(e,p)}},{key:"render",value:function(){var e=void 0,t=this.props.layout.split("-")
e="one"===s(t,2)[1]?this._renderProductsAsRow():this._renderProductsAsCard()
var n=this.props,i=n.isLoading,o=n.isFirstLoading,a=(n.emptyComponent,n.paginationComponent)
n.children
return l("div",{className:"s-ecommerce-products-wrapper "+(i?"loading":"")},void 0,!1,!o&&e,!1,a)}}])
return i}(f.default.Component)},k=C(w.default,b.default)
k.createProductWrapper=C
t.default=k
e.exports=t.default},1003:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=o(r),l=n(12),u=o(l),c=n(4),d=o(c),f=n(6),p=o(f),m=n(1),h=o(m),g=n(34),v=o(g),y=n(2),b=o(y),_=n(17),w=o(_),C=n(159),k=o(C),N=n(59),x=o(N),E=n(80),S=o(E),P=n(288),T=o(P),O=n(79),L=o(O),M=n(291),I=o(M),B=n(631),D=o(B),A=n(103),j=o(A),H=n(35),R=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(H),U=n(32),F=o(U),V=n(2428),z=o(V),W=n(999),$=o(W),G=n(635),K=o(G),q=n(2429),Y=n(158),J=o(Y),X=n(13),Q=o(X),Z=n(8),ee=o(Z),te=n(218),ne=o(te),ie=(0,w.default)({displayName:"EcommerceProduct",mixins:[D.default.enableAfterMount(),j.default],contextTypes:{fromStorePage:u.default.bool},getInitialState:function(){return{variationId:"",quantity:1,price:0,name:"",currentImageIndex:0,showSelectPanel:!1,showSelectVariationMsg:!1}},componentDidMount:function(){this.props.product.variations.length<=1&&this._chooseVariation(this._getFirstAvailableVariation().id)},componentDidUpdate:function(){var e=(0,p.default)(d.default.findDOMNode(this.refs.imageWrapper)),t=e.find("img")
e.height(t.height())
t.load(function(){return e.height(t.height())})},componentWillReceiveProps:function(e){if(this.props.product.id!==e.product.id)if(e.product.variations.length<=1){this._chooseVariation(this._getFirstAvailableVariation(e.product.variations).id,e.product.variations)
this.setState({currentImageIndex:0})}else this.setState(this.getInitialState())},_setClickPosition:function(e,t){return this._clickPosition={x:e,y:t}},_shoppingCartAnimation:function(e,t){var n=this,i=void 0,o=void 0,a=void 0,r=(0,p.default)("<div class='s-ecommerce-animation-item'><i class='entypo-bag'></i></div>")
i=F.default.isSmallScreen()?(0,p.default)("#s-mobile-shopping-cart-new"):(0,p.default)("#s-ecommerce-shopping-cart")
if(!i.length)return"function"==typeof t?t():void 0
var s=i.find(".fa").offset(),l={x:s.left-5,y:s.top-(0,p.default)(window).scrollTop()}
e={x:e.x-15,y:e.y-15}
r.css({top:e.y,left:e.x})
var u=l.x-e.x;(0,p.default)("#s-content").append(r)
if(l.y<=e.y){o=(e.y-l.y)/Math.pow(e.x-l.x,2)
a=function(e){return o*Math.pow(e-l.x,2)+l.y}}else{o=(l.y-e.y)/Math.pow(l.x-e.x,2)
a=function(t){return o*Math.pow(t-e.x,2)+e.y}}var c=Math.sqrt(Math.pow(l.y-e.y,2)+Math.pow(l.x-e.x,2)),d=(l.x-e.x)/(60*c/1e3),f=e.x+d
!function e(){return n.setTimeout(function(){if(!((l.x-f)*u<0)){r.css({left:f,top:a(f)})
f+=d
return e()}r.css({left:l.x,top:l.y})
"function"==typeof t&&t()
r.remove()
i.addClass("add-item-animation")
n.setTimeout(function(){return i.removeClass("add-item-animation")},700)},1e3/60)}()
return i.removeClass("add-item-animation")},_getRestNum:function(){var e=this._getVariationData(),t=h.default.find(this.props.cartData.items,function(t){return Number(t.orderItem.id)===Number(e.id)})
return t?e.quantity-t.orderItem.quantity:e.quantity},_getOriginalRestNum:function(){return this._getVariationData().quantity},_allOutOfStock:function(){return h.default.all(this.props.product.variations,function(e){return 0===Number(e.quantity)})},_hasPayment:function(){return T.default.isPaymentAccountSet()},_canBuy:function(){if(this._getVariationData()){var e=this._getRestNum(),t=this._getOriginalRestNum()
return(Number(this.state.quantity)||1)<=e||-1===t}},_canMinusQuantity:function(){var e=Number(this.state.quantity)
return!isNaN(e)&&e>=2},_getFirstAvailableVariation:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.product.variations,n=t.find(function(t){var n=e.props.cartData.items.find(function(e){return Number(e.orderItem.id)===Number(t.id)})
return(n?t.quantity-n.orderItem.quantity:t.quantity)>0||-1===t.quantity})
return n||t[0]},_getVariationData:function(){var e=this,t=h.default.find(null!=this.props.product?this.props.product.variations:void 0,function(t){return Number(t.id)===Number(e.state.variationId)})
return t||(t={})},_getErrorText:function(){if(this._canBuy())return""
if(!this.state.variationId&&this.state.showSelectVariationMsg)return i("Ecommerce|Select an option")
var e=this._getOriginalRestNum()
return void 0===e?"":0===e?i("Ecommerce|This option is out of stock"):i("Ecommerce|Only %{quantity} in stock",{quantity:e})},_getProductImage:function(){return(null!=this.props.product.picture[this.state.currentImageIndex]?this.props.product.picture[this.state.currentImageIndex].thumbnailUrl:void 0)||R.cdnAssetPath(S.default.DEFAULT_PRODUCT_IMAGE)},_getEstimatedDelivery:function(){var e=this.props.settings.estimatedDelivery,t=this.props.locale,n="zh-CN"===t?"YYYY年M月":"MMMM YYYY"
return(0,v.default)(e).locale(t).format(n)},_openBuyPanel:function(e){I.default.openDialog("ecommerceBuyPanel",{strong:!0})
k.default.updateBuyDialogOpenState(!0)
k.default.gotoEcommerceBuyDialog(e,!0)},_addItemDataToCart:function(){var e=this,t=this.props.product,i=this.props.cartData,o=Number(this.state.quantity)||1
i.items.some(function(n){if(Number(n.orderItem.id)===Number(e.state.variationId)){e.props.hasMultipleProducts?n.orderItem.quantity+=o:n.orderItem.quantity=o
n.orderItem.price=Number(e.state.price)
n.orderItem.name=e.state.name
n.productId=t.id
n.product=t
return!0}return!1})||i.items.push({productId:t.id,product:t,orderItem:{id:Number(this.state.variationId),quantity:o,price:Number(this.state.price),name:this.state.name}})
k.default.updateShoppingCart(i)
n(217).trackPageEventOnFB("AddToCart",{value:Number(this.state.price)*Number(o),currency:L.default.getSettings().currencyData.code,content_name:t.name,content_type:"product",content_ids:t.id})},_addItem:function(){var e=this,t=void 0
t=n(217)
t.trackEcommerceBuyerEvent(this.props.keenIoEcommerceBuyerAddedItemToCart)
var i=function(){if(e.props.hasMultipleProducts)return e._shoppingCartAnimation({x:e._clickPosition.x,y:e._clickPosition.y},function(){return e._addItemDataToCart()})
e._addItemDataToCart()
e._openBuyPanel("singleProductPanel")
t=n(217)
t.trackEcommerceBuyerEvent(e.props.keenIoEcommerceBuyerViewedCheckoutDialog,{entrance:"direct"})},o=this.props.cartData,a=Boolean(null!=o.orderData?o.orderData.orderToken:void 0),r=function(){var e=Number(o.orderData.startTime)
return((new Date).getTime()-e)/6e4>=10}
a||i()
if(a&&r()){k.default.clearShoppingCart()
i()}a&&!r()&&this._openBuyPanel("orderPreview")
return this._onClickHideVariationSelectPanel()},_chooseVariation:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.product.variations,n=h.default.find(t,function(t){return Number(t.id)===Number(e)})
n&&this.setState({variationId:e,price:n.price,name:n.name,showSelectVariationMsg:!1})},_showImageGallery:function(){var e=this
return n.e(0).then(function(){n(650)
var t=e.props.product.picture.map(function(e){return{src:e.url}})
return p.default.fancybox.open(t,Object.assign({},z.default.onlyCloseBtnOpts,{baseTpl:z.default.getCustomArrowTpl(),beforeMove:z.default.indicatorBeforeMove,onInit:z.default.indicatorOnInit}))}.bind(null,n)).catch(n.oe)},_getUnSupportedPaymentMessage:function(){var e=void 0,t=T.default.availableDevicesToPayment(),n=T.default.hasAvailablePaymentWithCurrentDevice(),i={wechat:"微信",mobile:"手机",desktop:"电脑"},o=t.length,a=""
if(!n&&o>0){e=1===o&&"wechat"===t[0]?"":"浏览器"
for(var r=0;r<t.length;r++){var s=t[r]
a+=""+(0!==r?"或":"")+i[s]}}return"请用"+a+e+"进行支付"},_onChangeQuantity:function(e){var t=e.target.value;/^(\d+)?$/.test(t)&&this.setState({quantity:t})},_onChangeChooseVariation:function(e){var t=e.target.value
return this._chooseVariation(t)},_onClickAddQuantity:function(e){var t=Number(this.state.quantity)
t=isNaN(t)?0:t
this.setState({quantity:t+e})},_onClickShowImageGallery:function(){return this._showImageGallery()},_onClickBuy:function(e){if(this.state.variationId){this._setClickPosition(e.clientX,e.clientY)
return this._addItem()}this.setState({showSelectVariationMsg:!0})},_onClickOpenBuyPanel:function(){var e=this.props.cartData,t=Boolean(null!=e.orderData?e.orderData.orderToken:void 0),n=function(){var t=Number(e.orderData.startTime)
return((new Date).getTime()-t)/6e4>=10}
t&&n()&&k.default.clearShoppingCart()
if(t&&!n())return this._openBuyPanel("orderPreview")},_onClickNextImage:function(){this.setState({currentImageIndex:this.state.currentImageIndex+1})},_onClickPrevImage:function(){this.setState({currentImageIndex:this.state.currentImageIndex-1})},_setCurrentImage:function(e){this.setState({currentImageIndex:e})},_onClickShowProductPage:function(){var e=this.props.product
return x.default.gotoProductPage(e.id,this.context.fromStorePage)},_onClickShowVariationSelectPanel:function(){this.setState({showSelectPanel:!0})},_onClickHideVariationSelectPanel:function(){this.setState({showSelectPanel:!1})},_getSlickSettings:function(){var e=this
return{infinite:1!==this.props.product.picture.length,slidesToShow:1,autoplay:!1,afterChange:function(t){return e.setState({currentImageIndex:t})}}},_renderThumbnailList:function(){var e=this,t=void 0,n=this.props.product.picture.length,i=this.state.currentImageIndex+1
t=n>=7?i<=4?0:n-i<=3?14.5*-(n-7)+"%":14.5*-(i-4)+"%":0
return a("div",{className:"s-ecommerce-row-view-product-thumbnail-list"},void 0,a("ul",{style:{left:t}},void 0,this.props.product.picture.map(function(t,n){return a("li",{className:n===e.state.currentImageIndex?"current":"",onClick:function(){return e._setCurrentImage(n)}},n,a("img",{src:t.thumbnailUrl}))})))},_renderPrice:function(e){return T.default.needNarrowCurrencySymbol()?a(q.PriceWithSmallSymbol,{settings:this.props.settings,price:e}):a("span",{},void 0,e)},render:function(){var e=this,t=this._canBuy(),n=this._hasPayment(),o=T.default.hasAvailablePaymentWithCurrentDevice(),r=this.props.settings.estimatedDelivery,l=this.props.isSxl,u=this._getVariationData(),c=this.state.showSelectPanel,d=this.props.fromProductPage,f=!d&&this.props.product.detailEnabled&&Q.default.getProductPage(),p=this.state.price?T.default.addCurrencySymbol(Number(this.state.price)):T.default.getPriceScope(this.props.product),m=this._allOutOfStock()?i("Ecommerce|All options are out of stock"):this._getErrorText(),h=i(n?"card"===this.props.layout?"Ecommerce|Add to cart":r?this.props.hasMultipleProducts?"Ecommerce|Pre-Order: Add to cart":"Ecommerce|Pre-Order":this.props.hasMultipleProducts?"Ecommerce|Add to cart":"Ecommerce|Buy now":"Ecommerce|Coming soon"),g="entypo-minus minus-icon "+(this._canMinusQuantity()?"":"disable"),v="entypo-plus plus-icon "+(t?"":"disable"),y=this._canMinusQuantity()?this._onClickAddQuantity.bind(this,-1):null,_=t?this._onClickAddQuantity.bind(this,1):null,w=this.state.variationId
return a("div",{className:(0,b.default)("s-ecommerce-row-view-product",{"from-product-page":d})},void 0,a("div",{className:""+this.props.imgColumnClassName,style:{minHeight:"50px"}},void 0,a("div",{className:"half-offset-right"},void 0,s.default.createElement("div",{className:"s-ecommerce-row-view-product-image-wrapper",ref:"imageWrapper",onClick:this._onClickShowImageGallery},this.props.product.picture.length>=1&&a("div",{className:"slider-wrapper"},void 0,s.default.createElement($.default,this._getSlickSettings(),this.props.product.picture.map(function(e,t){return a("div",{className:"slide-thumb",style:{backgroundImage:"url("+e.thumbnailUrl+")"}},t)})),this.props.product.picture.length>=2&&a("ul",{className:"slider-dot-wrapper"},void 0,this.props.product.picture.map(function(t,n){return a("li",{className:(0,b.default)("slider-dot",{selected:e.state.currentImageIndex===n})})}))),a("div",{className:"image-wrapper"},void 0,a(K.default,{src:this._getProductImage(),width:"100%"}),function(){if(e.props.product.picture.length>=2){if("card"===e.props.layout||d)return a("div",{className:"s-ecommerce-row-view-product-image-overlay-wrapper"},void 0,a("div",{className:"s-ecommerce-row-view-product-image-overlay"}),a("div",{className:"s-ecommerce-row-view-product-image-overlay-icon"},void 0,a("div",{className:"fa fa-search-plus",title:i("Ecommerce|Click to view more images")})))
if("row"===e.props.layout)return a("div",{className:"s-ecommerce-row-view-product-image-gallery-button"},void 0,a("div",{className:"fa fa-search-plus",title:i("Ecommerce|Click to view more images")}))}}())),(d||"card"===this.props.layout)&&this.props.product.picture.length>=2&&this._renderThumbnailList())),a("div",{className:"s-ecommerce-row-view-product-detail-panel s-font-body "+this.props.infoColumnClassName},void 0,a("div",{className:"s-ecommerce-row-view-product-name"},void 0,this.props.product.name),a("div",{className:"s-ecommerce-row-view-product-pricing"},void 0,this._renderPrice(p)),a("div",{className:"s-ecommerce-row-view-product-desc"},void 0,a("div",{dangerouslySetInnerHTML:{__html:this.props.product.description}}),r&&a("div",{style:{fontWeight:"600"}},void 0,i("Ecommerce|Ships %{delivery}.",{delivery:this._getEstimatedDelivery()})),f&&a("div",{className:"view-detail-btn",onClick:this._onClickShowProductPage},void 0,i("Ecommerce|View more details..."))),a("div",{className:"s-ecommerce-row-view-product-select"},void 0,this.props.product.variations.length>=2&&a("div",{className:"select-variation"},void 0,a("div",{className:"select-label"},void 0,a("span",{},void 0,u.name||i("Ecommerce|Select an option")),a("span",{className:"select-arrow"})),a("select",{onChange:this._onChangeChooseVariation,value:w||0},void 0,a("option",{disabled:!0,value:0},-1,i("Ecommerce|Select an option")),this.props.product.variations.map(function(e,t){return a("option",{value:e.id},t,e.name)}))),a("div",{className:"select-number"},void 0,a("div",{className:"select-label"},void 0,i("Ecommerce|Quantity")),a("div",{className:"number-input-wrapper"},void 0,a("div",{className:g,onClick:y}),a("input",{type:"text",maxLength:"3",value:this.state.quantity,onChange:this._onChangeQuantity}),a("div",{className:v,onClick:_})))),!t&&a("div",{className:"s-ecommerce-row-view-product-error-text"},void 0,m),!t&&this.state.variationId||!n?a(ne.default,{component:"div",className:"s-ecommerce-row-view-product-order-btn s-common-button disable",onClick:this._onClickOpenBuyPanel},void 0,h):l&&!o?a("div",{},void 0,a(ne.default,{component:"div",className:"s-ecommerce-row-view-product-order-btn s-common-button disable"},void 0,"无可用的支付方式"),a("div",{className:"s-ecommerce-buy-prompt"},void 0,a("i",{className:"fa fa-exclamation-circle","aria-hidden":"true"}),this._getUnSupportedPaymentMessage())):a(ne.default,{component:"a",className:"s-ecommerce-row-view-product-order-btn s-common-button",onClick:this._onClickBuy},void 0,h)),d&&!(l&&!o)&&a("div",{},void 0,a("div",{className:(0,b.default)("select-overlay",{show:c}),onClick:this._onClickHideVariationSelectPanel}),a("div",{className:"mobile-select"},void 0,a("div",{className:(0,b.default)("select-panel",{show:c})},void 0,!t&&a("div",{className:"error-text"},void 0,a("div",{className:"container"},void 0,a("div",{className:"sixteen columns"},void 0,m))),a("div",{className:"price"},void 0,a("div",{className:"container"},void 0,a("div",{className:"sixteen columns"},void 0,a("div",{className:"select-label"},void 0,i("Ecommerce|Price")),a("div",{className:"price-label"},void 0,p)))),this.props.product.variations.length>=2&&a("div",{className:"variations"},void 0,a("div",{className:"container"},void 0,a("div",{className:"sixteen columns"},void 0,a("div",{className:"select-label"},void 0,i("Ecommerce|Product Options")),a("div",{className:"variations-list"},void 0,this.props.product.variations.map(function(t){return a("div",{className:(0,b.default)("variation-item",{selected:w===t.id}),onClick:function(){return e._chooseVariation(t.id)}},void 0,t.name)}))))),a("div",{className:"quantity"},void 0,a("div",{className:"container"},void 0,a("div",{className:"sixteen columns"},void 0,a("div",{className:"select-label"},void 0,i("Ecommerce|Quantity")),a("div",{className:"quantity-changer"},void 0,a("div",{className:g,onClick:y}),a("div",{className:"quantity-number"},void 0,this.state.quantity),a("div",{className:v,onClick:_})))))),a("div",{onClick:n?c?this._onClickBuy:this._onClickShowVariationSelectPanel:null,className:"add-btn "+(n?"":"disabled")},void 0,i(n?"Ecommerce|Add to cart":"Ecommerce|Coming soon")))))}})
t.default=(0,J.default)(ie,[],function(){return{locale:Q.default.getLocale(),isSxl:Q.default.getIsSxl(),isNewMobileActions:ee.default.getIsNewMobileActions(),keenIoEcommerceBuyerAddedItemToCart:Q.default.getKeenIoEcommerceBuyerAddedItemToCart(),keenIoEcommerceBuyerViewedCheckoutDialog:Q.default.getKeenIoEcommerceBuyerViewedCheckoutDialog()}})
e.exports=t.default}).call(t,n(7))},1004:function(e,t,n){"use strict"
var i,o,a,r,s,l,u,c,d,f,p,m,h,g,v,y,b,_,w,C,k,N
c=n(1)
i=n(6)
a=n(25).EventEmitter
o=n(43)
n(211)
n(22)
d=void 0
f=void 0
y=!1
_=function(e,t){e=e.toSlug();(0===e.length||e.match(/^[0-9]+$/g))&&(e="_"+(t+1))
return e}
m=function(){var e,t,i,o,a,r,s,l,u,d,p,m,h,g,v
i=n(162)
e=n(21)
t=n(8)
a=e.getCurrentPageType()
h=t.getId()
if(!i.isEditMode()&&f)return f
v=e.getSectionNames()
p=[]
for(s=l=0,u=v.length;l<u;s=++l){g=v[s]
g||(g="")
r="preview"===t.getSiteMode()?"/s/sites/"+h+"/preview?mode=iframe&v4=1#":"/#"
d=m=("productPage"===a||"itemPage"===a||"searchPage"===a?r:"#")+_(g,s)
o=1
for(;~c.indexOf(p,d);)d=m+"-"+o++
p.push(d)}i.isEditMode()||(f=p)
return p}
p=function(e){return m()[e]}
h=function(e){var t,o,a,r,s
if(""===e)return 0
if(e.match(/^#\d+$/g)){t=n(21)
s=t.getSections()
a=parseInt(e.substring(1),10)-1;(a<0||a>=s.length)&&(a=0)
return a}if(~(a=c.indexOf(m(),e)))return a
if(c.startsWith(e,"#blog")||c.startsWith(e,"#_blog")){t=n(21)
o=i.url(location.href).param("categoryId")
o=o||"all"
r=c.findIndex(t.getSections(),function(e){return!(!c.isObject(e.components.blog1)||!c.isObject(e.components.blog1.category))&&(c.isUndefined(e.components.blog1.category.id)?"all"===o:o===e.components.blog1.category.id.toString())})
return r}if("#store"===e||"#_store"===e){t=n(21)
r=c.findIndex(t.getSections(),function(e){return c.isObject(e.components.ecommerce1)})
return r}}
w=function(e){var t
t=h(e)
return C(t)};(function(e){var t,i
t=n(21)
i=c.findIndex(t.getSections(),function(t){return t.id===e})
return C(i)})
C=function(e){return g(e)}
k=function(e){d.setData("navigating",!0)
return d.setData("navToPosition",e)}
g=function(e){if(e>=0){d.setData("navigating",!0)
d.setData("navToIndex",e)
return d.setData("selected",e)}}
b=function(){var e,t
e=window.location.hash
if(""!==e&&"#"!==e&&0!==e.indexOf("#!"))return null!=(t=window.history)&&"function"==typeof t.replaceState?t.replaceState("",document.title,window.location.pathname+window.location.search):void 0}
v=c.debounce(function(){return window.Waypoint.refreshAll()},1e3)
N=function(e){if(!d.getData("navigating")){b()
return d.setData("selected",e)}};(function(e){return d.setData("selectedPageIndex",e)})
r="navigator_store"
s=c.assign({},a.prototype,{getDefault:function(){return{selected:0,navToIndex:null,navigating:!1}},emitChange:function(){return this.emit(r)},addListener:function(e){return this.on(r,e)},rmListener:function(e){return this.removeListener(r,e)},init:function(e){d=new o(e)
return d.binding},getStates:function(){return d.binding.toJS()},getData:function(e){return d.binding.get(e)},getBinding:function(){return d.binding},getSelectedIndex:function(){return d.getData("selected")},getSelectedPageIndex:function(){return d.getData("selectedPageIndex")},getNavToIndex:function(){return d.getData("navToIndex")},getNavToPosition:function(){return d.getData("navToPosition")},isNavigating:function(){return d.getData("navigating")},getSectionHashByIndex:function(e){return p(e)}})
u=n(282)
l=n(283)
s.dispatchToken=u.register(function(e){var t,i,o
switch(e.actionType){case l.ActionTypes.SET_SECTION_INDEX:if(!y)return
N(e.index)
break
case l.ActionTypes.NAVIGATE_TO_HASH:w(e.hash)
break
case l.ActionTypes.NAVIGATE_TO_PREVIOUS_SECTION:i=s.getSelectedIndex()
C(i>0?i-1:0)
break
case l.ActionTypes.NAVIGATE_TO_NEXT_SECTION:t=n(21)
i=s.getSelectedIndex()
o=t.getSections().length
C(i+1<o?i+1:o-1)
break
case l.ActionTypes.DID_NAVIGATE_TO_SECTION:d.setData("navigating",!1)
d.setData("navToIndex",null)
break
case l.ActionTypes.PAGE_CONTENT_UPDATED:v()
break
case l.ActionTypes.PAGE_MOUNTED:window.setTimeout(function(){return function(){return y=!0}}(),1500)
break
case l.ActionTypes.REPEATABLE_ITEM_MOVED:k(e.position)
break
case l.ActionTypes.SWITCH_PAGE:f=void 0}return s.emitChange()})
window.DEBUG||(window.DEBUG={})
window.DEBUG.NavigatorStore=s
e.exports=s},2425:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=e
Object.keys(i).forEach(function(e){var a=o+(o?"-"+e:e),r=i[e]
"object"!==(void 0===r?"undefined":p(r))?n[a]=r:t(a,r)})}var n={}
t("",e)
return n}function a(e){var t={}
Object.keys(e).forEach(function(n){return t[n]=o(e[n])})
return t}function r(){return n(8).getThemeName()}function s(e){var t=n(73),i=t.get(r())
return i&&i.features&&i.features[e]}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16,i=Math.floor((n-t)/2)
return v[e]+" columns "+(i?"offset-"+v[i]:"")}function u(e){return v[e]+" columns"}function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=r(),i=""
if("persona"===n)i=4===e?"three columns half-fixed":5===e?"spfive columns half-fixed":6===e?"two columns half-fixed":u(12/e)
else switch(e){case 1:i=s("narrowMedia")?t?u(14):l(14,14):u(16)
break
case 3:i="third columns"
break
case 4:i="four columns half-fixed"
break
case 5:i="fifth columns half-fixed"
break
case 6:i="sixth columns half-fixed"
break
default:i=u(16/e)}return i+" no-float"}function d(e,t,n){for(var i=t.split("-"),o=e,a="",r="",s=0,l=i.length;s<l;s++){r=i[s]
if(!o[r]){if(s>=1){for(var u=s;u<n;u++){r=Object.keys(o)[0]
o=o[r]
a+=r+"-"}break}return""}o=o[r]
a+=r+"-"}if(Object.keys(o).length)for(var c=i.length;c<n;c++){r=Object.keys(o)[0]
o=o[r]
a+=r+"-"}return a.replace(/-$/,"")}function f(e){var t=n(2491),i=n(2427),o=r(),a=e,s=a.getDefaultBinding().get("template_name"),l=a._getLayoutBinding().get("layout_variation")
t.getLayoutMapping(o)[l]||"text"!==s||["persona","perspective"].includes(o)||a.getComponentBinding("background1").merge(g.default.fromJS(i.dataForEmptyBackground()))}Object.defineProperty(t,"__esModule",{value:!0})
var p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
t.getLayoutMapping=a
t.getThemeName=r
t.getThemeFeature=s
t.generateColumnClassWithOffset=l
t.generateColumnClass=u
t.generateItemClassByColumnsNum=c
t.getClosestKey=d
t.removeOldBackgroundForText=f
var m=n(1),h=(i(m),n(15)),g=i(h),v={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16}
for(var y in v)v[v[y]]=y},2426:function(e,t,n){"use strict"
var i=n(2510),o=n(2511),a=n(2512),r=o([i])
e.exports=r
e.exports.touchStyles=a
e.exports.Mixin=i},2427:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(1)
t.imageDataForSaving=function(e){var t={},n=e.getMeta(),o=n.backgroundSizing,a=n.backgroundClassName
if(o||a){if(a){switch(i.trim(a)){case"strikingly-light-text strikingly-text-overlay":case"strikingly-text-overlay strikingly-light-text":case"overlay":t.textColor="overlay"
break
case"strikingly-light-text":case"light":t.textColor="light"
break
case"strikingly-dark-text":case"dark":t.textColor="dark"
break
default:t.textColor="light"}}t.sizing="cover";-1!==i.indexOf(["cover","contain","tile","center"],o)&&(t.sizing=o)}return Object.assign({},e.dataToSave("background"),{videoHtml:""},t)}
t.dataForEmptyBackground=function(){return{w:null,h:null,storage:null,storageKey:null,format:null,url:"",textColor:"light",videoUrl:"",videoHtml:""}}},2428:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=n(6),r=o(a),s=n(388),l=o(s),u={onlyCloseBtnOpts:{infobar:!1,fullScreen:!1,thumbs:!1,slideShow:!1,closeBtn:!0},getCustomArrowTpl:function(){return'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="s-fancybox-btn s-fancybox-btn--left" data-fancybox-previous><button class="s-fancybox-arrow s-fancybox-arrow--left" title="Previous"></button></div><div class="s-fancybox-btn s-fancybox-btn--right" data-fancybox-next><button class="s-fancybox-arrow s-fancybox-arrow--right" title="Next"></button></div><div class="fancybox-controls"><div class="fancybox-buttons"><button data-fancybox-close class="fancybox-button fancybox-button--close" title="'+i("Close")+'"></button></div></div><div class="fancybox-slider-wrap"><div class="fancybox-slider"></div></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div><div class="fancybox-dot-nav-wrap"><ul class="fancybox-dot-nav"></ul><div class="fancybox-num-nav"></div></div></div>'},indicatorOnInit:function(e){u.clearRefs(e)
var t=e.group.length
1===t&&(0,r.default)(".s-fancybox-btn").hide()
t>20?u.numNavOnInit(e):u.dotNavOnInit(e)},clearRefs:function(e){e.$refs.dotNav=void 0
e.$refs.numNav=void 0},dotNavOnInit:function(e){e.$refs.dotNav=(0,r.default)(".fancybox-dot-nav")
for(var t=e.group.length,n=0;n<t;n++)e.$refs.dotNav.append("<li></li>")},numNavOnInit:function(e){e.$refs.numNav=(0,r.default)(".fancybox-num-nav")
var t=e.group.length,n=e.currIndex+1
e.$refs.numNav.html("<div>"+n+" / "+t+"</div>")},indicatorBeforeMove:function(e){e.$refs.dotNav&&u.dotNavBeforeMove(e)
e.$refs.numNav&&u.numNavBeforeMove(e)},dotNavBeforeMove:function(e){var t=e.$refs.dotNav.find("li")
t.removeClass("dot-nav__current")
t.eq(e.currIndex).addClass("dot-nav__current")},numNavBeforeMove:function(e){var t=e.$refs.numNav,n=e.group.length,i=e.currIndex+1
t.html("<div>"+i+" / "+n+"</div>")},getCaption:function(e,t){var n=t.type&&t.type.toLowerCase(),i=(0,r.default)(this)
switch(n){case"image":i.title=l.default.IMAGE_TITLE(i)
i.desc=l.default.IMAGE_DESCRIPTION(i)
i.title.length&&i.desc.length?i.title+=" - "+i.desc:i.desc.length&&(i.title=i.desc)
break
case"video":i.title=i.data("description")}return i.title},transformVideoSrc:function(e){e.parent().find('a.item[data-type="video"]').each(function(){var e=(0,r.default)(this)
if(e.data("html")){var t=e.data("html").replace(/(src="[^"]*)"/,function(e,t){return t+'&autoplay=1"'}),n=(0,r.default)(t),i=n.attr("src")
e.data("src",i)
e.attr("href","javascript:;")
e.attr("data-type","")}})}}
t.default=u
e.exports=t.default}).call(t,n(7))},2429:function(e,t,n){"use strict"
function i(e){var t=e.price,n=e.settings,i=n.currencySymbol
return o.createElement("span",null,Array.from(t).map(function(e,t){return e===i?o.createElement("span",{key:t,className:"small-symbol"},e):e}))}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(0)
t.PriceWithSmallSymbol=i},2430:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),l=n(0),u=i(l),c=n(12),d=(i(c),n(975)),f=i(d),p=n(158),m=i(p),h=n(79),g=i(h),v=function(e){var t=function(e){function t(){o(this,t)
return a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}r(t,e)
s(t,[{key:"render",value:function(){return u.default.createElement(f.default,this.props)}}])
return t}(u.default.Component)
return(0,m.default)(t,[],function(){return{isCategoryIdExist:function(t){return e.isCategoryIdExist(t)}}})},y=v(g.default)
y.createCategoryBar=v
t.default=y
e.exports=t.default},2431:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
t.getTrackLeft=t.getTrackAnimateCSS=t.getTrackCSS=void 0
var o=n(4),a=i(o),r=n(632),s=i(r),l=function(e,t){return t.reduce(function(t,n){return t&&e.hasOwnProperty(n)},!0)?null:console.error("Keys Missing",e)},u=t.getTrackCSS=function(e){l(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"])
var t,n,i=e.slideCount+2*e.slidesToShow
e.vertical?n=i*e.slideHeight:t=e.variableWidth?(e.slideCount+2*e.slidesToShow)*e.slideWidth:e.centerMode?(e.slideCount+2*(e.slidesToShow+1))*e.slideWidth:(e.slideCount+2*e.slidesToShow)*e.slideWidth
var o={opacity:1,WebkitTransform:e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",transform:e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",transition:"",WebkitTransition:"",msTransform:e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)"}
t&&(0,s.default)(o,{width:t})
n&&(0,s.default)(o,{height:n})
window&&!window.addEventListener&&window.attachEvent&&(e.vertical?o.marginTop=e.left+"px":o.marginLeft=e.left+"px")
return o}
t.getTrackAnimateCSS=function(e){l(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"])
var t=u(e)
t.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase
t.transition="transform "+e.speed+"ms "+e.cssEase
return t},t.getTrackLeft=function(e){l(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"])
var t,n,i=0,o=0
if(e.fade)return 0
if(e.infinite){if(e.slideCount>=e.slidesToShow){i=e.slideWidth*e.slidesToShow*-1
o=e.slideHeight*e.slidesToShow*-1}if(e.slideCount%e.slidesToScroll!=0&&e.slideIndex+e.slidesToScroll>e.slideCount&&e.slideCount>e.slidesToShow)if(e.slideIndex>e.slideCount){i=(e.slidesToShow-(e.slideIndex-e.slideCount))*e.slideWidth*-1
o=(e.slidesToShow-(e.slideIndex-e.slideCount))*e.slideHeight*-1}else{i=e.slideCount%e.slidesToScroll*e.slideWidth*-1
o=e.slideCount%e.slidesToScroll*e.slideHeight*-1}}else if(e.slideCount%e.slidesToScroll!=0&&e.slideIndex+e.slidesToScroll>e.slideCount&&e.slideCount>e.slidesToShow){var r=e.slidesToShow-e.slideCount%e.slidesToScroll
i=r*e.slideWidth}e.centerMode&&(e.infinite?i+=e.slideWidth*Math.floor(e.slidesToShow/2):i=e.slideWidth*Math.floor(e.slidesToShow/2))
t=e.vertical?e.slideIndex*e.slideHeight*-1+o:e.slideIndex*e.slideWidth*-1+i
if(!0===e.variableWidth){var s
if(e.slideCount<=e.slidesToShow||!1===e.infinite)n=a.default.findDOMNode(e.trackRef).childNodes[e.slideIndex]
else{s=e.slideIndex+e.slidesToShow
n=a.default.findDOMNode(e.trackRef).childNodes[s]}t=n?-1*n.offsetLeft:0
if(!0===e.centerMode){n=!1===e.infinite?a.default.findDOMNode(e.trackRef).children[e.slideIndex]:a.default.findDOMNode(e.trackRef).children[e.slideIndex+e.slidesToShow+1]
t=n?-1*n.offsetLeft:0
t+=(e.listWidth-n.offsetWidth)/2}}return t}},2432:function(e,t,n){"use strict"
var i=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a={className:"",accessibility:!0,adaptiveHeight:!1,arrows:!0,autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e){return o.default.createElement("button",null,e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:!1,pauseOnHover:!0,responsive:null,rtl:!1,slide:"div",slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,afterChange:null,beforeChange:null,edgeEvent:null,init:null,swipeEvent:null,nextArrow:null,prevArrow:null}
e.exports=a},2433:function(e,t,n){var i=n(2521),o=function(e){return/[height|width]$/.test(e)},a=function(e){var t="",n=Object.keys(e)
n.forEach(function(a,r){var s=e[a]
a=i(a)
o(a)&&"number"==typeof s&&(s+="px")
t+=!0===s?a:!1===s?"not "+a:"("+a+": "+s+")"
r<n.length-1&&(t+=" and ")})
return t},r=function(e){var t=""
if("string"==typeof e)return e
if(e instanceof Array){e.forEach(function(n,i){t+=a(n)
i<e.length-1&&(t+=", ")})
return t}return a(e)}
e.exports=r},2434:function(e){function t(e,t){var n,i=0,o=e.length
for(i;i<o;i++){n=t(e[i],i)
if(!1===n)break}}function n(e){return"[object Array]"===Object.prototype.toString.apply(e)}function i(e){return"function"==typeof e}e.exports={isFunction:i,isArray:n,each:t}},2435:function(e,t,n){"use strict"
var i,o,a,r,s
r=n(1)
o=n(25).EventEmitter
n(51)
n(52)
i="pages_list_store_event_id";(function(e){switch(e.state){case"published":return 2
case"unpublished":return 1
case"new":return 0}})
s=[]
a=r.assign({},o.prototype,{emitChange:function(){return this.emit(i,this.getPagesList())},getPagesList:function(){return s},addChangeListener:function(e){return this.on(i,e)},removeChangeListener:function(e){return this.removeListener(i,e)},init:function(){var e
e=n(8)
s=e.getConnectedSites()
return this.emitChange()}})
e.exports=a},2436:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),c=n(0),d=i(c),f=n(12),p=(i(f),n(4)),m=i(p),h=n(8),g=i(h),v=n(1003),y=(i(v),n(2437)),b=i(y),_=n(32),w=i(_),C=n(157),k=i(C),N="sixteen",x=void 0,E=function(e,t){var i=function(i){function c(e){o(this,c)
var t=a(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e))
t.state={currentPageIndex:1,currentProductIndex:0}
return t}r(c,i)
u(c,[{key:"componentWillMount",value:function(){var e=this.props.themeName
x=n(2490)
switch(e){case"persona":N="twelve alpha"}}},{key:"_bind",value:function(){for(var e=this,t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i]
n.forEach(function(t){return e[t]=e[t].bind(e)})}},{key:"_adjustSectionPosition",value:function(){if(w.default.isSmallScreen()){var e=$(m.default.findDOMNode(this)).closest(".s-ecommerce-container, .s-persp-container, .s-persona-content")
e.length&&$(document).scrollTop(e.offset().top-40)}else{var t=$(m.default.findDOMNode(this)).closest("li.slide").find(".section-anchor")
0===t.length&&(t=$(m.default.findDOMNode(this)).closest(".s-section"))
t.length&&$(document).scrollTop(t.offset().top)}}},{key:"_createCurrentProductProps",value:function(){var e=this.props,t=e.products,n=e.hasMultipleProducts,i=e.layout,o=e.settings,a=e.cartData,r=e.imgColumnClassName,s=e.infoColumnClassName
return{product:t[this.state.currentProductIndex],hasMultipleProducts:n,layout:i,settings:o,cartData:a,imgColumnClassName:r,infoColumnClassName:s}}},{key:"_onClickGoToIndex",value:function(e){this.setState({currentPageIndex:e})}},{key:"render",value:function(){var n=this,i=999*(this.state.currentPageIndex-1),o=this.props.products.slice(i,i+999),a=x.getLayout(this.props.themeName,this.props.layout)()
o=o.map(function(o,r){var s={product:o,layout:n.props.layout,hasMultipleProducts:n.props.products.length>=2,columnClass:a.columnClass,textClass:a.textClass,imgShapeClass:a.imgShapeClass,settings:n.props.settings,pageId:n.props.pageId}
return d.default.createElement(e,l({},s,{key:r,index:r+i,isPortfolio:t}))})
var r={left:"0"},u={height:"auto"}
return s("div",{className:"s-ecommerce-card-view-wrapper",style:r},void 0,s("div",{className:"s-ecommerce-card-view-cards-wrapper"},void 0,s("div",{className:"s-ecommerce-card-view-cards",style:u},void 0,o)))}}])
return c}(d.default.Component)
return(0,k.default)(i,[],function(){return{themeName:g.default.getThemeName()}})},S=E(b.default)
S.createCardView=E
t.default=S
e.exports=t.default},2437:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),c=n(0),d=o(c),f=n(12),p=o(f),m=n(4),h=o(m),g=n(6),v=o(g),y=n(35),b=n(80),_=o(b),w=n(288),C=o(w),k=n(13),N=(o(k),n(59)),x=o(N),E=n(71),S=o(E),P=n(218),T=o(P),O=n(635),L=o(O),M=n(2429),I=function(e,t){var n,o
return o=n=function(n){function o(){a(this,o)
var e=r(this,(o.__proto__||Object.getPrototypeOf(o)).call(this))
e._bind("_onClickShowProductPage")
return e}s(o,n)
u(o,[{key:"componentDidMount",value:function(){var e=this,t=(0,v.default)(h.default.findDOMNode(this.refs.imageWrapper)),n=t.find("img")
this._adjustImageSize(t,n)
n.load(function(){return e._adjustImageSize(t,n)});(0,v.default)(window).resize(S.default.debounce(function(){return e._adjustImageSize(t,n)},300))}},{key:"componentDidUpdate",value:function(){var e=this,t=(0,v.default)(h.default.findDOMNode(this.refs.imageWrapper)),n=t.find("img")
S.default.debounce(function(){return e._adjustImageSize(t,n)},300)()}},{key:"_bind",value:function(){for(var e=this,t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i]
n.forEach(function(t){return e[t]=e[t].bind(e)})}},{key:"_adjustImageSize",value:function(e,t){if("auto"===this.props.imgShapeClass)t.removeAttr("style")
else{var n=e.outerWidth(),i=e.outerHeight(),o=n/i,a=t.prop("naturalWidth"),r=t.prop("naturalHeight"),s=a/r
if(o>s){var l=n+10,u=l/s
t.width(l)
t.height(u)
t.css({top:(i-u)/2+"px",left:(n-l)/2+"px"})}else{var c=i+10,d=c*s
t.height(c)
t.width(d)
t.css({top:(i-c)/2+"px",left:(n-d)/2+"px"})}}}},{key:"_getOutOfStock",value:function(){return this.props.product.variations.every(function(e){return 0===Number(e.quantity)})}},{key:"_getProductImage",value:function(){var t=this.props.product.picture[0]
return(void 0!==t?t.thumbnailUrl:void 0)||(0,y.cdnAssetPath)(e.DEFAULT_PRODUCT_IMAGE)}},{key:"_onClickShowProductPage",value:function(){var e=this.props,n=e.product
e.pageId,e.onClickBuy,e.index
n.externalLink||x.default.gotoProductPage(n.id,this.context.fromStorePage,t)}},{key:"_renderPrice",value:function(e){return C.default.needNarrowCurrencySymbol()?l(M.PriceWithSmallSymbol,{settings:this.props.settings,price:e}):l("span",{},void 0,e)}},{key:"render",value:function(){var e=this.props,t=e.product,n=e.settings,o=e.isPortfolio,a=!o&&this._getOutOfStock(),r=!o&&n.estimatedDelivery,s=o?t.subtitle&&t.subtitle.active&&t.subtitle.text:C.default.getPriceScope(t),u=void 0
u=i(r?"Ecommerce|Pre-Order":"Ecommerce|Buy now")
var c=d.default.createElement("div",{className:"s-ecommerce-card-view-card-image "+this.props.imgShapeClass+" "+(a?"out-of-stock":"in-stock"),ref:"imageWrapper"},l(L.default,{src:this._getProductImage()}),!o&&a&&l("div",{className:"s-ecommerce-card-view-card-stock-warning s-font-body"},void 0,i("Ecommerce|Out of Stock")),!o&&l("div",{className:"s-ecommerce-card-view-card-image-overlay"}),!o&&l("div",{className:"s-ecommerce-card-view-card-image-button"},void 0,l(T.default,{component:"a",className:"s-common-button s-font-body"},void 0,u))),f=l("div",{className:"s-ecommerce-card-view-card-name s-font-body "+this.props.textClass},void 0,this.props.product.name)
return l("div",{className:"s-ecommerce-card-view-card "+this.props.columnClass},void 0,l("div",{onClick:this._onClickShowProductPage},void 0,c,l("div",{className:"s-ecommerce-card-view-card-description"},void 0,f,s&&l("div",{className:"s-ecommerce-card-view-card-price s-font-body "+this.props.textClass},void 0,this._renderPrice(s)))))}}])
return o}(d.default.Component),n.contextTypes={fromStorePage:p.default.bool},o},B=I(_.default,!1)
B.createProductCard=I
t.default=B
e.exports=t.default}).call(t,n(7))},2438:function(e,t,n){e.exports=n(3)(385)},2439:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(2540),a=i(o),r=n(2542),s=i(r),l=n(1002)
t.default=(0,l.createProductWrapper)(a.default,s.default,!0)
e.exports=t.default},2440:function(e,t,n){e.exports=n(3)(428)},2487:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(6),a=i(o),r=n(1),s=i(r),l=n(12),u=i(l),c=n(4),d=i(c),f=n(24),p=i(f),m=n(32),h=i(m),g=n(37),v=i(g),y=n(373),b=i(y),_=n(289),w=i(_),C=n(2548),k=i(C),N=p.default.createPageComponent({displayName:"VideoBgContent",bobcatPropTypes:{data:{videoHtml:u.default.string,videoUrl:u.default.string,className:u.default.string,style:u.default.object}},observedProps:["videoHtml"],getBobcatDefaultProps:function(){return{data:{videoHtml:""}}},_removeIframe:function(){return(0,a.default)(d.default.findDOMNode(this)).find("iframe").remove()},_isSliderCloneComponent:function(){var e=(0,a.default)(d.default.findDOMNode(this)),t=e.closest(".slick-track").find(".slick-slide").length-2,n=e.closest(".slick-slide")
return n.length>0&&("-1"===n.attr("data-index")||n.attr("data-index")===""+t)},componentDidMount:function(){this._isSliderCloneComponent()?this._removeIframe():this._setupBgVideo()},componentDidUpdate:function(e){e.videoHtml===this.dtProps.videoHtml||this._isSliderCloneComponent()||this._setupBgVideo()},componentWillUnmount:function(){var e=this
if(!this._isSliderCloneComponent()&&null!=this._video.frame&&null!=this._video.frame.youTubePlayer){"function"==typeof this._video.frame.youTubePlayer.stopVideo&&this._video.frame.youTubePlayer.stopVideo()
"function"==typeof this._video.frame.youTubePlayer.clearVideo&&this._video.frame.youTubePlayer.clearVideo()
this._video.frame.isRemoved=!0
s.default.remove(window.youTubeVideoBgList,function(t){return t===e._video.frame})}},afterLayoutChange:function(){return this._setupBgVideo()},_setupBgVideo:function(){var e=this
v.default.Event.unsubscribe(this._token)
this._video||(this._video={})
var t=(0,a.default)(d.default.findDOMNode(this))
if(t.length)if(h.default.isMobile())(0,a.default)(".s-bg-video").removeClass("s-bg-video video-bg").addClass("s-bg-image")
else{window.clearInterval(null!=this._video.frame?this._video.frame.loopTimer:void 0)
var n=function(){switch(e._video.type){case"youtube":var t=e._video.frame
window.youTubeVideoBgList||(window.youTubeVideoBgList=[])
Array.from(window.youTubeVideoBgList).includes(t)||window.youTubeVideoBgList.push(t)
window.onYouTubeIframeAPIReady=function(){if(null!=(null!=window.YT?window.YT.Player:void 0)){var e=!0,n=!1,i=void 0
try{for(var o,a=Array.from(window.youTubeVideoBgList)[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){t=o.value
!function(e){var t=new window.YT.Player(e.attr("id"),{videoId:e.attr("id").split("_")[0],height:e.attr("height"),width:e.attr("width"),events:{onReady:function(t){var n=void 0
e.player=n=t.target
w.default.get("enableSoundForVideoBg")||n.setVolume(0)
n.setLoop(!0)
e.duration=n.getDuration()
e.loopTimer=null
e.startLoop=function(){var e=this
window.clearInterval(this.loopTimer)
return this.loopTimer=window.setInterval(function(){return e.isRemoved?window.clearInterval(e.loopTimer):e.player.seekTo(0)},1e3*(this.duration-1))}
return e.startLoop()},onStateChange:function(t){try{if(t.data===window.YT.PlayerState.PLAYING){e.css("opacity",1)
e.closest(".video-bg-wrap").addClass("no-bg")}if([window.YT.PlayerState.ENDED,window.YT.PlayerState.PAUSED].includes(t.data)){t.target.playVideo()
return e.startLoop()}}catch(e){}}}})
e.youTubePlayer=t}(t)}}catch(e){n=!0
i=e}finally{try{!e&&a.return&&a.return()}finally{if(n)throw i}}return window.youTubeVideoBgList=[]}}
if(null==window.YT)return(0,a.default)("body").append((0,a.default)("<script src='https://www.youtube.com/iframe_api'></script>"))
break
case"vimeo":var i={method:"setVolume",value:"0"},o={method:"addEventListener",value:"pause"},r={method:"play"},s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e.attr("src").split("?")[0]
n="https:"+n.replace(/^https?:/,"")
try{e[0].contentWindow.postMessage(JSON.stringify(o),n)
if(t)return e[0].contentWindow.postMessage(JSON.stringify(i),n)}catch(e){}},l=function(e){e.css("opacity",1)
var t=e.attr("src").split("?")[0]
t="https:"+t.replace(/^https?:/,"")
try{return e[0].contentWindow.postMessage(JSON.stringify(r),t)}catch(e){}}
return(0,a.default)(window).bind("message",function(t){if(t.originalEvent.origin.match(/player\.vimeo\.com/)){switch(JSON.parse(t.originalEvent.data).event){case"ready":n=!w.default.get("enableSoundForVideoBg")
s(e._video.frame,n)
l(e._video.frame);[1e3,2e3,5e3,1e4].forEach(function(t){return setTimeout(function(){return l(e._video.frame)},t)})
break
case"pause":l(e._video.frame)}}})}}
!function(){var n=(e.dtProps.videoHtml||"").replace("&origin=","&origin="+a.default.url().attr("base")).replace(/^(https?):/,"")
t.html(n)
if(""!==n){var i=t.find("iframe")
i.length||(i=t.find("video"))
e._video.frame=i
e._video.type=-1!==n.indexOf("youtube.com")?"youtube":n.indexOf("vimeo.com")?"vimeo":"mp4"
if(i.length){"youtube"===e._video.type&&i.addClass("youtube-video")
var o=t.closest(".slide, #s-header, .s-blog-header"),r=t.closest(".video-bg");["static","initial"].includes(r.css("position"))&&r.css("position","relative")
r.children().each(function(){var e=(0,a.default)(this)
window.edit_page.v4?e.hasClass("video-bg-wrap")||!["static","initial"].includes(e.css("position"))||e.hasClass("s-section-editor-wrapper")||e.css("position","relative"):!e.hasClass("video-bg-wrap")&&["static","initial"].includes(e.css("position"))&&e.css("position","relative")
if((parseInt(e.css("z-index"),10)||1)<3)return e.css("z-index",3)})
r.find(".video-bg-wrap").css("z-index",1)
e._resizeFn&&(0,a.default)(window).off("resize",e._resizeFn)
e._resizeFn=s.default.debounce(function(){var t=Math.max(o.outerHeight(),r.height()),n=Math.max(o.outerWidth(),r.width()),a=(n/t).toFixed(2)
!function(){var e=void 0,o=void 0
i.css({position:"absolute",top:0,left:0})
var r=parseInt(i.attr("height"),10),s=parseInt(i.attr("width"),10),l=(s/r).toFixed(2)
if(l>a){e=t+100
o=(t+100)*l}else{e=(n+100)/l
o=n+100}var u=(t-e)/2,c=(n-o)/2
i.css({height:e+"px",width:o+"px",top:u+"px",left:c+"px"})}()
return window.setTimeout(function(){if(t!==Math.max(o.height(),r.height()))return e._resizeFn()},50)},100)
e._resizeFn}}}()
n()
null!=window.YT&&window.onYouTubeIframeAPIReady()
if(this._resizeFn){for(var i=[100,500,1e3,2e3,5e3],o=0;o<i.length;o++){var r=i[o]
window.setTimeout(this._resizeFn,r)}(0,a.default)(window).on("resize",this._resizeFn)
this._token=v.default.Event.subscribe("Section.changed",function(){return e._resizeFn()})
return this._token}}},render:function(){return k.default.apply(this)}})
N.WaypointLazy=(0,b.default)(N,{noWrapper:!0})
t.default=N.WaypointLazy
e.exports=t.default},2488:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}Object.defineProperty(t,"__esModule",{value:!0})
var r,s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),l=n(0),u=(o(l),n(12)),c=o(u),d=n(24),f=o(d),p=n(2426),m=o(p),h=n(35),g=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(h),v=f.default.createPageComponent({displayName:"RepeatableItem",bobcatPropTypes:(r={data:{children:c.default.oneOfType([c.default.object,c.default.array]),binding:c.default.object.isRequired,components:c.default.object},designer:{index:c.default.number.isRequired,vertical:c.default.bool,outerView:c.default.bool,hasEditorOpened:c.default.bool.isRequired,parentSize:c.default.number.isRequired,className:c.default.string,style:c.default.object,moveButtonStyle:c.default.object,alwaysShowButtons:c.default.bool}},a(r,"data",{isArranging:c.default.bool}),a(r,"callback",{onMoveUp:c.default.func,onMoveDown:c.default.func,onDeleteItem:c.default.func}),r),getBobcatDefaultProps:function(){return{designer:{vertical:!1,outerView:!1,className:""},data:{isArranging:!1}}},_clickDeleteButton:function(e){return this.props.onDeleteItem(e)},componentDidMount:function(){this.showMoveOverlay=!1
this.showDeleteOverlay=!1},onMouseEnterMoveButton:function(){this.showMoveOverlay=!0
this.forceUpdate()},onMouseLeaveMoveButton:function(){this.showMoveOverlay=!1
this.forceUpdate()},onMouseEnterDeleteButton:function(){this.showDeleteOverlay=!0
this.forceUpdate()},onMouseLeaveDeleteButton:function(){this.showDeleteOverlay=!1
this.forceUpdate()},_renderNativeEditorButtons:function(){return s("div",{className:"native-controls"},void 0,this.dsProps.parentSize>1&&s("div",{className:"f-s-repeatable-item-order-indicator"},void 0,this.props.index+1),s("div",{className:"native-buttons"},void 0,s("div",{className:"s-repeatable-delete-button f-s-repeatable-delete-button main-button",title:i("Remove this item"),onClick:this._clickDeleteButton.bind(null,this.dsProps.index),onMouseEnter:this.onMouseEnterDeleteButton,onMouseLeave:this.onMouseLeaveDeleteButton},void 0,s("span",{}),s("img",{src:g.cdnAssetPath("/images/icons/native/ic_delete_nog@3x.png")})),this.props.index>0&&s(m.default,{onTap:this.props.onMoveUp.bind(this,this.props.index),className:"f-s-repeatable-move-button f-s-repeatable-move-button--up main-button"},void 0,s("span",{}),s("img",{src:g.cdnAssetPath("/images/icons/native/ic_down_arrow_white@3x.png")})),this.props.index+1<this.props.parentSize&&s(m.default,{onTap:this.props.onMoveDown.bind(this,this.props.index),className:"f-s-repeatable-move-button f-s-repeatable-move-button--down main-button"},void 0,s("span",{}),s("img",{src:g.cdnAssetPath("/images/icons/native/ic_down_arrow_white@3x.png")}))))},_renderEditorButtons:function(){return(!this.dsProps.hasEditorOpened||this.dsProps.alwaysShowButtons)&&s("div",{className:"buttons"},void 0,this.dsProps.parentSize>1&&s("div",{className:"s-repeatable-move-button",title:i("Drag to reorder"),onMouseEnter:this.onMouseEnterMoveButton,onMouseLeave:this.onMouseLeaveMoveButton,style:this.props.moveButtonStyle||{}}),s("div",{className:"s-repeatable-delete-button",title:i("Remove this item"),onClick:this._clickDeleteButton.bind(null,this.dsProps.index),onMouseEnter:this.onMouseEnterDeleteButton,onMouseLeave:this.onMouseLeaveDeleteButton},void 0,s("div",{className:"delete-button-wrap"},void 0,s("div",{className:"delete-button-confirm"},void 0,i("Sure?")))))},render:function(){return s("div",{"data-sorting-index":this.props.index,className:this.props.className+" s-repeatable-item",style:this.props.style},void 0,!1,this.props.children,!1)}})
t.default=v
e.exports=t.default}).call(t,n(7))},2489:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){for(var i=[],o=e<t,a=n?o?t+1:t-1:t,r=e;o?r<a:r>a;o?r++:r--)i.push(r)
return i}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=i(r),l=n(12),u=i(l),c=n(4),d=(i(c),n(1)),f=(i(d),n(15)),p=(i(f),n(2438)),m=i(p),h=n(24),g=i(h),v=n(35),y=(function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e}(v),n(387)),b=(i(y),n(2509)),_=(i(b),n(2488)),w=i(_),C=n(72),k=i(C),N=n(59),x=i(N),E=void 0,S={displayName:"Repeatable",bobcatPropTypes:{data:{children:u.default.oneOfType([u.default.object,u.default.array]),binding:u.default.object.isRequired,components:u.default.object,list:m.default.list.isRequired},designer:{className:u.default.string,style:u.default.object,sortableContainment:u.default.string,sortableContainmentSelector:u.default.string,canAddItems:u.default.bool}},statics:{hasContent:function(e){return e.get("list").size>0}},getBobcatDefaultProps:function(){return{designer:{className:"",sortableContainment:"parent"}}},hasContent:function(){return E.hasContent(this.getDefaultBinding())},componentDidUpdate:function(){},_onClickSave:function(){this.updateState("normal")
this.savePage()},_isFirst:function(e){return 0===e},_isLast:function(e){return this.props.list.size===e+1},_navigateToItem:function(e){var t=$(this.refs.repeatable),n=t.find(".s-repeatable-item").eq(e),i=(window.innerHeight-n.height())/2
i<0&&(i=20)
var o=n.offset().top-i
x.default.navigateToPosition(o)},_renderChildren:function(){var e=this
return s.default.Children.map(this.props.children,function(t){if((null!=t?t.type.displayName:void 0)===w.default.displayName){var n=Object.assign({},{onMoveUp:function(t){var n=e.props.list
if(0!==n.size&&!e._isFirst(t)){var i=o(0,n.size,!1),a=[i[t],i[t-1]]
i[t-1]=a[0]
i[t]=a[1]
k.default.reorderRepeatable(i,e.getDefaultBinding().sub("list"))
e.savePage()
return e._navigateToItem(t-1)}},onMoveDown:function(t){var n=e.props.list
if(!e._isLast(t)&&0!==n.size){var i=o(0,n.size,!1),a=[i[t+1],i[t]]
i[t]=a[0]
i[t+1]=a[1]
k.default.reorderRepeatable(i,e.getDefaultBinding().sub("list"))
e.savePage()
return e._navigateToItem(t+1)}},onDeleteItem:function(t){e._deleteItem(t)
e.savePage()},isArranging:e.isState("editor")})
return s.default.cloneElement(t,n)}return t})},render:function(){var e=this,t=(this.getDefaultBinding(),this.props.style||{})
return s.default.createElement("div",{className:this.props.className+" s-repeatable",ref:"repeatable"},!1,function(){return a("div",{style:t},void 0,e.props.children)}())}}
E=g.default.createPageComponent(S)
t.default=E
e.exports=t.default},2490:function(e,t,n){"use strict"
function i(){return l}function o(e){return Object.assign({},l,e)}function a(e){var t=e.textIsLeft?"left-align":"",n=e.imgShape
return{one:function(){return o({columnClass:(0,s.generateItemClassByColumnsNum)(1,!0),textClass:t,imgShapeClass:n})},two:function(){return o({columnClass:(0,s.generateItemClassByColumnsNum)(2,!0),textClass:t,imgShapeClass:n})},three:function(){return o({columnClass:(0,s.generateItemClassByColumnsNum)(3,!0),textClass:t,imgShapeClass:n})},four:function(){return o({columnClass:(0,s.generateItemClassByColumnsNum)(4,!0),textClass:t,imgShapeClass:n})}}}function r(e){var t=e.imgShape
return{one:function(){return o({columnClass:(0,s.generateItemClassByColumnsNum)(1,!0),textClass:"left-align",imgShapeClass:t})},two:function(){return o({columnClass:(0,s.generateItemClassByColumnsNum)(2,!0)+" half-fixed",textClass:"left-align",imgShapeClass:t})},three:function(){return o({columnClass:(0,s.generateItemClassByColumnsNum)(3,!0)+" half-fixed",textClass:"left-align",imgShapeClass:t})},four:function(){return o({columnClass:(0,s.generateItemClassByColumnsNum)(4,!0),textClass:"left-align",imgShapeClass:t})}}}Object.defineProperty(t,"__esModule",{value:!0})
var s=n(2425),l={columnClass:"",textClass:"",imgShapeClass:""},u={landscape:a({imgShape:"landscape",textIsLeft:!0}),square:a({imgShape:"square",textIsLeft:!0}),portrait:a({imgShape:"portrait",textIsLeft:!0}),auto:a({imgShape:"auto",textIsLeft:!0})},c={default:{landscape:a({imgShape:"landscape"}),square:a({imgShape:"square"}),portrait:a({imgShape:"portrait"}),auto:a({imgShape:"auto"})},ion:{landscape:r({imgShape:"landscape"}),square:r({imgShape:"square"}),portrait:r({imgShape:"portrait"}),auto:r({imgShape:"auto"})},persona:u,sleek:u,onyx_new:u},d=(0,s.getLayoutMapping)(c),f={default:{row:"landscape-one",card:"landscape-three"}}
t.default={isOldLayoutKey:function(e,t){return Boolean((f[e]||f.default)[t])},getDefaultLayoutKey:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=void 0;(d[e]||d.default)[t]&&(n=t)
if(!n){n=(f[e]||f.default)[t]}n||(n=Object.keys(d[e]||d.default)[0])
return n},getLayout:function(e,t){return(d[e]||d.default)[t]||i},getLayoutOptions:function(e){return c[e]||c.default},getLayoutMapping:function(e){return d[e]||d.default}}
e.exports=t.default},2491:function(e,t,n){"use strict"
function i(){return f}function o(e){return Object.assign({},f,e)}function a(e){var t=(0,d.generateItemClassByColumnsNum)(e.columnsNum,!0),n=e.box?p.box:p.text
return{text:function(){return o({repeatableClass:p.repeatable,itemClass:t,textClass:n})},button:function(){return o({repeatableClass:p.repeatable,itemClass:t,textClass:n,buttonClass:p.button})}}}function r(e,t){var n=e.getRepeatableBinding("repeatable1").get().size,i=""
i=n<=2?"":n%2&&0==t?"":"half"
if(2==n)0==t&&(i+=" border-bottom")
else{t<n-2&&(i+=" border-bottom")
t>0&&t%2&&n%2&&(i+=" border-right")
t%2||n%2||(i+=" border-right")}n<=4&&(i+=" large-info-box")
return"s-persp-column s-mhi "+i}function s(e,t){return"s-persp-container absolute "+["topRight","bottomLeft","bottomRight"][t]}function l(e){return function(t,n){var i=t,o=i.getRepeatableBinding("repeatable1").sub(n),a=""
i.sbAnyHasContent("text1 text2",{parentBinding:o,showOnly:!1})&&(a="s-persp-"+e)
return a}}function u(e){return{text:function(){return o({itemClass:s,textClass:l(e)})},button:function(){return o({itemClass:s,textClass:l(e),buttonClass:p.button})}}}function c(){return{text:function(){return o({repeatableClass:"s-mh",itemClass:r,textClass:"s-info-box"})},button:function(){return o({repeatableClass:"s-mh",itemClass:r,textClass:"s-info-box",buttonClass:"s-text-button"})}}}Object.defineProperty(t,"__esModule",{value:!0})
var d=n(2425),f={repeatableClass:"",itemClass:"",textClass:"",buttonClass:""},p={repeatable:"s-mh",text:"s-mhi",box:"s-mhi s-info-box",button:"s-text-button"},m={default:{text:{one:a({columnsNum:1}),two:a({columnsNum:2}),three:a({columnsNum:3}),four:a({columnsNum:4})},box:{one:a({columnsNum:1,box:!0}),two:a({columnsNum:2,box:!0}),three:a({columnsNum:3,box:!0}),four:a({columnsNum:4,box:!0})}},perspective:{text:{overlay:u("overlay"),card:u("card")},box:{center:c(),mediaLeft:c(),mediaRight:c()}}},h=(0,d.getLayoutMapping)(m),g={default:{"1col":"box-one-text","2col":"box-two-text","3col":"box-three-text","4col":"box-four-text"},perspective:{overlay:"text-overlay-text",card:"text-card-text",mediaLeft:"box-mediaLeft-text",mediaRight:"box-mediaRight-text",center:"box-center-text"}},v={default:{text:function(e){return"text-one-"+e},box:function(e){return"box-two-"+e}},perspective:{text:function(e){return"text-card-"+e},box:function(e){return"box-center-"+e}}}
t.default={getDefaultLayoutKey:function(e,t){t=t||""
var n=(g[e]||g.default)[t];(h[e]||h.default)[t]&&(n=t)
if(!n){var i=-1!==t.indexOf("button")?"button":"text",o=t.split("-")[0],a=v[e]||v.default
n=a[o]&&a[o](i)}n||(n=Object.keys(h[e]||h.default)[0])
return n},getLayout:function(e,t){return(h[e]||h.default)[t]||i},getLayoutOptions:function(e){return m[e]||m.default},getLayoutMapping:function(e){return h[e]||h.default}}
e.exports=t.default},2492:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),s=n(0),l=o(s),u=n(12),c=o(u),d=n(373),f=o(d),p=n(13),m=o(p),h=n(2),g=o(h),v=n(6),y=o(v),b=n(24),_=o(b),w=n(27),C=o(w),k=n(159),N=o(k),x=n(8),E=o(x),S=n(212),P=o(S),T=n(79),O=o(T),L=n(58),M=o(L),I=n(290),B=o(I),D=n(80),A=o(D),j=n(1002),H=o(j),R=n(2430),U=o(R),F=n(103),V=o(F),z=n(104),W=n(652),$=n(71),G=o($),K=!1,q=_.default.createPageComponent({displayName:"Ecommerce",mixins:[(0,M.default)("editor"),V.default],bobcatPropTypes:{data:{text:c.default.string,category:c.default.oneOfType([c.default.string,c.default.number]),binding:c.default.object},internal:{onConnectionFailed:c.default.func}},getBobcatDefaultProps:function(){return{data:{category:"all"}}},componentWillMount:function(){this.initMeta({currentCategory:this.dtProps.category,nextCategory:this.dtProps.category,currentPage:1,detailMode:!1})},componentDidMount:function(){var e=this
this._loadProductsFromServer()
O.default.getFistLoadingState("settings")&&N.default.getEcommerceSettings({pageId:E.default.getId()})
O.default.getFistLoadingState("categories")&&N.default.getEcommerceCategories({pageId:E.default.getId()})
this._token=B.default.register(function(t){switch(t.actionType){case A.default.ActionTypes.GET_ECOMMERCE_PRODUCTS_SUCCESS:e.setMeta("currentCategory",e.getMeta("nextCategory"))
if(!K){K=!0
var i=n(217)
i.init()
i.trackEcommerceBuyerEvent(m.default.getKeenIoEcommerceBuyerLanding())}}})
this._onCategoryChangeListenId=O.default.getCategoriesBinding().addListener("",this._onCategoryChange);(0,y.default)(window).on("resize.ecommerce",G.default.debounce(function(){return e.forceUpdate()},300))},componentDidUpdate:function(e){if(this._getRenderCategory(this.dtProps.category)!==this._getRenderCategory(e.category)||e.category!==this.dtProps.category){if("all"===this._getRenderCategory(this.dtProps.category)||"all"===this.dtProps.category){this.setMeta("nextCategory","all")
this.setMeta("currentCategory","all")
this.setMeta("currentPage",1)}else{this.setMeta("nextCategory",this.dtProps.category)
this.setMeta("currentCategory",this.dtProps.category)
this.setMeta("currentPage",1)}this._loadProductsFromServer()}},componentWillUnmount:function(){B.default.unregister(this._token)
O.default.getCategoriesBinding().removeListener(this._onCategoryChangeListenId);(0,y.default)(window).off("resize.ecommerce")},_onCategoryChange:function(){var e=this
return this.setTimeout(function(){return e._loadProductsFromServer()},10)},_getProductsData:function(){return O.default.getProducts(this._getRenderCategory(this.dtProps.category),this.getMeta("currentPage"))},_getEditBtnText:function(){var e=this._getProductsData().length
return i(0===e?"Ecommerce|Add Product":1===e?"Ecommerce|Manage Product":"Ecommerce|Manage Products")},_getRenderCategory:function(e){var t="all"===e?this.getMeta("currentCategory"):e
O.default.isCategoryIdExist(t)||(t="all")
return t},_loadProductsFromServer:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments[1]
this.setMeta("currentPage",t)
var i=N.default.getEcommerceProducts({pageId:E.default.getId(),category:n||this._getRenderCategory(this.dtProps.category),page:t})
if(i)return i.fail(function(){return e.props.onConnectionFailed()})},_getCurrentPageNum:function(){return this.getMeta("currentPage")},_loadNextPage:function(){var e=this._getCurrentPageNum()
this.setMeta("currentPage",e+1)
return this._loadProductsFromServer(e+1)},_onClickEditor:function(e){C.default.openEcommerceManagerDialog(e)},_changeCategory:function(e){this.setMeta("nextCategory",e)
return this._loadProductsFromServer(1,e)},_changeToDetailMode:function(){return this.setMeta("detailMode",!0)},_changeToNormalMode:function(){return this.setMeta("detailMode",!1)},_getCategoryBarProps:function(){return{currentCategory:this.getMeta("nextCategory"),changeCategory:this._changeCategory,categories:O.default.getCategories()}},_getWrapperProps:function(){return{products:this._getProductsData(),pageId:E.default.getId(),hasMultipleProducts:O.default.getProducts().length>=2,settings:O.default.getSettings(),cartData:P.default.getCart(),layout:this.props.layout||"landscape-one",category:this.props.category||"all",changeToDetailMode:this._changeToDetailMode,changeToNormalMode:this._changeToNormalMode}},render:function(){var e=this
this.observeBinding(O.default.getBinding())
this.observeBinding(P.default.getCartBinding())
var t=O.default.getPagination(this.getMeta("currentCategory")),n=this.getMeta("detailMode"),o=this._getEditBtnText(),s=O.default.getLoadingState("product")||O.default.getLoadingState("settings")||O.default.getLoadingState("category"),u=O.default.getFistLoadingState("categories")||O.default.getFistLoadingState("settings"),c="persona"===E.default.getTheme().get("name")?"":"sixteen columns",d=m.default.getFromSiteToApp(),f=r("div",{className:c+" s-ecommerce-empty-box s-common-status no-float"},void 0,r("div",{className:"tags"},void 0,r("div",{className:"fa fa-tag"}),r("div",{className:"entypo-bag"}),r("div",{className:"fa fa-shopping-cart"})),r("div",{className:"text s-font-body"},void 0,i("Ecommerce|No products in this shop now!"))),p=t&&t.totalPages>=2&&(d?r("div",{className:"s-ecommerce-pagination"},void 0,r(z.Link,{className:"s-ecommerce-pagination-item s-font-body",to:"/store/page?category="+this.dtProps.category},void 0,i("Ecommerce|View more"))):r("div",{className:"s-ecommerce-pagination"},void 0,t.totalPages>this._getCurrentPageNum()&&r("span",{className:"s-ecommerce-pagination-item s-font-body",onClick:this._loadNextPage},void 0,i("Ecommerce|Show more")),this._getCurrentPageNum()>1&&r("span",{className:"s-ecommerce-pagination-item s-font-body",onClick:function(){return e.setMeta("currentPage",1)}},void 0,i("Ecommerce|Show less"))))
return l.default.createElement("div",{className:"s-component s-ecommerce",ref:"root"},r("div",{className:"s-ecommerce-content"},void 0,O.default.getCategories().length>0&&("all"===this.dtProps.category||!O.default.isCategoryIdExist(this.dtProps.category))&&r("div",{className:"persona"===E.default.getTheme().get("name")?"":"sixteen columns",style:{display:n?"none":"block"}},void 0,l.default.createElement(U.default,a({sbClass:this.props.sbClass},this._getCategoryBarProps()),r("div",{className:"s-component-editor-wrapper"},void 0,r("div",{className:(0,g.default)("s-component-overlay",{visible:m.default.getInWeChat()}),onClick:function(){return e._onClickEditor({tab:"category"})}},void 0,r("div",{className:"overlay"},void 0,r("div",{className:"center"},void 0,r("span",{},void 0,i("Ecommerce|Manage Categories")))))))),s&&r("div",{className:(0,g.default)("s-loading-wrapper",{"relative-wrapper":!this._getProductsData().length})},void 0,r("div",{className:"s-loading"})),l.default.createElement(H.default,a({},this._getWrapperProps(),{isLoading:s,isFirstLoading:u,emptyComponent:f,paginationComponent:p}),!s&&r("div",{className:"s-component-editor-wrapper"},void 0,r("div",{className:"s-component-overlay"+(m.default.getInWeChat()?" visible":""),onClick:function(){return e._onClickEditor({category:e.dtProps.category,tab:"product"})}},void 0,r("div",{className:"overlay"},void 0,r("div",{className:"center"},void 0,r("span",{},void 0,o))))))))}}),Y=(0,W.addOffline)(q)
q.WaypointLazy=(0,f.default)(Y)
t.default=Y
e.exports=t.default}).call(t,n(7))},2493:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(17),a=i(o),r=n(0),s=(i(r),n(4)),l=i(s),u=n(1),c=i(u),d=n(6),f=i(d),p=n(648),m=i(p),h=(0,a.default)({displayName:"JQSlide",getDefaultProps:function(){return{component:m.default.div}},componentWillAppear:function(e){return this.componentWillEnter(e)},componentWillEnter:function(e){return(0,f.default)(l.default.findDOMNode(this)).slideDown(300,"easeInOutQuart",e)},componentWillLeave:function(e){return(0,f.default)(l.default.findDOMNode(this)).slideUp(200,"easeInOutQuart",e)},render:function(){var e=Object.assign({},this.props,{style:{display:"none"}})
e=c.default.omit(e,"component")
return this.props.component(e)}})
t.default=h
e.exports=t.default},2494:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(6),a=i(o),r=n(1),s=i(r),l=n(71),u=i(l),c=n(2531),d=i(c),f=n(37),p=i(f),m=n(2532),h=i(m),g=n(654),v=i(g),y=n(27),b=i(y),_=n(2533),w=i(_),C=function(e){return b.default.addImageAsset({img:e,tags:d.default.getSiteAssetsTags()})},k=function(e,t){return v.default.saveFileRecord({file:e,success:function(n){e.url=n.data.uploadedFile&&n.data.uploadedFile.url
e.id=n.data.uploadedFile&&n.data.uploadedFile.id
p.default.Event.publish("FileLibrary.addToFileLibrary",e)
return t.itemUploaded(e)},error:function(){var e=I18n.t("js.pages.edit.errors.upload_fail")
return u.default.customAlert?u.default.customAlert(e):window.alert(e)}})},N={pick:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=void 0,n=s.default.extend({itemSelected:function(){},itemUploaded:function(){},error:function(){}},e.handlers),i=e.dialogType||"image",o=void 0
switch(i){case"image":o=h.default.IMAGE_ASSET_DIALOG.DEFAULT_OPTIONS
break
case"file":o=h.default.FILE_ASSET_DIALOG.DEFAULT_OPTIONS
break
case"video":o={}}o.saveRecord=!0
e=s.default.extend(s.default.cloneDeep(o),e)
var r=e.saveRecord
switch(i){case"image":t={success:function(e,t){r&&!t.isPrivate&&C(e.dataForBackend)
n.itemUploaded(t,e)
b.default.closeDialog("imageAssetDialog")
return u.default.ui.closeModal((0,a.default)("#asset-lib-dialog"))},error:function(e,t){return n.error(e,t)}}
w.default.setType(e.iconLibComponents)
break
case"file":t={success:function(e){r&&k(e,n)
b.default.closeDialog("fileAssetDialog")
return u.default.ui.closeModal((0,a.default)("#file-lib-dialog"))},error:function(e,t){n.error(e,t)
var i=I18n.t("js.pages.edit.errors.upload_fail")
return u.default.customAlert?u.default.customAlert(i):window.alert(i)}}
break
case"video":t={}
w.default.setType("video")}b.default.openAssetDialog({assetDialogOptions:e,requestedObject:t,dialogType:i})}}
p.default.Event.subscribe("Editor.OpenFileUploaderV4",function(e,t){return N.pick(t)})
p.default.Event.subscribe("Editor.OpenImageUploaderV4",function(e,t){return N.pick(t)})
t.default=N
e.exports=t.default},2495:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(0),a=i(o),r=n(12),s=i(r),l=n(24),u=i(l),c=n(2536),d=i(c),f=n(13),p=i(f),m=n(2538),h=i(m)
t.default=u.default.createPageComponent({displayName:"AsyncComponentWrapper",observedProps:["immediate"],bobcatPropTypes:{data:{binding:s.default.object},designer:{componentName:s.default.string.isRequired,componentProps:s.default.object,immediate:s.default.bool,preRender:s.default.oneOfType([s.default.object,s.default.func])},callbacks:{beforeLoadCb:s.default.func,loadedCb:s.default.func}},getBobcatDefaultProps:function(){return{designer:{immediate:!0}}},componentDidMount:function(){if(p.default.getMobileViewEditor())switch(this.props.componentName){case"socialFeedManager":d.default.loadAsyncStore("socialFeedManager")}"function"==typeof this.props.beforeLoadCb&&this.props.beforeLoadCb()
this.dsProps.immediate&&this._requestComponent()},componentDidUpdate:function(e){this.requested||e.immediate||!this.dsProps.immediate||this._requestComponent()},_requestComponent:function(){var e=this
switch(this.props.componentName){case"ecommerce":n.e(49).then(function(){var t=n(2492)
e._innerComponent=t.WaypointLazy
u.default.register("EcommerceComponent",t)
return e._startLoad()}.bind(null,n)).catch(n.oe)
break
case"ecommerceBuy":n.e(31).then(function(){e._innerComponent=n(2498)
return e._startLoad()}.bind(null,n)).catch(n.oe)
break
case"socialFeedManager":n.e(48).then(function(){e._innerComponent=n(2499)
return e._startLoad()}.bind(null,n)).catch(n.oe)
break
case"socialFeedComponent":n.e(47).then(function(){var t=n(2500)
e._innerComponent=t.WaypointLazy
u.default.register("SocialFeedComponent",t)
return e._startLoad()}.bind(null,n)).catch(n.oe)}this.requested=!0},_startLoad:function(){this.forceUpdate()
return"function"==typeof this.props.loadedCb?this.props.loadedCb():void 0},_preLoad:function(){var e=void 0
e=this.props.preRender?"function"==typeof this.props.preRender?this.props.preRender.apply(this):this.props.preRender:h.default.apply(this)
return e},_loadInnerComponent:function(){var e=this._innerComponent,t={}
null!=this.props.componentProps&&(t=this.props.componentProps)
return a.default.createElement(e,t)},render:function(){return this._innerComponent?this._loadInnerComponent():this._preLoad()}})
e.exports=t.default},2496:function(e,t,n){"use strict";(function(i){function o(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),s=n(0),l=a(s),u=n(12),c=a(u),d=n(648),f=a(d),p=n(36),m=a(p),h=n(78),g=a(h),v=n(2426),y=a(v),b=n(24),w=a(b),C=n(13),k=a(C),N=n(8),x=a(N),E=n(280),S=(a(E),n(58)),P=a(S),T=n(634),O=a(T),L=n(965),M=a(L),I=n(636),B=a(I),D=n(631),A=a(D),j=n(27),H=a(j),R=n(2493),U=a(R),F=n(2494),V=a(F),z=n(2427),W=n(966),$=a(W),G=n(70),K=o(G),q=n(220),Y=(a(q),n(42)),J=o(Y),X=w.default.createPageComponent({displayName:"ImageLinkEditor",mixins:[(0,P.default)("editor"),M.default,O.default,A.default.enableAfterMount(),A.default.enableAfterUpdate()],bobcatPropTypes:{data:{url:B.default.url,textColor:c.default.oneOf(["dark","light","overlay"]),sizing:c.default.oneOf(["cover","contain","tile","center"]),backgroundVariation:c.default.string,videoUrl:c.default.string,videoHtml:c.default.string,stockKey:c.default.string,binding:c.default.object,h:c.default.number,w:c.default.number,s:c.default.number,storageKey:c.default.string,storage:c.default.oneOf(["ali","c","qn","un"]),linkUrl:c.default.string.isRequired,linkTarget:c.default.string.isRequired},designer:{warnningInfo:c.default.string,setStateFunc:c.default.func,showBackgroundOverlayToggle:c.default.bool,showRemoveImageButton:c.default.bool,compactButtonLayout:c.default.bool}},componentDidMount:function(){$.default.loadImageEditor()
this.setData("displayName",this.constructor.displayName)},_onClickSave:function(){this.savePage()
this.updateState("normal")},getBobcatDefaultProps:function(){return{data:{linkUrl:"",linkTarget:"_blank",warnningInfo:""}}},_onChangeUrl:function(e){this.updateData({linkUrl:e.target.value})
this.savePage()},_onChangeTarget:function(e){this.updateData({linkTarget:e.target.checked?"_blank":"_self"})
this.savePage()},_isNewTab:function(){return"_blank"===this.dtProps.linkTarget},_hasImage:function(){var e=K.createImage(this.dtProps).getUrl(this.dsProps.size)
return J.imageHasContent(e)},_hasBackgroundOverlay:function(){return"overlay"===this.dtProps.textColor},_toggleBackgroundOverlay:function(){var e=this._hasBackgroundOverlay()?"light":"overlay"
this.updateData({textColor:e})
this.savePage()},_removeImage:function(){this.updateData((0,z.dataForEmptyBackground)())
this.savePage()},_renderWarnningInfoIcon:function(){return r("div",{className:"show-pub-alert pub-alert"},void 0,r("a",{className:"page publish-button"},void 0,r("div",{className:"pub-alert-icon"},void 0,r("div",{className:"fa fa-circle"},void 0,r("div",{id:"unpubed-count",className:"pub-count"},void 0,"!")))))},_onClickEditImage:function(){var e=this
$.default.launchMeitu(this._getUrlForImageEditor(),{beforeLaunch:function(){H.default.openDialog("imageEditor")},onUploadResponse:function(t){try{var n=JSON.parse(t),i=K.fromUploader(n,"qn")
e._imageUploaded(i)
H.default.addImageAsset({img:K.serializeForBackend(n,"qn")})
H.default.closeDialog("imageEditor")}catch(e){alert(I18n.t("js.pages.edit.errors.effects_network_error"))}},onClose:function(){H.default.closeDialog("imgeEditor")}})},_getUrlForImageEditor:function(){var e=_.assign({},this.props,{s:10})
return K.createImage(e).getUrl(this.props.size,!0)},_onClickUpload:function(){V.default.pick({initialTabIdx:0,iconLibComponents:"background",from:"banner",handlers:{itemUploaded:this._imageUploaded,itemSelected:this._imageUploaded}})},_setImage:function(e){this.updateData((0,z.imageDataForSaving)(e))},_imageUploaded:function(e){/\.mp4$/.test(e.getUrl())?this.updateData(Object.assign((0,z.imageDataForSaving)(e),{videoHtml:VideoHelper.getVideoHtmlByUrl(e.getUrl(),1280,720),videoUrl:e.getUrl(),textColor:"light"})):this._setImage(e)
this.savePage()},_renderImgEditButoon:function(){if((!k.default.getIsSxl()||x.default.getIsImageEditorRollout())&&this._hasImage())return r("div",{className:"clearfix s-layout-menu-button"},void 0,r("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickEditImage},void 0,i("Edit Image")))},_afterClickEditor:function(){this.props.setStateFunc("editor")},_afterClickCancel:function(){this.props.setStateFunc("normal")},render:function(){var e=m.default.DOM.input,t=this.dtProps,n=t.linkUrl,o=t.warnningInfo,a=this.props,s=a.showBackgroundOverlayToggle,u=a.showRemoveImageButton,c=a.compactButtonLayout,d="editor"===this.getDefaultBinding().get("_state"),p=this.isIframeEditing()
return l.default.createElement("div",{ref:"componentDOM",className:"s-component s-linker"+this.addIframeEditingClass()},r("div",{className:"s-component-editor dark-bg "+(d?"_open":""),onClick:this.onToggleMobileViewEditorBox},void 0,o&&this._renderWarnningInfoIcon(),r(y.default,{className:"title center clickable"+(p?" hidden":"")+" "+(c?"compact":"small"),onTap:this.toggleEditor,rel:"tooltip-left","data-original-title":o||""},void 0,this.isState("editor")?r("div",{className:"minus"},void 0,r("i",{className:"entypo-down-open-mini"})):r("div",{className:"plus"},void 0,r("i",{className:"entypo-right-open-mini"})),i("Editor|Image & Link")),r(g.default,{},void 0,this.isState("editor")&&!0&&r(U.default,{component:f.default.div,className:"main-editor"},void 0,r("div",{className:"s-layout-menu-field"},void 0,r("div",{className:"clearfix s-layout-menu-button"},void 0,r("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickUpload},void 0,i("Upload Image"))),l.default.createElement("img",{style:{display:"none"},src:this._getUrlForImageEditor(),ref:"aviaryImage"}),this._renderImgEditButoon(),this._hasImage()&&u?r("div",{className:"clearfix s-layout-menu-button"},void 0,r("div",{className:"s-btn small no-margin dark-gray",onClick:this._removeImage},void 0,i("Remove Image"))):null,this._hasImage()&&s?r("label",{className:"s-layout-menu-label"},void 0,r(e,{type:"checkbox",checked:this._hasBackgroundOverlay(),onChange:this._toggleBackgroundOverlay}),i("Editor|Overlay")):null),r("div",{className:"s-layout-menu-field"},void 0,r("div",{className:"s-layout-menu-label"},void 0,i("Editor|Link URL")),r(e,{type:"text",name:"url",value:n,onChange:this._onChangeUrl}),r("label",{className:"s-layout-menu-label"},void 0,r(e,{type:"checkbox",checked:this._isNewTab(),onChange:this._onChangeTarget}),i("Editor|Open in new tab"))),r("div",{className:"clearfix"},void 0,r("div",{className:"s-btn green small done-button no-margin",onClick:this._onClickSave},void 0,i("Save")))))))}})
t.default=X
e.exports=t.default}).call(t,n(7))},2497:function(e,t,n){"use strict"
var i,o,a,r,s,l,u,c,d,f,p,m,h,g,v,y
c=n(1)
r=n(25).EventEmitter
a=n(51)
o=n(52)
l=n(2537)
i="social_feed_connection_event_id"
s="social_feed_feeds_event_id"
p=[]
d=[]
u=c.assign({},r.prototype,{emitConnections:function(){return this.emit(i,this.getAccounts())},addConnectionListener:function(e){return this.on(i,e)},removeConnectionListener:function(e){return this.removeListener(i,e)},emitFeeds:function(){return this.emit(s,this.getFeeds())},addFeedsListener:function(e){return this.on(s,e)},removeFeedsListener:function(e){return this.removeListener(s,e)},getAccounts:function(){return d},getFeeds:function(){return p}})
g=function(e){d=e
return u.emitConnections()}
y=function(e){var t,n,i
for(n=0,i=e.length;n<i;n++){t=e[n]
switch(t.provider){case"facebook":case"twitter":t.feeds=c.filter(t.feeds,function(e){return!!e.text}).slice(0,3)
break
case"instagram":t.feeds=t.feeds.slice(0,12)}}p=e
return u.emitFeeds()}
m=function(e){return l.getAccounts({pageId:e.pageId,success:function(t){"function"==typeof e.success&&e.success(t)
return g(t.data.accounts)},fail:function(){return"function"==typeof e.fail?e.fail():void 0}})}
f=function(e){return l.deleteAccount({pageId:e.pageId,accountId:e.accountId,success:function(t){"function"==typeof e.success&&e.success(t)
return g(t.data.accounts)},fail:function(){return"function"==typeof e.fail?e.fail():void 0}})}
v=function(e){return l.updateFacebookPage({pageId:e.pageId,accountId:e.accountId,data:e.data,success:function(t){return"function"==typeof e.success?e.success(t):void 0},fail:function(){return"function"==typeof e.fail?e.fail():void 0}})}
h=function(e){return l.getFeeds({pageId:e.pageId,success:function(t){"function"==typeof e.success&&e.success()
return y(t.data.accounts)},fail:function(){return"function"==typeof e.fail?e.fail():void 0}})}
u.editorDispatchToken=a.register(function(e){switch(e.actionType){case o.ActionTypes.UPDATE_SOCIAL_FEED_ACCOUNTS:return g(e.data)
case o.ActionTypes.UPDATE_SOCIAL_FEEDS:return y(e.data)
case o.ActionTypes.GET_SOCIAL_FEED_ACCOUNTS:return m(e.options)
case o.ActionTypes.DELETE_SOCIAL_FEED_ACCOUNT:return f(e.options)
case o.ActionTypes.GET_SOCIAL_FEEDS:return h(e.options)
case o.ActionTypes.UPDATE_SOCIAL_FEED_FACEBOOK_PAGE:return v(e.options)}})
e.exports=u},2501:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(50),a=n(2502),r=i(a),s=n(8),l=i(s),u=function(){var e={},t={mobileActions:l.default.getMobileActions(),defaultEmail:l.default.getUser().get("email")}
return Object.assign({},e,t)},c=function(){return{}}
r.default.sharedProps=(0,o.sharedPropsBuilder)(function(){return[l.default.getBinding()]},u,c)
t.default=r.default
e.exports=t.default},2502:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),s=n(0),l=o(s),u=n(12),c=o(u),d=n(24),f=o(d),p=n(78),m=o(p),h=n(58),g=o(h),v=n(81),y=o(v),b=n(2503),_=o(b),w=n(2504),C=o(w),k=n(653),N=o(k)
t.default=f.default.createPageComponent({displayName:"ContactInfo",mixins:[(0,g.default)("editor")],bobcatPropTypes:{data:{address:c.default.string,phone:c.default.string,email:c.default.string,hours:c.default.string,binding:c.default.object},internal:{_state2:c.default.string}},_getSaveButtonProps:function(){var e=this,t=n(637),i=t.sendReturnToNormalMessage
return{onClickCancel:function(){e._restoreCancelValue()
e.setData("_state2","normal")
e._afterClickCancel&&e._afterClickCancel()
i(e)},onClickSave:function(){e.setData("_state2","normal")
e.savePage()
i(e)}}},getBobcatDefaultProps:function(){return{internal:{_state2:"normal"}}},componentDidMount:function(){this.initMeta({showDeleteOverlay2:!1})},onMouseEnterDeleteButton:function(){this.setMeta("showDeleteOverlay2",!0)},onMouseLeaveDeleteButton:function(){this.setMeta("showDeleteOverlay2",!1)},onClickDeleteButton:function(){this.setMeta("showDeleteOverlay2",!1)
this.props.onDelete()},_onClickEditor:function(){"normal"===this.props._state2&&this.setData("_state2","editor")
window.DEBUG&&(window.DEBUG.activeComponent=this)
this._storeCancelValue()
this.afterClickEditor&&this.afterClickEditor()},_isMobileViewEditing:function(){return this.props.displayName==this.constructor.displayName?this.addIframeEditingClass():""},_renderEditor:function(e){return r("div",{className:"s-component-editor-wrapper"},void 0,r("div",{className:"buttons"},void 0,r("div",{className:"s-repeatable-delete-button",title:i("Editor|Remove title"),onClick:this.onClickDeleteButton,onMouseEnter:this.onMouseEnterDeleteButton,onMouseLeave:this.onMouseLeaveDeleteButton},void 0,r("div",{className:"delete-button-wrap"},void 0,r("div",{className:"delete-button-confirm"},void 0,i("Sure?"))))),"normal"===this.props._state2&&r("div",{className:"s-component-overlay"+(this.getMeta("showDeleteOverlay2")?" s-repeatable-overlay warning visible":"")+this._isMobileViewEditing(),onClick:this._onClickEditor},void 0,r("div",{className:"center"},void 0,!this._isMobileViewEditing()&&r("span",{},void 0,i("Edit")))),r(m.default,{},void 0,"editor"===this.props._state2&&r(y.default,{className:"s-component-editor"},"editor",r("div",{className:"component-editor google-maps-editor"},void 0,l.default.createElement(_.default,e),l.default.createElement(N.default,a({ref:"saveButtons"},this._getSaveButtonProps()))))))},render:function(){var e=this.props,t=e.address,n=e.phone,i=e.email,o=e.hours,a=e.binding,s={address:t,phone:n,email:i,hours:o,binding:a}
return r("div",{className:"s-component s-form s-contact-info-form"},void 0,!1,"normal"===this.props._state2&&r(m.default,{},void 0,r(y.default,{className:"s-component-content"},"content",l.default.createElement(C.default,s))))}})
e.exports=t.default}).call(t,n(7))},2503:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=(o(r),n(12)),l=o(s),u=n(36),c=o(u),d=n(24),f=o(d),p=n(58),m=o(p)
t.default=f.default.createPageComponent({displayName:"ContactInfoEditor",mixins:[(0,m.default)("editor")],bobcatPropTypes:{data:{address:l.default.string,binding:l.default.object}},_getOnChangeFn:function(e){var t=this
return function(n){t.setData(e,n.target.value.trim())}},render:function(){var e=c.default.DOM.textarea,t=c.default.DOM.input
return a("div",{className:"form"},void 0,a("div",{className:"title"},void 0,i("Editor|Contact Info")),a("div",{className:"fields"},void 0,a("div",{className:"link-input"},void 0,a("div",{className:"label-wrap"},void 0,a("div",{className:"fa fa-map-marker icon"}),i("Editor|Address")),a(e,{rows:"2",maxLength:"120",className:"url",type:"text",name:"share_url",value:this.dtProps.address,onChange:this._getOnChangeFn("address")})),a("div",{className:"link-input"},void 0,a("div",{className:"label-wrap"},void 0,a("div",{className:"fa fa-clock-o icon"}),i("Editor|Hours")),a(e,{rows:"2",maxLength:"200",className:"url",type:"text",name:"share_url",placeholder:i("Editor|e.g. Mon-Fri 10am-5pm, Sat 1pm-5pm"),value:this.dtProps.hours,onChange:this._getOnChangeFn("hours")})),a("div",{className:"link-input"},void 0,a("div",{className:"label-wrap"},void 0,a("div",{className:"entypo-mobile icon"}),i("Editor|Phone")),a(t,{className:"url",type:"text",name:"share_url",value:this.dtProps.phone,onChange:this._getOnChangeFn("phone")})),a("div",{className:"link-input"},void 0,a("div",{className:"label-wrap"},void 0,a("div",{className:"entypo-mail icon"}),i("Editor|Email")),a(t,{className:"url",type:"text",name:"share_url",value:this.dtProps.email,onChange:this._getOnChangeFn("email")}))))}})
e.exports=t.default}).call(t,n(7))},2504:function(e,t,n){"use strict";(function(){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),a=n(0),r=(i(a),n(281)),s=i(r)
t.default=function(e){var t=s.default.escapedValue(e.address).replace(/\n/g,"<br/>"),n=s.default.escapedValue(e.hours).replace(/\n/g,"<br/>"),i=s.default.applyWordBreaks(s.default.escapedValue(e.email))
return o("div",{className:"s-contact-info-list"},void 0,e.address&&o("div",{className:"s-contact-info-item s-font-body"},void 0,o("div",{className:"s-contact-info-icon"},void 0,o("div",{className:"fa fa-map-marker"})),o("div",{className:"s-contact-info-text",dangerouslySetInnerHTML:{__html:t}})),!1,e.hours&&o("div",{className:"s-contact-info-item s-font-body"},void 0,o("div",{className:"s-contact-info-icon"},void 0,o("div",{className:"fa fa-clock-o"})),o("div",{className:"s-contact-info-text",dangerouslySetInnerHTML:{__html:n}})),e.phone&&o("div",{className:"s-contact-info-item s-font-body s-show-in-small-screen"},void 0,o("a",{href:"tel:"+e.phone},void 0,o("div",{className:"s-contact-info-icon"},void 0,o("div",{className:"entypo-mobile"})),o("div",{className:"s-contact-info-text"},void 0,e.phone))),e.phone&&o("div",{className:"s-contact-info-item s-font-body s-show-in-large-screen"},void 0,o("div",{className:"s-contact-info-icon"},void 0,o("div",{className:"entypo-mobile"})),o("div",{className:"s-contact-info-text"},void 0,e.phone)),!1,e.email&&o("div",{className:"s-contact-info-item s-font-body"},void 0,o("a",{href:"mailto:"+e.email},void 0,o("div",{className:"s-contact-info-icon"},void 0,o("div",{className:"entypo-mail"})),o("div",{className:"s-contact-info-text",dangerouslySetInnerHTML:{__html:i}}))),!1)}
e.exports=t.default}).call(t,n(7))},2505:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(50),a=n(2506),r=i(a),s=n(8),l=i(s),u=n(13),c=i(u),d=function(){var e={isSxl:c.default.getIsSxl()},t={defaultLocation:l.default.getMobileActions().get("location")}
return Object.assign({},e,t)},f=function(){return{}}
r.default.sharedProps=(0,o.sharedPropsBuilder)(function(){return[l.default.getBinding()]},d,f)
t.default=r.default
e.exports=t.default},2506:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),s=n(0),l=o(s),u=n(12),c=o(u),d=n(24),f=o(d),p=n(78),m=o(p),h=n(58),g=o(h),v=n(81),y=o(v),b=n(2507),_=o(b),w=n(2508),C=o(w),k=n(653),N=o(k)
t.default=f.default.createPageComponent({displayName:"GoogleMaps",mixins:[(0,g.default)("editor")],bobcatPropTypes:{data:{address:c.default.string},callbacks:{fixHeight:c.default.func}},_getSaveButtonProps:function(){var e=this
return{onClickCancel:function(){e.onClickCancel()},onClickSave:function(){e.updateState("normal")
var t=e.constructor.sharedProps().defaultLocation
e.props.address===t&&e.setData("address",null)
e.savePage()}}},componentDidMount:function(){this.initMeta({showDeleteOverlay:!1})},onMouseEnterDeleteButton:function(){this.setMeta("showDeleteOverlay",!0)},onMouseLeaveDeleteButton:function(){this.setMeta("showDeleteOverlay",!1)},onClickDeleteButton:function(){this.setMeta("showDeleteOverlay",!1)
this.props.onDelete()},_onClickEditor:function(){this.setData("displayName",this.constructor.displayName)
this.onClickEditor(this)},_isMobileViewEditing:function(){return this.props.displayName==this.constructor.displayName?this.addIframeEditingClass():""},_renderEditor:function(){var e=this.constructor.sharedProps()
return r("div",{className:"s-component-editor-wrapper"},void 0,r("div",{className:"buttons"},void 0,r("div",{className:"s-repeatable-delete-button",title:i("Editor|Remove title"),onClick:this.onClickDeleteButton,onMouseEnter:this.onMouseEnterDeleteButton,onMouseLeave:this.onMouseLeaveDeleteButton},void 0,r("div",{className:"delete-button-wrap"},void 0,r("div",{className:"delete-button-confirm"},void 0,i("Sure?"))))),!this.isState("editor")&&r("div",{className:"s-component-overlay"+(this.getMeta("showDeleteOverlay")?" s-repeatable-overlay warning visible":"")+this._isMobileViewEditing(),onClick:this._onClickEditor},void 0,r("div",{className:"center"},void 0,!this._isMobileViewEditing()&&r("span",{},void 0,i("Edit")))),r(m.default,{},void 0,this.isState("editor")&&r(y.default,{className:"s-component-editor"},"editor",r("div",{className:"component-editor google-maps-editor"},void 0,l.default.createElement(_.default,a({},this.props,e)),l.default.createElement(N.default,a({ref:"saveButtons"},this._getSaveButtonProps()))))))},render:function(){var e=this.constructor.sharedProps(),t=this.props.address
t=t||e.defaultLocation||""
return r("div",{className:"s-component s-form s-google-maps-form"},void 0,!1,!this.isState("editor")&&r(m.default,{},void 0,r(y.default,{className:"s-component-content"},"content",l.default.createElement(C.default,a({},this.props,e,{address:t})))))}})
e.exports=t.default}).call(t,n(7))},2507:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=o(r),l=n(12),u=o(l),c=n(36),d=(o(c),n(24)),f=o(d),p=n(58),m=o(p)
t.default=f.default.createPageComponent({displayName:"GoogleMapsEditor",mixins:[(0,m.default)("editor")],bobcatPropTypes:{data:{address:u.default.string}},componentWillUnmount:function(){this.setData("address",this.refs.mapTextarea.value)},render:function(){var e=this.props.isSxl?"百度地图":i("Editor|Google Maps")
return a("div",{className:"form"},void 0,a("div",{className:"title"},void 0,e),a("div",{className:"fields"},void 0,a("div",{className:"link-input"},void 0,a("div",{className:"label-wrap"},void 0,a("div",{className:"fa fa-map-marker"}),i("Editor|Address")),s.default.createElement("textarea",{ref:"mapTextarea",className:"url",type:"text",name:"share_url",defaultValue:this.dtProps.address}))))}})
e.exports=t.default}).call(t,n(7))},2508:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),l=n(6),u=i(l),c=n(1),d=i(c),f=n(0),p=i(f),m=n(71),h=i(m),g=function(e){function t(){o(this,t)
return a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}r(t,e)
s(t,[{key:"componentDidMount",value:function(){var e=this
setTimeout(function(){e.props.fixHeight(e.refs.map)},100);(0,u.default)(window).on("resize.googleMaps",d.default.debounce(function(){e.props.fixHeight(e.refs.map)},100))
h.default.TH.Fixer.preventAppScrolling(this.refs.map)}},{key:"componentWillUnmount",value:function(){(0,u.default)(window).off("resize.googleMaps")}},{key:"render",value:function(){var e=this.props,t=e.address,n=e.isSxl,i=t,o=n?"baidu":"google",a=n?"/":"?loc="
!i&&n&&(i="上海")
i=window.encodeURIComponent(i)
var r="/c/apps/"+o+"_map"+a+i
return p.default.createElement("iframe",{ref:"map",id:"s-map",height:"250",scrolling:"no",src:r})}}])
return t}(p.default.Component)
t.default=g
e.exports=t.default},2509:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),a=n(6),r=i(a),s=n(0),l=(i(s),n(12)),u=i(l),c=n(4),d=i(c),f=n(17),p=i(f),m=n(1),h=i(m),g=n(32),v=i(g),y=(0,p.default)({displayName:"SimpleSortable",propTypes:{className:u.default.string,style:u.default.object,onReorder:u.default.func.isRequired,beforeReorder:u.default.func,afterReorder:u.default.func,containment:u.default.oneOf(["self","parent"]),containmentSelector:u.default.string},getDefaultProps:function(){return{sortableConfig:{},onReorder:function(){},beforeReorder:function(){},afterReorder:function(){},containment:"parent",className:""}},setupJqSortable:function(){var e=h.default.clone(this.props.sortableConfig)
e.activate=this._handleStart
e.stop=this._handleDrop
v.default.isAndroid()&&(e.scroll=!1)
var t=d.default.findDOMNode(this)
switch(this.props.containment){case"self":e.containment=t
break
case"parent":e.containment=t.parentElement}null!=this.props.containmentSelector&&(e.containment=(0,r.default)(t).closest(this.props.containmentSelector).get(0))
this.$jq=(0,r.default)(t)
return this.$jq.sortable(e)},componentDidMount:function(){this.setupJqSortable()},componentDidUpdate:function(){},_handleStart:function(e,t){var n=t.helper[0].getBoundingClientRect()
t.placeholder.outerWidth(n.width)
t.placeholder.height(n.height)
this.props.beforeReorder(this)
return!0},_handleDrop:function(e,t){var n=this.$jq.sortable("toArray",{attribute:"data-sorting-index"}),i=t.item.attr("data-sorting-index");(0,r.default)(t.item).css("z-index","initial")
this.$jq.sortable("cancel")
this.props.onReorder(n,i)
this.props.afterReorder(this.props.children)
return!0},render:function(){var e=h.default.find(this.props.children,function(e){return h.default.isArray(e)}),t=h.default.flatten(e||[this.props.children]),n=this.props.className||"",i=this.props.style
return o("div",{className:n,style:i,"data-list-index":this.props.index},void 0,t)}})
t.default=y
e.exports=t.default},2510:function(e,t,n){e.exports=n(3)(382)},2511:function(e,t,n){e.exports=n(3)(384)},2512:function(e,t,n){e.exports=n(3)(170)},2513:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s,l,u,c,d,f,p,m,h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),y=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),b=n(6),_=i(b),w=n(1),C=i(w),k=n(0),N=i(k),x=n(12),E=(i(x),n(61)),S=i(E),P=n(103),T=i(P),O=n(36),L=i(O),M=n(999),I=i(M),B=n(386),D=i(B),A=n(32),j=i(A),H=n(2528),R=i(H),U=n(42),F=(function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e}(U),n(58)),V=i(F),z=n(633),W=i(z),$=n(972),G=i($),K=n(59),q=i(K),Y=n(963),J=(i(Y),n(37)),X=i(J),Q=n(70),Z=n(2529),ee=i(Z),te=440,ne=(s=S.default.decorate(G.default.Mixin),l=S.default.decorate(W.default),u=S.default.decorate(L.default.Mixin),c=S.default.decorate((0,V.default)("editor")),d=S.default.decorate(T.default),s(f=l(f=u(f=c(f=d(f=(m=p=function(e){function t(e){o(this,t)
var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.getCurrentSlide=function(){return n.getData("_current")}
n._addListenerToBinding=function(){if(n._listenerId){n._clearTimer()
n.getDefaultBinding().removeListener(n._listenerId)}n._listenerId=n.getDefaultBinding().addListener("_current",function(e){var t=e.getCurrentValue();(void 0===t?"undefined":g(t))||(t=n._currentIndex)
n.refs.slick&&(n.mTimeoutId=n.setTimeout(function(){if(n.isInPrevious){n.refs.slick.slickPrev()
n.isInPrevious=!1}else if(n.isInNext){n.refs.slick.slickNext()
n.isInNext=!1}else n.refs.slick.slickGoTo(t)},100))})}
n._stopAutoplayWhenPlayMedia=function(){if(!n._stopAutoPlayInitialized){var e=n._getSliderEl(),t=e.find(".s-video-content iframe")
if(t&&t.length>0){(0,R.default)(e,n.handleChangeAutoPlay)
n._stopAutoPlayInitialized=!0}}}
n._unsubscribeEvent=function(){n.tokenArr.every(function(e){X.default.Event.unsubscribe(e)})}
n._respondTo=function(e){var t=X.default.Event.subscribe(e,function(){n.forceUpdate()})
n.tokenArr.push(t)}
n._registSliderEvent=function(){n.tokenArr=[]
n._respondTo("Editor.SideMenu.Opened")
n._respondTo("Editor.SideMenu.Closed")
n._respondTo("Slider.ContentChanged");(0,_.default)(window).resize(n._renderSliderHeightDebounced)
n._bindWindowScroll();(0,_.default)(window).bind("repaint-slider",function(){})}
n._getSliderEl=function(){return(0,_.default)(n.refs.iosslider)}
n._checkIsInAnimation=function(){return n.isInAnimation}
n._previous=function(){if(!n._checkIsInAnimation()){n.isInAnimation=!0
var e=n._modCurrentSlide(-1)
n.setData("_current",e)
n.isInPrevious=!0}}
n._next=function(){if(!n._checkIsInAnimation()){n.isInAnimation=!0
var e=n._modCurrentSlide(1)
n.setData("_current",e)
n.isInNext=!0}}
n._modCurrentSlide=function(e){var t=n.getData("_current"),i=n.props.children,o=t+e
return n._mod(o,i.length)}
n._mod=function(e,t){var n=e%t
return n<0?n+t:n}
n._getEditorProps=function(){return C.default.extend({},n.props,{binding:n.getDefaultBinding()})}
n._showNavButtons=function(){return n.getMeta("showNavButtons")}
n._renderEditor=function(){return null}
n._goToSpecifySlide=function(e){n.isInAnimation=!0
n.setData("_current",e)}
n._autoScrollPage=function(e){if(!j.default.isSmallScreen()){n._getSliderEl().offset().top-(0,_.default)(window).scrollTop()<0&&n._shouldScroll(e)&&q.default.navigateToHash("#"+(n._getSliderSection()+1))}}
n._shouldScroll=function(e){return(0,_.default)(n._getSliderEl().find(".slick-slide[data-index="+e+"]")).find(".inner").outerHeight(!0)>n._getViewHeight()}
n._getSliderSection=function(){return n.props.index}
n.handleChangeAutoPlay=function(e){n.setMeta("autoplay",e)}
n._getChildren=function(){var e=n.props,t=e.children,i=e.transition,o=n.props.auto_play,a=t.length
if(a<=0)return null
var r=void 0,s="fade"===i,l={accessibility:!1,infinite:1!==a,slidesToShow:1,draggable:!1,speed:j.default.isMobile()?500:750,slidesToScroll:1,arrows:!1,pauseOnHover:!1,dots:!1,autoplay:!0,autoplaySpeed:o,lazyLoad:!1,fade:s,beforeChange:function(e,t){n._transitionBannerSize(e,t)
if(s){var i=n._getSliderEl().find(".slick-list"),o=n.getData("_current"),a=i.find(".slick-slide>div:nth-child("+o+")")
a.css({opacity:"1"})
r=a}},afterChange:function(e){n.isInAnimation=!1
n.setData("_current",e)
n._adaptiveCurrentSlide()
n._currentIndex=e
s&&setTimeout(function(){(0,_.default)(r).css({opacity:""})},1e3)}},u=t.map(function(e){return y("div",{},e.key,e)})
return N.default.createElement(I.default,h({ref:"slick",className:"transition-"+i},l),u)}
n._shouldSliderFullScreen=function(){return n.props.fullscreen}
n._shouldFullscreenSliderOnlyFirstSection=function(){return!(!n.props.fullscreenSliderOnlyFirstSection||!n._checkSliderIsFirstSection())}
n._checkSliderIsFirstSection=function(){var e=n._getSliderSection()
return!(!n.getMeta("ready")||0!==e)}
n._useDarkOverlays=function(){var e=!0,t=n.getData("list")
if(t.size>0){var i=n.getCurrentSlide(),o=t.get(i)
if(!o)return
var a=o.getIn(["components","background1"]),r=D.default.hasContent(a),s="dark"!==a.get("textColor")
r&&s&&(e=!1)}return e}
n._getMaxForegroundHeightInList=function(){var e=n._getSliderEl(),t=0,i=0,o=n._getLimitedMaxHeight()
e.find(".item").each(function(e,n){var o=(0,_.default)(n).find(".inner").first()
t=0===o.width()?0:o.outerHeight(!0)
i=Math.max(t,i)})
t=null
return Math.min(i,o)}
n._getLimitedMaxHeight=function(){var e=n._getViewHeight()
return(0,_.default)(window).width()<=727?2*e:1.5*e}
n._catchIOSIframeBug=function(e){var t=n._getViewHeight()
return j.default.isIOS()&&window.parent.length>0&&e>4*t}
n._getViewHeight=function(){var e=(0,_.default)(window).height()
if(window.parent.length>0)try{e=(0,_.default)(window.top).height()}catch(e){console.error("Warnning: window.top is a cross-origin frame.")}if(e>5e3){console.error("Warnning: In slider got an error device view height.")
e=2048}return e}
n._getSliderHeightByContent=function(){var e=te,t=n._getLimitedMaxHeight(),i=n._getViewHeight(),o="none"===(0,_.default)("#header-container").css("display")?0:(0,_.default)("#header-container").outerHeight(),a=i-Math.max(o,0)-130,r=n._getMaxForegroundHeightInList()
n._catchIOSIframeBug(r)&&(r=t)
if(n._shouldFullscreenSliderOnlyFirstSection())return Math.max(a,r)
if(n.props.fullscreen)return Math.max(r,i)
if(r<e)return e
if(r>t){console.info("[Slide] your content of slider is bigger than the max limited height (",t,")")
return t}return r}
n._getSlideHeightByImageRatio=function(e){var t=n.getData("list").get(e).getIn(["components","background1"]).toObject(),i=!1
if(!t||!t.w||!t.h){var o=n.asyncImageLoadedShapeArr[e]
if(o)t=o
else{t={w:16,h:9}
i=!0}}return{height:n._getFullViewImageHeight(t),isHardCode:i}}
n._getFullViewImageHeight=function(e){if(e&&e.w&&e.h){var t=n._getSliderEl().width(),i=e.h*t/e.w
return Math.ceil(i)}return 440}
n._transitionBannerSize=function(e){var t=n.slideHeightArr[e],i=n._getSliderEl().find(".slick-list")
i.css({height:t-1+"px"})
i.find(".slick-slide").each(function(e,n){(0,_.default)(n).find(".item").css({height:t+"px",minHeight:t+"px"})})}
n._resizeSliderInEditor=function(){var e=n.getCurrentSlide(),t=n.slideHeightArr[e],i=n._getSliderEl().find(".slider")
if(t<240)if("editor"===n.props.imgEditorState){n._adaptiveSlideByIndex(240)
i.addClass("img-editor-open")}else{n._adaptiveSlideByIndex(t)
n.setTimeout(function(){i.removeClass("img-editor-open")},200)}}
n._adaptiveSlideByIndex=function(e){var t=n._getSliderEl().find(".slick-list")
t.css({height:e-1+"px"})
t.find(".slick-slide.slick-active").each(function(t,n){(0,_.default)(n).find(".item").css({height:e+"px",minHeight:e+"px"})})}
n._getImageShapByLoad=function(e){var t=n.getData("list")
e%=t.size
var i=t.get(e).getIn(["components","background1"]).toJS(),o=(0,Q.createImage)(i)
return new Promise(function(t,i){var a=new Image
a.src=o.getUrl();(0,_.default)(a).one("load",function(){if(a.width&&a.height){n.asyncImageLoadedShapeArr[e]={w:a.width,h:a.height}
var o=n._getFullViewImageHeight({w:a.width,h:a.height})
t(o)}else i("Miss the size of image")})})}
n._asyncSetSlideHeight=function(e){n._getImageShapByLoad(e).then(function(t){n.slideHeightArr[e]=t
n._adaptiveCurrentSlide()}).catch(function(e){console.info("[Banner] func/asyncSetSlideHeight: ",e)})}
n._getCurrentLayout=function(){var e=n.getCurrentSlide()
return n.props.getSliderLayouts()[e]}
n._getSlideHeight=function(e,t){var i=n.props.getSliderLayouts(),o=0
if("noForeground"===i[e]){var a=n._getSlideHeightByImageRatio(e)
o=a.height
a.isHardCode&&n._asyncSetSlideHeight(e)}else o=t
return Math.floor(o)}
n._adaptiveCurrentSlide=function(){var e=n.getCurrentSlide(),t=n._getSlideHeight(e)
n._adaptiveSlideByIndex(t)
n.slideHeightArr[e]=t}
n._renderSliderHeight=function(){var e=n._getSliderEl().find(".slick-list"),t=n.getData("list").size,i=n.getCurrentSlide()
n.slideHeightArr=Array.from(new Array(t),function(){return 0})
var o=n._getSliderHeightByContent()
e.find(".slick-slide").each(function(a,r){var s=parseInt((0,_.default)(r).attr("data-index"),10);-1===s&&(s=t-1)
s===t&&(s=0)
var l=n._getSlideHeight(s,o);(0,_.default)(r).find(".item").css({height:l+"px",minHeight:l+"px"})
i===s&&e.css({height:l-1+"px"})
n.slideHeightArr[s]=l})}
n._renderSliderHeightDebounced=C.default.debounce(n._renderSliderHeight,j.default.isMobile()?1e3:250)
n._onScroll=n._onScroll.bind(n)
return n}r(t,e)
v(t,[{key:"componentWillMount",value:function(){this.initMeta({ready:!1,autoplay:!1,showNavButtons:!0,isScrolling:!1})
this.setData("_current",0)
this.isInAnimation=!1
this.isInPrevious=!1
this.isInNext=!1
this.slideHeightArr=[]
this.asyncImageLoadedShapeArr=[]
this.tokenArr=[]
this._currentIndex=0}},{key:"componentDidMount",value:function(){this.updateMeta({ready:!0,showNavButtons:!j.default.isMobile()})
this._addListenerToBinding()
this._registSliderEvent()
this._renderSliderHeight()}},{key:"componentDidUpdate",value:function(e){this.isInAnimation||this._renderSliderHeightDebounced()
this._stopAutoplayWhenPlayMedia()
this.props.index!==e.index&&this._addListenerToBinding()}},{key:"componentWillUnmount",value:function(){this._unbindWindowScroll()
this._listenerId&&this.getDefaultBinding().removeListener(this._listenerId);(0,_.default)(window).off("resize",this._renderSliderHeightDebounced)
this._clearTimer()
this._unsubscribeEvent()}},{key:"_clearTimer",value:function(){if(this.mTimeoutId){clearTimeout(this.mTimeoutId)
this.mTimeoutId=void 0}}},{key:"_bindWindowScroll",value:function(){(0,_.default)(document).on("scroll",this._onScroll)}},{key:"_unbindWindowScroll",value:function(){(0,_.default)(document).off("scroll",this._onScroll)}},{key:"_onScroll",value:function(){var e=this
if(this.refs.slick&&!this.getMeta("isScrolling")){this.updateMeta({isScrolling:!0})
var t=function(e){return e.stopPropagation()},n=function n(){e.updateMeta({isScrolling:!1});(0,_.default)("body").off("touchend touchcancel touchleave",n)
e._getSliderEl().off("touchmove",t)}
this._getSliderEl().on("touchmove",t);(0,_.default)("body").on("touchend touchcancel touchleave",n)}}},{key:"render",value:function(){return ee.default.apply(this)}}])
return t}(N.default.Component),p.defaultProps={uiOutside:!1,fullscreen:!1,imgEditorState:""},m))||f)||f)||f)||f)||f)
e.exports=ne},2514:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=n(0),r=i(a),s=n(2515),l=n(632),u=i(l),c=n(2433),d=i(c),f=n(2522),p=i(f),m=n(2432),h=i(m),g=r.default.createClass({displayName:"Slider",mixins:[p.default],innerSlider:null,innerSliderRefHandler:function(e){this.innerSlider=e},getInitialState:function(){return{breakpoint:null}},componentWillMount:function(){var e=this
if(this.props.responsive){var t=this.props.responsive.map(function(e){return e.breakpoint})
t.sort(function(e,t){return e-t})
t.forEach(function(n,i){var o
o=0===i?(0,d.default)({minWidth:0,maxWidth:n}):(0,d.default)({minWidth:t[i-1],maxWidth:n})
e.media(o,function(){e.setState({breakpoint:n})})})
var n=(0,d.default)({minWidth:t.slice(-1)[0]})
this.media(n,function(){e.setState({breakpoint:null})})}},slickPrev:function(){this.innerSlider.slickPrev()},slickNext:function(){this.innerSlider.slickNext()},slickGoTo:function(e){this.innerSlider.slickGoTo(e)},render:function(){var e,t,n=this
if(this.state.breakpoint){t=this.props.responsive.filter(function(e){return e.breakpoint===n.state.breakpoint})
e="unslick"===t[0].settings?"unslick":(0,u.default)({},this.props,t[0].settings)}else e=(0,u.default)({},h.default,this.props)
var i=this.props.children
Array.isArray(i)||(i=[i])
i=i.filter(function(e){return!!e})
return"unslick"===e?r.default.createElement("div",null,i):r.default.createElement(s.InnerSlider,o({ref:this.innerSliderRefHandler},e),i)}})
e.exports=g},2515:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
t.InnerSlider=void 0
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=n(0),r=i(a),s=n(2516),l=i(s),u=n(1e3),c=i(u),d=n(2517),f=i(d),p=n(2432),m=i(p),h=n(2),g=i(h),v=n(632),y=i(v),b=n(2518),_=n(2519),w=n(2520)
t.InnerSlider=r.default.createClass({displayName:"InnerSlider",mixins:[c.default,l.default],list:null,track:null,listRefHandler:function(e){this.list=e},trackRefHandler:function(e){this.track=e},getInitialState:function(){return o({},f.default,{currentSlide:this.props.initialSlide})},getDefaultProps:function(){return m.default},componentWillMount:function(){this.props.init&&this.props.init()
this.setState({mounted:!0})
for(var e=[],t=0;t<r.default.Children.count(this.props.children);t++)t>=this.state.currentSlide&&t<this.state.currentSlide+this.props.slidesToShow&&e.push(t)
this.props.lazyLoad&&0===this.state.lazyLoadedList.length&&this.setState({lazyLoadedList:e})
this.setState({initialized:!0})},componentDidMount:function(){this.initialize(this.props)
this.adaptHeight()
window&&(window.addEventListener?window.addEventListener("resize",this.onWindowResized):window.attachEvent("onresize",this.onWindowResized))},componentWillUnmount:function(){this.animationEndCallback&&clearTimeout(this.animationEndCallback)
window.addEventListener?window.removeEventListener("resize",this.onWindowResized):window.detachEvent("onresize",this.onWindowResized)
this.state.autoPlayTimer&&clearInterval(this.state.autoPlayTimer)},componentWillReceiveProps:function(e){if(this.props.slickGoTo!=e.slickGoTo)this.changeSlide({message:"index",index:e.slickGoTo,currentSlide:this.state.currentSlide})
else if(this.state.currentSlide>=e.children.length){this.update(e)
this.changeSlide({message:"index",index:e.children.length-e.slidesToShow,currentSlide:this.state.currentSlide})}else this.update(e)},componentDidUpdate:function(){this.adaptHeight()},onWindowResized:function(){this.update(this.props)
this.setState({animating:!1})
clearTimeout(this.animationEndCallback)
delete this.animationEndCallback},slickPrev:function(){this.changeSlide({message:"previous"})},slickNext:function(){this.changeSlide({message:"next"})},slickGoTo:function(e){"number"==typeof e&&this.changeSlide({message:"index",index:e,currentSlide:this.state.currentSlide})},render:function(){var e,t=(0,g.default)("slick-slider",this.props.className,{"slick-vertical":this.props.vertical,"slick-initialized":this.state.initialized}),n={fade:this.props.fade,cssEase:this.props.cssEase,speed:this.props.speed,infinite:this.props.infinite,centerMode:this.props.centerMode,focusOnSelect:this.props.focusOnSelect?this.selectHandler:null,currentSlide:this.state.currentSlide,lazyLoad:this.props.lazyLoad,lazyLoadedList:this.state.lazyLoadedList,rtl:this.props.rtl,slideWidth:this.state.slideWidth,slidesToShow:this.props.slidesToShow,slidesToScroll:this.props.slidesToScroll,slideCount:this.state.slideCount,trackStyle:this.state.trackStyle,variableWidth:this.props.variableWidth}
if(!0===this.props.dots&&this.state.slideCount>=this.props.slidesToShow){var i={dotsClass:this.props.dotsClass,slideCount:this.state.slideCount,slidesToShow:this.props.slidesToShow,currentSlide:this.state.currentSlide,slidesToScroll:this.props.slidesToScroll,clickHandler:this.changeSlide,children:this.props.children,customPaging:this.props.customPaging}
e=r.default.createElement(_.Dots,i)}var a,s,l={infinite:this.props.infinite,centerMode:this.props.centerMode,currentSlide:this.state.currentSlide,slideCount:this.state.slideCount,slidesToShow:this.props.slidesToShow,prevArrow:this.props.prevArrow,nextArrow:this.props.nextArrow,clickHandler:this.changeSlide}
if(this.props.arrows){a=r.default.createElement(w.PrevArrow,l)
s=r.default.createElement(w.NextArrow,l)}var u=null
this.props.vertical&&(u={height:this.state.listHeight})
var c=null
!1===this.props.vertical?!0===this.props.centerMode&&(c={padding:"0px "+this.props.centerPadding}):!0===this.props.centerMode&&(c={padding:this.props.centerPadding+" 0px"})
var d=(0,y.default)({},u,c)
return r.default.createElement("div",{className:t,onMouseEnter:this.onInnerSliderEnter,onMouseLeave:this.onInnerSliderLeave},a,r.default.createElement("div",{ref:this.listRefHandler,className:"slick-list",style:d,onMouseDown:this.swipeStart,onMouseMove:this.state.dragging?this.swipeMove:null,onMouseUp:this.swipeEnd,onMouseLeave:this.state.dragging?this.swipeEnd:null,onTouchStart:this.swipeStart,onTouchMove:this.state.dragging?this.swipeMove:null,onTouchEnd:this.swipeEnd,onTouchCancel:this.state.dragging?this.swipeEnd:null,onKeyDown:this.props.accessibility?this.keyHandler:null},r.default.createElement(b.Track,o({ref:this.trackRefHandler},n),this.props.children)),s,e)}})},2516:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
var o=n(2431),a=n(1e3),r=(i(a),n(632)),s=i(r),l=n(4),u=i(l),c={changeSlide:function(e){var t,n,i,o,a,r=this.props,s=r.slidesToScroll,l=r.slidesToShow,u=this.state,c=u.slideCount,d=u.currentSlide
o=c%s!=0
t=o?0:(c-d)%s
if("previous"===e.message){i=0===t?s:l-t
a=d-i
if(this.props.lazyLoad){n=d-i
a=-1===n?c-1:n}}else if("next"===e.message){i=0===t?s:t
a=d+i
this.props.lazyLoad&&(a=(d+s)%c+t)}else if("dots"===e.message||"children"===e.message){a=e.index*e.slidesToScroll
if(a===e.currentSlide)return}else if("index"===e.message){a=parseInt(e.index)
if(a===e.currentSlide)return}this.slideHandler(a)},keyHandler:function(e){e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&!0===this.props.accessibility?this.changeSlide({message:!0===this.props.rtl?"next":"previous"}):39===e.keyCode&&!0===this.props.accessibility&&this.changeSlide({message:!0===this.props.rtl?"previous":"next"}))},selectHandler:function(e){this.changeSlide(e)},swipeStart:function(e){var t,n
if(!(!1===this.props.swipe||"ontouchend"in document&&!1===this.props.swipe||!1===this.props.draggable&&-1!==e.type.indexOf("mouse"))){t=void 0!==e.touches?e.touches[0].pageX:e.clientX
n=void 0!==e.touches?e.touches[0].pageY:e.clientY
this.setState({dragging:!0,touchObject:{startX:t,startY:n,curX:t,curY:n}})}},swipeMove:function(e){if(this.state.dragging){if(!this.state.animating){this.props.vertical&&this.props.swipeToSlide&&this.props.verticalSwiping&&e.preventDefault()
var t,n,i,a=this.state.touchObject
n=(0,o.getTrackLeft)((0,s.default)({slideIndex:this.state.currentSlide,trackRef:this.track},this.props,this.state))
a.curX=e.touches?e.touches[0].pageX:e.clientX
a.curY=e.touches?e.touches[0].pageY:e.clientY
a.swipeLength=Math.round(Math.sqrt(Math.pow(a.curX-a.startX,2)))
this.props.verticalSwiping&&(a.swipeLength=Math.round(Math.sqrt(Math.pow(a.curY-a.startY,2))))
i=(!1===this.props.rtl?1:-1)*(a.curX>a.startX?1:-1)
this.props.verticalSwiping&&(i=a.curY>a.startY?1:-1)
var r=this.state.currentSlide,l=Math.ceil(this.state.slideCount/this.props.slidesToScroll),u=this.swipeDirection(this.state.touchObject),c=a.swipeLength
if(!1===this.props.infinite&&(0===r&&"right"===u||r+1>=l&&"left"===u)){c=a.swipeLength*this.props.edgeFriction
if(!1===this.state.edgeDragged&&this.props.edgeEvent){this.props.edgeEvent(u)
this.setState({edgeDragged:!0})}}if(!1===this.state.swiped&&this.props.swipeEvent){this.props.swipeEvent(u)
this.setState({swiped:!0})}t=this.props.vertical?n+c*(this.state.listHeight/this.state.listWidth)*i:n+c*i
this.props.verticalSwiping&&(t=n+c*i)
this.setState({touchObject:a,swipeLeft:t,trackStyle:(0,o.getTrackCSS)((0,s.default)({left:t},this.props,this.state))})
Math.abs(a.curX-a.startX)<.8*Math.abs(a.curY-a.startY)||a.swipeLength>4&&e.preventDefault()}}else e.preventDefault()},getNavigableIndexes:function(){var e=void 0,t=0,n=0,i=[]
if(this.props.infinite){t=-1*this.props.slidesToShow
n=-1*this.props.slidesToShow
e=2*this.state.slideCount}else e=this.state.slideCount
for(;t<e;){i.push(t)
t=n+this.props.slidesToScroll
n+=this.props.slidesToScroll<=this.props.slidesToShow?this.props.slidesToScroll:this.props.slidesToShow}return i},checkNavigable:function(e){var t=this.getNavigableIndexes(),n=0
if(e>t[t.length-1])e=t[t.length-1]
else for(var i in t){if(e<t[i]){e=n
break}n=t[i]}return e},getSlideCount:function(){var e=this,t=this.props.centerMode?this.state.slideWidth*Math.floor(this.props.slidesToShow/2):0
if(this.props.swipeToSlide){var n=void 0,i=u.default.findDOMNode(this.list),o=i.querySelectorAll(".slick-slide")
Array.from(o).every(function(i){if(e.props.vertical){if(i.offsetTop+e.getHeight(i)/2>-1*e.state.swipeLeft){n=i
return!1}}else if(i.offsetLeft-t+e.getWidth(i)/2>-1*e.state.swipeLeft){n=i
return!1}return!0})
return Math.abs(n.dataset.index-this.state.currentSlide)||1}return this.props.slidesToScroll},swipeEnd:function(e){if(this.state.dragging){var t=this.state.touchObject,n=this.state.listWidth/this.props.touchThreshold,i=this.swipeDirection(t)
this.props.verticalSwiping&&(n=this.state.listHeight/this.props.touchThreshold)
this.setState({dragging:!1,edgeDragged:!1,swiped:!1,swipeLeft:null,touchObject:{}})
if(t.swipeLength)if(t.swipeLength>n){e.preventDefault()
var a=void 0,r=void 0
switch(i){case"left":case"down":r=this.state.currentSlide+this.getSlideCount()
a=this.props.swipeToSlide?this.checkNavigable(r):r
this.state.currentDirection=0
break
case"right":case"up":r=this.state.currentSlide-this.getSlideCount()
a=this.props.swipeToSlide?this.checkNavigable(r):r
this.state.currentDirection=1
break
default:a=this.state.currentSlide}this.slideHandler(a)}else{var l=(0,o.getTrackLeft)((0,s.default)({slideIndex:this.state.currentSlide,trackRef:this.track},this.props,this.state))
this.setState({trackStyle:(0,o.getTrackAnimateCSS)((0,s.default)({left:l},this.props,this.state))})}}else e.preventDefault()},onInnerSliderEnter:function(){this.props.autoplay&&this.props.pauseOnHover&&this.pause()},onInnerSliderLeave:function(){this.props.autoplay&&this.props.pauseOnHover&&this.autoPlay()}}
t.default=c},2517:function(e){"use strict"
var t={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,listWidth:null,listHeight:null,slideCount:null,slideWidth:null,slideHeight:null,swipeLeft:null,touchObject:{startX:0,startY:0,curX:0,curY:0},lazyLoadedList:[],initialized:!1,edgeDragged:!1,swiped:!1,trackStyle:{},trackWidth:0}
e.exports=t},2518:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
t.Track=void 0
var o=n(0),a=i(o),r=n(632),s=i(r),l=n(2),u=i(l),c=function(e){var t,n,i,o,a
a=e.rtl?e.slideCount-1-e.index:e.index
i=a<0||a>=e.slideCount
if(e.centerMode){o=Math.floor(e.slidesToShow/2)
n=(a-e.currentSlide)%e.slideCount==0
a>e.currentSlide-o-1&&a<=e.currentSlide+o&&(t=!0)}else t=e.currentSlide<=a&&a<e.currentSlide+e.slidesToShow
return(0,u.default)({"slick-slide":!0,"slick-active":t,"slick-center":n,"slick-cloned":i})},d=function(e){var t={}
void 0!==e.variableWidth&&!1!==e.variableWidth||(t.width=e.slideWidth)
if(e.fade){t.position="relative"
t.left=-e.index*e.slideWidth
t.opacity=e.currentSlide===e.index?1:0
t.transition="opacity "+e.speed+"ms "+e.cssEase
t.WebkitTransition="opacity "+e.speed+"ms "+e.cssEase}return t},f=function(e,t){return null===e.key||void 0===e.key?t:e.key},p=function(e){var t,n=[],i=[],o=[],r=a.default.Children.count(e.children)
a.default.Children.forEach(e.children,function(l,p){var m=void 0,h={message:"children",index:p,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide}
m=!e.lazyLoad|(e.lazyLoad&&e.lazyLoadedList.indexOf(p)>=0)?l:a.default.createElement("div",null)
var g,v=d((0,s.default)({},e,{index:p})),y=c((0,s.default)({index:p},e))
g=m.props.className?(0,u.default)(y,m.props.className):y
var b=function(t){m.props&&m.props.onClick&&m.props.onClick(t)
e.focusOnSelect&&e.focusOnSelect(h)}
n.push(a.default.cloneElement(m,{key:"original"+f(m,p),"data-index":p,className:g,tabIndex:"-1",style:(0,s.default)({outline:"none"},m.props.style||{},v),onClick:b}))
if(e.infinite&&!1===e.fade){var _=e.variableWidth?e.slidesToShow+1:e.slidesToShow
if(p>=r-_){t=-(r-p)
i.push(a.default.cloneElement(m,{key:"precloned"+f(m,t),"data-index":t,className:g,style:(0,s.default)({},m.props.style||{},v),onClick:b}))}if(p<_){t=r+p
o.push(a.default.cloneElement(m,{key:"postcloned"+f(m,t),"data-index":t,className:g,style:(0,s.default)({},m.props.style||{},v),onClick:b}))}}})
return e.rtl?i.concat(n,o).reverse():i.concat(n,o)}
t.Track=a.default.createClass({displayName:"Track",render:function(){var e=p.call(this,this.props)
return a.default.createElement("div",{className:"slick-track",style:this.props.trackStyle},e)}})},2519:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
t.Dots=void 0
var o=n(0),a=i(o),r=n(2),s=i(r),l=function(e){var t
t=Math.ceil(e.slideCount/e.slidesToScroll)
return t}
t.Dots=a.default.createClass({displayName:"Dots",clickHandler:function(e,t){t.preventDefault()
this.props.clickHandler(e)},render:function(){var e=this,t=l({slideCount:this.props.slideCount,slidesToScroll:this.props.slidesToScroll}),n=Array.apply(null,Array(t+1).join("0").split("")).map(function(t,n){var i=n*e.props.slidesToScroll,o=n*e.props.slidesToScroll+(e.props.slidesToScroll-1),r=(0,s.default)({"slick-active":e.props.currentSlide>=i&&e.props.currentSlide<=o}),l={message:"dots",index:n,slidesToScroll:e.props.slidesToScroll,currentSlide:e.props.currentSlide},u=e.clickHandler.bind(e,l)
return a.default.createElement("li",{key:n,className:r},a.default.cloneElement(e.props.customPaging(n),{onClick:u}))})
return a.default.createElement("ul",{className:this.props.dotsClass,style:{display:"block"}},n)}})},2520:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
t.NextArrow=t.PrevArrow=void 0
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=n(0),r=i(a),s=n(2),l=i(s),u=n(1e3),c=i(u)
t.PrevArrow=r.default.createClass({displayName:"PrevArrow",clickHandler:function(e,t){t&&t.preventDefault()
this.props.clickHandler(e,t)},render:function(){var e={"slick-arrow":!0,"slick-prev":!0},t=this.clickHandler.bind(this,{message:"previous"})
if(!this.props.infinite&&(0===this.props.currentSlide||this.props.slideCount<=this.props.slidesToShow)){e["slick-disabled"]=!0
t=null}var n,i={key:"0","data-role":"none",className:(0,l.default)(e),style:{display:"block"},onClick:t}
n=this.props.prevArrow?r.default.cloneElement(this.props.prevArrow,i):r.default.createElement("button",o({key:"0",type:"button"},i)," Previous")
return n}}),t.NextArrow=r.default.createClass({displayName:"NextArrow",clickHandler:function(e,t){t&&t.preventDefault()
this.props.clickHandler(e,t)},render:function(){var e={"slick-arrow":!0,"slick-next":!0},t=this.clickHandler.bind(this,{message:"next"})
if(!c.default.canGoNext(this.props)){e["slick-disabled"]=!0
t=null}var n,i={key:"1","data-role":"none",className:(0,l.default)(e),style:{display:"block"},onClick:t}
n=this.props.nextArrow?r.default.cloneElement(this.props.nextArrow,i):r.default.createElement("button",o({key:"1",type:"button"},i)," Next")
return n}})},2521:function(e){var t=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()}
e.exports=t},2522:function(e,t,n){var i=n(2523),o=i&&n(2524),a=n(2433),r={media:function(e,t){e=a(e)
"function"==typeof t&&(t={match:t})
i&&o.register(e,t)
this._responsiveMediaHandlers||(this._responsiveMediaHandlers=[])
this._responsiveMediaHandlers.push({query:e,handler:t})},componentWillUnmount:function(){this._responsiveMediaHandlers&&this._responsiveMediaHandlers.forEach(function(e){i&&o.unregister(e.query,e.handler)})}}
e.exports=r},2523:function(e){var t=!("undefined"==typeof window||!window.document||!window.document.createElement)
e.exports=t},2524:function(e,t,n){var i=n(2525)
e.exports=new i},2525:function(e,t,n){function i(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill")
this.queries={}
this.browserIsIncapable=!window.matchMedia("only all").matches}var o=n(2526),a=n(2434),r=a.each,s=a.isFunction,l=a.isArray
i.prototype={constructor:i,register:function(e,t,n){var i=this.queries,a=n&&this.browserIsIncapable
i[e]||(i[e]=new o(e,a))
s(t)&&(t={match:t})
l(t)||(t=[t])
r(t,function(t){s(t)&&(t={match:t})
i[e].addHandler(t)})
return this},unregister:function(e,t){var n=this.queries[e]
if(n)if(t)n.removeHandler(t)
else{n.clear()
delete this.queries[e]}return this}}
e.exports=i},2526:function(e,t,n){function i(e,t){this.query=e
this.isUnconditional=t
this.handlers=[]
this.mql=window.matchMedia(e)
var n=this
this.listener=function(e){n.mql=e.currentTarget||e
n.assess()}
this.mql.addListener(this.listener)}var o=n(2527),a=n(2434).each
i.prototype={constuctor:i,addHandler:function(e){var t=new o(e)
this.handlers.push(t)
this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers
a(t,function(n,i){if(n.equals(e)){n.destroy()
return!t.splice(i,1)}})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){a(this.handlers,function(e){e.destroy()})
this.mql.removeListener(this.listener)
this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off"
a(this.handlers,function(t){t[e]()})}}
e.exports=i},2527:function(e){function t(e){this.options=e
!e.deferSetup&&this.setup()}t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup()
this.initialised=!0},on:function(){!this.initialised&&this.setup()
this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}}
e.exports=t},2528:function(e,t){"use strict"
function n(e,t){function n(e){return JSON.stringify({method:"addEventListener",value:e,listener:o,context:"player.js",version:"0.0.10"})}function i(e){var n=e.originalEvent.data
if("string"==typeof n){try{n=JSON.parse(n)}catch(e){console.error(e)}if(n.listener===o)switch(n.event){case"play":t(!1)
break
case"pause":case"ended":t(!0)}}}if(window.postMessage){var o="listener-xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0
return("x"===e?t:3&t|8).toString(16)})
e.find(".s-video-content iframe").each(function(e,t){t.onload=function(){var e=t.src.match(/^(?:http:)?\/\/[^\/]+\//)[0]
if(/(embedly|embed\.ly)/.test(e)){t.contentWindow.postMessage(n("play"),e)
t.contentWindow.postMessage(n("pause"),e)
t.contentWindow.postMessage(n("ended"),e)}}})
$(window).on("message",function(e){i(e)})}}Object.defineProperty(t,"__esModule",{value:!0})
t.default=n
e.exports=t.default},2529:function(e,t,n){"use strict"
function i(e,t,n){this._goToSpecifySlide(n)}function o(e,t,n){return p.createElement("div",{className:"selector-wrapper",key:n},p.createElement("div",{className:m.keys(m.pick({selector:!0,selected:n==this.getCurrentSlide()},m.identity)).join(" "),key:n,onClick:i.bind(this,e,t,n)}))}function a(){this._previous()}function r(e){var t="noForeground"===this._getCurrentLayout()
return p.createElement("div",{},p.createElement("div",{className:"prev-button "+m.keys(m.pick({"has-upper-button":t},m.identity)).join(" "),onClick:a.bind(this,e,t)},p.createElement("div",{className:"arrow"})))}function s(){this._next()}function l(){this._previous()}function u(e,t,n){this._goToSpecifySlide(n)}function c(e,t,n){return p.createElement("div",{className:"selector-wrapper",key:n},p.createElement("div",{className:m.keys(m.pick({selector:!0,selected:n==this.getCurrentSlide()},m.identity)).join(" "),key:n,onClick:u.bind(this,e,t,n)}))}function d(){this._next()}function f(){var e=this.getDefaultBinding().sub("list")
return p.createElement("div",{className:m.keys(m.pick({"slider-container":!0,loading:!this.getMeta("ready")},m.identity)).join(" ")},e.get().size>0?p.createElement("div",{"data-auto-play":this.props.auto_play,ref:"iosslider",className:m.keys(m.pick({iosslider:!0,"dark-overlays":this._useDarkOverlays()},m.identity)).join(" ")},e.get().size>0?p.createElement("div",{className:"slider"},"\n          ",this._getChildren(),"\n        "):null,!this.props.uiOutside&&e.get().size>1?p.createElement("div",{className:"center slide-selectors"},p.createElement("div",{className:"slide-selectors-inner"},p.createElement.apply(this,["div",{className:"content repeatable-component"},m.map(e.get().toArray(),o.bind(this,e)),p.createElement("div",{className:"clearfix"})]))):null,!this.props.uiOutside&&e.get().size>1?r.apply(this,[e]):null,!this.props.uiOutside&&e.get().size>1?p.createElement("div",{className:m.keys(m.pick({"next-button":!0},m.identity)).join(" "),onClick:s.bind(this,e)},p.createElement("div",{className:"arrow"})):null):null,this._showNavButtons()&&this.props.uiOutside&&e.get().size>1?p.createElement("div",{className:"outside prev-button",onClick:l.bind(this,e)},p.createElement("div",{className:"arrow"},"←")):null,this.props.uiOutside&&e.get().size>1?p.createElement("div",{className:"center outside slide-selectors"},p.createElement("div",{className:"slide-selectors-inner"},p.createElement.apply(this,["div",{className:"content repeatable-component"},m.map(e.get().toArray(),c.bind(this,e))]))):null,this._showNavButtons()&&this.props.uiOutside&&e.get().size>1?p.createElement("div",{className:"next-button outside",onClick:d.bind(this,e)},p.createElement("div",{className:"arrow"},"→")):null,0==e.get().size?p.createElement("div",{className:"s-slider-placeholder"},null):null)}var p=n(0),m=n(1)
e.exports=function(){return p.createElement("div",{className:"s-component s-slider"+(this.props.className?" "+this.props.className:" ")},"\n  ",this._renderEditor(),"\n  ",p.createElement("div",{className:"s-component-content"},f.apply(this,[])))}},2530:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(1),a=(i(o),n(50)),r=n(2496),s=i(r)
s.default.sharedProps=(0,a.sharedPropsBuilder)(function(){return[]})
t.default=s.default
e.exports=t.default},2531:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}function a(e){return e&&e!==N?[e]:null}function r(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"tail",i=[].concat(t)
i.forEach(function(e){return e.image=h.fromAssetLib(e)})
var a=(0,d.normalize)(i,w),r=a.result,s=a.entities.asset
Object.assign(C,s)
if("head"===n){var l;(l=x[e].assets).unshift.apply(l,o(r))}else{var u;(u=x[e].assets).push.apply(u,o(r))}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E
p.default.getImageSummary({tags:a(e),success:function(t){var n=t.data
x[e].summary=n
P.emitImageAssetsChange()}})}Object.defineProperty(t,"__esModule",{value:!0})
t.DEFAULT_IMAGE_ASSET_TAG=void 0
var l=n(25),u=n(1),c=i(u),d=n(970),f=n(654),p=i(f),m=n(70),h=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(m),g=n(51),v=i(g),y=n(52),b=i(y),_=new d.Schema("asset"),w=(0,d.arrayOf)(_),C={},k=function(){return{assets:[],summary:{totalCount:0,totalSize:0},loading:!1,lastLoadedPage:0}},N=t.DEFAULT_IMAGE_ASSET_TAG="all",x=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}({},N,k()),E=N,S=x[E],P=c.default.assign({},l.EventEmitter.prototype,{getImageAssets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E
return Object.assign({},x[e],{assets:x[e].assets.map(function(e){return C[e]})})},getLastLoadedPage:function(){return S.lastLoadedPage},addImageAssetsChangeListener:function(e){this.on("image_assets_change_event_id",e)},removeImageAssetsChangeListener:function(e){this.removeListener("image_assets_change_event_id",e)},emitImageAssetsChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E
this.emit("image_assets_change_event_id",this.getImageAssets(e))},addImageAssetsTag:function(e){x[e]||(x[e]=k())},switchImageAssetsTag:function(e){this.addImageAssetsTag(e)
E=e
S=x[E]},getCurrentAssetsTags:function(){return a(E)},getSiteAssetsTags:function(){return a(Object.keys(x).filter(function(e){return e!==N}).shift())}})
P.dispatchToken=v.default.register(function(e){switch(e.actionType){case b.default.ActionTypes.LOAD_IMAGE_ASSET:if(S.lastLoadedPage>0){if(e.page<=S.lastLoadedPage){P.emitImageAssetsChange()
return}if(S.summary.totalCount<=S.assets.length)return}else s()
if(S.loading)return
S.loading=!0
p.default.getUserAssetImages({page:e.page,tags:a(E),success:function(t){var n=t.data
r(E,n.assetImages)
S.lastLoadedPage=Math.max(e.page,S.lastLoadedPage)
S.loading=!1
P.emitImageAssetsChange()}})
break
case b.default.ActionTypes.ADD_IMAGE_ASSET:Object.keys(x).forEach(function(t){r(t,e.assetImage,"head")
s(t)})
P.emitImageAssetsChange()
break
case b.default.ActionTypes.DELETE_IMAGE_ASSET:Object.keys(x).forEach(function(t){c.default.remove(x[t].assets,function(t){return t===e.assetId})
s(t)})
P.emitImageAssetsChange()}})
t.default=P},2532:function(e,t,n){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0})
var i={IMAGE_ASSET_DIALOG:{FILE_PICKER:0,ASSET_LIB:1,ICON_LIB:2,DEFAULT_OPTIONS:{mode:"single",hideTabs:[],initialTabIdx:-1,iconLibComponents:"icon",saveRecord:!0,hideUrlUploader:!1}},FILE_ASSET_DIALOG:{FILE_PICKER:0,ASSET_LIB:1,DEFAULT_OPTIONS:{mode:"single",hideTabs:[],initialTabIdx:-1,saveRecord:!0}},PAGE_SETTINGS_DIALOG:{COLLABORATOR:{ROLES_ARR:function(){return[{value:"administrator",text:n("EditorSettings|Administrator")},{value:"editor",text:n("EditorSettings|Editor")},{value:"blogger",text:n("EditorSettings|Blogger")}]}}}}
t.default=i
e.exports=t.default}).call(t,n(7))},2533:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(2534),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a=n(2535),r={setInitialType:function(e){o.default.dispatch({actionType:a.ActionTypes.SET_INITIAL_TYPE,type:e})},setType:function(e){o.default.dispatch({actionType:a.ActionTypes.SET_TYPE,type:e})},setCurrentCategoryIndex:function(e){o.default.dispatch({actionType:a.ActionTypes.SET_CURRENT_CATEGORY_INDEX,categoryIndex:e})},manualSearchUnsplash:function(e){o.default.dispatch({actionType:a.ActionTypes.MANUAL_SEARCH_UNSPLASH,query:e})},fetchMoreUnsplashAssets:function(){o.default.dispatch({actionType:a.ActionTypes.FETCH_MORE_UNSPLASH_ASSETS})}}
t.default=r
e.exports=t.default},2534:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(100),o=function(e){return e&&e.__esModule?e:{default:e}}(i)
t.default=new o.default("AssetsDispatcher")
e.exports=t.default},2535:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.ActionTypes=void 0
var i=n(101),o=function(e){return e&&e.__esModule?e:{default:e}}(i)
t.ActionTypes=(0,o.default)({SET_INITIAL_TYPE:null,SET_TYPE:null,SET_CURRENT_CATEGORY_INDEX:null,MANUAL_SEARCH_UNSPLASH:null,FETCH_MORE_UNSPLASH_ASSETS:null})},2536:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i={},o={loadAsyncStore:function(e){switch(e){case"socialFeedManager":i[e]=n(2497)}}}
t.default=o
e.exports=t.default},2537:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),r=n(6),s=i(r),l=n(22),u=i(l),c=u.default.SOCIAL_FEED.ACCOUNTS,d=u.default.SOCIAL_FEED.FEEDS,f=function(){function e(){o(this,e)}a(e,[{key:"getAccounts",value:function(e){return s.default.ajax({url:c(e.pageId),type:"GET",success:function(t){if("function"==typeof e.success)return e.success(t)},error:function(t){if("function"==typeof e.fail)return e.fail(t)}})}},{key:"deleteAccount",value:function(e){return s.default.ajax({url:c(e.pageId,e.accountId),type:"DELETE",success:function(t){if("function"==typeof e.success)return e.success(t)},error:function(t){if("function"==typeof e.fail)return e.fail(t)}})}},{key:"updateFacebookPage",value:function(e){return s.default.ajax({url:u.default.SOCIAL_FEED.updateFacebookPage(e),type:"POST",data:e.data,success:function(t){if("function"==typeof e.success)return e.success(t)},error:function(t){if("function"==typeof e.fail)return e.fail(t)}})}},{key:"getFeeds",value:function(e){return s.default.ajax({url:d(e.pageId),type:"GET",success:function(t){if("function"==typeof e.success)return e.success(t)},error:function(t){if("function"==typeof e.fail)return e.fail(t)}})}}])
return e}()
t.default=new f
e.exports=t.default},2538:function(e,t,n){"use strict"
var i=n(0)
n(1)
e.exports=function(){return i.createElement("div",{className:"s-async-wrapper s-component"},i.createElement("div",{className:"s-loading"}))}},2539:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(25),a=n(1),r=i(a),s=n(15),l=(i(s),n(51)),u=i(l),c=n(52),d=i(c),f={settings:{goal:1e4,paid:0,currencyCode:"CNY",data:{buttonText:"",thanksMessage:"",showProgress:!0}},state:{isFetching:!1},currencyFormat:{code:"CNY",symbol:"¥",decimal:".",thousand:",",precision:2,name:"Chinese Yuan"}},p=r.default.assign({},o.EventEmitter.prototype,{getData:function(){return f},emitChange:function(){this.emit("store_change_event",f)},addChangeListener:function(e){this.on("store_change_event",e)},removeChangeListener:function(e){this.removeListener("store_change_event",e)}})
p.editorDispatchToken=u.default.register(function(e){switch(e.actionType){case d.default.ActionTypes.GET_DONATION_SETTINGS:f.state.isFetching=!0
p.emitChange()
break
case d.default.ActionTypes.GET_DONATION_SETTINGS_SUCCESS:f.state.isFetching=!1
f.settings=e.settings
f.settings.goal=(f.settings.goal||0)/100
f.settings.paid=(f.settings.paid||0)/100
p.emitChange()
break
case d.default.ActionTypes.GET_DONATION_SETTINGS_FAIL:f.state.isFetching=!1
p.emitChange()}})
t.default=p
e.exports=t.default},2540:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(2541),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a=n(2436)
t.default=(0,a.createCardView)(o.default,!0)
e.exports=t.default},2541:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(385),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a=n(2437)
t.default=(0,a.createProductCard)(o.default,!0)
e.exports=t.default},2542:function(e,t,n){"use strict";(function(t){var i=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),o=n(42),a=n(218),r=function(e){return e&&e.__esModule?e:{default:e}}(a),s=n(0),l=n(12),u=n(4),c=n(6),d=n(2),f=n(17),p=n(59),m=n(385),h=n(631),g=n(103),v=n(35),y=n(2428),b=n(999),_=n(635),w=n(158),C=n(13),k=n(8),N=f({displayName:"PortfolioProduct",mixins:[h.enableAfterMount(),g],contextTypes:{fromStorePage:l.bool},getInitialState:function(){return{currentImageIndex:0}},componentDidUpdate:function(){var e=c(u.findDOMNode(this.refs.imageWrapper)),t=e.find("img")
e.height(t.height())
return t.load(function(){return e.height(t.height())})},componentWillReceiveProps:function(e){this.props.product.id!==e.product.id&&this.setState(this.getInitialState())},_getProductImage:function(){return this.props.product.picture[this.state.currentImageIndex]?this.props.product.picture[this.state.currentImageIndex].thumbnailUrl:v.cdnAssetPath(m.DEFAULT_PRODUCT_IMAGE)},_showImageGallery:function(){var e=this
return n.e(0).then(function(){n(650)
var t=e.props.product.picture.map(function(e){return{src:e.url}})
return c.fancybox.open(t,Object.assign({},y.onlyCloseBtnOpts,{baseTpl:y.getCustomArrowTpl(),beforeMove:y.indicatorBeforeMove,onInit:y.indicatorOnInit}))}.bind(null,n)).catch(n.oe)},onClickCtaButton:function(){var e=this.props.product.button.url
window.top.location.href=(0,o.addProtocol)(e)},_onClickShowImageGallery:function(){return this._showImageGallery()},_onClickNextImage:function(){return this.setState({currentImageIndex:this.state.currentImageIndex+1})},_onClickPrevImage:function(){return this.setState({currentImageIndex:this.state.currentImageIndex-1})},_setCurrentImage:function(e){return this.setState({currentImageIndex:e})},_onClickShowProductPage:function(){var e=this.props.product
return p.gotoProductPage(e.id,this.context.fromStorePage,!0)},_getSlickSettings:function(){var e=this
return{infinite:1!==this.props.product.picture.length,slidesToShow:1,autoplay:!1,afterChange:function(t){return e.setState({currentImageIndex:t})}}},_renderThumbnailList:function(){var e=this,t=void 0,n=this.props.product.picture.length,o=this.state.currentImageIndex+1
t=n>=7?o<=4?0:n-o<=3?14.5*-(n-7)+"%":14.5*-(o-4)+"%":0
return i("div",{className:"s-ecommerce-row-view-product-thumbnail-list"},void 0,i("ul",{style:{left:t}},void 0,this.props.product.picture.map(function(t,n){return i("li",{className:n===e.state.currentImageIndex?"current":"",onClick:function(){return e._setCurrentImage(n)}},n,i("img",{src:t.thumbnailUrl}))})))},render:function(){var e=this,n=this.props,o=(n.isSxl,n.product),a=n.fromProductPage,l=!a&&o.detailEnabled&&C.getProductPage()
return i("div",{className:d("s-ecommerce-row-view-product",{"from-product-page":a})},void 0,i("div",{className:""+this.props.imgColumnClassName,style:{minHeight:"50px"}},void 0,i("div",{className:"half-offset-right"},void 0,s.createElement("div",{className:"s-ecommerce-row-view-product-image-wrapper",ref:"imageWrapper",onClick:this._onClickShowImageGallery},o.picture.length>=1&&i("div",{className:"slider-wrapper"},void 0,s.createElement(b,Object.assign({},this._getSlickSettings()),o.picture.map(function(e,t){return i("div",{className:"slide-thumb",style:{backgroundImage:"url("+e.thumbnailUrl+")"}},t)})),o.picture.length>=2&&i("ul",{className:"slider-dot-wrapper"},void 0,o.picture.map(function(t,n){return i("li",{className:d("slider-dot",{selected:e.state.currentImageIndex===n})})}))),i("div",{className:"image-wrapper"},void 0,i(_,{src:this._getProductImage(),width:"100%"}),function(){if(o.picture.length>=2){if("card"===e.props.layout||a)return i("div",{className:"s-ecommerce-row-view-product-image-overlay-wrapper"},void 0,i("div",{className:"s-ecommerce-row-view-product-image-overlay"}),i("div",{className:"s-ecommerce-row-view-product-image-overlay-icon"},void 0,i("div",{className:"fa fa-search-plus",title:t("Ecommerce|Click to view more images")})))
if("row"===e.props.layout)return i("div",{className:"s-ecommerce-row-view-product-image-gallery-button"},void 0,i("div",{className:"fa fa-search-plus",title:t("Ecommerce|Click to view more images")}))}return null}())),(a||"card"===this.props.layout)&&o.picture.length>=2?this._renderThumbnailList():null)),i("div",{className:"s-ecommerce-row-view-product-detail-panel s-font-body "+this.props.infoColumnClassName},void 0,i("div",{className:"s-ecommerce-row-view-product-name"},void 0,o.name),o.subtitle&&o.subtitle.active&&i("div",{className:"s-ecommerce-row-view-product-pricing"},void 0,o.subtitle.text),i("div",{className:"s-ecommerce-row-view-product-desc"},void 0,i("div",{dangerouslySetInnerHTML:{__html:o.description.replace(/\n/g,"<br>")}}),l?i("div",{className:"view-detail-btn",onClick:this._onClickShowProductPage},void 0,t("Ecommerce|View more details...")):null),o.button&&o.button.active&&i(r.default,{component:"a",className:"s-ecommerce-row-view-product-order-btn s-common-button",onClick:this.onClickCtaButton},void 0,o.button.text)),a&&i("div",{},void 0,i("div",{className:"mobile-select"},void 0,i("div",{className:d("select-panel")},void 0,i("div",{className:"price"},void 0,i("div",{className:"container"},void 0,i("div",{className:"sixteen columns"},void 0,i("div",{className:"select-label"},void 0,t("Ecommerce|Price")),o.subtitle&&o.subtitle.active&&i("div",{className:"price-label"},void 0,o.subtitle.text))))),o.button&&o.button.active&&i("div",{onClick:this.onClickCtaButton,className:"add-btn"},void 0,o.button.text))))}})
e.exports=w(N,[],function(){return{locale:C.getLocale(),isSxl:C.getIsSxl(),isNewMobileActions:k.getIsNewMobileActions()}})}).call(t,n(7))},2543:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return/animation=0/.test(window.location.href)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}()
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(37),s=n(21),l=n(1),u=n(2544),c=n(2545)
t.areBackgroundAnimationsEnabledOnThisDevice=c.areBackgroundAnimationsEnabledOnThisDevice
var d=n(2546),f=function(){function e(t){i(this,e)
this._newPageFadeInToken=null
this._contentElement=t
if(this._shouldAnimate()){s.getSiteAnimations()
this._initAnimations(t)
this._onPageDataChange=l.debounce(this._onPageDataChange.bind(this),50)
s.addChangeListener(this._onPageDataChange)
this._onNewPageFadeIn=this._onNewPageFadeIn.bind(this)
this._newPageFadeInToken=r.Event.subscribe("Page.afterNewOneFadeIn",this._onNewPageFadeIn)}}a(e,[{key:"_onPageDataChange",value:function(){var e=s.getSiteAnimations()
this._animations.forEach(function(t){t.handlePageDataChange&&t.handlePageDataChange(e)})}},{key:"_onNewPageFadeIn",value:function(){s.getSiteAnimations()
this._destroyAnimations()
this._initAnimations(this._contentElement)}},{key:"_initAnimations",value:function(e){var t=s.getSiteAnimations()
this._animations=[]
this._animations.push(new u.default(t,e))
this._animations.push(new d.default(t,e))
this._animations.push(new c.default(t,e))}},{key:"_shouldAnimate",value:function(){return!o()}},{key:"destroy",value:function(){if(this._shouldAnimate()){s.removeChangeListener(this._onPageDataChange)
r.Event.unsubscribe(this._newPageFadeInToken)
this._destroyAnimations()}}},{key:"_destroyAnimations",value:function(){this._animations.forEach(function(e){return e.destroy()})}}])
return e}()
!function(){function e(){i(this,e)}a(e,[{key:"destroy",value:function(){}}])}()
t.default=f},2544:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}()
Object.defineProperty(t,"__esModule",{value:!0})
var a=n(2440),r=n(6),s=n(1),l=function(){function e(t,n){i(this,e)
this._refreshTimeout=null
this._animationType=null
this._waypoints=[]
if(t&&"none"!==t.page_scroll){var o=t.page_scroll
this._animationType=o
var l="s-animation-page-"+o+"-before"
r(n).find(".s-section .s-component, .s-section.s-rows-section .s-item-text-group, .process-item-infos").each(function(e,t){if(!a(t)){t=r(t)
var n=t.parents(".s-info-box"),i=t.parents(".s-item-text-group")
n.length>0?t=n:i.length>0&&(t=i)
t.addClass(l)}})
r("."+l).each(function(){r(this).parents("."+l).removeClass(l)})
var u=this._onScrolledToElement.bind(this)
this._waypoints=r(n).find("."+l).waypoint(function(e){if("down"===e){u(this.element)
this.destroy()}},{offset:"100%"})
this._onScroll=s.debounce(this._onScroll.bind(this),200)
r(window).on("scroll",this._onScroll)
this._refreshTimeout=setTimeout(function(){Waypoint.refreshAll()
this._refreshTimeout=null},500)}}o(e,[{key:"_onScrolledToElement",value:function(e){r(e).addClass("s-animation-page-"+this._animationType).removeClass("s-animation-page-"+this._animationType+"-before")}},{key:"_onScroll",value:function(){var e=this
r(window).scrollTop()+r(window).height()>=r("body").height()&&r(".s-animation-page-"+this._animationType+"-before").each(function(t,n){return e._onScrolledToElement(n)})}},{key:"destroy",value:function(){this._waypoints.forEach(function(e){return e.destroy()})
r(window).off("resize",this._onScroll)
clearTimeout(this._refreshTimeout)}}])
return e}()
t.default=l},2545:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e){r(e).find(".s-bg-image").length>0&&(e=r(e).find(".s-bg-image")[0])
return e}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}()
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(6),s=n(1),l=n(32),u=function(){function e(t,n){i(this,e)
this._isDestroyed=!1
this._contentElement=n
this._applyParallax=this._applyParallax.bind(this)
this._onWindowResize=s.debounce(this._onWindowResize.bind(this),200)
r(window).on("resize",this._onWindowResize)
r(window).on("scroll",this._applyParallax)
this._updateSectionsThatShouldBeAnimated()
this._updateBackgroundAnimationSpeed(t)}a(e,[{key:"_updateBackgroundAnimationSpeed",value:function(e){var t=this._getParallaxSpeed(e)
if(t!==this._parallaxSpeed){this._parallaxSpeed=t
1===this._parallaxSpeed?this._removeParallax():this._applyParallax(!0)}}},{key:"_getParallaxSpeed",value:function(e){return"none"===e.background?1:"fixed"===e.background?0:"parallax"===e.background?.3:void 0}},{key:"_onWindowResize",value:function(){var e=this
c()||this._sectionsThatShouldBeAnimated.each(function(t,n){e._revertAnimationStyles(n)})
this._applyParallax(!0)}},{key:"handlePageDataChange",value:function(e){this._updateSectionsThatShouldBeAnimated()
this._updateBackgroundAnimationSpeed(e)}},{key:"_removeParallax",value:function(){var e=this
this._sectionsThatShouldBeAnimated.each(function(t,n){e._revertAnimationStyles(n)})}},{key:"_updateSectionsThatShouldBeAnimated",value:function(){this._sectionsThatShouldBeAnimated=r(this._contentElement).find(".s-section").filter(function(e,t){var n=r(t),i=n.is(".s-slider-section"),o=n.is(".s-grid-section"),a="none"!=n.css("backgroundImage")||"none"!=n.find("s-bg-image").css("backgroundImage"),s=n.is(".s-bg-video")
return a&&!i&&!s&&!o})}},{key:"_applyParallax",value:function(e){var t=this
if(c()&&1!==this._parallaxSpeed){var n=r(window).scrollTop()
this._sectionsThatShouldBeAnimated.each(function(i,a){a=o(a)
if(r(a).hasClass("_animate-background")){var s=t._parallaxSpeed,l=a.offsetHeight,u=window.innerHeight,c=a.getBoundingClientRect().top+n,d=c-u,f=c+l,p=d<=n&&n<=f,m=f-d,h=n-d,g=h/m,v=m*s,y=(Math.max(u,l),f-u),b=y-d,_=b/m,w=u*s-m*s*_,C=f-(y+w)
e&&$B.TH.getBackgroundImageSize(r(a),function(e){if(!t._isDestroyed){var n=e.width/e.height
if(r(a).hasClass("_image-position-center")){r(a).data("imageWidth",e.width)
r(a).data("imageHeight",e.height)}else{var i=C,o=C*n
if(o<r(a).outerWidth()){o=r(a).outerWidth()
i=o/n}r(a).data("imageWidth",o)
r(a).data("imageHeight",i)}t._applyParallax(!1)}})
if(p){var k=r(a).offset().left+(r(a).outerWidth()-r(a).data("imageWidth"))/2,N=u*s-m*s*g
r(a).css({"background-attachment":"fixed","background-position-x":k,"background-position-y":(C-r(a).data("imageHeight"))/2+N})
"repeat"!==r(a).css("background-repeat")&&r(a).css({"background-size":r(a).data("imageWidth")+"px "+r(a).data("imageHeight")+"px"})}}else t._revertAnimationStyles(a)})}}},{key:"_revertAnimationStyles",value:function(e){e=o(e)
r(e).css("background-attachment","")
var t=r(e).attr("data-react-style")
t&&r(e).css(JSON.parse(t))}},{key:"destroy",value:function(){this._removeParallax()
r(window).off("resize",this._onWindowResize)
r(window).off("scroll",this._applyParallax)
this._isDestroyed=!0}}])
return e}()
t.default=u
var c=void 0
t.areBackgroundAnimationsEnabledOnThisDevice=c
t.areBackgroundAnimationsEnabledOnThisDevice=c=function(){return!(l.isMobile()||l.isSmallScreen()||l.isEdge()||l.isIE11())}},2546:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}()
Object.defineProperty(t,"__esModule",{value:!0})
var a=n(32),r=n(6),s=function(){function e(t,n){i(this,e)
this._contentElement=n
if(!a.isMobile()&&"zoom_in"===t.image_link_hover){var o=[".s-component.s-media",".s-gallery-item",".image-wrapper",".s-image",".s-blog-avatar-container"],s=o.map(function(e){return".s-section:not(.s-footer-section) "+e+" a img"}),l=s.join(", ")
l+=", .s-blog-avatar, .s-grid-section-cell a .s-bg-image"
r(n).on("mouseenter.imageLinkHoverAnimator",l,function(){var e=r(this),t=e.width(),n=e.height(),i=void 0
i=t>n?(t+20)/t:(n+20)/n
r(this).css("transform","scale("+i+")")})
r(n).on("mouseleave.imageLinkHoverAnimator",l,function(){r(this).css("transform","")})}}o(e,[{key:"destroy",value:function(){r(this._contentElement).off("mouseenter.imageLinkHoverAnimator")
r(this._contentElement).off("mouseleave.imageLinkHoverAnimator")}}])
return e}()
t.default=s},2547:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(287),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a=n(2430)
t.default=(0,a.createCategoryBar)(o.default)
e.exports=t.default},2548:function(e,t,n){"use strict"
var i=n(0)
n(1)
e.exports=function(){return i.createElement("div",{className:"video-bg-wrap","data-video-html":this.dtProps.videoHtml})}},2576:function(e,t,n){var i=n(2909)
n(1)
e.exports={internal:"minimal",displayName:"Minimal",description:"A small, simple template.",activated:!0,thumbnail:i.correctThumbnailPath(n(4041)),defaultFonts:{heading:"playfair display",title:"vollkorn",body:"open sans"},features:{verticalAlignRowsSection:!0,backgroundColorClassNames:["s-bg-white","s-bg-gray"],backgroundColorRotate:!0},variations:[{id:"default",displayName:"Variation|Olive",fonts:{heading:null,title:null,body:null}},{id:"blue",displayName:"Variation|Blue",fonts:{heading:null,title:null,body:null}},{id:"red",displayName:"Variation|Red",fonts:{heading:null,title:null,body:null}},{id:"purple",displayName:"Variation|Purple",fonts:{heading:null,title:null,body:null}},{id:"black",displayName:"Variation|Black",fonts:{heading:null,title:null,body:null}}],callbacks:{after_render:n(4042),CustomColorsTemplate:n(4044)},sections:{signup_form:{proFeature:!1,canEditInMobileApp:!0,component:n(2912),template:n(2982),thumbnail:{cover:i.correctThumbnailPath(n(4045)),template:n(2920)}},text:{proFeature:!1,canEditInMobileApp:!0,component:n(2983),template:n(2984),thumbnail:{cover:i.correctThumbnailPath(n(4046)),template:n(2966)}},gallery:{proFeature:!1,canEditInMobileApp:!0,component:n(2985),template:n(3022),thumbnail:{cover:i.correctThumbnailPath(n(4047)),template:n(2967)}},info:{proFeature:!1,canEditInMobileApp:!0,component:n(2986),template:n(2987),thumbnail:{cover:i.correctThumbnailPath(n(4048)),template:n(2968)}},icons:{proFeature:!1,canEditInMobileApp:!0,component:n(2924),template:n(2988),thumbnail:{cover:i.correctThumbnailPath(n(4049)),template:n(2969)}},title:{proFeature:!1,canEditInMobileApp:!0,component:n(2970),template:n(2989),thumbnail:{cover:i.correctThumbnailPath(n(4050)),template:n(3016)}},navbar:{proFeature:!1,canEditInMobileApp:!1,component:n(2972),template:n(4051)},blog:{proFeature:!1,canEditInMobileApp:!1,component:n(2928),template:n(3008),thumbnail:{cover:i.correctThumbnailPath(n(4052)),template:n(2931)}},social_feed:{proFeature:!1,canEditInMobileApp:!1,component:n(2973),template:n(2990),thumbnail:{cover:i.correctThumbnailPath(n(4053)),template:n(2932)}},rows:{proFeature:!1,canEditInMobileApp:!0,component:n(3009),template:n(2991),thumbnail:{cover:i.correctThumbnailPath(n(4054)),template:n(2974)}},media:{proFeature:!1,canEditInMobileApp:!0,component:n(2992),template:n(2993),thumbnail:{cover:i.correctThumbnailPath(n(4055)),template:n(2975)}},slider:{proFeature:!0,canEditInMobileApp:!1,component:n(2934),template:n(3017),thumbnail:{cover:i.correctThumbnailPath(n(4056)),template:n(2935)}},cta:{proFeature:!1,canEditInMobileApp:!0,component:n(2936),template:n(2994),thumbnail:{cover:i.correctThumbnailPath(n(4057)),template:n(2937)}},contact_form:{proFeature:!1,canEditInMobileApp:!0,component:n(2976),template:n(3010),thumbnail:{cover:i.correctThumbnailPath(n(4058)),template:n(2977)}},html:{proFeature:!1,canEditInMobileApp:!1,component:n(2938),template:n(2995),thumbnail:{cover:i.correctThumbnailPath(n(4059)),template:n(2939)}},ecommerce:{proFeature:!1,canEditInMobileApp:!1,component:n(2940),template:n(3011),thumbnail:{cover:i.correctThumbnailPath(n(4060)),template:n(2941)}},columns:{proFeature:!1,canEditInMobileApp:!0,component:n(3012),template:n(2996),thumbnail:{cover:i.correctThumbnailPath(n(4061)),template:n(2978)}},process:{proFeature:!1,canEditInMobileApp:!0,component:n(2942),template:n(2997),thumbnail:{template:n(2945)}},block:{proFeature:!0,canEditInMobileApp:!1,component:n(2946),template:n(2999),thumbnail:{template:n(2947)}},portfolio:{proFeature:!1,canEditInMobileApp:!1,component:n(2948),template:n(3e3),thumbnail:{template:n(2951)}},footer:{proFeature:!1,canEditInMobileApp:!1,component:n(2979),template:n(3001)},donation:{proFeature:!1,canEditInMobileApp:!1,component:n(2954),template:n(3002),thumbnail:{template:n(2956)}},hero:{proFeature:!1,canEditInMobileApp:!0,component:n(3003),template:n(3004),thumbnail:{cover:i.correctThumbnailPath(n(2980)),template:n(2981)}},grid:{proFeature:!0,canEditInMobileApp:!1,component:n(2957),template:n(2961),thumbnail:{template:n(2962)}}}}},2875:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),s=n(0),l=o(s),u=n(12),c=o(u),d=n(24),f=o(d),p=n(382),m=o(p)
t.default=f.default.create({displayName:"TitleGroup",mixins:[],propTypes:{className:c.default.string,section:c.default.object.isRequired,parentBinding:c.default.object,subtitleOnTop:c.default.bool,canHide:c.default.bool,titleSize:c.default.oneOf(["large","normal"]),titleTag:c.default.oneOf(["h2","h3","h4","h5","h6"]),subtitleTag:c.default.string,contentCheck:c.default.string,binding:c.default.object.isRequired},getDefaultProps:function(){return{className:"",subtitleOnTop:!1,parentBinding:void 0,titleSize:"normal",titleTag:"h2",subtitleTag:"h4",canHide:!0}},componentWillMount:function(){this.showDeleteOverlay=!1
this.hideInEditor=!this.props.section.sbAnyHasContent("text1 text2",{parentBinding:this.props.parentBinding,showOnly:!1})},componentWillUpdate:function(e){this.props.section.sbAnyHasContent("text1 text2",{parentBinding:e.parentBinding,showOnly:!1})&&(this.hideInEditor=!1)},onMouseEnterDeleteButton:function(){this.showDeleteOverlay=!0
this.forceUpdate()},onMouseLeaveDeleteButton:function(){this.showDeleteOverlay=!1
this.forceUpdate()},onClickDeleteButton:function(){this.hideInEditor=!0
this.showDeleteOverlay=!1
this.forceUpdate()},onClickShowButton:function(){this.hideInEditor=!1
this.showDeleteOverlay=!1
this.forceUpdate()},shouldComponentUpdateOverride:function(){return!0},render:function(){var e=void 0,t=void 0,n=this.props.section,o=this.props.parentBinding,s="",u=n.sbUniformTextAlignment("text1",{parentBinding:o}),c=u?"sb-title-"+u:""
this.props.contentCheck&&(n.sbHasContent(this.props.contentCheck,{parentBinding:o,showOnly:!1})||(s="s-only-title-group"))
if(!n)throw new Error("TitleGroup is expecting a section prop!")
if(n.sbHasContent("text1",{parentBinding:o})){var d=void 0,f=void 0,p=n.getComponentProps("text1",o)
f="first"===this.props.section.props.indexType?"h1":this.props.titleTag
d="large"===this.props.titleSize&&"h1"!==f?"s-title-large":""
t=r("div",{className:"s-title "+c},"title",l.default.createElement(m.default,a({slideSettingsBinding:n.getBinding().sub("components.slideSettings"),tagName:f,tagClassName:d,textType:"title",emptyMessage:i("Editor|Add title.")},p)))}else t=null
if(n.sbHasContent("text2",{parentBinding:o})){var h=n.getComponentProps("text2",o)
e=r("div",{className:"s-subtitle"},"subtitle",l.default.createElement(m.default,a({tagName:this.props.subtitleTag,textType:"heading",emptyMessage:i("Editor|Add subtitle.")},h)))}else e=null
return n.sbAnyHasContent("text1 text2",{parentBinding:o})?r("div",{className:"s-title-group "+s+" "+this.props.className},void 0,void 0,this.props.subtitleOnTop?[e,t]:[t,e]):null}})
e.exports=t.default}).call(t,n(7))},2876:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var s,l,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),f=n(0),p=i(f),m=n(12),h=(i(m),n(4)),g=i(h),v=n(42),y=n(21),b=i(y),_=n(157),w=i(_),C=n(2543),k=n(1),N=i(k),x=n(6),E=i(x)
if(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)){n(1008)
document.addEventListener("lazybeforeunveil",function(e){var t=void 0
if(!e.defaultPrevented){t=e.target.getAttribute("data-bg")
if(t){e.target.style.backgroundImage="url("+t+")"
lazySizes.fire(e.target,"_lazyloaded",{},!0,!0)}}})}var S=(l=s=function(e){function t(e){o(this,t)
var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.state={}
return n}r(t,e)
d(t,[{key:"componentWillMount",value:function(){this.updateEnableBackgroundAnimationsInState()}},{key:"componentDidMount",value:function(){this.afterResize=N.default.debounce(this.afterResize.bind(this),300);(0,E.default)(window).on("resize",this.afterResize)}},{key:"componentWillReceiveProps",value:function(e){this.updateEnableBackgroundAnimationsInState(e)}},{key:"componentWillUpdate",value:function(e){for(var t=!1,n=["src","dataSrc"],i=0;i<n.length;i++){var o=n[i]
if(this.props[o]!==e[o]){t=!0
break}}if(t){var a=g.default.findDOMNode(this.refs.lazyElement)
a&&a.classList.contains("lazyloaded")&&a.classList.remove("lazyloaded")}}},{key:"componentDidUpdate",value:function(){var e=g.default.findDOMNode(this.refs.lazyElement)
!e||e.classList.contains("lazyloaded")||e.classList.contains("lazyload")||e.classList.add("lazyload")}},{key:"componentWillUnmount",value:function(){(0,E.default)(window).off("resize",this.afterResize)}},{key:"afterResize",value:function(){this.updateEnableBackgroundAnimationsInState()}},{key:"updateEnableBackgroundAnimationsInState",value:function(e){e=e||this.props
var t="contain"!==e.style.backgroundSize,n="none"!==e.animations.background&&(0,C.areBackgroundAnimationsEnabledOnThisDevice)()&&t
this.state.enableBackgroundAnimations!==n&&this.setState({enableBackgroundAnimations:n})}},{key:"imagePositioningIsCenter",value:function(e){e=e||this.props
return"auto"===e.style.backgroundSize&&"50% 50%"===e.style.backgroundPosition&&"repeat"!==e.style.backgroundRepeat}},{key:"renderBackgroundImage",value:function(){var e=this.props,t=e.className,n=e.src,i=e.dataSrc,o=e.eagerLoad,a=this.state.enableBackgroundAnimations,r=a?" _animate-background":""
this.imagePositioningIsCenter()&&(r+=" _image-position-center")
var s=this.props.style
this.props.parentBinding
if(o){s=Object.assign({},s,{backgroundImage:"url("+i+")"})
return c("div",{className:t+r,style:s,"data-react-style":this.getDataReactStyle(s)},void 0,this.props.children)}var l={}
if(i){s.backgroundImage="url("+n+")"
l={"data-bg":i}}return p.default.createElement("div",u({className:"lazyload "+t+r,style:s},l,{ref:"lazyElement","data-react-style":this.getDataReactStyle(s)}),this.props.children)}},{key:"getDataReactStyle",value:function(e){e=e||{}
e=N.default.omit(e,"backgroundImage")
return JSON.stringify(e)}},{key:"render",value:function(){var e=this.props,t=e.linkTarget,n=e.linkUrl,i=this.renderBackgroundImage(),o=(0,v.addProtocol)(n)
return n&&t?c("a",{href:o,target:t},void 0,i):i}}])
return t}(p.default.Component),s.defaultProps={className:"",style:{},eagerLoad:!1,src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="},l)
t.default=(0,w.default)(S,[b.default],function(){return{animations:b.default.getSiteAnimations()}})
e.exports=t.default},2877:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(1),a=(i(o),n(50)),r=n(2883),s=i(r)
s.default.sharedProps=(0,a.sharedPropsBuilder)(function(){return[]})
t.default=s.default
e.exports=t.default},2878:function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default={_getLayoutVariation:function(){return this._getLayoutBinding().get("layout_variation")||""},_getFirstLayout:function(){return this._getLayoutVariation().split("-")[0]},_updateLayout:function(e){this._getLayoutBinding().sub("layout_variation").set(e)},_getLayoutStatusName:function(){return"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[arguments.length>0&&void 0!==arguments[0]?arguments[0]:0]}}
e.exports=t.default},2879:function(e,t,n){"use strict";(function(e){function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return"object"!==(void 0===e?"undefined":m(e))?"":e[t]?t:Object.keys(e)[0]}function l(t){return{media:e("Editor|Big Media"),col:e("Editor|Columns"),row:e("Editor|Rows"),box:e("Editor|Text In Box"),one:1,two:2,three:3,four:4,five:5,six:6,small:p("i",{className:"small fa fa-photo"}),medium1:p("i",{className:"medium1 fa fa-photo"}),medium2:p("i",{className:"medium2 fa fa-photo"}),large:p("i",{className:"large fa fa-photo"}),mediaLeft:e("Editor|Left"),mediaRight:e("Editor|Right"),center:e("Editor|Center"),left:e("Editor|Media on Left"),right:e("Editor|Media on Right"),noImage:e("Editor|No Media"),alt:e("Editor|Alternating"),text:e("Editor|Text"),button:e("Editor|Button"),signup:e("Editor|Sign Up"),images:e("Editor|App Store"),overlay:e("Editor|Overlay"),card:e("Editor|Card"),swap:e("Editor|Swap Titles")}[t]}function u(e){return(0,q.default)(e,[],function(){return{themeName:W.default.getThemeName()}})}Object.defineProperty(t,"__esModule",{value:!0})
t.BaseLayoutButton=void 0
var c,d,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),p=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
t.connectToStores=u
var h=n(0),g=i(h),v=n(4),y=i(v),b=n(648),_=i(b),w=n(6),C=i(w),k=n(78),N=i(k),x=n(2426),E=i(x),S=n(61),P=i(S),T=n(2),O=i(T),L=n(1),M=i(L),I=n(216),B=i(I),D=n(631),A=i(D),j=n(27),H=i(j),R=n(2493),U=i(R),F=n(633),V=i(F),z=n(8),W=i(z),$=n(2884),G=i($),K=n(157),q=i(K)
t.BaseLayoutButton=(c=P.default.decorate(A.default.enableAfterMount()))(d=function(t){function n(e){o(this,n)
var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))
t.state={showLayoutOptions:!1}
t._bind("_updateLayout","_toggleLayoutOptions","_onClickSave","_clickRotateLayout","_getKeysByLevel")
t._getSetLevelFn=V.default.boundParamsMemoizer(t._setLevelKey,t)
t._createLevelKeys(t.props.layoutVariation)
t._keyCaches={}
t.cacheLevel=-1
return t}r(n,t)
f(n,[{key:"componentDidMount",value:function(){if(-1!==this.cacheLevel){var e=this.cacheLevel,t=this._levelKeys[e]
this._keyCaches[t]=M.default.clone(this._levelKeys)}this.props.layoutOptions||console.warn("Section has no layout options defined!")}},{key:"componentWillUpdate",value:function(e){e.layoutVariation!==this.props.layoutVariation&&this._createLevelKeys(e.layoutVariation)}},{key:"componentDidUpdate",value:function(e,t){e.layoutVariation!==this.props.layoutVariation&&window.edit_page.Event.publish("Layout.afterChange",{target:(0,C.default)(y.default.findDOMNode(this))})
!t.showLayoutOptions&&this.state.showLayoutOptions&&(0,C.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").addClass("background-editor-opened")
t.showLayoutOptions&&!this.state.showLayoutOptions&&(0,C.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").removeClass("background-editor-opened")}},{key:"_bind",value:function(){for(var e=this,t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i]
n.forEach(function(t){return e[t]=e[t].bind(e)})}},{key:"_createLevelKeys",value:function(e){this._levelKeys=e.split("-")}},{key:"_updateLayout",value:function(e){this.props.updateLayout(M.default.remove(M.default.clone(e),function(e){return""!==e.trim()}).join("-"))}},{key:"_setLevelKey",value:function(e,t){var n=this.cacheLevel
if(e===n&&this._levelKeys[e]!==t)return this._keyCaches[t]?this.updateCachedKeys(M.default.clone(this._keyCaches[t])):this.updateToDefaultLayout(t)
for(var i=this._levelKeys,o=[],a=this.props.layoutOptions,r=0;r<e;r++)a=a[i[r]]
o[e]=t
a=a[t]
for(var l=i.length,u=e+1;u<l;u++){o[u]=s(a,i[u])
a=a[o[u]]}var c=M.default.merge([],i,o)
this._updateLayout(c)
e!==n&&-1!==n&&(this._keyCaches[i[n]]=c)}},{key:"_getKeysByLevel",value:function(e){for(var t=this.props.layoutOptions,n=0;n<e;n++){t=t[this._levelKeys[n]]
if(!t)return[]}return"object"===(void 0===t?"undefined":m(t))?Object.keys(t):[]}},{key:"_getSmallButtonClass",value:function(e){var t=this._getKeysByLevel(e).length
return 2===t?"small-buttons two":4===t?"small-buttons four":5===t?"small-buttons five":"small-buttons"}},{key:"_getLayoutIndex",value:function(){var e=this.props.layoutVariation,t=this.getRotationKeys().indexOf(e)
return e&&-1!=t?t:null}},{key:"_getLayoutStatus",value:function(){return null!==this._getLayoutIndex()?"ABCDEFGHI"[this._getLayoutIndex()]:"A"}},{key:"_clickRotateLayout",value:function(){if(this.state.showLayoutOptions)this._onClickSave()
else if(this._shouldDirectlyOpenAdvancedOptions())this.setState({showLayoutOptions:!this.state.showLayoutOptions})
else{var e=(this.props.layoutVariation,this.getRotationKeys()),t=this._getLayoutIndex()+1;(!t||t>=e.length)&&(t=0)
var n=e[t]||""
if(n){this.props.updateLayout(n)
B.default.track("Change Layout - Editor v2",{section:this.sectionName})
H.default.clickLayout()
H.default.save()}}}},{key:"_shouldDirectlyOpenAdvancedOptions",value:function(){return 0===this.getRotationKeys().length&&!this.hideAdvancedOptions}},{key:"_onClickSave",value:function(){this.setState({showLayoutOptions:!1})
H.default.save()}},{key:"_toggleLayoutOptions",value:function(){this.setState({showLayoutOptions:!this.state.showLayoutOptions})
this.state.showLayoutOptions||B.default.track("Click Advanced Layout - Editor v1",{section:this.sectionName})}},{key:"_renderCheckBox",value:function(e){var t=e.levelNum,n=e.labelText,i=e.checkedKey,o=e.unCheckedKey,a=this._levelKeys[t],r=this._getKeysByLevel(t)
if(a&&r.length>=2){var s=this._getSetLevelFn(t,a===i?o:i)
return p("div",{className:"s-layout-menu-field layout-level-button layout-checkbox dark-bg",onClick:s},void 0,p("input",{type:"checkbox",checked:a===i,onChange:s}),p("span",{},void 0,n))}}},{key:"_renderLayoutButtons",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l,o=this._levelKeys[e],a=this._getKeysByLevel(e)
if(o&&a.length>=2){var r=this.getButtonClassMapping()[e]
return p(G.default,{keys:a,selectedKey:o,textMapping:i,className:r,labelText:t,onSelect:function(t){return n._getSetLevelFn(e,t)()}})}}},{key:"render",value:function(){var t=this._getLayoutStatus(),n=this.hideAdvancedOptions||!1,i=this.state.showLayoutOptions,o=p(E.default,{className:"center clickable small title layout-button",onTap:this._clickRotateLayout,rel:"tooltip-left",title:e("Editor|Click to change layouts.")},void 0,p("span",{},void 0,this.buttonTitle||e("Layout"),t&&!i&&p("span",{className:"layout-status"},void 0,t)))
if(!this.props.layoutOptions)return null
var a=(0,O.default)("s-component s-layout",{advanced:!n,opened:i,closed:!i})
return g.default.createElement("div",{ref:"componentDOM",className:a},p("div",{className:"s-component-editor dark-bg"},void 0,n?o:p("div",{className:"layout-button-wrapper"},void 0,o,this._shouldDirectlyOpenAdvancedOptions()?null:p(E.default,{className:"advanced-options-button",rel:"tooltip-left",title:e("Editor|More layout options!"),onClick:this._toggleLayoutOptions},void 0,e("Editor|Advanced"),p("i",{className:"fa fa-angle-down",style:{marginLeft:"5px"}}))),!n&&p(N.default,{},void 0,i&&p(U.default,{component:_.default.div,className:"layout-panel"},void 0,this.renderLayoutOptions(),p("div",{className:"save-button green s-btn small",onClick:this._onClickSave},void 0,e("Editor|Save"))))))}}])
return n}(g.default.Component))||d}).call(t,n(7))},2880:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=i(r),l=n(12),u=i(l),c=n(24),d=i(c),f=n(382),p=i(f),m=!1
t.default=d.default.create({displayName:"ItemTextGroup",propTypes:{section:u.default.object.isRequired,itemBinding:u.default.object.isRequired,className:u.default.string,binding:u.default.object.isRequired,upperChildrenPosition:u.default.bool},shouldComponentUpdateOverride:function(){return!0},renderChildren:function(e){return a("div",{className:e},void 0,this.props.children)},_onChange:function(){if(this.props.onChange)return this.props.onChange()},render:function(){var e=void 0,t=void 0,n=void 0,i=this.props.section,r=this.props.itemBinding,l=null==this.props.showItemSubtitle||this.props.showItemSubtitle,u=this.props.deprecateItemSubtitle,c=this.props.upperChildrenPosition,d=null!=this.props.className?this.props.className:"",f=this.props.hideTextGroupTitle
if(!i)throw new Error("ItemTextGroup is expecting a section prop!")
if(!r)throw new Error("ItemTextGroup is expecting an itemBinding prop!")
if(l){var h=i.getThemeFeature("itemSubtitleDefaultStyle"),g=h?{defaultStyle:h}:g={}
n=a("div",{className:"s-item-subtitle"},void 0,s.default.createElement(p.default,o({tagName:"h6",textType:"body"},g,i.getComponentProps("text2",r),{onChange:this._onChange})))
e="text3"
t="text1 text2 text3"}else{n=null
e="text2"
t="text1 text2"}var v=i.sbUniformTextAlignment(t,{parentBinding:r})
return i.sbAnyHasContent(t,{parentBinding:r})||this.props.children?a("div",{className:"s-item-text-group "+d},void 0,c&&this.renderChildren(v),i.sbHasContent("text1",{parentBinding:r})&&!f&&a("div",{className:"s-item-title"},void 0,s.default.createElement(p.default,o({tagName:"h3",textType:"heading"},i.getComponentProps("text1",r),{onChange:this._onChange}))),function(){if(l){if(!u)return n
!m&&i.sbHasContent("text2",{parentBinding:r,showOnly:!1})&&(m=!0)
if(m)return n}}(),a("div",{className:"s-item-text"},void 0,s.default.createElement(p.default,o({tagName:"div",textType:"body"},i.getComponentProps(e,r),{onChange:this._onChange}))),!c&&this.renderChildren(v)):null}})
e.exports=t.default},2881:function(e,t,n){"use strict"
function i(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}function o(){return v}function a(e){return Object.assign({},v,e)}function r(e,t,n){var i=(0,g.getThemeFeature)("narrowMedia")&&11!==e,o=i?14:16,r=16,s=i?e-1:e,l=i?8:s,u=i?10:16
if(11===e)u=l=14
else if("onyx_new"===y&&"right"===t){o=15
u=15}if("persona"===y){o=12
r=12
u=12}var c=(0,g.generateColumnClassWithOffset)(s,o,r),d=(0,g.generateColumnClass)(o-s),f=(0,g.generateColumnClassWithOffset)(l,l,r),p=(0,g.generateColumnClassWithOffset)(u,u,r),m="half-offset-right",h="half-offset-left"
11!==s&&9!==s||(m=h="")
if("persona"===y)switch(t){case"right":return function(){return a({repeatableClass:"s-media-right s-layout-mediaRight",innerItemClass:(0,g.generateColumnClass)(12),mediaClass:c+" s-right-in-row right omega",singleMediaClass:f+" s-right-in-row right alpha omega",textClass:d+" s-left-in-row right alpha",singleTextClass:p+" s-left-in-row right alpha omega",textInnerClass:m,buttonClass:n?"s-text-button":""})}
case"alt":return function(){return a({repeatableClass:"s-media-alt s-layout-alt",innerItemClass:(0,g.generateColumnClass)(12),mediaClass:function(e,t){return c+" "+(t%2?"s-right-in-row right omega":"s-left-in-row alpha")},singleMediaClass:function(e,t){return f+" "+(t%2?"s-right-in-row right alpha omega":"s-left-in-row alpha omega")},textClass:function(e,t){return d+" "+(t%2?"s-left-in-row right alpha":"s-right-in-row omega")},singleTextClass:function(e,t){return p+" "+(t%2?"s-left-in-row right alpha omega":"s-right-in-row alpha omega")},textInnerClass:function(e,t){return t%2?m:h},buttonClass:n?"s-text-button":""})}}switch(t){case"left":return function(){return a({repeatableClass:"s-media-left s-layout-mediaLeft",mediaClass:c+" s-left-in-row",singleMediaClass:f+" s-left-in-row",textClass:d+" s-right-in-row",singleTextClass:p+" s-right-in-row",textInnerClass:h,buttonClass:n?"s-text-button":""})}
case"right":return function(){return a({repeatableClass:"s-media-right s-layout-mediaRight",mediaClass:c+" s-right-in-row right",singleMediaClass:f+" s-right-in-row right",textClass:d+" s-left-in-row right",singleTextClass:p+" s-left-in-row right",textInnerClass:m,buttonClass:n?"s-text-button":""})}
case"alt":return function(){return a({repeatableClass:"s-media-alt s-layout-alt",mediaClass:function(e,t){return c+" "+(t%2?"s-right-in-row right":"s-left-in-row")},singleMediaClass:function(e,t){return f+" "+(t%2?"s-right-in-row right":"s-left-in-row")},textClass:function(e,t){return d+" "+(t%2?"s-left-in-row right":"s-right-in-row")},singleTextClass:function(e,t){return p+" "+(t%2?"s-left-in-row right":"s-right-in-row")},textInnerClass:function(e,t){return t%2?m:h},buttonClass:n?"s-text-button":""})}}}function s(e){function t(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
return{left:r(e.mediaColumns,"left",t),right:r(e.mediaColumns,"right",t),alt:r(e.mediaColumns,"alt",t)}}return{text:t(),button:t(!0)}}function l(e,t){var n=e,i=n.getRepeatableBinding("repeatable1").sub(t),o=""
o=(0,g.getThemeFeature)("leftAlignColumnsMedia")?"text1":"text1 text2 text3"
var a=n.sbUniformTextAlignment(o,{parentBinding:i})
return"glow"===y?"s-mhi "+a+" fourteen columns offset-one":"s-mhi "+a}function u(e){return e<2?"s-mh":function(t){var n=t,i=n.getRepeatableBinding("repeatable1"),o=""
if((0,g.getThemeFeature)("leftAlign")){i.get().size<e&&(o=n.sbUniformTextAlignment("text1 text2"))}return"s-mh "+o}}function c(e){return{text:function(){return a(e)},button:function(){return a(h.default.extend({},e,{buttonClass:"s-text-button"}))}}}function d(e){return c({repeatableClass:u(e.columnsNum),itemClass:(0,g.generateItemClassByColumnsNum)(e.columnsNum),mediaClass:l})}function f(){return c({repeatableClass:u(1)+" s-layout-normal",innerItemClass:(0,g.generateItemClassByColumnsNum)(1).replace("no-float","")+("persona"===y?"":" center"),mediaClass:l})}Object.defineProperty(t,"__esModule",{value:!0})
var p,m=n(1),h=function(e){return e&&e.__esModule?e:{default:e}}(m),g=n(2425),v={repeatableClass:"",itemClass:"",innerItemClass:"",mediaClass:"",singleMediaClass:"",textClass:"",singleTextClass:"",textInnerClass:"",buttonClass:""},y=(0,g.getThemeName)(),b={two:d({columnsNum:2}),three:d({columnsNum:3}),four:d({columnsNum:4}),five:d({columnsNum:5}),six:d({columnsNum:6})},_={default:{col:b,row:{small:s({mediaColumns:4}),medium1:s({mediaColumns:6}),medium2:s({mediaColumns:8}),large:s({mediaColumns:10})},media:{center:f(),left:{text:r(11,"left"),button:r(11,"left",!0)},right:{text:r(11,"right"),button:r(11,"right",!0)},alt:{text:r(11,"alt"),button:r(11,"alt",!0)}}},persona:{col:b,row:{small:s({mediaColumns:3}),medium1:s({mediaColumns:4}),medium2:s({mediaColumns:6}),large:s({mediaColumns:8})},media:{center:f(),left:{text:r(9,"left"),button:r(9,"left",!0)},right:{text:r(9,"right"),button:r(9,"right",!0)},alt:{text:r(9,"alt"),button:r(9,"alt",!0)}}},perspective:function(){var e={col:{three:{text:function(){return a({itemClass:"s-persp-column third"})},button:function(){return a({itemClass:"s-persp-column third",buttonClass:"s-text-button s-persp-column"})}}},row:{large:{text:function(){return a({mediaClass:"s-persp-column half",textClass:"s-persp-column half"})},button:function(){return a({mediaClass:"s-persp-column half",textClass:"s-persp-column half",buttonClass:"s-text-button"})}}},media:{center:f()}}
return{center:e,mediaLeft:e,mediaRight:e}}()},w=(0,g.getLayoutMapping)(_),C={default:(p={"columns-2col":"col-two-text","columns-3col":"col-three-text","columns-4col":"col-four-text","columns-5col":"col-five-text","columns-6col":"col-six-text","columns-":"col-five-text","media-normal":"media-center-text","media-mediaLeft":"media-left-text","media-mediaRight":"media-right-text","media-alt":"media-alt-text","media-":"media-center-text"},i(p,"media-alt","media-alt-text"),i(p,"rows-mediaLeft","row-medium1-text-left"),i(p,"rows-mediaRight","row-medium1-text-right"),i(p,"rows-alt","row-medium1-text-alt"),i(p,"rows-","row-medium1-text-left"),p),perspective:{"columns-mediaLeft":"mediaLeft-col-three-text","columns-mediaRight":"mediaRight-col-three-text","columns-center":"center-col-three-text","columns-":"mediaLeft-col-three-text","rows-mediaLeft":"mediaLeft-row-large-text","rows-mediaRight":"mediaRight-row-large-text","rows-center":"center-row-large-text","rows-":"mediaLeft-row-large-text","media-mediaLeft":"mediaLeft-media-center-text","media-mediaRight":"mediaRight-media-center-text","media-center":"center-media-center-text","media-":"mediaLeft-media-center-text"}},k={default:{col:function(e){return"col-three-"+e},row:function(e){return"row-medium1-"+e+"-left"},media:function(e){return"media-center-"+e}},perspective:{col:function(e,t){return e+"-col-three-"+t},row:function(e,t){return e+"-row-large-"+t},media:function(e,t){return e+"-media-center-"+t}}}
t.default={getDefaultLayoutKey:function(e,t,n){var i=void 0
t=t||""
if((w[e]||w.default)[t])return t
n&&(i=(C[e]||C.default)[n+"-"+t])
if(!i){var o=-1!==t.indexOf("button")?"button":"text",a="perspective"===e?1:0,r=t.split("-"),s=(k[e]||k.default)[r[a]]
i="perspective"===e?s?s(r[0],o):"":s?s(o):""}i||(i=Object.keys(w[e]||w.default)[0])
return i},getLayout:function(e,t){return(w[e]||w.default)[t]||v||o},getLayoutOptions:function(e){return _[e]||_.default}}
e.exports=t.default},2882:function(e,t,n){"use strict"
function i(){return d}function o(e){return Object.assign({},d,e)}function a(e,t){return function(){var n="right"===e?"right":"",i="container s-rva s-layout-"+u.default.camelCase(t+"-"+e),a="noImage"!=e,r="",s="",l=""
if("noImage"===e)r="s-rva-text sixteen columns"
else{l="right"===e?"half-offset-left":"half-offset-right"
r="s-rva-text eight columns "+n
s="s-rva-media eight columns "+n}return o({layoutClass:i,textClass:r,textOffsetClass:l,mediaClass:s,type:t,showImage:a})}}function r(e){return{left:a("right",e),right:a("left",e),noImage:a("noImage",e)}}function s(e){return{left:{swap:function(){return o(Object.assign(r(e).left(),{type:e,swapTitle:!0}))},unswap:function(){return o(Object.assign(r(e).left(),{type:e,swapTitle:!1}))}},right:{swap:function(){return o(Object.assign(r(e).right(),{type:e,swapTitle:!0}))},unswap:function(){return o(Object.assign(r(e).right(),{type:e,swapTitle:!1}))}},noImage:{swap:function(){return o(Object.assign(r(e).noImage(),{type:e,showImage:!1,swapTitle:!0}))},unswap:function(){return o(Object.assign(r(e).noImage(),{type:e,showImage:!1,swapTitle:!1}))}}}}Object.defineProperty(t,"__esModule",{value:!0})
var l=n(1),u=function(e){return e&&e.__esModule?e:{default:e}}(l),c=n(2425),d={layoutClass:"",mediaClass:"",textClass:"",textOffsetClass:"",type:"",showImage:!0},f={button:{left:function(){return o({type:"button"})},right:function(){return o({type:"button"})},noImage:function(){return o({type:"button",showImage:!1})}},images:{left:function(){return o({type:"images"})},right:function(){return o({type:"images"})},noImage:function(){return o({type:"images",showImage:!1})}},signup:{left:function(){return o({type:"signup"})},right:function(){return o({type:"signup"})},noImage:function(){return o({type:"signup",showImage:!1})}}},p={button:s("button"),images:s("images"),signup:s("signup")},m={default:{button:r("button"),images:r("images"),signup:r("signup")},persona:f,perspective:f,glow:p},h=(0,c.getLayoutMapping)(m),g={default:{buttonRight:"button-left",signupRight:"signup-left",imagesRight:"images-left",buttonLeft:"button-right",signupLeft:"signup-right",imagesLeft:"images-right"}}
t.default={getDefaultLayoutKey:function(e,t,n){t=t||""
var i=(g[e]||g.default)[t];(h[e]||h.default)[t]&&(i=t)
if("glow"===e){i||(-1!==t.indexOf("button")?i="button-left-swap":-1!==t.indexOf("signup")?i="signup-left-swap":-1!==t.indexOf("images")&&(i="images-left-swap"))
i||"signup_form"!==n||(i="signup-noImage-swap")}else{i||(-1!==t.indexOf("button")?i="button-left":-1!==t.indexOf("signup")?i="signup-left":-1!==t.indexOf("images")&&(i="images-left"))
i||"signup_form"!==n||(i="signup-noImage")}i||(i=Object.keys(h[e]||h.default)[0])
return i},getLayout:function(e,t){return(h[e]||h.default)[t]||i},getLayoutOptions:function(e){return m[e]||m.default}}
e.exports=t.default},2883:function(e,t,n){"use strict";(function(i){function o(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),s=(Object.assign,n(0)),l=a(s),u=n(12),c=a(u),d=n(78),f=a(d),p=n(648),m=a(p),h=n(2426),g=a(h),v=n(36),y=a(v),b=n(6),_=a(b),w=n(1),C=a(w),k=n(24),N=a(k),x=n(13),E=a(x),S=n(8),P=(a(S),n(386)),T=a(P),O=n(42),L=o(O),M=n(966),I=a(M),B=n(70),D=o(B),A=n(72),j=a(A),H=n(58),R=a(H),U=n(634),F=a(U),V=n(965),z=a(V),W=n(636),$=a(W),G=n(2493),K=a(G),q=n(658),Y=a(q),J=n(1007),X=a(J),Q=n(969),Z=(a(Q),n(210)),ee=a(Z),te=n(2427),ne=n(1005),ie=(a(ne),n(37)),oe=a(ie),ae=n(161),re=a(ae),se={data:{url:$.default.url,textColor:c.default.oneOf(["dark","light","overlay"]),sizing:c.default.oneOf(["cover","contain","tile","center"]),backgroundVariation:c.default.string,videoUrl:c.default.string,videoHtml:c.default.string,stockKey:c.default.string,binding:c.default.object,h:c.default.number,w:c.default.number,s:c.default.number,storageKey:c.default.string,storage:c.default.oneOf(["ali","c","qn"]),format:c.default.oneOf(["jpg","jpeg","png","gif","bmp","ico"]),bgClassNames:c.default.array,userClassName:c.default.string},designer:{size:c.default.string,assetType:c.default.string,minimal:c.default.bool,allowColors:c.default.bool,footerSection:c.default.bool}},le=function(){return{data:{url:"",textColor:"light",sizing:"cover",backgroundVariation:"",videoUrl:"",videoHtml:"",userClassName:"",bgClassNames:[]},designer:{size:"background",assetType:"background",minimal:!1,allowColors:!0,footerSection:!1}}},ue=N.default.createPageComponent({displayName:"BackgroundEditor",mixins:[(0,R.default)("editor"),z.default,F.default],bobcatPropTypes:se,getBobcatDefaultProps:le,componentWillMount:function(){this.initMeta({currentType:E.default.getInChina()||!this._hasVideoBg()?"image":"video",showVideoPanel:!1})},componentDidMount:function(){this.getData("style")&&this.updateData({sizing:this.getData("style")})
if(this.getData("selectedClassName")){var e=this.getData("selectedClassName");-1!==e.indexOf("strikingly-dark-text")?this.updateData({textColor:"dark"}):-1!==e.indexOf("strikingly-text-overlay")?this.updateData({textColor:"overlay"}):this.updateData({textColor:"light"})}I.default.loadImageEditor()},componentDidUpdate:function(e){"normal"===e._state&&"editor"===this.props._state&&(0,_.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").addClass("background-editor-opened")
if("editor"===e._state&&"normal"===this.props._state){(0,_.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").removeClass("background-editor-opened")
this._setShowVideoPanel(!1)}},componentWillUnmount:function(){},_hasImage:function(){var e=D.createImage(this.dtProps).getUrl(this.dsProps.size)
this._dataBeforePreview&&(e=D.createImage(this._dataBeforePreview).getUrl(this.dsProps.size))
return L.imageHasContent(e)},_hasVideoBg:function(){var e=this.dtProps.videoHtml
this._dataBeforePreview&&(e=this._dataBeforePreview.videoHtml)
return Boolean(e)},_hasOverlay:function(){return"overlay"===this.dtProps.textColor},_needToShowRemoveButton:function(){return this._hasImage()||this._hasVideoBg()},_changePositionOfAddVideoPanel:function(){var e=(0,_.default)(this.refs.componentDOM),t=e.find(".bg-video-panel"),n=e.find(".add-video-btn")
t.css({top:n.closest(".clearfix").position().top-31+"px"})},_storePreviewData:function(){oe.default.isBackgroundPreviewOn=!0
this.updateMeta({isPreview:!0})
this._dataBeforePreview=this.getDefaultBinding().toJS()},_clearPreviewData:function(){oe.default.isBackgroundPreviewOn=!1
this.updateMeta({isPreview:!1})
this._dataBeforePreview&&(this._dataBeforePreview=null)},_restorePreviewData:function(){oe.default.isBackgroundPreviewOn=!1
this.updateMeta({isPreview:!1})
if(this._dataBeforePreview){this.updateData(j.default.deleteMeta(this._dataBeforePreview))
this._dataBeforePreview=null}},_getImageProps:function(){return C.default.extend({},this.props,{storePreviewData:this._storePreviewData,clearPreviewData:this._clearPreviewData,restorePreviewData:this._restorePreviewData,showImageOptions:this._hasImage()&&!this._hasVideoBg(),showDefaultColor:this._isAllowUserClassName()})},_isAllowUserClassName:function(){return!(!this.dtProps.bgClassNames.length||!this.dsProps.allowColors)},_getVideoProps:function(){return C.default.extend({},this.props,{storePreviewData:this._storePreviewData,clearPreviewData:this._clearPreviewData,restorePreviewData:this._restorePreviewData,hasVideo:this._hasVideoBg(),changePositionOfAddVideoPanel:this._changePositionOfAddVideoPanel})},_onChangeUrlByAdmin:function(e){this.updateData({url:e.target.value})},_onChangeOverlayByAdmin:function(e){this.updateData({textColor:e.target.checked?"light":"overlay"})
this.savePage()},_onClickSwitchType:function(e){this._setCurrentType(e)
this.forceUpdate()},_onClickRemove:function(){this.updateData((0,te.dataForEmptyBackground)())
this._clearPreviewData()
this.savePage()},_onClickSave:function(){this.savePage()
this.updateState("normal")},_notifyNative:function(){return null},_rotateClassNames:function(e){var t=this.dtProps,n=t.bgClassNames,i=t.userClassName,o=""
if(i){var a=n.indexOf(i)
o=T.default.getSectionBackgroundByIndex(a+1,n)}else o=n[e]
this.updateData({userClassName:o})},_onClickChangeColor:function(){var e=(0,_.default)(this.refs.componentDOM).closest(".s-section"),t=e.css("backgroundColor"),n=""
this._rotateClassNames(0)
n=e.css("backgroundColor")
t===n&&this._rotateClassNames(1)
this.savePage()},_onToggleCompression:function(){this.updateData({noCompression:!this.props.noCompression})},renderNativeWeb:function(){var e=this,t=this._hasImage(),n=t?{position:"static"}:{}
return l.default.createElement("div",{className:"s-component s-background",ref:"componentDOM",style:n},t?r("div",{className:"s-background-editor-wrapper",onClick:function(t){return e._notifyNative(t,ee.default.BACKGROUND_CLICK_MESSAGE)}}):r("div",{className:"s-component-editor"},void 0,r("div",{className:"native-add-background-button",onClick:function(t){return e._notifyNative(t,ee.default.CLICK_ADD_BACKGROUND_MESSAGE)}},void 0,i("Editor|Background"))))},renderMinimalEditor:function(){return l.default.createElement("div",{className:"s-component s-background",ref:"componentDOM"},r("div",{className:"s-component-editor minimal-size",title:i("Change background color"),onClick:this._onClickChangeColor},void 0,r("div",{className:"title clickable"},void 0,r("div",{className:"s-current-bg-thumbnail "+this.dtProps.userClassName}))))},renderFullBackgroundEditor:function(){var e=this,t=f.default,o=y.default.DOM.input,a=n(2913),s=n(2915),u=E.default.getInChina(),c=E.default.getIsSxl(),d=this._getCurrentType(),p=re.default.isAdmin(),h=re.default.isSupport(),v=this.isIframeEditing()
return l.default.createElement("div",{ref:"componentDOM",className:"s-component s-background"+this.addIframeEditingClass()},r("div",{className:"s-component-editor dark-bg",onClick:this.onToggleMobileViewEditorBox},void 0,r(g.default,{className:"title small center clickable"+(v?" hidden":""),onTap:this.toggleEditor},void 0,this.isState("editor")?r("div",{className:"minus"},void 0,r("i",{className:"entypo-down-open-mini"})):r("div",{className:"plus"},void 0,r("i",{className:"entypo-right-open-mini"})),i("Background")),r(t,{},void 0,this.isState("editor")?r(K.default,{component:m.default.div,className:"main-editor"},void 0,u||c?null:r("div",{className:"s-layout-menu-field"},void 0,r(Y.default,{labelLeft:i("IMAGE"),labelRight:i("VIDEO"),checkedLeft:"image"===d,checkedRight:"video"===d,onClickLeft:function(){return e._onClickSwitchType("image")},onClickRight:function(){return e._onClickSwitchType("video")}})),"image"===d?l.default.createElement(a,this._getImageProps()):l.default.createElement(s,this._getVideoProps()),this._needToShowRemoveButton()?r("div",{className:"clearfix mb"},void 0,r("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickRemove},void 0,i("Remove"))):null,r("div",{className:"clearfix"},void 0,r("div",{className:"s-btn green small done-button no-margin",onClick:this._onClickSave},void 0,i("Save"))),p||h?r("div",{style:{overflow:"hidden"}},void 0,r("div",{className:"separator"},void 0,r("hr",{})),"ADMIN ONLY:",r("br",{}),r(o,{type:"text",name:"url",value:this.dtProps.url,onChange:this._onChangeUrlByAdmin}),this._hasVideoBg()?r("div",{},void 0,r(o,{type:"checkbox",checked:!this._hasOverlay(),onChange:this._onChangeOverlayByAdmin}),"Check to remove overlay"):"image"===d&&r("div",{style:{marginTop:"30px"},rel:"tooltip-left",title:i("Editor|Notice: No compression will make image slower to load!")},void 0,r(X.default,{label:"No compression",checked:this.props.noCompression,onToggle:this._onToggleCompression}))):null):null)))},render:function(){var e=E.default.getBackgroundForAllSections()
return this.dsProps.minimal?e&&!this.dsProps.footerSection?this.renderFullBackgroundEditor():this._isAllowUserClassName()?this.renderMinimalEditor():null:this.renderFullBackgroundEditor()}})
ue.bobcatPropTypes=se
ue.getBobcatDefaultProps=le
t.default=ue
e.exports=t.default}).call(t,n(7))},2884:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),u=n(0),c=i(u),d=n(2),f=i(d),p=function(e){function t(){o(this,t)
return a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}r(t,e)
l(t,[{key:"render",value:function(){var e=this.props,t=e.keys,n=e.selectedKey,i=e.textMapping,o=e.className,a=e.onSelect,r=e.labelText
return s("div",{className:"s-layout-menu-field layout-level-button dark-bg "+(o||"")},void 0,r&&s("div",{className:"s-layout-menu-label"},void 0," ",r," "),s("div",{},void 0,t.map(function(e){return s("div",{className:(0,f.default)("s-btn small dark-gray no-margin",{selected:n===e}),onClick:function(){return a(e)}},e,i(e))})))}}])
return t}(c.default.Component)
t.default=p
e.exports=t.default},2885:function(e,t,n){"use strict"
function i(){return d}function o(e){return Object.assign({},d,e)}function a(){var e="columns half-fixed no-float small-icons"
"perspective"===f&&(e="s-persp-column half-fixed no-float small-icons")
return o({itemClass:e,naturalImage:!0})}function r(e){var t=e.get().size,n=(0,c.getThemeFeature)("narrowMedia"),i=""
i=t<=1?n?"third":"sixteen":2==t?n?"third":"eight":3==t?"third":4==t?"four":"three"
"persona"===f&&(i="three")
"ion"===f&&(i="four")
i+=" columns half-fixed no-float"
return o({itemClass:i,naturalImage:!1})}function s(e,t){var n=t.get().size,i="half";(3===n&&"center"===e||n>4)&&(i="third")
i+=" half-fixed s-persp-column"
return o({itemClass:i,naturalImage:!1})}Object.defineProperty(t,"__esModule",{value:!0})
var l=n(1),u=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(l),c=n(2425),d={itemClass:"columns half-fixed no-float",naturalImage:!0},f=(0,c.getThemeName)(),p={default:{col:r,natural:a},perspective:function(){var e=function(e){return{col:u.curry(s)(e)}}
return{center:e("center"),mediaLeft:e("left"),mediaRight:e("right")}}()},m=(0,c.getLayoutMapping)(p),h={perspective:{mediaLeft:"mediaLeft-col",mediaRight:"mediaRight-col",center:"center-col"}}
t.default={getDefaultLayoutKey:function(e,t,n){var i=void 0
t=t||""
if((m[e]||m.default)[t])return t
n&&(i=(h[e]||h.default)[n+"-"+t])
i||(i=Object.keys(m[e]||m.default)[0])
return i},getLayout:function(e,t){return(m[e]||m.default)[t]||d||i},getLayoutOptions:function(e){return p[e]||p.default}}
e.exports=t.default},2886:function(e,t,n){"use strict"
function i(){return c}function o(e){return Object.assign({},c,e)}function a(e){return{normal:e,full:e}}function r(e){return d[e]||d.default}Object.defineProperty(t,"__esModule",{value:!0})
var s=n(1),l=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(s),u=n(2425),c={outerContainerClass:"container",innerContainerClass:"sixteen columns",outerMediaClass:"",innerMediaClass:"",textClass:"",buttonClass:"",isSubtitleOnBottom:!0}
if("perspective"===(0,u.getThemeName)()){c.outerContainerClass="s-persp-container"
c.innerContainerClass="s-persp-column"}var d={default:{center:function(e){function t(e){return{innerMediaClass:"media-wrapper "+e.sbUniformTextAlignment("text1 text2"),buttonClass:"s-button-group "+e.sbUniformTextAlignment("text1 text2")}}return{subTop:a(function(n){return o(l.extend({},e,t(n),{isSubtitleOnBottom:!1}))}),bottom:a(function(n){return o(l.extend({},e,t(n),{}))}),right:a(function(n){return o(l.extend({},e,t(n),{outerMediaClass:"sixteen columns media-outer",textClass:"ten columns no-float",buttonClass:"six columns no-float s-button-group",outerContainerClass:"container s-layout-skinny",innerContainerClass:""}))})}}({})},perspective:{center:function(e){function t(e){return{innerMediaClass:"media-wrapper "+e.sbUniformTextAlignment("text1 text2"),outerContainerClass:"s-persp-container s-layout-center",buttonClass:"s-button-group "+e.sbUniformTextAlignment("text1 text2")}}return{subTop:a(function(n){return o(l.extend({},e,t(n),{isSubtitleOnBottom:!1}))}),bottom:a(function(n){return o(l.extend({},e,t(n),{}))})}}({})}},f=(0,u.getLayoutMapping)(d),p={default:{normal:"center-subTop-full",subBottom:"center-bottom-full",withMedia:"center-bottom-full",center:"center-bottom-normal",skinny:"center-right-normal",mediaTop:"center-bottom-normal"}},m={default:"center-subTop-normal"}
t.default={getDefaultLayoutKey:function(e,t){t=t||""
var n=(p[e]||p.default)[t];(f[e]||f.default)[t]&&(n=t)
n||(n=(0,u.getClosestKey)(r(e),t,3))
if(!n){t.indexOf("button")
n=m.default}return n},getLayout:function(e,t){return(f[e]||f.default)[t]||i},getLayoutOptions:r}
e.exports=t.default},2887:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=i(r),l=n(4),u=i(l),c=n(6),d=i(c),f=n(8),p=i(f),m=n(964),h=i(m),g=n(998),v=i(g),y=n(2489),b=i(y),_=n(2488),w=i(_),C=n(2880),k=i(C),N=n(2878),x=i(N),E={mixins:[x.default],displayName:"NewMediaSection",componentWillMount:function(){var e=p.default.getThemeName(),t=this._getLayoutVariation(),i=this.getDefaultBinding().get("template_name")
t.split("-").length>=2&&("perspective"===e?["mediaLeft","mediaRight","center"].includes(t.split("-")[0])||(t="center-"+t):["mediaLeft","mediaRight","center"].includes(t.split("-")[0])&&(t=t.split("-").slice(1).join("-")))
var o=n(2881),a="new_media"===i?"":i
this._getLayoutBinding().sub("layout_variation").set(o.getDefaultLayoutKey(e,t,a))},componentDidUpdate:function(){if(-1===this._getLayoutVariation().indexOf("col")){(0,d.default)(u.default.findDOMNode(this)).find(".s-mh-nudge").css({"padding-top":0});(0,d.default)(u.default.findDOMNode(this)).find(".s-item-media-wrapper").css({"line-height":"","min-height":""})}},_getLayoutOptions:function(){var e=p.default.getThemeName()
return n(2881).getLayoutOptions(e)},_getSectionType:function(){var e=p.default.getThemeName(),t=0
"perspective"===e&&(t=1)
var n=void 0
switch(this._getLayoutVariation().split("-")[t]){case"col":n="s-columns-section"
break
case"row":n="s-rows-section"
break
case"media":n="s-media-section"}return n},_getContentAlignmentClass:function(){return this.sbUniformTextAlignment("text1 text2")},_renderRepeatable:function(e){var t=this,i=n(2881),r=p.default.getThemeName(),l=this._getLayoutVariation(),u=this.getComponentBinding(e),c=this.getRepeatableBinding(e),d=this._getLayoutBinding(),f=void 0
"function"==typeof i.getLayout(r,l)&&(f=i.getLayout(r,l)(this))
var m=f,g=m.repeatableClass
"function"==typeof g&&(g=g(this))
var y=this.getComponentProps("repeatable1")
r=p.default.getThemeName()
var _=0
"perspective"===r&&(_=1)
var C="media"===this._getLayoutVariation().split("-")[_],N="fresh"===r&&"s-columns-section"===this._getSectionType(),x="s-rows-section"===this._getSectionType(),E=x&&this.getThemeFeature("verticalAlignRowsSection")
return s.default.createElement(b.default,o({className:g+("editor"===u.get("_state")?" s-arranging":"")},y),u.get("list").map(function(e,n){var i=c.sub(n),l={default:i,layout:d},u=t.sbHasContent("media1",{parentBinding:i}),p=t.sbAnyHasContent("text1 text2 text3",{parentBinding:i}),m=t.sbHasContent("button1",{parentBinding:i}),g="editor"!==t.getComponentBinding("button1",i).get("_state")&&!t.sbHasContent("button1",{parentBinding:i,showOnly:!1}),y=p||m&&f.buttonClass,b=f,_=b.itemClass,x=b.textClass,S=b.innerItemClass,P=b.mediaClass,T=b.singleMediaClass,O=b.singleTextClass,L=b.buttonClass,M=b.textInnerClass
"function"==typeof _&&(_=_(t,n))
"function"==typeof S&&(S=S(t,n))
S+=E?" s-rva":""
"function"==typeof P&&(P=P(t,n))
"function"==typeof T&&(T=T(t,n))
T=T||P
"function"==typeof x&&(x=x(t,n))
"function"==typeof O&&(O=O(t,n))
O=O||x
"function"==typeof L&&(L=L(t,n))
"function"==typeof M&&(M=M(t,n))
var I="s-item-media-wrapper "
I+=y?P:T
I+=E?" s-rva-media":""
x=u?x:O
x+=E?" s-rva-text":""
"glow"===r&&(x=x||"fourteen columns offset-one")
return s.default.createElement(w.default,o({className:_,index:n,binding:l},t._getRepeatableItemProps(c,n)),a("div",{className:"clearfix"},void 0,a("div",{className:S},void 0,u&&a("div",{className:I},void 0,a("div",{className:"s-item-media-group"},void 0,s.default.createElement(h.default,o({size:C?"large":"medium",isFreshColumn:N},t.getReduxComponentProps("media1",i))))),y&&a("div",{className:x},void 0,a(k.default,{deprecateItemSubtitle:C,section:t,itemBinding:i,binding:i,className:u?M:""},void 0,L&&m&&a("div",{className:L+(g?" s-placeholder-button":"")},void 0,s.default.createElement(v.default,o({},t.getComponentProps("button1",i),{smallButton:!0}))))))))}).toArray())},render:function(){return this.getTemplate().apply(this)}}
t.default=E
e.exports=t.default},2888:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(1),o=(function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e}(i),n(2425)),a={itemClass:"columns half-fixed no-float"},r={default:["four","four","four","four","fifth","third","four","four","fifth"],persona:["three","three","three","three","four","four","three","three","four"]},s=(0,o.getThemeName)(),l=function(){return a},u=function(e){return Object.assign({},a,e)},c=function(e,t){var n=e
r[n]||(n="default")
var i=t-1
r[n][i]||(i=r[n].length-1)
return r[n][i]},d=function(e){return e.get().size},f=function(e){var t=d(e),n=[]
n.push(c(s,t))
"persona"===s?5==t||6==t||9==t?n.push("hide-linker-three"):n.push("hide-linker-four"):6==t?n.push("hide-linker-three"):7==t||8==t?n.push("hide-linker-four"):n.push("hide-linker-five")
n.push("columns")
n.push("no-float")
n.push("process-horizontal-layout")
return u({itemClass:n.join(" ")})},p=function(){var e=["eight"]
"perspective"===s?e.push("s-persp-column"):e.push("columns")
e.push("no-float")
e.push("process-vertical-layout")
return u({itemClass:e.join(" ")})},m={default:{horizontal:f,vertical:p}},h=(0,o.getLayoutMapping)(m),g={getDefaultLayoutKey:function(e,t){var n=Object.keys(h[e]||h.default)
return n.includes(t)?t:n[0]},getLayout:function(e,t){return(h[e]||h.default)[t]||a||l},getLayoutOptions:function(e){return m[e]||m.default},getItemSize:d}
t.default=g
e.exports=t.default},2889:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=(o(r),n(12)),l=o(s),u={},c=n(4),d=n(2426),f=n(24),p=n(216),m=n(1),h=n(27),g=n(631)
u=f.createPageComponent({displayName:"LayoutSelector",mixins:[g.enableAfterMount()],bobcatPropTypes:{data:{layoutOptions:l.default.array,layoutVariation:l.default.string,binding:l.default.object.isRequired}},getBobcatDefaultProps:function(){return{layoutOptions:[],layoutVariation:null}},componentDidMount:function(){this.props.layoutOptions.length||console.warn("Section has no layout options defined!")},componentDidUpdate:function(e){e.layoutVariation!==this.props.layoutVariation&&window.edit_page.Event.publish("Layout.afterChange",{target:$(c.findDOMNode(this))})},_updateLayout:function(e){return this.updateData({layout_variation:e})},_getLayoutKeys:function(){return m.pluck(this.props.layoutOptions,"key")},_getLayoutIndex:function(){var e=this._getLayoutKeys(),t=this.props.layoutVariation,n=e.indexOf(t)
return t&&-1!==n?n:null},_clickLayout:function(){var e=this._getLayoutKeys(),t=this._getLayoutIndex()
null==t&&(t=0)
this._updateLayout(e[(t+1)%e.length])
p.track("Change Layout - Editor v2")
h.clickLayout()
h.save()},_layoutStatus:function(){return null!=this._getLayoutIndex()?"ABCDEFGHI"[this._getLayoutIndex()]:"A"},render:function(){return this.props.layoutOptions.length?a("div",{className:"s-component s-layout"},void 0,a("div",{className:"s-component-editor"},void 0,a(d,{className:"center clickable small title",onTap:this._clickLayout,rel:"tooltip-left",title:i("Editor|Switch layout for this section.")},void 0,a("span",{},void 0,i("Layout"),this._layoutStatus()?a("span",{className:"layout-status"},void 0,this._layoutStatus()):void 0)))):null}})
t.default=u
e.exports=t.default}).call(t,n(7))},2890:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(2933),n(2875)),s=(n(2877),n(2876))
e.exports=function(){return o.createElement(s,i({className:"s-new-media-section s-section "+this._getSectionType()+"  "+this._getContentAlignmentClass()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(r,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding()})),"\n    ",this._renderRepeatable("repeatable1"),"\n  "))}},2891:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),s=n(0),l=o(s),u=n(1),c=o(u),d=n(12),f=o(d),p=n(2875),m=o(p),h=n(384),g=o(h),v=n(964),y=o(v),b=n(998),_=o(b),w=n(967),C=o(w),k=n(8),N=o(k),x=n(2878),E=o(x),S={mixins:[E.default],displayName:"NewHeroSection",propTypes:{eagerLoad:f.default.bool.isRequired,binding:f.default.object.isRequired},componentWillMount:function(){var e=N.default.getThemeName(),t=this._getLayoutVariation(),i=this.getDefaultBinding().get("template_name"),o=n(2882)
this._getLayoutBinding().sub("layout_variation").set(o.getDefaultLayoutKey(e,t,i))},_getLayoutOptions:function(){var e=N.default.getThemeName()
return n(2882).getLayoutOptions(e)},_getSectionType:function(){return this._showImage()?"s-hero-section":"s-signup-section"},_getLayout:function(){return c.default.camelCase(this._getLayoutVariation())},_getLayoutObj:function(){var e=n(2882),t=this._getLayoutVariation(),i=N.default.getThemeName(),o=void 0
"function"==typeof e.getLayout(i,t)&&(o=e.getLayout(i,t)(this))
return o},_getType:function(){return this._getLayoutObj().type},_showImage:function(){return this._getLayoutObj().showImage},_renderContent:function(){var e=this._getLayoutObj(),t=e.layoutClass,n=e.mediaClass,i=e.textClass,o=e.textOffsetClass,s=e.type,u=e.showImage,c=e.swapTitle,d="button"===s&&this.sbHasContent("button1"),f="button"===s&&this.sbHasContent("button1",{showOnly:!1}),p="images"===s&&this.sbAnyHasContent("image1 image2"),h=this.sbAnyHasContent("media1"),v=N.default.getThemeName()
return r("div",{className:t},void 0,r("div",{className:n+(h?"":" empty-media")},void 0,u&&l.default.createElement(y.default,this.getReduxComponentProps("media1"))),r("div",{className:i},void 0,r("div",{className:o},void 0,"glow"===v&&r(m.default,{section:this,binding:this.getDefaultBinding(),subtitleOnTop:c}),"glow"!==v&&r(m.default,{section:this,binding:this.getDefaultBinding()}),(d||p||"signup"===s)&&r("div",{className:(f?"":"empty-button")+" "+this.sbUniformTextAlignment("text1 text2",{parentBinding:this.getDefaultBinding()})},void 0,"button"===s&&r("div",{className:"s-button-group ib"},void 0,l.default.createElement(_.default,this.getComponentProps("button1"))),"signup"===s&&r("div",{className:"s-email-form-container"},void 0,l.default.createElement(C.default,a({signup:!0},this.getComponentProps("email1")))),"images"===s&&r("div",{className:"s-image-wrapper"},void 0,r("div",{className:"s-image-item"},void 0,l.default.createElement(g.default,a({},this.getReduxComponentProps("image1"),{eagerLoad:!0}))),r("div",{className:"s-image-item"},void 0,l.default.createElement(g.default,a({},this.getReduxComponentProps("image2"),{eagerLoad:!0}))))))))},render:function(){i("Editor|Hero")
i("Editor|Great for the top of a page. Add images, a button, or even a sign-up form.")
return this.getTemplate().apply(this)}}
t.default=S
e.exports=t.default}).call(t,n(7))},2892:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=i(r),l=n(8),u=i(l),c=n(2489),d=i(c),f=n(2488),p=i(f),m=n(2880),h=i(m),g=n(998),v=i(g),y=n(382),b=i(y),_=n(2878),w=i(_),C={mixins:[w.default],displayName:"NewTextSection",componentWillMount:function(){n(2425).removeOldBackgroundForText(this)
var e=u.default.getThemeName(),t=n(2491)
this._getLayoutBinding().sub("layout_variation").set(t.getDefaultLayoutKey(e,this._getLayoutVariation()))},_getLayoutOptions:function(){var e=u.default.getThemeName()
return n(2491).getLayoutOptions(e)},_getPositionLayout:function(){return this._getLayoutVariation().split("-")[1]},_getTitleOverlayClass:function(){var e=this._getLayoutVariation()
return this.sbAnyHasContent("text1 text2",{showOnly:!1})?-1!==e.indexOf("overlay")?"s-persp-overlay":-1!==e.indexOf("card")?"s-persp-card":void 0:""},_getSectionType:function(){u.default.getThemeName()
switch(this._getLayoutVariation().split("-")[0]){case"text":return"s-text-section"
case"box":return"s-info-section"}},_renderPerspectiveText:function(e){var t=this,n=this.getComponentBinding("repeatable1"),i=this._getLayoutBinding(),r=this.getRepeatableBinding("repeatable1"),l=r.get().size,u=function(n,l){if(l>=3)return null
var u=r.sub(l),c=e.itemClass,d=e.textClass
"function"==typeof c&&(c=c(t,l))
"function"==typeof d&&(d=d(t,l))
return s.default.createElement(p.default,o({className:c,binding:{default:u,layout:i},index:l},t._getRepeatableItemProps(r,l)),a("div",{className:"s-persp-column"},void 0,a("div",{className:d},void 0,a("div",{className:"s-title-group"},void 0,t.sbHasContent("text1",{parentBinding:u})&&a("div",{className:"s-title"},void 0,s.default.createElement(b.default,o({tagName:"h2",textType:"title"},t.getComponentProps("text1",u)))),a("div",{className:"s-item-text"},void 0,s.default.createElement(b.default,o({tagName:"div",textType:"body"},t.getComponentProps("text2",u))))))))},c=this.getComponentProps("repeatable1")
return s.default.createElement(d.default,o({className:(l>=3?"s-hide-add-button":"")+("editor"===n.get("_state")?" s-arranging":"")},c),n.get("list").map(u.bind(this)).toArray())},_renderRepeatable:function(e){var t=this,i=n(2491),r=u.default.getThemeName(),l=this.getComponentBinding(e),c=this._getLayoutBinding(),f=this.getRepeatableBinding(e),m=void 0
"function"==typeof i.getLayout(r,this._getLayoutVariation())&&(m=i.getLayout(r,this._getLayoutVariation())(this))
var g=m,y=g.repeatableClass
if("s-text-section"===this._getSectionType()&&"perspective"===r)return this._renderPerspectiveText(m)
var b=function(e,n){var i=f.sub(n),r={default:i,layout:c},l=m,u=l.itemClass,d=l.textClass,g=l.buttonClass
"function"==typeof u&&(u=u(t,n))
"function"==typeof d&&(d=d(t,n))
"function"==typeof g&&(g=g(t,n))
var y=t.sbHasContent("button1",{parentBinding:i}),b="editor"!==t.getComponentBinding("button1",i).get("_state")&&!t.sbHasContent("button1",{parentBinding:i,showOnly:!1})
return s.default.createElement(p.default,o({index:n,className:u,binding:r},t._getRepeatableItemProps(f,n)),a("div",{className:d},void 0,a(h.default,{section:t,itemBinding:i,binding:i,showItemSubtitle:!1},void 0,g&&y&&a("div",{className:g+(b?" s-placeholder-button":"")},void 0,s.default.createElement(v.default,o({},t.getComponentProps("button1",i),{smallButton:!0}))))))},_=this.getComponentProps("repeatable1")
return s.default.createElement(d.default,o({className:y+("editor"===l.get("_state")?" s-arranging":"")},_),f.get().map(b.bind(this)).toArray())},render:function(){return this.getTemplate().apply(this)}}
t.default=C
e.exports=t.default},2893:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=(function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103}(),n(0)),r=i(a),s=n(12),l=i(s),u=n(6),c=i(u),d=n(1),f=i(d),p=n(24),m=i(p),h=n(216),g=i(h),v=n(968),y=i(v),b=n(289),_=i(b),w=n(210),C=i(w),k=n(969),N=i(k),x=n(1006),E=i(x),S=n(292),P=i(S),T=n(2894),O=i(T),L=n(70),M=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(L),I=n(2428),B=i(I),D=n(388),A=i(D),j=n(37),H=(i(j),n(72)),R=i(H),U=n(8),F=i(U),V=n(58),z=i(V),W=n(2922),$=i(W),G=void 0,K=function(){return f.default.extend({type:"Video"},P.default.Video().toJS())},q=function(){return f.default.extend({type:"Image"},P.default.Image().toJS())},Y=m.default.createPageComponent({displayName:"GalleryList",mixins:[(0,z.default)("editor")],bobcatPropTypes:{data:{binding:l.default.object,sources:l.default.object},designer:{layout:l.default.string,sortableContainment:l.default.string,eagerLoad:l.default.bool}},getBobcatDefaultProps:function(){return{designer:{sortableContainment:"parent"},data:{layout:"normal"},internal:{isArranging:!1}}},componentWillMount:function(){this.initMeta({selectedKey:""})
this._columnsNum=1
var e=_.default.get("forceGalleryItemsNumPerPage")
this._baseItemNum=null!=e?e:50
this._pagesNum=1
this._lastPagesNum=this._pagesNum
this._lastBaseItemNum=this._baseItemNum
this._resizeFn=f.default.debounce(this._resizeFn,10)},componentDidMount:function(){this._enableFancyBox()
if(-1===this.props.layout.indexOf("vertical")){this._resizeFn();(0,c.default)(window).on("resize",this._resizeFn)}},componentDidUpdate:function(){if(this._lastPagesNum!==this._pagesNum||this._lastBaseItemNum!==this._baseItemNum){this._enableFancyBox()
this._lastPagesNum=this._pagesNum
this._lastBaseItemNum=this._baseItemNum}},componentWillUnmount:function(){(0,c.default)(window).off("resize",this._resizeFn)},nativeAddImage:function(e){return this._addImage(M.createImage(e.image),e.newItemDirection)},_onNativeClickManage:function(){var e=this.getData("isManagingFromNative")||!1
return this.setData("isManagingFromNative",!e)},_isGalleryEmpty:function(){return 0===this.getData("sources").size},_updateLayoutMeta:function(){var e=(0,c.default)(this.refs.galleryListDOM),t=Math.min(6,Math.max(2,Math.floor(e.width()/180))),n=this._columnsNum,i={2:20,3:30,4:40,5:50,6:60}
if(t!==n){this._columnsNum=t
var o=_.default.get("forceGalleryItemsNumPerPage")
this._baseItemNum=null!=o?o:i[this._columnsNum]}return t!==n},_resizeFn:function(){this._updateLayoutMeta()&&this.forceUpdate()},_needToShowPagination:function(){return this.getData("sources").size>this._pagesNum*this._baseItemNum||1!==this._pagesNum},_onSelectItem:function(e){this.updateMeta(e,"selectedKey")},_onDeleteItem:function(e){return null!=this._visualDelete?this._visualDelete(e):this._deleteItem(e)},_isInNativeWeb:function(){return!1},_onClickNativeAddImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom",t=n(50)
N.default.setTarget(this)
return N.default.sendMessageToNative({type:C.default.GALLERY_ADD_IMAGE_MESSAGE,payload:E.default.convertToCamel(this.dtProps.type,t.dtPropsBuilder(this)),meta:Object.assign(t.buildMetaFromComponent(this),{direction:e})})},_getGalleryItemProps:function(e){var t=e.get("id"),n=this.getMeta("selectedKey")
return{binding:{default:e},_isAddInIframe:e.get("_isAddInIframe"),path:e._path,dataProps:P.default[e.get("type")](e.get()),onSelectItem:this._onSelectItem,deleteItem:this._onDeleteItem,key:t,selected:t===n,layout:this.props.layout,eagerLoad:this.props.eagerLoad,sideMenuOpened:y.default.getSideMenuOpenState().opened}},_getGalleryClassName:function(){var e=[];-1!==this.props.layout.indexOf("fullWidth")&&e.push("full-width")
Math.min(this._pagesNum*this._baseItemNum,this.getData("sources").size)
e.push("s-gallery-columns-"+this._columnsNum)
return e.join(" ")},_deleteItem:function(e){R.default.deleteRepeatItem({binding:this.getDefaultBinding().sub("sources"),index:e})
this.savePage()},_onReorder:function(e){var t=this.getDefaultBinding().sub("sources")
R.default.reorderRepeatable(e,t)
this.savePage()},_getNewImageProps:function(e){return e.dataToSave()},_addVideo:function(){var e=this.getData("sources"),t=K()
e=R.default.addRepeatItem({binding:this.getDefaultBinding().sub("sources"),newItem:t})
this.savePage()
return e.last().toJS()},_addImage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bottom",n=(this.getData("sources"),q())
f.default.extend(n,e.dataToSave())
R.default.addRepeatItem({binding:this.getDefaultBinding().sub("sources"),newItem:n,position:"top"===t?0:null})
this.savePage()
g.default.track("Editor - Upload Image Gallery")},_onClickAddImage:function(){var e=this
this.updateMeta("","selectedKey")
this._pendingTimestamp=null
return G.pick({mode:"multi",initialTabIdx:0,hideTabs:[2],handlers:{itemUploaded:function(t){return e._addImage(t)},itemSelected:function(t){return Array.from(t).map(function(t){return e._addImage(t)})}},pendingTimestamp:this._pendingTimestamp})},_onClickAddVideo:function(){var e=this._addVideo()
this.updateMeta(e.id,"selectedKey")},_onClickShowMore:function(){this._pagesNum+=1
this.forceUpdate()},_onClickShowLess:function(){this._pagesNum=1
this.forceUpdate();(0,c.default)("body").animate({scrollTop:(0,c.default)(this.refs.galleryListDOM).closest(".s-gallery-section").offset().top},1e3)
if("perspective"===F.default.getTheme().get("name"))return(0,c.default)(window).resize()},_enableFancyBox:function(){var e=this
return n.e(0).then(function(){n(650)
if(!e.isEditMode()){var t=A.default.GALLERY((0,c.default)(e.refs.galleryListDOM))
B.default.transformVideoSrc((0,c.default)(e.refs.galleryListDOM))
return t.fancybox(Object.assign({},B.default.onlyCloseBtnOpts,{baseTpl:B.default.getCustomArrowTpl(),caption:B.default.getCaption,beforeMove:B.default.indicatorBeforeMove,onInit:B.default.indicatorOnInit}))}}.bind(null,n)).catch(n.oe)},_renderForEditor:function(){},_renderForShow:function(){var e=this,t=this._baseItemNum*this._pagesNum,n=this.getDefaultBinding().sub("sources")
return n.get().map(function(i,a){if(a<t){n.sub(a)
return r.default.createElement(O.default,o({index:a},e._getGalleryItemProps(n.sub(a)),{key:i.get("id")}))}})},render:function(){return $.default.apply(this)}})
t.default=Y
e.exports=t.default},2894:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i
if("object"===("undefined"==typeof Reflect?"undefined":s(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i)
else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r)
return a>3&&r&&Object.defineProperty(t,n,r),r}
Object.defineProperty(t,"__esModule",{value:!0})
var u=n(0),c=n(12),d=n(4),f=n(1),p=n(6),m=n(61),h=n(103),g=n(634),v=n(70),y=(n(35),n(78)),b=n(81),_=(n(1006),n(1005),n(210),n(221)),w=n(657),C=n(656),k=(n(391),{designer:{type:c.string,selected:c.bool,isArranging:c.bool,index:c.number,showType:c.string,layout:c.string,eagerLoad:c.bool,sideMenuOpened:c.bool,_isAddInIframe:c.bool},callbacks:{updateItemHeight:c.func,onSelectItem:c.func.isRequired,deleteItem:c.func.isRequired}}),N=function(e){function t(e){i(this,t)
var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n._afterClickCancel=function(){n._isEmptyItem()&&n._onClickDeleteButton(n.props.index)}
n._deselect=function(){n._isEmptyItem()?n._onClickDeleteButton(n.props.index):n.updateState("normal")}
n._isEmptyItem=function(){switch(n.getData("type")){case"Image":return f.isEmpty(n.getData("url"))
case"Video":return f.isEmpty(n.getData("url"))||""===n.getData("html")
default:return!1}}
n._onImageLoaded=function(e){var t=e.h&&e.w?e.h/e.w:0
if("Image"===n.getData("type")&&"verticalGallery"!==n.props.showType){var i=p(d.findDOMNode(n.refs.imageContent)),o=i.find("img"),a=void 0
if(t<1){a=100/t
o.css({position:"absolute",width:a+"%",top:0,left:-(a-100)/2+"%"})}else if(t>1){newHeight=100*t
o.css({position:"absolute",width:"100%",top:-(newHeight-100)/2+"%",left:0})}}}
n._getPureDataProps=function(){var e=n.props,t=e.dataProps,i=e.updateItemHeight,o=e.eagerLoad
return{dataProps:t,path:e.path,updateItemHeight:i,onImageLoaded:n._onImageLoaded,eagerLoad:o}}
n._getImageProps=function(){return Object.assign({afterUploaded:n._deselect,afterSelected:n._deselect,afterRemove:function(){return n._onClickDeleteButton(n.props.index)},afterSave:function(){n._deselect()
n.savePage()}},n._getPureDataProps())}
n._getVideoProps=function(){return Object.assign({afterRemove:function(){return n._onClickDeleteButton(n.props.index)},beforeUpload:function(){return n.setState({isLoading:!0})},uploadFailed:function(){return n.setState({isLoading:!1})},uploadSucceed:function(){n.setState({isLoading:!1})
n.setTimeout(function(){n._deselect()
n.savePage()},100)}},n._getPureDataProps())}
n._getThumbSize=function(){var e=n.props.layout
return-1!==e.indexOf("fullWidth")?"300x300#":-1!==e.indexOf("vertical")?"250x1000>":"200x200#"}
n._getDOMData=function(){var e={"data-type":n.getData("type").toLowerCase()}
switch(n.getData("type")){case"Image":e=Object.assign({href:v.createImage(n.getData()).getUrl("1920x9000>")},e)
case"Video":e=Object.assign({"data-html":n.getData("html"),"data-description":n.getData("description")},e)}return e}
n._getSaveButtonProps=function(){return{onClickCancel:function(){n.onClickCancel()
n._afterClickCancel()},onClickSave:function(){n.setState({saveClicked:!0})}}}
n._restoreSaveClickedState=function(){n.setState({saveClicked:!1})}
n._getSaveButtonClickedProps=function(){return{saveClicked:n.state.saveClicked,restoreSaveClickedState:n._restoreSaveClickedState,fromType:"gallery"}}
n._onMouseEnterDeleteButton=function(){n.setState({showDeleteOverlay:!0})}
n._onMouseLeaveDeleteButton=function(){n.setState({showDeleteOverlay:!1})}
n._onClickDeleteButton=function(e){n.props.deleteItem(e)}
n.nativeDeleteButton=function(e){n._onClickDeleteButton(e.index)}
n._onClickEditItem=function(){if(!n.state.showDeleteOverlay){n.props.onSelectItem(n.getData("id"))
n.onClickEditor()}}
n._adjustEditorPosition=function(){if("verticalGallery"!==n.props.showType){var e=p(n.refs.itemEditor).find(".s-component-editor")
if(e.length){var t=n.props.sideMenuOpened?200:0,i=p(window).width()-e.width(),o=e.offset().left
o<t&&e.css("left","0")
o>i&&e.css({marginLeft:i-o+"px"})}}}
n.state={showDeleteOverlay:!1,isLoading:!1,saveClicked:!1}
return n}a(t,e)
r(t,[{key:"componentWillMount",value:function(){this.props.selected&&this.updateState("editor")}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){e.selected&&!this.props.selected&&this.isState("editor")&&this._deselect()}},{key:"_renderEditor",value:function(){return null}},{key:"render",value:function(){var e=this.isState("editor"),t=this.props,n=t.showType,i=t.style,o=t.index,a=this.getData("type")
return u.createElement("div",{style:i,className:"s-component s-gallery-item "+("verticalGallery"===n?"vertical-item":""),"data-sorting-index":o},!1,u.createElement(y,null,!e&&u.createElement(b,{className:"s-component-content",key:this.getData("id")+"content"},u.createElement("div",{className:"image-wrapper"},u.createElement("a",Object.assign({className:"item"},this._getDOMData()),"Image"===a?u.createElement(w.default,Object.assign({ref:"imageContent",showType:n||"galleryItem",thumbSize:this._getThumbSize()},this._getPureDataProps())):u.createElement(C.default.WaypointLazy,Object.assign({ref:"videoContent",showType:n||"galleryItem"},this._getPureDataProps())))))))}}])
return t}(_.default)
N.displayName="GalleryItem"
N.originalProps=k
N=l([m.decorate(g),m.decorate(h)],N)
t.default=N},2895:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=i(r),l=n(15),u=i(l),c=n(8),d=i(c),f=n(998),p=i(f),m=n(964),h=i(m),g=n(2875),v=i(g),y=n(2878),b=i(y),_={mixins:[b.default],displayName:"NewTitleSection",componentWillMount:function(){var e=d.default.getThemeName();["normal","subBottom","center","skinny"].includes(this._getLayoutVariation())&&"perspective"!==e&&this.getComponentBinding("media1").sub("image").merge(u.default.fromJS({url:"",thumbnail_url:"",s:null,storage:null,storageKey:null,format:null}))
var t=n(2886)
this._getLayoutBinding().sub("layout_variation").set(t.getDefaultLayoutKey(e,this._getLayoutVariation()))},_getLayoutOptions:function(){var e=d.default.getThemeName()
return n(2886).getLayoutOptions(e)},_getSectionType:function(){var e=d.default.getThemeName(),t="";-1!==this._getLayoutVariation().indexOf("full")&&(t+="s-section-full ")
"persona"===e&&(t+="cta"===this.getDefaultBinding().get("template_name")?"s-cta-section":"s-title-section")
return t},_renderContent:function(){var e=d.default.getThemeName(),t=n(2886),i=void 0
"function"==typeof t.getLayout(e,this._getLayoutVariation())&&(i=t.getLayout(e,this._getLayoutVariation())(this))
var r=i,l=r.outerContainerClass,u=r.innerContainerClass,c=r.outerMediaClass,f=r.innerMediaClass,m=r.textClass,g=r.buttonClass,y=r.isSubtitleOnBottom,b=this.sbHasContent("button1"),_=(this.sbHasContent("button1",{showOnly:!1}),this.sbHasContent("media1")),w="editor"!==this.getComponentBinding("button1").get("_state")&&!this.sbHasContent("button1",{showOnly:!1}),C="editor"!==this.getComponentBinding("media1").get("_state")&&!this.sbHasContent("media1",{showOnly:!1})
return a("div",{className:l},void 0,a("div",{className:u},void 0,_&&c&&a("div",{className:c},void 0,a("div",{className:f},void 0,s.default.createElement(h.default,o({},this.getReduxComponentProps("media1"),{showBlackButton:!0})))),_&&!c&&a("div",{className:f+(C?" s-placeholder-button":"")},void 0,s.default.createElement(h.default,o({},this.getReduxComponentProps("media1"),{showBlackButton:!0}))),a(v.default,{className:m,contentCheck:"button1",subtitleOnTop:!y,section:this,binding:this.getDefaultBinding()}),b&&a("div",{className:g+(w?" s-placeholder-button":"")},void 0,s.default.createElement(p.default,this.getComponentProps("button1")))))},render:function(){return this.getTemplate().apply(this)}}
t.default=_
e.exports=t.default},2896:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),u=n(0),c=i(u),d=n(4),f=i(d),p=n(2),m=i(p),h="Select...",g=function(e){function t(e){a(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.state={selected:e.value||{label:e.placeholder||h,value:""},isOpen:!1}
n.mounted=!0
n.handleDocumentClick=n.handleDocumentClick.bind(n)
n.fireChangeEvent=n.fireChangeEvent.bind(n)
return n}s(t,e)
l(t,[{key:"componentWillReceiveProps",value:function(e){e.value&&e.value!==this.state.selected?this.setState({selected:e.value}):e.value||this.setState({selected:{label:e.placeholder||h,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1)
document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1
document.removeEventListener("click",this.handleDocumentClick,!1)
document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){if("mousedown"!==e.type||0===e.button){e.stopPropagation()
e.preventDefault()
this.props.disabled||this.setState({isOpen:!this.state.isOpen})}}},{key:"setValue",value:function(e,t){var n={selected:{value:e,label:t},isOpen:!1}
this.fireChangeEvent(n)
this.setState(n)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var t,n=(0,m.default)((t={},o(t,this.props.baseClassName+"-option",!0),o(t,"is-selected",e===this.state.selected),t)),i=e.value||e.label||e,a=e.label||e.value||e
return c.default.createElement("div",{key:i,className:n,onMouseDown:this.setValue.bind(this,i,a),onClick:this.setValue.bind(this,i,a)},a)}},{key:"buildMenu",value:function(){var e=this,t=this.props,n=t.options,i=t.baseClassName,o=n.map(function(t){if("group"===t.type){var n=c.default.createElement("div",{className:i+"-title"},t.name),o=t.items.map(function(t){return e.renderOption(t)})
return c.default.createElement("div",{className:i+"-group",key:t.name},n,o)}return e.renderOption(t)})
return o.length?o:c.default.createElement("div",{className:i+"-noresults"},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(f.default.findDOMNode(this).contains(e.target)||this.setState({isOpen:!1}))}},{key:"render",value:function(){var e,t=this.props.baseClassName,n=this.props.disabled?"Dropdown-disabled":"",i="string"==typeof this.state.selected?this.state.selected:this.state.selected.label,a=c.default.createElement("div",{className:t+"-placeholder"},i),r=this.state.isOpen?c.default.createElement("div",{className:t+"-menu"},this.buildMenu()):null,s=(0,m.default)((e={},o(e,t+"-root",!0),o(e,"is-open",this.state.isOpen),e))
return c.default.createElement("div",{className:s},c.default.createElement("div",{className:t+"-control "+n,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this)},a,c.default.createElement("span",{className:t+"-arrow"})),r)}}])
return t}(u.Component)
g.defaultProps={baseClassName:"Dropdown"}
t.default=g},2897:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=(o(r),n(12)),l=o(s),u=n(4),c=(o(u),n(2896)),d=o(c),f=n(631),p=o(f),m=n(24),h=o(m),g=n(79),v=o(g),y=n(157),b=(o(y),n(216)),_=o(b),w=function(e,t,n){return h.default.createPageComponent({mixins:[p.default.enableAfterUpdate()],displayName:t,bobcatPropTypes:{data:{text:l.default.string,category:l.default.oneOfType(l.default.string,l.default.number),binding:l.default.object}},getBobcatDefaultProps:function(){return{data:{category:"all"}}},componentWillReceiveProps:function(t){e.getCategories().length&&!e.isCategoryIdExist(t.category)&&this._onChangeCategory({value:"all"})},_createDropdownOptions:function(){var t=this,o=e.getCategories().map(function(e){return{value:e.id,label:e.id.toString()===t.props.category.toString()?a("div",{className:"option selected"},void 0,e.name):a("div",{className:"option"},void 0,e.name)}})
o.length&&"all"!==this.props.category&&o.unshift({value:"all",label:a("div",{className:"option"},void 0,i(n?"Portfolio|All Categories":"Ecommerce|All Categories"))})
return o},_getSelectedCategory:function(t){var o=e.getCategories(),a=o.find(function(e){return e.id.toString()===t.toString()})
return a?a.name:i(n?"Portfolio|All Categories":"Ecommerce|All Categories")},_onChangeCategory:function(e){this.updateData({category:e.value})
this.savePage()
n?_.default.track("Editor - Select Portfolio Section Category"):_.default.track("Editor - Select Ecommerce Section Category")},render:function(){this.observeBinding(e.getCategoriesBinding())
this.observeBinding(e.getSettingsBinding())
return this._createDropdownOptions().length<1?null:a("div",{className:"s-component s-category-selector"},void 0,a("div",{className:"s-component-editor",rel:"tooltip-left",title:i(n?"Portfolio|Select a category for this section.":"Ecommerce|Select a category for this section."),"data-original-title":i(n?"Portfolio|Select a category for this section.":"Ecommerce|Select a category for this section.")},void 0,a(d.default,{options:this._createDropdownOptions(),value:this._getSelectedCategory(this.props.category),onChange:this._onChangeCategory})))}})},C=w(v.default,"EcommerceCategorySelector")
C.createCategorySelector=w
t.default=C
e.exports=t.default}).call(t,n(7))},2898:function(e,t,n){"use strict";(function(i){function o(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var u,c,d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},p=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),m=function(){function e(e,t){var n=[],i=!0,o=!1,a=void 0
try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done);i=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){o=!0
a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=n(0),g=a(h),v=n(4),y=a(v),b=n(1),_=a(b),w=n(6),C=a(w),k=n(61),N=a(k),x=n(12),E=(a(x),n(36)),S=a(E),P=n(2),T=a(P),O=n(2958),L=a(O),M=n(8),I=a(M),B=n(21),D=a(B),A=n(1001),j=a(A),H=n(2489),R=a(H),U=n(2488),F=a(U),V=n(2880),z=a(V),W=n(2496),$=(a(W),n(2876)),G=a($),K=n(387),q=a(K),Y=n(72),J=a(Y),X=n(15),Q=a(X),Z=n(70),ee=o(Z),te=n(58),ne=a(te),ie=n(42),oe=o(ie),ae=n(2959),re=(a(ae),n(963)),se=(a(re),n(633)),le=a(se),ue=n(2875),ce=a(ue),de=n(32),fe=a(de),pe=n(2878),me=a(pe),he=n(2899),ge=a(he),ve=n(651),ye={mixins:[me.default,(0,ne.default)("editor")],displayName:"GridSection",bindings:function(){return[D.default.sub("s5Theme").sub("nav"),j.default.getBinding()]},getStateFromBindings:function(e){var t=m(e,2),n=t[0],i=t[1]
return{s5NavOverlapsContent:"s5-theme"===I.default.getThemeName()&&(0,ve.getNavOverlapsContentFromNavTheme)(n.get()),s5NavHeight:i.get("navHeight")}},componentWillMount:function(){this._applyTitleGroupMigrationToData()
this._getOnToggleImageLinkEditorFn=le.default.boundParamsMemoizer(this._onToggleImageLinkEditor,this)
var e=I.default.getThemeName(),t=this._getLayoutVariation()
return this._getLayoutBinding().sub("layout_variation").set(ge.default.getDefaultLayoutKey(e,t))},componentDidMount:function(){this._debouncedUpdateJQueryMeasurements=_.default.debounce(this._updateJQueryMeasurements,200);(0,C.default)(window).on("resize",this._debouncedUpdateJQueryMeasurements)
return this._updateJQueryMeasurements()},componentWillUnmount:function(){return(0,C.default)(window).off("resize",this._debouncedUpdateJQueryMeasurements)},componentDidUpdate:function(){this._updateJQueryMeasurements()},_updateJQueryMeasurements:function(){if(0===this.props.index){var e=(0,C.default)(".navigator").outerHeight()||(0,C.default)(".s-nav-inner").outerHeight()||0,t=(0,C.default)(y.default.findDOMNode(this)),n=parseFloat(t.find(".s-persp-container").css("padding-top"))||parseFloat(t.css("padding-top"))||0
this.updateMeta({navHeight:e,paddingTop:n})}},_getNavHeight:function(){var e=I.default.getThemeName(),t=void 0
t="s5-theme"===e?this.props.s5NavHeight:this.getMeta("navHeight")
return t},_applyTitleGroupMigrationToData:function(){var e=this.getDefaultBinding().sub("components")
if("Add subtitle"===e.get("text2").get("value")){var t={type:"RichText",defaultValue:!0,value:"",backupValue:null,version:null}
e.set("text1",Q.default.fromJS(t))
e.set("text2",Q.default.fromJS(t))}},_getLayoutOptions:function(){var e=I.default.getThemeName()
return ge.default.getLayoutOptions(e)},_updateLayoutAndAdjustCellCount:function(e){var t=ge.default.parseLayoutVariation(e),n=t.getCellCount()
if(!this._adjustNumberOfCellsInData(n)){"extraLarge"!==t.cellHeight||t.canBeExtraLarge()||(t.cellHeight="large")
this._updateLayout.call(this,t.serialize())}},_onToggleImageLinkEditor:function(e){var t=this.getRepeatableBinding("repeatable1")
t.get().forEach(function(n,i){"editor"===n.get("components").get("background1").get("_state")&&e!==i&&t.sub(i).update("components.background1",function(e){return e.set("_state","normal")})})},_renderRepeatable:function(e){var t=this,n=this.getComponentBinding(e),i=this.getRepeatableBinding(e),o=this._getLayoutObject(),a=this.props.index,r=this._getNavHeight(),s=this.getMeta("paddingTop"),l=function(e,n){var l=i.sub(n)
return p(be,{layoutVariation:t._getLayoutVariation(),layoutObj:o,binding:l,section:t,index:n,sectionIndex:a,navHeight:r,sectionPaddingTop:s,hasTitleGroup:t._hasTitleGroup(),repeatableItemProps:t._getRepeatableItemProps(i,n),getComponentProps:t.getComponentProps,getBackgroundProps:t.getBackgroundProps,onToggleImageLinkEditor:t._getOnToggleImageLinkEditorFn(n)},n)},u=this.getComponentProps("repeatable1"),c=n.get("list").map(l).toArray()
o.useMagazineColumnDom&&(c=[p("div",{className:o.magazineColumnClass},1,c[0],c[1]),p("div",{className:o.magazineColumnClass},2,c[2])])
return g.default.createElement(R.default,f({className:"s-mh"+("editor"===n.get("_state")?" s-arranging":""),style:{margin:o.containerMargin,padding:o.containerPadding},canAddItems:!1},u),c)},_renderLayoutButton:function(){return null},_hasTitleGroup:function(){return this.sbAnyHasContent("text1 text2",{showOnly:!1})},_getSectionStyle:function(){return{paddingTop:this._getLayoutObject().getSectionPaddingTop(this._getNavHeight(),this._hasTitleGroup(),this.props.index,this.props.s5NavOverlapsContent)}},_getLayoutObject:function(){var e=I.default.getThemeName(),t=this._getLayoutVariation(),n=fe.default.isSmallerThanDesktop()
return ge.default.getLayout(e,t,n)()},_adjustNumberOfCellsInData:function(e){var t=q.default.getSectionDataBySectionName("grid"),n=t.content.components.repeatable1.components,o=[].concat(t.content.components.repeatable1.list.map(function(e){return e.components}),n),a=this.getRepeatableBinding("repeatable1"),r=function(e){var t=e.components
return _.default.some(o,function(e){return t.text1.value===e.text1.value&&t.text2.value===e.text2.value&&t.background1.url===e.background1.url&&t.background1.linkUrl===e.background1.linkUrl})},s=a.get().count()
if(s===e)return!1
if(s<e)!function(e){for(var t=a.get(),i=0;i<e;){i++
var o={type:"RepeatableItem",components:n},r=Q.default.fromJS(J.default.addMetaId(o))
t=t.push(r)}a.set(t)}(e-s)
else if(s>e){var l=a.get().slice(e)
if(!function(e){return e.toJS().every(r)}(l)&&!confirm(i("Editor|Are you sure you want to reduce the number of grid items? Some grid items will be deleted.")))return!0
var u=a.get().slice(0,e)
a.set(u)}return!1},render:function(){var e=this._getLayoutObject(),t=I.default.getThemeName(),n=null
if(this._hasTitleGroup()||(e.contentWidthIsNormal,!1)){n=p("div",{},"section-title",p(ce.default,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding(),canHide:!0}))
e.isWideWithLeftAlignedHeading?n=p("div",{style:{paddingLeft:40,paddingRight:40}},void 0,n):"persona"!==t&&"profile"!==t&&(n=p("div",{},void 0,p("div",{className:(0,T.default)("container title-group-container",{"title-group-container--no-title-content":!this._hasTitleGroup()})},void 0,p("div",{className:"sixteen columns"},void 0,n))))}var i="profile"===t||"persona"===t,o=p("div",{},void 0,i&&n,p("div",{className:"s-grid-section-repeatable-container "+this.sbUniformTextAlignment("text1 text2")},void 0,this._renderRepeatable("repeatable1")))
"persona"===t&&(o=p("div",{className:"twelve columns offset-three"},void 0,p("div",{className:"s-persona-content"},void 0,o)))
e.needs16ColumnContainer&&(o=p("div",{className:"columns sixteen"},void 0,o))
o=[this._renderLayoutButton(),!i&&n,p("div",{className:"s-grid-section-content "+this._getLayoutObject().containerClass},"section-content",o)]
e.needsPerspContainer&&(o=p("div",{className:"s-persp-container"},void 0,p("div",{className:"s-persp-column"},void 0,o)))
return p("div",{className:"s-section s-grid-section "+this._getLayoutObject().sectionClass+" "+(this._hasTitleGroup()?" _hasTitleGroup":""),style:this._getSectionStyle()},void 0,p("div",{style:{width:"100%"}},void 0,o))}},be=(u=N.default.decorate(S.default.Mixin))(c=function(e){function t(e){r(this,t)
var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n._updateMinHeight=_.default.throttle(n._updateMinHeight.bind(n),200)
return n}l(t,e)
d(t,[{key:"componentDidMount",value:function(){this._updateMinHeight()}},{key:"componentDidUpdate",value:function(){this._updateMinHeight()}},{key:"getPropCompareFunctions",value:function(){return{repeatableItemProps:function(e,t){return(0,L.default)(e,t)}}}},{key:"_updateMinHeight",value:function(){var e=(0,C.default)(y.default.findDOMNode(this)),t=e.find(".s-item-text-group").outerHeight(),n=Math.max(this.props.layoutObj.cellMinHeight,t+50)
e.css("min-height",n+"px")}},{key:"_getDefaultBackground",value:function(){return q.default.getSectionDataBySectionName("grid").content.components.repeatable1.components.background1}},{key:"render",value:function(){var e=this.props,t=e.layoutObj,n=e.index,i=e.sectionIndex,o=e.navHeight,a=e.sectionPaddingTop,r=e.hasTitleGroup,s=this.getDefaultBinding(),l=s.sub("components.background1").toJS()||this._getDefaultBackground(),u=ee.createImage(l).getUrl(),c=l.linkUrl,d=l.linkTarget,m=oe.imageHasContent(u),h=t.cellClassName
"editor"===s.sub("components.background1").get("_state")&&(h+=" _image-link-editor-open")
var v=t.getItemButtonStyles({cellIndex:n,sectionIndex:i,navHeight:o,sectionPaddingTop:a,hasTitleGroup:r,s5NavOverlapsContent:this.props.s5NavOverlapsContent}),y=null,b=this.props.getBackgroundProps("background1",s)
b.linkUrl=c
b.linkTarget=d
var _=p("div",{className:"s-grid-section-cell-content"},void 0,g.default.createElement(G.default,f({key:n},b),y,p("div",{className:"s-grid-section-item-text-group-wrapper",style:{border:t.getItemBorder(m)}},void 0,p(z.default,{section:this.props.section,itemBinding:s,binding:s,showItemSubtitle:!1,upperChildrenPosition:!0,onChange:this._updateMinHeight}))))
return g.default.createElement(F.default,f({className:h+" "+(t.isTopRightCell(n)?"_top-right-cell":""),style:{padding:t.cellPadding,minHeight:t.cellMinHeight},binding:s,index:n,alwaysShowButtons:!0,moveButtonStyle:v.moveButton},this.props.repeatableItemProps),_)}}])
return t}(g.default.Component))||c
t.default=ye
e.exports=t.default}).call(t,n(7))},2899:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0})
var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),a=n(1),r=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(a),s={twoLeftOneRight:{cellCount:3},oneLeftTwoRight:{cellCount:3},twoTopThreeBottom:{cellCount:5},twoTopTwoBottom:{cellCount:4}}
r.forOwn(s,function(e,t){e.name=t})
var l=function(){function e(t){i(this,e)
var n=t.split("-")
this.rows=""
this.columns=""
this.magazineLayoutName=""
this.gridType=n[0]
this.cellHeight=n[4]
this.cellSpacing=n[5]
this.contentWidth=n[6]
if("grid"===n[0]){this.rows=parseFloat(n[1])
this.columns=parseFloat(n[2])}else"magazine"===n[0]&&(this.magazineLayoutName=n[3])}o(e,[{key:"isMagazine",value:function(){return"magazine"===this.gridType}},{key:"isGrid",value:function(){return"grid"===this.gridType}},{key:"canBeExtraLarge",value:function(){return this.isGrid()&&1===this.rows}},{key:"serialize",value:function(){return[this.gridType,this.rows,this.columns,this.magazineLayoutName,this.cellHeight,this.cellSpacing,this.contentWidth].join("-")}},{key:"getCellCount",value:function(){return this.isGrid()?this.rows*this.columns:s[this.magazineLayoutName].cellCount}},{key:"getTopRightCellIndex",value:function(){return this.isGrid()?this.columns-1:{twoLeftOneRight:2,oneLeftTwoRight:0,twoTopThreeBottom:1,twoTopTwoBottom:1}[this.magazineLayoutName]}},{key:"getTopRowCellIndices",value:function(){return this.isGrid()?r.range(0,this.columns):{twoLeftOneRight:[0,2],oneLeftTwoRight:[0,2],twoTopThreeBottom:[0,1],twoTopTwoBottom:[0,1]}[this.magazineLayoutName]}}])
return e}(),u=34,c=["profile","ion","sleek","persona"],d=["sleek","ion","persona"],f={},p={getDefaultLayoutKey:function(e,t){return t},getLayout:function(e,t,n){function i(t){return"s5-theme"===e?t:["pitch_new","zine","bright","glow","minimal"].includes(e)}var o=this.parseLayoutVariation(t)
return function(){function a(t,n,o,a){var r=i(a)?Math.max(0,n-o):0,c=s?0:2*l.cellPadding,d=10+Math.max(0,r-c),f=s&&0!==t&&"ion"!==e?10:-30
0===t&&(f=10-o+(i(a)?n:0))
"ion"===e&&(f=-46)
var p=d+c,m=f+u
return{layoutButtonTop:f,topRowimageAndLinkButtonTop:d,layoutButtonOverlapsTopRightButton:!s&&m+10>p}}var r=e+"-"+t+"-"+n
if(f[r])return f[r]
var s="normal"===o.contentWidth
c.includes(e)&&(s=!0)
var l={}
l.contentWidthIsNormal=s
l.containerClass=s?"container ":""
l.containerClass+="_cell-spacing-"+o.cellSpacing+" "
l.needsPerspContainer=s&&"perspective"===e
l.needs16ColumnContainer=s&&!["perspective","persona"].includes(e)
l.sectionClass=s?"":" _wide "
var p=d.includes(e)?"mobile":"desktop"
l.sectionClass+=" s-grid-section__"+p+"-view-on-tablet"
var m="onyx_new"===e
l.isWideWithLeftAlignedHeading=m&&!s
l.cellPadding={none:0,small:n?3:5,large:n?7:15}[o.cellSpacing]
l.containerMargin=s?-l.cellPadding:0
l.containerPadding=s?0:l.cellPadding
l.cellClassName="s-grid-section-cell "
l.cellMinHeight={small:{desktop:160,mobile:120},medium:{desktop:250,mobile:150},large:{desktop:350,mobile:200},extraLarge:{desktop:600,mobile:300}}[o.cellHeight][n?"mobile":"desktop"]
o.getCellCount()%2!=0&&(l.cellClassName+=" _odd-cell-count ")
if(o.isGrid()){l.containerClass+="_grid"
l.cellClassName+=" _"+o.columns+"-columns "}else if(o.isMagazine()){l.containerClass+="_magazine "
l.cellClassName+=" _"+o.magazineLayoutName+" "}l.useMagazineColumnDom=o.isMagazine()&&("twoLeftOneRight"===o.magazineLayoutName||"oneLeftTwoRight"===o.magazineLayoutName)
l.magazineColumnClass="s-magazine-column _"+o.magazineLayoutName
l.getItemBorder=function(e){return e||"none"===o.cellSpacing?null:"1px solid #eee"}
l.isTopRightCell=function(e){return o.getTopRightCellIndex()===e}
l.isTopRowCell=function(e){return o.getTopRowCellIndices().includes(e)}
l.getItemButtonStyles=function(e){var t=e.cellIndex,n=e.sectionIndex,i=e.navHeight,r=e.sectionPaddingTop,s=e.hasTitleGroup,l=e.s5NavOverlapsFirstSection,u=10,c=10,d=0
if(this.isTopRowCell(t)&&!s){var f=a(n,i,r,l)
u=f.topRowimageAndLinkButtonTop
if(this.isTopRightCell(t)&&f.layoutButtonOverlapsTopRightButton){c+=140
d+=140}}o.isGrid()&&(d+=28)
return{moveButton:{top:u,right:c},imageAndLinkButton:{top:u,right:d}}}
l.getLayoutButtonStyle=function(e){return{top:a(e.sectionIndex,e.navHeight,e.sectionPaddingTop,e.s5NavOverlapsFirstSection).layoutButtonTop}}
l.getSectionPaddingTop=function(t,n,o,a){if("perspective"===e&&n&&!s)return 80
if("minimal"===e||"pitch_new"===e){var r=s||n,l="minimal"===e&&r?70:0,u="pitch_new"===e&&r?90:0,c={minimal:l,pitch_new:u}[e]
return(0===o?t:0)+c}return!s&&!n||"s5-theme"===e&&a?i(a)&&0===o?t:0:""}
f[r]=l
return l}},parseLayoutVariation:function(e){return new l(e)},magazineLayouts:s,themesWithoutWideGridLayout:c}
t.default=p
e.exports=t.default},2900:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){var n=[],i=!0,o=!1,a=void 0
try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done);i=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){o=!0
a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),d=n(0),f=(o(d),n(1)),p=o(f),m=n(2879),h=n(13),g=o(h),v=function(e){function t(e){a(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.hideAdvancedOptions=!g.default.getEcommerceLayouts()
n.sectionName="store section"
return n}s(t,e)
c(t,[{key:"updateToDefaultLayout",value:function(e){var t=n(2490),i=this.props.themeName,o=p.default.clone(this._levelKeys)
o[0]=e
var a=t.getDefaultLayoutKey(i,o.join("-"))
this.props.updateLayout(a)}},{key:"getRotationKeys",value:function(){var e=u(this._levelKeys,1),t=e[0]
return this.hideAdvancedOptions?["landscape-one","landscape-three"]:this._getKeysByLevel(1).map(function(e){return t+"-"+e})}},{key:"getButtonClassMapping",value:function(){return["",this._getSmallButtonClass(1)]}},{key:"renderLayoutOptions",value:function(){var e=this,t=u(this._levelKeys,2),n=t[0],o=t[1]
return l("div",{},void 0,this._getKeysByLevel(1)&&this._renderLayoutButtons(1,i("Editor|Columns Per Row")),"one"!==o&&l("div",{className:"s-layout-menu-field drop-down-select"},void 0,l("div",{className:"s-layout-menu-label"},void 0,i("Editor|Image Size")),l("select",{value:n,onChange:function(t){return e._getSetLevelFn(0,t.target.value)()}},void 0,l("option",{value:"landscape"},void 0,i("Editor|Landscape")),l("option",{value:"square"},void 0,i("Editor|Square")),l("option",{value:"portrait"},void 0,i("Editor|Portrait")),l("option",{value:"auto"},void 0,i("Editor|Auto")))))}}])
return t}(m.BaseLayoutButton)
t.default=(0,m.connectToStores)(v)
e.exports=t.default}).call(t,n(7))},2901:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(382),n(998),n(2877)),s=n(2487),l=n(2971),u=(n(2875),n(2876))
e.exports=function(){return o.createElement(u,i({className:"s-new-title-section s-section "+this._getSectionType()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(r,this.getComponentProps("background1")),o.createElement(l,a.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout},this._getLayoutProps()))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(s,a.assign({},{layout:this._getLayoutKey()},this.getBackgroundProps("background1"))):null,"\n  ",this._renderContent(),"\n")}},2902:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=n(2877),s=n(2487),l=n(2919),u=n(2876)
e.exports=function(){return o.createElement(u,i({className:"s-new-hero-section s-section "+this._getSectionType()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(r,a.assign({},{bgClassNames:this.getThemeFeature("backgroundColorClassNames")},this.getComponentProps("background1"))),o.createElement(l,a.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout},this._getLayoutProps()))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(s,a.assign({},{layout:this._getLayoutKey()},this.getBackgroundProps("background1"))):null,"\n  ",this._renderContent(),"\n")}},2903:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(382),n(2877)),s=n(2487),l=n(2921),u=n(2875),c=n(2876)
e.exports=function(){return o.createElement(c,i({className:"s-new-text-section s-section "+this._getSectionType()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(r,this.getComponentProps("background1")),o.createElement(l,a.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout},this._getLayoutProps()))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(s,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"clearfix"},o.createElement("div",{className:"columns sixteen"},o.createElement(u,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding()}))),o.createElement("div",{className:this.sbUniformTextAlignment("text1 text2")},"\n      ",this._renderRepeatable("repeatable1"),"\n    ")))}},2909:function(e){"use strict"
var t,n
t="../../../../public/images/v4"
n=function(e){return e.replace(t,"../../../../images/v4")}
e.exports={correctThumbnailPath:n}},2910:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=p[e]||e
n=n.split(",").map(function(e){return f+e.trim()}).join(",")
var i=m[e]||m.default
if(s.default.isString(t))return-1!==t.indexOf(":")?n+"{"+t+"}":n+"{"+i+":"+t+"}"
var o=u.default.prototype.validate(t)
return o?n+"{"+i+":"+o.toRgba()+";}":void 0}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="",i=null
for(i in e)if(e.hasOwnProperty(i)){var a=i.split(" ")
d.default[i]?function(){var a=d.default[i](e[i])
for(var r in a)!function(e){Array.isArray(t.prefix)?t.prefix.forEach(function(t){n+=o(t+" "+e,a[e])}):n+=o((t.prefix||"")+" "+e,a[e])}(r)}():p[a[0]]?a.forEach(function(t){return n+=o(t,e[i])}):o(i,e[i])}return n}Object.defineProperty(t,"__esModule",{value:!0})
var r=n(1),s=i(r),l=n(219),u=i(l),c=n(2911),d=i(c),f=".s-custom-colors ",p={title:".s-title",subtitle:".s-subtitle",itemTitle:".s-item-title",itemSubtitle:".s-item-subtitle",titleLink:".s-title .s-text .s-component-content a",itemTitleLink:".s-item-title .s-text .s-component-content a",subtitleLink:".s-subtitle .s-text .s-component-content a",itemSubtitleLink:".s-item-subtitle .s-text .s-component-content a",textLink:".s-text .s-component-content a",socialFeedLink:".s-social-feed .s-feeds-item .s-feed-content .s-feed-text-main a",button:".s-common-button",buttonHover:".s-common-button:hover",overlay:".s-bg-overlay:before",blogInfo:".s-blog-wrapper .s-blog-col-placeholder .s-blog-details .s-blog-info",storePrice:".s-ecommerce-row-view-product .s-ecommerce-row-view-product-pricing, .s-ecommerce-card-view-card-price",termsLink:".s-terms-link a",socialLinks:".s-component.s-social-media ul.s-social-media-buttons .s-social-icon",socialLinks2:".s-component.s-social-media ul.s-social-media-buttons .s-social-icon",mobileActionButton:".s-mobile-actions .s-mobile-actions-item.one-item",mobileActionButtonForApp:".s-mobile-actions .s-mobile-actions-item.selected:not(.one-item)",mobileNavbarButtons:".navbar-drawer-bar .navbar, .navbar-drawer-bar .mobile",mobileNavbarButtonsOpen:".navbar-drawer-bar.drawer-open .navbar, .navbar-drawer-bar.drawer-open .mobile"},m={default:"color",button:"background",buttonHover:"background",mobileActionButton:"background",mobileActionButtonForApp:"color",overlay:"background",mobileNavbarButtons:"background",mobileNavbarButtonsOpen:"background",socialLinks:"background",socialLinks2:"color"}
t.default={generate:a}
e.exports=t.default},2911:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(219),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a={donationGroup:function(e){var t=e.main.toHex()
return{".s-donation-section .s-component.s-donation .s-donation-progress .progress-bar .progress":"background: "+t,".s-donation-section .s-component.s-donation .s-donation-progress .progress-bar .indicator:before":"background: "+t,".s-donation-section .s-component.s-donation .s-donation-progress .progress-bar .indicator:after":"border-top-color: "+t}},ecommerceTextGroup:function(e){var t=e.textColor.toHex(),n=e.textColor.lighten(.2).toHex(),i="color: "+t+";",o="color: "+n+";",a=".s-ecommerce .s-ecommerce-products-wrapper .s-ecommerce-card-view-wrapper .s-ecommerce-card-view-detail .s-ecommerce-card-view-detail-header",r={".s-ecommerce-card-view-wrapper .s-ecommerce-card-view-cards .s-ecommerce-card-view-card .s-ecommerce-card-view-card-price":i,".s-ecommerce .s-ecommerce-row-view-product .s-ecommerce-row-view-product-detail-panel .s-ecommerce-row-view-product-pricing":i,".s-section .s-category-bar .category-list .category-link-item.selected":i,".s-section .s-category-bar .category-list .category-link-item.selected:after":"background: "+t,".s-section .s-category-bar .category-list .category-link-item-wrapper:hover .category-link-item:not(.no-hover)":i}
r[a+" .back-btn"]=r[a+" .prev-product-btn"]=r[a+" .next-product-btn"]=i
r[a+" .back-btn:hover"]=r[a+" .prev-product-btn:hover"]=r[a+" .next-product-btn:hover"]=o
return r},ecommerceGroup:function(e){e.textColor=e.textColor||e.main
e.mobileBg=e.mobileBg||new o.default("#f2f2f2")
var t=e.main.toHex(),n=e.mobileBg.toHex(),i=e.mobileBg.mix("#000",.2).toHex(),r="background: "+t+";",s="background: "+n+";"
return Object.assign({".s-ecommerce-row-view-product .s-ecommerce-row-view-product-thumbnail-list ul li.current":"border: 2px solid "+t,".s-ecommerce-card-view-wrapper .s-ecommerce-card-view-card .s-ecommerce-card-view-card-stock-warning":r,".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart":r,".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart.hovered":r,".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart-mobile":"\n        "+s+"\n        border-top: 1px solid "+i+";",".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart-mobile .check-btn":r,".s-ecommerce-animation-item":"\n        border: 2px solid "+t+";\n        color: "+t+";",".s-ecommerce-row-view-product .mobile-select .price-label":"color: "+t,".s-ecommerce-row-view-product .mobile-select .variation-item.selected":"border: 1px solid "+t+"; "+r,".s-ecommerce-row-view-product .mobile-select .add-btn":r,".s-ecommerce-row-view-product .slider-wrapper .slider-dot-wrapper .slider-dot":"border: 1px solid "+t,".s-ecommerce-row-view-product .slider-wrapper .slider-dot-wrapper .slider-dot.selected":"background: "+t},a.ecommerceTextGroup({textColor:e.textColor}))}}
t.default=a
e.exports=t.default},2912:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2891)
e.exports=t.default},2913:function(e,t,n){"use strict"
function i(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=o(r),l=n(12),u=(o(l),n(1)),c=o(u),d=n(24),f=o(d),p=n(13),m=o(p),h=n(280),g=(o(h),n(8)),v=o(g),y=n(161),b=(o(y),n(58)),_=o(b),w=n(966),C=o(w),k=n(35),N=(i(k),n(70)),x=i(N),E=n(965),S=o(E),P=n(631),T=o(P),O=n(27),L=o(O),M=n(2494),I=o(M),B=n(2914),D=(o(B),n(375)),A=(o(D),n(220)),j=(o(A),n(2427)),H=n(2883),R=o(H),U=n(216),F=o(U),V=n(383),z=(o(V),n(32)),W=o(z),$=n(649),G=o($),K=n(7),q=function(e){return{url:"//uploads.strikinglycdn.com/static/backgrounds/"+e+".jpg",thumbUrl:"//uploads.strikinglycdn.com/static/backgrounds/"+e.replace(/(\/)(\d)/,"$1t$2")+".jpg",sizing:"cover"}},Y=function(e){return{url:"//uploads.strikinglycdn.com/page/images/backgrounds/"+e+".jpg",thumbUrl:"//uploads.strikinglycdn.com/page/images/backgrounds/"+e+"-thumb.jpg",sizing:"cover"}},J=function(e){return{url:"http://uploads.strikinglycdn.com/static/backgrounds/pastel-solids/"+e+".jpg",thumbUrl:"http://uploads.strikinglycdn.com/static/backgrounds/pastel-solids/"+e+".jpg",sizing:"tile"}},X=function(e){return{url:"https://uploads.sxlcdn.com/static/backgrounds/"+e+".jpg",thumbUrl:"https://uploads.sxlcdn.com/static/backgrounds/"+e.replace(/(\/)(\d)/,"$1t$2")+".jpg",sizing:"cover"}},Q=function(e,t){var n=["nature/194","cityscape/170","things/121","cityscape/166","nature/184"],i=q
if("solidBanner"===e){n=["banners/banner1","bg3","banners/banner3","banners/banner4","bg1"]
i=Y}if(m.default.getIsSxl()){n=["abstract/76","nature/190","cityscape/155","business-2/136","nature/171"]
i=X}if("pastelSolids"===e){n=["44","42","36","39","48"]
i=J}t&&t>0&&t<5&&(n=n.splice(0,t))
return n.map(function(e){return i(e)})}
t.default=f.default.create({displayName:"BackgroundImage",mixins:[(0,_.default)("editor"),S.default,T.default.enableAfterMount()],bobcatPropTypes:R.default.bobcatPropTypes,getBobcatDefaultProps:R.default.getBobcatDefaultProps,_setImage:function(e){this.updateData((0,j.imageDataForSaving)(e))},_imageUploaded:function(e){/\.mp4$/.test(e.getUrl())?this.updateData(Object.assign((0,j.imageDataForSaving)(e),{videoHtml:G.default.getVideoHtmlByUrl(e.getUrl(),1280,720),videoUrl:e.getUrl(),textColor:"overlay"})):this._setImage(e)
this.savePage()},_onPreviewColor:function(e){var t=this
return function(){t.props.storePreviewData()
t.updateData({textColor:e})}},_onClickTextColor:function(e){var t=this
return function(){t.updateData({textColor:e})
t.props.clearPreviewData()
t.savePage()}},_imageUrlMixin:function(e){var t={s:null,storage:null,storageKey:null,format:null}
return Object.assign(t,e)},_createEnterStockImageFn:function(e){var t=this
return function(){t.props.storePreviewData()
t.updateData(t._imageUrlMixin({url:e.url,videoHtml:"",sizing:e.sizing,textColor:"overlay",userClassName:""}))}},_createEnterStockBgColorFn:function(e){var t=this
return function(){t.props.storePreviewData()
t.updateData(t._imageUrlMixin({url:"",videoHtml:"",sizing:e.sizing,userClassName:e}))}},_createClickStockImageFn:function(e){var t=this
return function(){t.updateData(t._imageUrlMixin({url:e.url,videoHtml:"",sizing:e.sizing,userClassName:"",w:16,h:9}))
t.props.clearPreviewData()
t.savePage()
F.default.track("Editor - Edit Background")}},_createClickStockBgColorFn:function(e){var t=this
return function(){t.updateData(t._imageUrlMixin({url:"",videoHtml:"",sizing:e.sizing,userClassName:e}))
t.props.clearPreviewData()
t.savePage()
F.default.track("Editor - Edit Background")}},_onClickEditImage:function(){var e=this
C.default.launchMeitu(this._getUrlForImageEditor(),{beforeLaunch:function(){L.default.openDialog("imageEditor")},onUploadResponse:function(t){try{var n=JSON.parse(t),i=x.fromUploader(n,"qn")
e._imageUploaded(i)
L.default.addImageAsset({img:x.serializeForBackend(n,"qn")})
L.default.closeDialog("imageEditor")}catch(e){alert(I18n.t("js.pages.edit.errors.effects_network_error"))}},onClose:function(){L.default.closeDialog("imgeEditor")}})},_getUrlForImageEditor:function(){var e=c.default.assign({},this.props,{s:10})
return x.createImage(e).getUrl(this.props.size,!0)},_url:function(){return x.createImage(this.props).getUrl(this.props.size)},_onClickUpload:function(){I.default.pick({initialTabIdx:0,iconLibComponents:"background",from:"background",handlers:{itemUploaded:this._imageUploaded,itemSelected:this._imageUploaded}})},_onClickMoreImage:function(){I.default.pick({initialTabIdx:2,iconLibComponents:"background",from:"background",handlers:{itemUploaded:this._imageUploaded,itemSelected:this._imageUploaded}})},_onChangeBackgroundSize:function(e){this.updateData({sizing:e.target.value})
this.savePage()},_renderStockImage:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,n=Q(this.getData("stockKey"),t)
return a("span",{},void 0,n.map(function(t,n){var i={backgroundImage:"url("+t.thumbUrl+")"}
return a("li",{style:i,onClick:e._createClickStockImageFn(t),onMouseEnter:e._createEnterStockImageFn(t),onMouseLeave:e.props.restorePreviewData},n)}))},_renderColor$Image:function(){var e=this,t=this.props.bgClassNames,n=t.length,i=""
n<5&&(i=this._renderStockImage(5-n))
return a("span",{},void 0,t.map(function(t,n){return a("li",{className:t,onClick:e._createClickStockBgColorFn(t),onMouseEnter:e._createEnterStockBgColorFn(t),onMouseLeave:e.props.restorePreviewData},n)}),i)},_renderImgEditButoon:function(){if(!m.default.getIsSxl()||v.default.getIsImageEditorRollout())return a("div",{className:"clearfix mb"},void 0,a("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickEditImage},void 0,K("Edit Image")))},render:function(){return a("div",{},void 0,s.default.createElement("img",{style:{display:"none"},src:this._getUrlForImageEditor(),ref:"aviaryImage"}),a("ul",{className:"s-layout-menu-field stock-images clearfix"},void 0,this.props.showDefaultColor?this._renderColor$Image():this._renderStockImage(),a("li",{className:"btn",onClick:this._onClickMoreImage},void 0,a("span",{},void 0," ",K("More")," "))),a("div",{className:"clearfix mb"},void 0,a("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickUpload},void 0,K("Upload Image"))),this.props.showImageOptions?a("div",{},void 0,this._renderImgEditButoon(),!W.default.isSmallScreen()&&a("div",{className:"drop-down-select mb"},void 0,a("div",{className:"icon"}),a("select",{onChange:this._onChangeBackgroundSize,value:this.props.sizing},void 0,a("option",{value:"cover"},void 0,K("Stretch")),a("option",{value:"contain"},void 0,K("Contain")),a("option",{value:"tile"},void 0,K("Tile")),a("option",{value:"center"},void 0,K("Center")))),a("div",{className:"text-selection-wrap"},void 0,a("div",{className:"selection light-text "+("light"===this.props.textColor?"current":""),rel:"tooltip-left","data-original-title":K("Light Text"),onMouseEnter:this._onPreviewColor("light"),onMouseLeave:this.props.restorePreviewData,onClick:this._onClickTextColor("light")},void 0,"Tt"),a("div",{className:"selection text-overlay "+("overlay"===this.props.textColor?"current":""),rel:"tooltip-left","data-original-title":K("Light Text + Overlay"),onMouseEnter:this._onPreviewColor("overlay"),onMouseLeave:this.props.restorePreviewData,onClick:this._onClickTextColor("overlay")},void 0,"Tt"),a("div",{className:"selection dark-text "+("dark"===this.props.textColor?"current":""),rel:"tooltip-left","data-original-title":K("Dark Text"),onMouseEnter:this._onPreviewColor("dark"),onMouseLeave:this.props.restorePreviewData,onClick:this._onClickTextColor("dark")},void 0,"Tt"))):null)}})
e.exports=t.default},2914:function(e,t){"use strict"
function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0})
var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),o=function(){function e(){n(this,e)}i(e,[{key:"editText",value:function(e,t){console.info("NativeApiUtils#editText",e,t)
try{window.webkit.messageHandlers.bobcatEditText.postMessage({timestamp:e,data:t})}catch(e){console.error("Error invoking webkit.messageHandler.bobcatEditText")}}},{key:"uploadImage",value:function(e){console.info("NativeApiUtils#uploadImage",e)
try{window.webkit.messageHandlers.bobcatUploadImage.postMessage({timestamp:e})}catch(e){console.error("Error invoking webkit.messageHandler.bobcatUploadImage")}}},{key:"uploadImages",value:function(e){console.info("NativeApiUtils#uploadImages",e)
try{window.webkit.messageHandlers.bobcatUploadImages.postMessage({timestamp:e})}catch(e){console.error("Error invoking webkit.messageHandler.bobcatUploadImages")}}},{key:"uploadImagesToAssetLibrary",value:function(){console.info("NativeApiUtils#uploadImagesToAssetLibrary")
try{window.webkit.messageHandlers.bobcatUploadImagesToAssetLibrary.postMessage({})}catch(e){console.error("Error invoking webkit.messageHandler.bobcatUploadImagesToAssetLibrary")}}},{key:"sharePage",value:function(){try{window.webkit.messageHandlers.bobcatSharePage.postMessage({})}catch(e){console.error("Error invoking webkit.messageHandler.bobcatSharePage")}}},{key:"previewPage",value:function(e){console.info("NativeApiUtils#previewPage",e)
try{window.webkit.messageHandlers.bobcatPreviewPage.postMessage({url:e})}catch(e){console.error("Error invoking webkit.messageHandler.bobcatPreviewPage")}}},{key:"openUrl",value:function(e){console.info("NativeApiUtils#openUrl",e)
try{window.webkit.messageHandlers.bobcatOpenUrl.postMessage({url:e})}catch(e){console.error("Error invoking webkit.messageHandler.bobcatOpenUrl")}}},{key:"closeEditorOpenUrl",value:function(e){console.info("NativeApiUtils#closeEditorOpenUrl",e)
try{window.webkit.messageHandlers.bobcatCloseEditorOpenUrl.postMessage({url:e})}catch(e){console.error("Error invoking webkit.messageHandler.bobcatCloseEditorOpenUrl")}}},{key:"exitEditor",value:function(){console.info("NativeApiUtils#exitEditor")
try{window.webkit.messageHandlers.bobcatExitEditor.postMessage({})}catch(e){console.error("Error invoking webkit.messageHandler.bobcatExitEditor")}}},{key:"broadcastPageId",value:function(e){console.info("NativeApiUtils#broadcastPageId")
try{window.webkit.messageHandlers.bobcatBroadcastPageId.postMessage({id:e})}catch(e){console.error("Error invoking webkit.messageHandler.bobcatBroadcastPageId")}}},{key:"showSupport",value:function(){console.info("NativeApiUtils#showSupport")
try{window.webkit.messageHandlers.bobcatShowSupport.postMessage({})}catch(e){console.error("Error invoking webkit.messageHandler.bobcatShowSupport")}}},{key:"updateRichTextCommandState",value:function(e,t){console.info("NativeApiUtils#updateRichTextCommandState")
try{window.webkit.messageHandlers.bobcatUpdateToolbar.postMessage({commandStateChange:{name:e,on:t}})}catch(e){console.error("Error invoking webkit.messageHandler.bobcatUpdateToolbar")}}}])
return e}()
t.default=new o
e.exports=t.default},2915:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=o(r),l=n(12),u=(o(l),n(6)),c=o(u),d=n(24),f=o(d),p=n(58),m=o(p),h=n(649),g=o(h),v=n(2494),y=o(v),b=n(2883),_=o(b),w=n(2916),C=o(w),k=[{url:"https://www.youtube.com/watch?v=niosbUYwMB8",thumbUrl:"https://i.vimeocdn.com/video/544087938_1920.jpg"},{url:"https://www.youtube.com/watch?v=CBJuMKdYPWE",thumbUrl:"https://i.vimeocdn.com/video/531892175_1920.jpg"},{url:"https://www.youtube.com/watch?v=f6SivI7ZGPQ",thumbUrl:"https://i.vimeocdn.com/video/544619687_1920.jpg"},{url:"https://www.youtube.com/watch?v=s5trY3IYkoM",thumbUrl:"https://i.vimeocdn.com/video/544115855_1920.jpg"},{url:"https://www.youtube.com/watch?v=FXenze9SVOY",thumbUrl:"http://i.vimeocdn.com/video/544897762_1920.jpg"}]
t.default=f.default.create({displayName:"BackgroundVideo",mixins:[(0,m.default)("editor")],bobcatPropTypes:_.default.bobcatPropTypes,getBobcatDefaultProps:_.default.getBobcatDefaultProps,_getVideoProps:function(){return{videoHtml:this.props.vidoeHtml,videoUrl:this.props.videoUrl,binding:this.getDefaultBinding().sub("_addVideoPanel"),onComponentDidMount:this.props.changePositionOfAddVideoPanel,updateVideoBg:this._updateVideoBg,showVideoPanel:this.getMeta("showVideoPanel")}},_updateVideoBg:function(e){switch(e.actionState){case"add":var t={videoHtml:e.videoHtml,url:e.url,textColor:"overlay",w:null,h:null,storage:null,storageKey:null,format:null}
e.videoUrl&&(t.videoUrl=e.videoUrl)
this.updateData(t)
this.updateMeta({showVideoPanel:!1})
this.props.clearPreviewData()
e.lowResThumbnail&&this._adjustVideoBgThumbnail(e)
break
case"preview":this.props.storePreviewData()
this.updateData({videoHtml:e.videoHtml,url:e.url,textColor:"overlay",w:null,h:null,storage:null,storageKey:null,format:null})
break
case"endPreview":this.props.restorePreviewData()}},_adjustVideoBgThumbnail:function(e){var t=this,n=(0,c.default)("<img src='"+e.url+"' />")
n.load(function(){n[0].naturalWidth<200&&t.updateData({url:e.lowResThumbnail})})
n.error(function(){t.updateData({url:e.lowResThumbnail})})},_createEnterStockVideoFn:function(e){var t=this
return function(){t._updateVideoBg({videoHtml:g.default.getVideoHtmlByUrl(e.url,1280,720),url:e.thumbUrl,actionState:"preview"})}},_createClickStockVideoFn:function(e){var t=this
return function(){t._updateVideoBg({videoHtml:g.default.getVideoHtmlByUrl(e.url,1280,720),url:e.thumbUrl,actionState:"add"})
t.savePage()}},_onMouseLeaveStockVideo:function(){this._updateVideoBg({actionState:"endPreview"})},_onClickToggleVideoPanel:function(){this.updateMeta({showVideoPanel:!this.getMeta("showVideoPanel")})},_onClickMoreVideo:function(){var e=this
y.default.pick({dialogType:"video",handlers:{itemSelected:function(t){e._updateVideoBg({videoHtml:g.default.getVideoHtmlByUrl(t.url,1280,720),url:t.thumbUrl,actionState:"add"})
e.savePage()}}})},_renderStockVideo:function(){var e=this
return a("ul",{className:"s-layout-menu-field stock-videos clearfix"},void 0,k.map(function(t,n){var i={backgroundImage:"url("+t.thumbUrl+")",backgroundSize:"cover"}
return a("li",{className:"stock-video-button",style:i,onClick:e._createClickStockVideoFn(t),onMouseEnter:e._createEnterStockVideoFn(t),onMouseLeave:e._onMouseLeaveStockVideo},n,a("i",{className:"fa fa-video-camera"}))}),a("li",{className:"btn",onClick:this._onClickMoreVideo},void 0,a("span",{},void 0,i("Video|More"))))},render:function(){return a("div",{},void 0,this.getMeta("showVideoPanel")&&s.default.createElement(C.default,this._getVideoProps()),this._renderStockVideo(),a("div",{className:"clearfix mb"},void 0,a("div",{className:"add-video-btn s-btn small no-margin dark-gray",onClick:this._onClickToggleVideoPanel},void 0,i("Video|Embed Video"))))}})
e.exports=t.default}).call(t,n(7))},2916:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=n(12),r=o(a),s=n(6),l=o(s),u=n(24),c=o(u),d=n(2917),f=o(d),p=n(649),m=o(p),h=n(281),g=o(h),v=n(42),y=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(v),b=n(58),_=o(b),w=n(216),C=o(w),k=n(2918),N=o(k)
t.default=c.default.createPageComponent({displayName:"BackgroundVideoPanel",mixins:[(0,_.default)("editor")],bobcatPropTypes:{callbacks:{onComponentDidMount:r.default.func.isRequired,updateVideoBg:r.default.func.isRequired,showVideoPanel:r.default.bool.isRequired}},componentWillMount:function(){this.initMeta({needToShowUrlError:!1,tempVideoUrl:this.props.videoUrl,isUploading:!1})},componentDidMount:function(){this.cbProps.onComponentDidMount()},_tempVideoUrl:function(){return this.getMeta("tempVideoUrl")},_needToShowUrlError:function(){return this.getMeta("needToShowUrlError")},_updateVideo:function(e){return this.cbProps.updateVideoBg(e)},_uploadSuccess:function(e,t){var n=this
return function(o){var a=(0,l.default)(o.message.html),r=a.attr("height"),s=a.attr("width")
switch(t){case"youtube":n._updateVideo({videoHtml:m.default.getYTIFrameHtml(m.default.getVideoID(e,t),s,r),videoUrl:e,url:m.default.getHDYTThumbnail(m.default.getVideoID(e,t)),lowResThumbnail:m.default.getNormalYTThumbnail(m.default.getVideoID(e,t)),actionState:"add"})
break
case"vimeo":n._updateVideo({videoHtml:m.default.getVimeoIFrameHtml(m.default.getVideoID(e,t),s,r),videoUrl:e,url:o.message.thumbnail_url,actionState:"add"})
break
default:window.alert(i("Video|Video format is not supported. Please use Youtube/Vimeo full URL only."))}n.updateMeta({isUploading:!1,needToShowUrlError:!1})
n.savePage()
C.default.track("Editor - Add Video Background")}},_uploadFail:function(){status.responseJSON
this.updateMeta({needToShowUrlError:!0,isUploading:!1})},_uploadVideo:function(){this.updateMeta({isUploading:!0})
var e=y.addProtocol(this.getMeta("tempVideoUrl")),t=m.default.getVideoType(e)
return f.default.upload({url:e,maxwidth:1440,success:this._uploadSuccess(e,t),error:this._uploadFail})},_onChangeUrl:function(e){this.updateMeta({tempVideoUrl:g.default.escapedValue(e.target.value)})},render:function(){return N.default.apply(this)}})
e.exports=t.default}).call(t,n(7))},2917:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),r=n(293),s=i(r),l=n(22),u=i(l),c=n(649),d=i(c),f=n(45),p=i(f),m=function(){function e(){o(this,e)}a(e,[{key:"upload",value:function(e){var t=d.default.getVideoType(e.url)
if(e.nativeVideo)return e.success({message:{html:d.default.getNormalVideoHtml(e.url,1280,800),thumbnail_url:""}})
if(!["youku","tudou","qq","facebook"].includes(t))return new p.default({type:"POST",url:u.default.VIDEO.CREATE(),data:{video:{url:e.url,maxwidth:e.maxwidth||700}},success:function(t){"retry"===t.html?s.default.poller(u.default.TASKS.POLL(t.message.type,t.message.id,1),e.success,e.error):"success"===t.html&&e.success(t)},error:e.error}).run()
var n=void 0
switch(t){case"youku":n=d.default.getYouKuHtml(e.url)
break
case"tudou":n=d.default.getTuDouHtml(e.url)
break
case"qq":n=d.default.getQQHtml(e.url)
break
case"facebook":n=d.default.getFacebookHtml(e.url)}return""!==n?e.success({message:{html:n,thumbnail_url:""}}):"function"==typeof e.error?e.error():void 0}}])
return e}()
t.default=new m
e.exports=t.default},2918:function(e,t,n){"use strict";(function(t){function i(){var e=r.DOM.input
return o.createElement("div",{className:"bg-video-panel s-point-right s-tooltip-dialog "+a.keys(a.pick({active:this.cbProps.showVideoPanel},a.identity)).join(" ")},o.createElement("div",{className:"menu-title"},t("Video|Use Youtube/Vimeo Video")),o.createElement("div",{className:"input-wrap"},o.createElement(e,{type:"text",placeholder:t("Video|Enter Youtube/Vimeo URL"),onChange:this._onChangeUrl,value:this._tempVideoUrl()}),this._getIsUploading()?null:o.createElement("span",{className:"no-border no-margin s-btn small yellow",onClick:this._uploadVideo},t("Video|Upload")),this._getIsUploading()?o.createElement("span",{className:"gray no-border no-margin s-btn small"},t("Video|Uploading...")):null),this._needToShowUrlError()?o.createElement("div",{className:"error-message"},o.createElement("div",{className:"fa fa-question-circle"}),"\n    ",t("Video|Video URL is invalid."),"\n    ",o.createElement(s,{},o.createElement("a",{href:"http://support.strikingly.com/hc/en-us/articles/215046387",target:"_blank"},t("Video|Learn more.")),o.createElement("a",{href:"http://help.sxl.cn/hc/zh-cn/articles/215309018",target:"_blank"},"了解更多"))):null,o.createElement("div",{className:"hint"},t("Video|Note: Video backgrounds won't play on phones or tablets. A thumbnail will be shown instead.")))}var o=n(0),a=n(1),r=n(36),s=n(383)
e.exports=function(){return i.apply(this,[])}}).call(t,n(7))},2919:function(e,t,n){"use strict";(function(i){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),u=n(2879),c=function(e){function t(e){o(this,t)
var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),i=n.props.themeName
n.cacheLevel=-1
"persona"!==i&&"perspective"!==i||(n.hideAdvancedOptions=!0)
n.sectionName="new_hero"
return n}r(t,e)
l(t,[{key:"getRotationKeys",value:function(){var e=this.props.themeName,t=this._levelKeys[1]
return["persona","perspective"].includes(e)?this._getKeysByLevel(0).map(function(e){return e+"-"+t}):"glow"===e?this.props.layoutVariation.indexOf("unswap")>-1?["button-left-unswap","signup-left-unswap","images-left-unswap","button-right-unswap","signup-right-unswap","images-right-unswap","button-noImage-unswap","signup-noImage-unswap","images-noImage-unswap"]:["button-left-swap","signup-left-swap","images-left-swap","button-right-swap","signup-right-swap","images-right-swap","button-noImage-swap","signup-noImage-swap","images-noImage-swap"]:["button-left","signup-left","images-left","button-right","signup-right","images-right","button-noImage","signup-noImage","images-noImage"]}},{key:"getButtonClassMapping",value:function(){return["big-buttons","big-buttons"]}},{key:"renderLayoutOptions",value:function(){var e=this.props.themeName
return s("div",{},void 0,this._getKeysByLevel(0)&&this._renderLayoutButtons(0),this._getKeysByLevel(1)&&this._renderLayoutButtons(1),"glow"===e&&this._getKeysByLevel(2)&&this._renderCheckBox({levelNum:2,labelText:i("Editor|Swap Title"),checkedKey:"swap",unCheckedKey:"unswap"}))}}])
return t}(u.BaseLayoutButton)
t.default=(0,u.connectToStores)(c)
e.exports=t.default}).call(t,n(7))},2920:function(e,t,n){"use strict";(function(t){var i=n(0)
n(1)
e.exports=function(){return i.createElement("div",{className:"s-section-thumb s-signup-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),i.createElement("div",{className:"form-thumb s-font-body"},i.createElement("input",{placeholder:t("Sections|"+this.props.content.components.email1.name_label)}),i.createElement("input",{placeholder:t("Sections|"+this.props.content.components.email1.email_label)}),i.createElement("div",{className:"button"},t("Sections|"+this.props.content.components.email1.submit_label))))))}}).call(t,n(7))},2921:function(e,t,n){"use strict";(function(i){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),l=function(){function e(e,t){var n=[],i=!0,o=!1,a=void 0
try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done);i=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){o=!0
a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),c=n(0),d=(function(e){e&&e.__esModule}(c),n(2879)),f=function(e){function t(e){o(this,t)
var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
"perspective"===n.props.themeName&&"text"===n._levelKeys[0]&&(n.hideAdvancedOptions=!0)
n.sectionName="new_text"
return n}r(t,e)
u(t,[{key:"updateToDefaultLayout",value:function(e){var t=n(2491),i=this.props.themeName,o=_.clone(this._levelKeys)
o[0]=e
var a=t.getDefaultLayoutKey(i,o.join("-"))
this.props.updateLayout(a)}},{key:"getRotationKeys",value:function(){var e=l(this._levelKeys,3),t=e[0],n=(e[1],e[2])
switch(t){case"box":return this._getKeysByLevel(1).map(function(e){return"box-"+e+"-"+n})
case"text":return this._getKeysByLevel(1).map(function(e){return"text-"+e+"-"+n})
default:return[]}}},{key:"getButtonClassMapping",value:function(){return"perspective"===this.props.themeName?["big-buttons","big-buttons","big-buttons"]:["big-buttons",this._getSmallButtonClass(1),"big-buttons"]}},{key:"renderLayoutOptions",value:function(){var e=this.props.themeName
return s("div",{},void 0,"perspective"!==e&&this._getKeysByLevel(0)&&this._renderLayoutButtons(0),this._getKeysByLevel(1)&&this._renderLayoutButtons(1),this._getKeysByLevel(2)&&this._renderCheckBox({levelNum:2,checkedKey:"button",unCheckedKey:"text",labelText:i("Editor|Show Buttons")}))}}])
return t}(d.BaseLayoutButton)
t.default=(0,d.connectToStores)(f)
e.exports=t.default}).call(t,n(7))},2922:function(e,t,n){"use strict";(function(t){function i(){var e=this.getDefaultBinding().sub("sources")
return o.createElement("div",{className:"s-gallery "+this._getGalleryClassName()+(this.props.isArranging?" s-arranging":""),ref:"galleryListDOM"},this.isEditMode()?o.createElement("div",{},"\n    ",this._renderForEditor(),"\n  "):null,this.isEditMode()?null:o.createElement("div",{},o.createElement("div",{},this._renderForShow()),this._needToShowPagination()?o.createElement("div",{className:"s-component s-gallery-pagination s-text"},o.createElement("div",{className:"s-component-content"},1!=this._pagesNum?o.createElement("a",{className:"less-link s-common-link",onClick:this._onClickShowLess},t("Editor|Show less")):null,e.get().size>this._pagesNum*this._baseItemNum?o.createElement("a",{className:"more-link s-common-link",onClick:this._onClickShowMore},t("Editor|Show more")):null)):null),null,this.isEditMode()&&!this._isInNativeWeb()?o.createElement("div",{className:"center edit-buttons gallery-add-image"},o.createElement("div",{className:"s-small-black-button",onClick:this._onClickAddImage},"\n      ",t("Add Images"),"\n    "),o.createElement("div",{className:"s-small-black-button",onClick:this._onClickAddVideo,style:{marginLeft:"20px"}},"\n      ",t("Add Videos"),"\n    ")):null,this._isInNativeWeb()?o.createElement("div",{className:"native-button-wrapper"},!this.props.isArranging&&this.props.sources.size>0?o.createElement("div",{className:"s-small-black-button",onClick:this.props.toggleEditor},o.createElement("img",{src:a.cdnAssetPath("/images/icons/native/ic_settings_white_3x.png")}),"\n      ",t("Mobile|Manage items"),"\n    "):null,this.props.isArranging&&this.props.sources.size>0?o.createElement("div",{className:"s-small-black-button",onClick:this.props.toggleEditor},o.createElement("img",{src:a.cdnAssetPath("/images/icons/native/ic_check_1_white_3x.png")}),"\n      ",t("Mobile|Done"),"\n    "):null,o.createElement("div",{className:"s-small-black-button",onClick:this._onClickNativeAddImage.bind(null,"bottom")},o.createElement("img",{src:a.cdnAssetPath("/images/icons/native/ic_add_3x.png")}),"\n      ",t("Mobile|Add Image"),"\n    ")):null)}var o=n(0),a=(n(1),n(35))
e.exports=function(){return i.apply(this,[])}}).call(t,n(7))},2923:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),d=function e(t,n,i){null===t&&(t=Function.prototype)
var o=Object.getOwnPropertyDescriptor(t,n)
if(void 0===o){var a=Object.getPrototypeOf(t)
return null===a?void 0:e(a,n,i)}if("value"in o)return o.value
var r=o.get
return void 0!==r?r.call(i):void 0},f=n(0),p=o(f),m=n(1),h=o(m),g=n(633),v=o(g),y=n(72),b=o(y),_=n(2893),w=o(_),C=n(2894),k=o(C),N=n(35),x=(function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e}(N),null),E=10,S=function(e){function t(){a(this,t)
var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))
e._canRenderLayout=void 0
e._currentIndex=void 0
e._isDragging=!1
e._itemWidth=0
e._columnsNum=3
e._renderList=void 0
e._heightList=void 0
e._itemsList=void 0
e._resizeFn=h.default.debounce(function(){var t=e._updateLayoutMeta()
e._updateSize()
e._canRenderLayout&&(t?e._renderLayout():e.forceUpdate())},100)
e._onDrag=h.default.debounce(function(t,n){if(e._isDragging){var i=e._itemsList[e._currentIndex].listIndex,o=-1
Math.abs(n.position.left)>e._itemWidth/2+E&&(n.position.left>=0?i+=Math.ceil((n.position.left-e._itemWidth/2-E)/(e._itemWidth+E),10):i-=Math.ceil((-n.position.left-e._itemWidth/2-E)/(e._itemWidth+E),10))
i<0&&(i=0)
i>=e._renderList.length&&(i=e._renderList.length-1)
for(var a=e._renderList[i].itemList,r=e._itemsList[e._currentIndex].top+e._heightList[e._currentIndex]*e._itemWidth/2+n.position.top,s=0;s<a.length;s++)if(a[s].top<r&&a[s].bottom>r){o=s
break}var l=e._itemsList[e._currentIndex].listIndex===i
l&&r>a[a.length-1].bottom&&(o=a.length)
l&&o===a.length&&(o=a.length-1)
var u=e._itemsList[e._currentIndex].indexInList===o;-1===o||l&&u||e._doVisualReorder({oldListIndex:e._itemsList[e._currentIndex].listIndex,oldIndexInList:e._itemsList[e._currentIndex].indexInList,newListIndex:i,newIndexInList:o})}},50)
e._getUpdateHeightFn=v.default.boundParamsMemoizer(e._updateHeight,e)
return e}s(t,e)
c(t,[{key:"componentWillMount",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentWillMount",this).call(this)
this._updateList("reset")}},{key:"componentWillReceiveProps",value:function(e){var t=e.binding.default.sub("sources").get().size
if(t>this._heightList.length){this._updateList("add")
this._renderLayout()}else if(t<this._heightList.length){this._updateList("delete")
this._renderLayout()}}},{key:"componentDidMount",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentDidMount",this).call(this)
$(window).on("resize",this._resizeFn)
this._resizeFn()}},{key:"componentWillUnmount",value:function(){$(window).off("resize",this._resizeFn)}},{key:"_updateHeight",value:function(e,t){if(!isNaN(t)&&this._heightList[e]!==t){this._heightList[e]=t
if(this._heightList.every(function(e){return!isNaN(e)})&&this._heightList.join("")!==this._lastHeightList.join("")){this._lastHeightList=h.default.clone(this._heightList)
this._renderLayout()}}}},{key:"_visualDelete",value:function(e){this._heightList[e]=0
var t=this._itemsList[e],n=t.listIndex,i=t.indexInList
this._renderList[n].itemList.splice(i,1)
this._adjustListItemPosition(n)
this._adjustHeight()
this._reorderGallery()}},{key:"_doVisualReorder",value:function(e){var t=this._itemsList[this._currentIndex].top,n=this._itemsList[this._currentIndex].listIndex,i=this._renderList[e.oldListIndex].itemList,o=this._renderList[e.newListIndex].itemList,a=i[e.oldIndexInList]
if(i===o){i[e.oldIndexInList]=i[e.newIndexInList]
i[e.newIndexInList]=a
this._adjustListItemPosition(e.oldListIndex)}else{var r={index:a.index,listIndex:e.newListIndex}
i.splice(e.oldIndexInList,1)
o.splice(e.newIndexInList,0,r)
this._adjustListItemPosition(e.oldListIndex)
this._adjustListItemPosition(e.newListIndex)}var s=this._itemsList[this._currentIndex].top,l=this._itemsList[this._currentIndex].listIndex,u=(l-n)*(this._itemWidth+E),c=s-t
this._adjustHeight()
this._resetCurrentPosition(u,c)
this.forceUpdate()}},{key:"_reorderGallery",value:function(){var e=this,t=[],n=[]
this._renderList.forEach(function(){t.push({currentHeight:0,itemList:[]})})
var i=0
this._renderList.forEach(function(e){i+=e.itemList.length})
for(var o=0;o<i;o++){for(var a=null,r=null,s=[];!r;){a=function(e){var n=-1,i=999999
t.forEach(function(t,o){if(!e.some(function(e){return e===o})&&t.currentHeight<i){n=o
i=t.currentHeight}})
return n}(s)
r=this._renderList[a].itemList[t[a].itemList.length]
s.push(a)}n.push(r.index)
t[a].currentHeight+=this._heightList[r.index]
t[a].itemList.push(r.index)}n.length<this.getDefaultBinding().sub("sources").get().size?this._onReorderAfterDelete(n):this._onReorder(n)
this._heightList=n.map(function(t){return e._heightList[t]})
this._renderLayout()}},{key:"_onReorderAfterDelete",value:function(e){var t=this.getDefaultBinding().sub("sources")
b.default.reorderRepeatableWithSplice(e,t)
this.savePage()}},{key:"_updateSize",value:function(){this._itemWidth=($(this.refs.galleryListDOM).width()-(this._columnsNum-1)*E)/this._columnsNum
this._adjustAllList()}},{key:"_updateList",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"reset",t=this.getDefaultBinding().sub("sources").get().size
this._renderList=[]
this._renderList.length=this._columnsNum
switch(e){case"reset":this._heightList=[]
this._heightList.length=t
for(var n=0;n<t;n++)this._heightList[n]=0
break
case"add":this._heightList.length=t
for(var i=0;i<t;i++)this._heightList[i]=this._heightList[i]||0
break
case"delete":this._heightList.length=t}this._lastHeightList=[]}},{key:"_isEditing",value:function(){var e=this
return this._heightList.some(function(t,n){return"editor"===e.getDefaultBinding().sub("sources."+n).get("_state")})}},{key:"_getShortestIndex",value:function(){var e=-1,t=999999
this._renderList.forEach(function(n,i){var o=n.currentHeight+5e-4*i
if(o<t){e=i
t=o}})
return e}},{key:"_getTallestIndex",value:function(){var e=-1,t=-1
this._renderList.forEach(function(n,i){if(n.currentHeight>t){e=i
t=n.currentHeight}})
return e}},{key:"_getTotalHeight",value:function(){if(!this._itemsList)return 0
for(var e=Math.min(this._pagesNum*this._baseItemNum,this._itemsList.length),t=0,n=0;n<e;n++)this._itemsList[n].bottom>t&&(t=this._itemsList[n].bottom)
return t}},{key:"_getItemPosition",value:function(e,t){if(!this._itemsList)return{width:this._itemWidth+"px",left:0,top:0}
var n={opacity:this._heightList[e]?1:0,width:this._itemWidth+"px",height:this._itemsList[e].bottom-this._itemsList[e].top+"px",left:this._itemsList[e].left+"px",top:this._itemsList[e].top+"px",zIndex:"editor"===this.getDefaultBinding().sub("sources."+e).get("_state")?100:"initial"}
t&&(n.height=this._itemsList[e].bottom-this._itemsList[e].top+"px")
return n}},{key:"_getDragProps",value:function(e){var t=this
return{onStart:function(){t._currentIndex=e},onDrag:function(e,n){if(!t._isDragging){t._isDragging=!0
return t.forceUpdate()}t._onDrag(e,n)},onStop:function(){if(t._isDragging){t._resetCurrentPosition()
t._isDragging=!1
t._reorderGallery()}},allowAnyClick:!1,disabled:this._isEditing()||!1,start:{x:0,y:0},zIndex:100}}},{key:"_adjustHeight",value:function(){var e=this._getTallestIndex(),t=this._renderList[e].itemList.pop()
if(t){this._renderList[e].currentHeight-=this._heightList[t.index]
if(this._getShortestIndex()===e){this._renderList[e].itemList.push(t)
this._renderList[e].currentHeight+=this._heightList[t.index]}else{var n=this._getShortestIndex()
this._renderList[n].itemList.push(t)
this._renderList[n].currentHeight+=this._heightList[t.index]
this._adjustListItemPosition(n)
this._adjustHeight()}}}},{key:"_adjustListItemPosition",value:function(e){var t=this,n=this._renderList[e],i=this._renderList[e].itemList,o=e*(this._itemWidth+E)
n.currentHeight=0
i.forEach(function(i,a){i.listIndex=e
i.indexInList=a
i.left=o
i.top=n.currentHeight*t._itemWidth+a*E
i.bottom=i.top+t._heightList[i.index]*t._itemWidth
t._itemsList[i.index]=h.default.clone(i)
n.currentHeight+=t._heightList[i.index]})}},{key:"_adjustAllList",value:function(){var e=this
this._renderList.forEach(function(t,n){e._adjustListItemPosition(n)})}},{key:"_resetCurrentPosition",value:function(e,t){if(this.refs["draggableItem"+this._currentIndex]){var n=this.refs["draggableItem"+this._currentIndex]
e||t?n.setState({clientX:n.state.clientX-e,clientY:n.state.clientY-t}):n.setState({clientX:0,clientY:0})}}},{key:"_renderLayout",value:function(){var e=this
this._canRenderLayout=!0
this._renderList=[]
this._itemsList=[]
for(var t=0;t<this._columnsNum;t++)this._renderList.push({currentHeight:0,itemList:[]})
this._heightList.forEach(function(t,n){var i=e._getShortestIndex(),o=e._renderList[i],a={index:n}
o.itemList.push(a)
o.currentHeight+=t})
this._adjustAllList()
this.forceUpdate()}},{key:"render",value:function(){var e=this,t=this.getDefaultBinding().sub("sources"),n={height:this._getTotalHeight()+"px",width:"100%",display:this._isGalleryEmpty()||!this._canRenderLayout?"none":"block"},o=this._canRenderLayout&&this._isDragging&&"number"==typeof this._currentIndex,a=t.get().size,r=this._baseItemNum*this._pagesNum,s=function(n){return u("div",{className:"position-wrapper","data-index":n,style:e._getItemPosition(n)},t.sub(n).get("id")+"_wrapper",u("div",{className:"inner-wrapper"},void 0,p.default.createElement(k.default,l({showType:"verticalGallery",index:n,key:t.sub(n).get("id"),updateItemHeight:e._getUpdateHeightFn(n),isArranging:e.props.isArranging},e._getGalleryItemProps(t.sub(n))))))}
return p.default.createElement("div",{ref:"galleryListDOM",className:"s-gallery s-vertical-gallery "+(this._isDragging?"dragging":"")+(this.props.isArranging?" s-arranging":"")},this._isGalleryEmpty()?u("div",{className:"empty-list s-common-status s-font-body"},void 0,i("Mobile|No content.")):p.default.createElement("div",{style:n,className:"vertical-list",ref:"verticalList"},t.get().map(function(n,i){var o=i<r,a=i>=r,u=!e.props.isArranging&&!1,c=u||o
return a?null:c?s(i):p.default.createElement(x,l({ref:"draggableItem"+i},e._getDragProps(i),{key:t.sub(i).get("id")+"_drag_wrapper"}),s(i))}),o&&u("div",{className:"position-wrapper dragging-placeholder",style:this._getItemPosition(this._currentIndex,"placeholder")},"placeholder")),this._needToShowPagination()&&u("div",{className:"s-gallery-pagination s-component s-text"},void 0,u("div",{className:"s-component-content"},void 0,this._pagesNum>1&&u("a",{className:"s-common-link less-link",onClick:this._onClickShowLess},void 0,i("Editor|Show less")),a>r&&u("a",{className:"s-common-link more-link",onClick:this._onClickShowMore},void 0,i("Editor|Show more")))),!1,!1)}}])
return t}(w.default)
t.default=S
e.exports=t.default}).call(t,n(7))},2924:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),s=n(0),l=o(s),u=n(382),c=o(u),d=n(384),f=o(d),p=n(2489),m=o(p),h=n(2488),g=o(h),v=n(8),y=o(v),b=n(13),_=o(b),w=n(2878),C=o(w),k={mixins:[C.default],displayName:"ContactsSection",componentWillMount:function(){var e=y.default.getThemeName(),t=this._getLayoutVariation()
this.getDefaultBinding().get("template_name")
t.split("-").length>=2&&("perspective"===e?["mediaLeft","mediaRight","center"].includes(t.split("-")[0])||(t="center-"+t):["mediaLeft","mediaRight","center"].includes(t.split("-")[0])&&(t=t.split("-").slice(1).join("-")))
var i=n(2885)
this._getLayoutBinding().sub("layout_variation").set(i.getDefaultLayoutKey(e,t))},_getLayoutOptions:function(){var e=y.default.getThemeName()
return n(2885).getLayoutOptions(e)},_renderRepeatable:function(e){var t=this,i=n(2885),o=y.default.getThemeName(),s=this._getLayoutVariation(),u=this.getComponentBinding(e),d=this.getRepeatableBinding(e),p=void 0
"function"==typeof i.getLayout(o,s)&&(p=i.getLayout(o,s)(d))
var h=function(e,n){var i=d.sub(n),o=p,s=o.itemClass,u=p,m=u.naturalImage
return l.default.createElement(g.default,a({className:s,binding:{default:i,listBinding:d},index:n},t._getRepeatableItemProps(d,n)),r("div",{className:"s-item-media-group s-mhi"},void 0,l.default.createElement(f.default,a({size:"480x960>",moreIcons:!0,naturalSize:m},t.getReduxComponentProps("image1",i)))),t.sbHasContent("text1",{parentBinding:i})&&(_.default.getIsSxl()||!m)&&r("div",{className:"s-item-text-group"},void 0,l.default.createElement(c.default,a({tagName:"div",applyWordBreaks:!0,textType:"body"},t.getComponentProps("text1",i)))))},v=this.getComponentProps("repeatable1")
return l.default.createElement(m.default,a({className:"s-mh"+("editor"===u.get("_state")?" s-arranging":"")},v),u.get("list").map(h).toArray())},render:function(){i("Editor|Contact")
i("Editor|A list of small icons. Good for social media.")
return this.getTemplate().apply(this)}}
t.default=k
e.exports=t.default}).call(t,n(7))},2925:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),s=n(2879),l=n(1),u=(function(e){e&&e.__esModule}(l),function(e){function t(e){i(this,t)
var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.hideAdvancedOptions=!0
n.sectionName="new_icon"
return n}a(t,e)
r(t,[{key:"getRotationKeys",value:function(){return"perspective"===this.props.themeName?["mediaLeft-col","mediaRight-col","center-col"]:["col","natural"]}}])
return t}(s.BaseLayoutButton))
t.default=(0,s.connectToStores)(u)
e.exports=t.default},2926:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(12),a=i(o),r=n(24),s=i(r),l=n(2927),u=i(l),c=n(42),d=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(c),f=n(2435),p=i(f),m=n(21),h=i(m),g=function(e){return d.getExternalLinkMappingRS(e,p.default.getPagesList())}
t.default=s.default.createPageComponent({displayName:"ExternalLinkNav",observedProps:["url","text","updateTimeStamp"],bobcatPropTypes:{data:{updateTimeStamp:a.default.number,new_target:a.default.bool,text:a.default.string,url:a.default.string,id:a.default.string,link_type:a.default.string,page_id:a.default.string,section_id:a.default.string}},_getUrlToShow:function(){var e=this.props,t=e.link_type,n=e.url,i=e.page_id,o=e.section_id
if("section"===t)return h.default.getExternalLinkUrl(t,n,i,o)
var a=g(n)
return d.addProtocol(null!=a.publicURL?a.publicURL:a.siteDeleted?"#":n)},_getTarget:function(){var e=this.props,t=e.link_type
return e.new_target&&"section"!==t?"_blank":"_self"},render:function(){return h.default.getShowInNavLinks(this.props.id)?u.default.apply(this):null}})
e.exports=t.default},2927:function(e,t,n){"use strict"
var i=n(0)
n(1)
e.exports=function(){return i.createElement("li",{className:this.props.liClassName},i.createElement("a",{className:"s-external-link-item s-nav-item",href:this._getUrlToShow(),target:this._getTarget()},i.createElement("span",{className:"s-font-body"},this.props.text)))}},2928:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=n(4),r=o(a),s=n(21),l=o(s),u=n(8),c=o(u),d=n(13),f=o(d),p=n(374),m=o(p),h=n(15),g=o(h),v=n(2878),y=o(v),b=n(389),_=o(b),w=n(1),C=o(w),k=!1,N={mixins:[y.default],displayName:"BlogSection",waypointHandler:function(){var e=this._getLayoutProps().layoutVariation
if(!k&&l.default.getSections().length<3&&-1!==["A","B","C"].indexOf(e)){var t=$(r.default.findDOMNode(this)).find(".s-layout .s-component-editor")
t.tooltip({placement:"left",trigger:"manual",extraClassNames:"swing-right",title:i("Blog|Try different layouts for blog!")})
k=!0
t.tooltip("show")
t.one("mouseenter",function(){return t.tooltip("destroy")})
return setTimeout(function(){return t.tooltip("destroy")},2e4)}},componentWillMount:function(){var e=this._getLayoutProps().layoutVariation,t=c.default.getThemeName()
this._getLayoutBinding().sub("layout_variation").set(_.default.getDefaultLayoutKey(t,e))
var n=this.getDefaultBinding().get("components.blog1").toJS()
C.default.isEmpty(n.category)&&this.getDefaultBinding().set("components.blog1.category",g.default.fromJS({id:"all",name:i("Section|All Categories")}))},_getWaypointProps:function(){return{handler:this.waypointHandler,offset:20}},_getLayoutOptions:function(){var e=c.default.getThemeName()
return _.default.getLayoutOptions(e)},_isBlogCategoryFeatureAvailable:function(){return m.default.canUse("blog_category")&&f.default.isBlogCategoryRolledOut()},render:function(){i("Editor|Simple Blog")
i("Editor|Write beautiful blog posts that open in a new page.")
return this.getTemplate().apply(this)}}
t.default=N
e.exports=t.default}).call(t,n(7))},2929:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),c=n(0),d=(o(c),n(1)),f=o(d),p=n(2879),m=n(389),h=o(m),g=n(2884),v=o(g),y=n(160),b=o(y),_=n(8),w=o(_),C=n(13),k=o(C),N=n(157),x=o(N),E=n(59),S=o(E),P=function(e){function t(e){a(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.hideAdvancedOptions=!k.default.getBlogLayouts()
n.sectionName="blog section"
return n}s(t,e)
u(t,[{key:"componentDidMount",value:function(){var e=this;(0,this.props.addBlogCategoriesChangeListener)(function(){e.forceUpdate()})}},{key:"getRotationKeys",value:function(){var e=this.props.themeName
if(this.hideAdvancedOptions)return h.default.getOldLayoutOptions(e)
var t=this._getParsedLayoutVariation(),n=t.columns,i=t.thumbnail,o=t.snippet,a=t.showCategoryTabs
return this.props.layoutOptions.map(function(e){var t=e.replace("thumbnail","smallCircle"===i||"smallSquare"===i?i:"smallCircle")
t=t.replace("snippet","short"===o||"long"===o?o:"short")
t=t.replace("num","one"!==n?n:"three")
return t+"-"+(a?"show":"none")})}},{key:"_renderColumnsButton",value:function(){function e(e){return r[e]}var t=this,n=this._getParsedLayoutVariation(),o=n.columns,a=n.getAllColumns,r=a(),s=Object.keys(r)
return l(v.default,{keys:s,selectedKey:o,textMapping:e,labelText:i("Editor|Columns Per Row"),className:"small-buttons four",onSelect:function(e){return t._changeColumns({columns:e})}})}},{key:"_renderThumbnailDropdown",value:function(){var e=this,t=this._getParsedLayoutVariation(),n=t.getThumbnailSelectItem()
return n.length>0&&l("div",{className:"s-layout-menu-field drop-down-select"},void 0,l("div",{className:"s-layout-menu-label"},void 0,i("Editor|Thumbnail")),l("select",{value:this._getParsedLayoutVariation().thumbnail,onChange:function(t){return e._changeThumbnail({thumbnail:t.target.value})}},void 0,n.map(function(e,t){return l("option",{value:e.value},t,e.name)})))}},{key:"_renderSnippetDropdown",value:function(){var e=this,t=this._getParsedLayoutVariation(),n=t.getSnippetSelectItem()
return n.length>1&&l("div",{className:"s-layout-menu-field drop-down-select"},void 0,l("div",{className:"s-layout-menu-label"},void 0,i("Editor|Snippet")),l("select",{value:this._getParsedLayoutVariation().snippet,onChange:function(t){return e._patchLayout({snippet:t.target.value})}},void 0,n.map(function(e,t){return l("option",{value:e.value},t,e.name)})))}},{key:"_renderPostPerPageDropdown",value:function(){var e=this
return l("div",{className:"s-layout-menu-field drop-down-select"},void 0,l("div",{className:"s-layout-menu-label"},void 0,i("Editor|Posts Per Page")),l("select",{value:this.state.postsNumPerPage||b.default.getBlogSetting().previewNumber||10,onChange:function(t){e._changePostPerPage(t.target.value)}},void 0,f.default.range(3,21).map(function(e,t){return l("option",{value:e},t,e)})))}},{key:"_renderShowCategoryCheckbox",value:function(){var e=this,t=this._getParsedLayoutVariation(),n=t.showCategoryTabs
return(0,this.props.getCategories)().length>0&&l("div",{className:"s-layout-menu-field layout-level-button layout-checkbox dark-bg",onClick:function(){e._patchLayout({showCategoryTabs:!n})}},void 0,l("input",{type:"checkbox",checked:n,onChange:function(){e._patchLayout({showCategoryTabs:!n})}}),l("span",{},void 0,i("Editor|Show category tabs")))}},{key:"renderLayoutOptions",value:function(){return l("div",{},void 0,this._renderColumnsButton(),this._renderThumbnailDropdown(),this._renderSnippetDropdown(),this._renderPostPerPageDropdown(),this._renderShowCategoryCheckbox())}},{key:"_changePostPerPage",value:function(e){var t=this.props,n=t.siteId,i=t.saveBlogPreviewNum
this.setState({postsNumPerPage:e})
i(n,e)}},{key:"_changeThumbnail",value:function(e){"one"!==this._getParsedLayoutVariation().columns&&"card"===e.thumbnail&&(e.snippet="none")
this._patchLayout(e)}},{key:"_changeColumns",value:function(e){var t=this._getParsedLayoutVariation(),n=t.columns
if(e.columns!==n&&("one"===n||"one"===e.columns)){e.thumbnail="landscape"
e.snippet="none"}this._patchLayout(e)}},{key:"_patchLayout",value:function(e){var t=Object.assign(this._getParsedLayoutVariation(),e),n=t.serialize()
this.props.updateLayout(n)}},{key:"_getParsedLayoutVariation",value:function(){return h.default.parseLayoutVariation(this._levelKeys.join("-"))}}])
return t}(p.BaseLayoutButton)
t.default=(0,x.default)(P,[],function(){return{themeName:w.default.getThemeName(),siteId:w.default.getId()}},function(){return{saveBlogPreviewNum:function(e,t){S.default.saveBlogPreviewNum(e,t)},getCategories:function(){return b.default.getCategories()},addBlogCategoriesChangeListener:function(e){b.default.addBlogCategoriesChangeListener(e)}}})
e.exports=t.default}).call(t,n(7))},2930:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=(o(r),n(12)),l=o(s),u=n(2896),c=o(u),d=n(15),f=o(d),p=n(631),m=o(p),h=n(24),g=o(h),v=n(160),y=o(v),b=n(8),_=o(b),w=n(157),C=o(w),k=g.default.createPageComponent({mixins:[m.default.enableAfterUpdate()],displayName:"BlogSectionCategorySelector",bobcatPropTypes:{data:{category:l.default.object,binding:l.default.object}},getBobcatDefaultProps:function(){return{data:{category:f.default.Map({id:"all"})}}},componentDidMount:function(){var e=this;(0,this.props.addBlogCategoriesChangeListener)(function(t){"all"===e.props.category.get("id")||y.default.isCategoryIdExist(e.props.category.get("id"))?t===e.props.category.get("id")&&e.forceUpdate():e._onChangeCategory({value:"all"})})},_createDropdownOptions:function(){var e=this.props.getCategories,t=this.props.category.get("id"),n=e().map(function(e){return{value:e.id,label:e.id.toString()===t.toString()?a("div",{className:"option capitalize selected"},void 0,e.name):a("div",{className:"option capitalize"},void 0,e.name)}})
n.length&&"all"!==t&&n.unshift({value:"all",label:a("div",{className:"option"},void 0,i("Sections|All Categories"))})
return n},_getSelectedCategoryName:function(e){var t=this.props.getCategories,n=t(),o=n.find(function(t){return t.id.toString()===e.toString()})
return o?o.name:i("Sections|All Categories")},_onChangeCategory:function(e){var t=this,n=e.value
this.updateData({category:{id:n,name:this._getSelectedCategoryName(n)}})
setTimeout(function(){t.savePage()},1)},render:function(){var e=this.props.category
return this._createDropdownOptions().length<1?null:a("div",{className:"s-component s-category-selector no-text-transform"},void 0,a("div",{className:"s-component-editor",rel:"tooltip-left",title:i("all"===e.get("id")?"Sections|Select a category for this section.":"Sections|Only show posts from a certain category.")},void 0,a(c.default,{options:this._createDropdownOptions(),value:this._getSelectedCategoryName(this.props.category.get("id")),onChange:this._onChangeCategory})))}})
t.default=(0,C.default)(k,[],function(){return{pageId:_.default.getId()}},function(){return{addBlogCategoriesChangeListener:function(e){y.default.addBlogCategoriesChangeListener(e)},getCategories:function(){return y.default.getCategories()}}})
e.exports=t.default}).call(t,n(7))},2931:function(e,t,n){"use strict";(function(t){var i=n(0)
n(1)
e.exports=function(){return i.createElement("div",{className:"s-blog-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title"},t("Sections|Our Blog"))),i.createElement("div",{className:"blog"},i.createElement("div",{className:"blog-row"},i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/blog-image-1.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|New Blog Feature!")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|September 17")))),i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/blog-image-2.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|Lessons Learned from Starting Up")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|September 12")))),i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/blog-image-3.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|Our Commitment to Service")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|August 30"))))),i.createElement("div",{className:"blog-row"},i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/backgrounds/things/t121.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|New Blog Feature!")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|September 17")))),i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/backgrounds/cityscape/t170.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|Lessons Learned from Starting Up")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|September 12")))),i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/backgrounds/things/t121.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|Our Commitment to Service")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|August 30")))))))))}}).call(t,n(7))},2932:function(e,t,n){"use strict";(function(t){var i=n(0),o=(n(1),n(35))
e.exports=function(){return i.createElement("div",{className:"no-bg s-section-thumb s-social-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),i.createElement("div",{className:"social-thumb"},i.createElement("img",{src:o.cdnAssetPath("/images/editor2/social_feed_thumb.png")}))))}}).call(t,n(7))},2933:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){var n=[],i=!0,o=!1,a=void 0
try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done);i=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){o=!0
a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),d=n(1),f=o(d),p=n(0),m=(o(p),n(2879)),h=function(e){function t(e){a(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),i=e.themeName
n.cacheLevel="perspective"===i?1:0
n.sectionName="new_media"
return n}s(t,e)
c(t,[{key:"updateCachedKeys",value:function(e){var t=this.props.themeName,n="perspective"===t?3:2
e[n]=this._levelKeys[n]
this._updateLayout(e)}},{key:"updateToDefaultLayout",value:function(e){var t=n(2881),i=this.props.themeName,o="perspective"===i?1:0,a=f.default.clone(this._levelKeys)
a[o]=e
var r=t.getDefaultLayoutKey(i,a.join("-"))
this.props.updateLayout(r)}},{key:"getRotationKeys",value:function(){var e=u(this._levelKeys,4),t=e[0],n=e[1],i=e[2],o=e[3]
switch(t){case"row":return this._getKeysByLevel(3).map(function(e){return"row-"+n+"-"+i+"-"+e})
case"col":return this._getKeysByLevel(1).map(function(e){return"col-"+e+"-"+i})
case"media":return this._getKeysByLevel(1).map(function(e){return"media-"+e+"-"+i})
case"mediaLeft":case"mediaRight":case"center":return["mediaLeft","mediaRight","center"].map(function(e){return e+"-"+n+"-"+i+"-"+o})
default:return[]}}},{key:"getButtonClassMapping",value:function(){return"perspective"===this.props.themeName?["big-buttons","big-buttons",this._getSmallButtonClass(2),"big-buttons"]:["big-buttons","media"===this._levelKeys[0]?"big-buttons":this._getSmallButtonClass(1),"big-buttons","big-buttons"]}},{key:"renderLayoutOptions",value:function(){var e=this.props.themeName
return l("div",{},void 0,this._getKeysByLevel(0)&&this._renderLayoutButtons(0),this._getKeysByLevel(1)&&this._renderLayoutButtons(1),"perspective"===e?this._getKeysByLevel(3)&&this._renderCheckBox({levelNum:3,checkedKey:"button",unCheckedKey:"text",labelText:i("Editor|Show Buttons")}):l("div",{},void 0,this._getKeysByLevel(3)&&this._renderLayoutButtons(3),this._getKeysByLevel(2)&&this._renderCheckBox({levelNum:2,checkedKey:"button",unCheckedKey:"text",labelText:i("Editor|Show Buttons")})))}}])
return t}(m.BaseLayoutButton)
t.default=(0,m.connectToStores)(h)
e.exports=t.default}).call(t,n(7))},2934:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=function(){function e(e,t){var n=[],i=!0,o=!1,a=void 0
try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done);i=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){o=!0
a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=n(0),l=(o(s),n(2878)),u=o(l),c=n(2426),d=o(c),f=n(1001),p=o(f),m=n(8),h=o(m),g=n(21),v=o(g),y=n(651),b={mixins:[u.default],displayName:"SliderSection",componentWillMount:function(){this.layoutOptions=["left","right","noImage"]
this.layoutName=this._getLayoutProps().binding.get("layout_variation")
"noForeground"===this.layoutName&&this.layoutOptions.push("noForeground")},getInitialState:function(){return{imgEditorState:""}},setStateFunc:function(e){this.setState({imgEditorState:e||""})},bindings:function(){return[p.default.getBinding(),v.default.getBinding()]},getStateFromBindings:function(){var e=Array.from(arguments.length<=0?void 0:arguments[0]),t=r(e,2),n=t[0],i=t[1]
return"s5-theme"===h.default.getThemeName()?{navHeight:n.get("navHeight"),navOverlapsContent:(0,y.getNavOverlapsContentFromNavTheme)(i.get("s5Theme").get("nav"))}:{}},_showMediaWrapper:function(e){return-1===["noImage","noForeground"].indexOf(e)},_sbAnyHasContent:function(e,t){var n=this.getRepeatableBinding("slider1")
return Boolean(this.sbAnyHasContent(t,{parentBinding:n.sub(e)}))},_sbHasMediaContent:function(e){var t=this.getRepeatableBinding("slider1")
return Boolean(this.sbHasContent("media1",{parentBinding:t.sub(e)}))},_getSliderLayoutArr:function(){var e=this._getLayoutVariation(),t=[]
if(-1!==e.indexOf("["))try{t=JSON.parse(e)}catch(e){}else{e||(e=this.layoutOptions[1])
var n=this.getRepeatableBinding("slider1").get().size
t=Array.from(new Array(n),function(){return e})}return t},_imageRatioWarnning:function(e){var t=this.getRepeatableBinding("slider1"),n=t.sub(e+".components.background1"),o=n.get("w"),a=n.get("h")
n.get("url")
if(!o||!a){o=16
a=9}var r=i("Editor|This image is too tall! Please upload a banner with a wider aspect ratio."),s=parseFloat(o/a)
if(s<1.25)return r
if(t.get().size<2)return""
var l=t.sub("0.components.background1")
r=i("Editor|Your banner images are different sizes! You should keep all banner images the same size.")
var u=l.get("w"),c=l.get("h")
if(!u||!c){u=16
c=9}var d=parseFloat(u/c)
return e>0&&Math.abs(s-d)>.2?r:""},_getSliderLayout:function(e){var t=this._getSliderLayoutArr(),n=t[e]
return null!=n?n:this.layoutOptions[1]},_isBannerSection:function(){return"noForeground"===this.layoutName},getSectionStyle:function(){return"s5-theme"===h.default.getThemeName()&&this.props.navOverlapsContent&&0===this.props.index?{paddingTop:this.props.navHeight}:{}},_renderSliderLayoutBtn:function(e){var t=this,n=this._getSliderLayoutArr(),o=n[e],r=this.layoutOptions.indexOf(o),s=this._getLayoutStatusName(r)||"B",l=function(){-1===r&&(r=0)
r===t.layoutOptions.length-1&&(r=-1)
n[e]=t.layoutOptions[++r]
return t._updateLayout(JSON.stringify(n))}
return a("div",{className:"s-component s-layout"},void 0,a("div",{className:"s-component-editor"},void 0,a(d.default,{className:"center clickable small title layout-button",onTap:l,rel:"tooltip-left",title:i("Editor|Click to change layouts.")},void 0,a("span",{},void 0,i("Layout"),a("span",{className:"layout-status"},void 0,s)))))},render:function(){return this.getTemplate().apply(this)}}
t.default=b
e.exports=t.default}).call(t,n(7))},2935:function(e,t,n){"use strict";(function(t){function i(){var e=this.props.content.components.slideSettings.layout_variation
return o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100 "+a.keys(a.pick({"dark-overlays":"noForeground"!==e},a.identity)).join(" ")},o.createElement("div",{className:"prev-arrow"}),o.createElement("div",{className:"next-arrow"}),"noForeground"!==e?o.createElement("div",{className:"s-slider-demo"},o.createElement("div",{className:"title-media"},o.createElement("img",{src:this._getImageUrl(this.props.content.components.slider1.list[0].components.media1.image)})),o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.slider1.list[0].components.text1.value)}}),o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.slider1.list[0].components.text2.value)}}),o.createElement("div",{className:"button s-font-body"},t("Sections|"+this.props.content.components.slider1.list[0].components.button1.text))):null,o.createElement("div",{className:"selector-container "+a.keys(a.pick({"no-foreground":"noForeground"==e},a.identity)).join(" ")},o.createElement("div",{className:"selected selector"}),o.createElement("div",{className:"selector"}),o.createElement("div",{className:"selector"}))))}var o=n(0),a=n(1)
e.exports=function(){return o.createElement("div",{className:"s-section-thumb s-slider-thumb "+this._getBackgroundClass(this.props.content.components.slider1.list[0].components.background1),style:this._getBackgroundStyle(this.props.content.components.slider1.list[0].components.background1)},i.apply(this,[]))}}).call(t,n(7))},2936:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2895)
e.exports=t.default},2937:function(e,t,n){"use strict";(function(t){var i=n(0)
n(1)
e.exports=function(){return i.createElement("div",{className:"s-cta-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),i.createElement("div",{className:"button s-font-body"},t("Sections|"+this.props.content.components.button1.text)))))}}).call(t,n(7))},2938:function(e,t,n){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0})
var i={mixins:[],displayName:"HTMLSection",render:function(){n("Editor|App Store & HTML")
n("Editor|Embed a map, a calendar, a document, a form or any HTML code!")
return this.getTemplate().apply(this)}}
t.default=i
e.exports=t.default}).call(t,n(7))},2939:function(e,t,n){"use strict";(function(t){var i=n(0),o=(n(1),n(383)),a=n(35)
e.exports=function(){return i.createElement("div",{className:"s-html-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),i.createElement("div",{className:"app-store-thumb"},i.createElement(o,{},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/content/appstore.jpg"}),i.createElement("img",{src:a.cdnAssetPath("/images/editor2/appstore-sxl-1-min.png")}))))))}}).call(t,n(7))},2940:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=n(374),r=o(a),s=n(8),l=o(s),u=n(2878),c=o(u),d={mixins:[c.default],displayName:"EcommerceSection",_showLayoutButton:function(){return r.default.canUse("ecommerce_layout")},componentWillMount:function(){var e=l.default.getThemeName(),t=n(2490)
this._getLayoutBinding().sub("layout_variation").set(t.getDefaultLayoutKey(e,this._getLayoutVariation()))},_getLayoutOptions:function(){var e=n(2490),t=l.default.getThemeName()
return e.getLayoutOptions(t)},render:function(){i("Editor|Simple Store")
i("Editor|Sell products right on your site! Manage orders, payments, and more.")
return this.getTemplate().apply(this)}}
t.default=d
e.exports=t.default}).call(t,n(7))},2941:function(e,t,n){"use strict";(function(t){var i=n(0)
n(1)
e.exports=function(){return i.createElement("div",{className:"no-bg s-ecommerce-thumb s-section-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}}))),i.createElement("div",{className:"p50"},i.createElement("div",{className:"store-image"},i.createElement("img",{src:this._getEcommerceProductImage()}))),i.createElement("div",{className:"p50"},i.createElement("div",{className:"item-title s-font-heading"},t("Sections|Smart Light Bulbs")),i.createElement("div",{className:"item-body-text s-font-body"},"$49.99"),i.createElement("div",{className:"item-subtitle s-font-body"},t("Sections|While you might not need all...")),i.createElement("div",{className:"form-thumb s-font-body"},i.createElement("div",{className:"selection-thumb"},i.createElement("div",{className:"select-box"},t("Sections|Purple"),"\n            ",i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/content/selector.png"}))),i.createElement("div",{className:"input-thumb"},i.createElement("div",{className:"input-box"},"1")),i.createElement("div",{className:"button"},t("Sections|Buy Now"))))))}}).call(t,n(7))},2942:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2943)
e.exports=t.default},2943:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),s=n(0),l=o(s),u=n(8),c=o(u),d=n(2489),f=o(d),p=n(2488),m=o(p),h=n(2880),g=o(h),v=n(2878),y=o(v),b={mixins:[y.default],displayName:"ProcessSection",componentWillMount:function(){n(2425).removeOldBackgroundForText(this)
var e=c.default.getThemeName(),t=n(2888),i=this._getLayoutVariation()
this._getLayoutBinding().sub("layout_variation").set(t.getDefaultLayoutKey(e,i))},_getLayoutOptions:function(){var e=c.default.getThemeName()
return n(2888).getLayoutOptions(e)},_shouldRenderItemLinker:function(e,t){return e!==t},_renderItemLinker:function(){return r("div",{className:"process-item-linker"})},_renderRepeatable:function(e){var t=this,i=n(2888),o=c.default.getThemeName(),s=this._getLayoutVariation(),u=this.getComponentBinding(e),d=this.getRepeatableBinding(e),p=void 0
"function"==typeof i.getLayout(o,s)&&(p=i.getLayout(o,s)(d))
var h="function"==typeof i.getItemSize?i.getItemSize(d):void 0,v=function(e,n){var i=d.sub(n),o=p,s=o.itemClass
return l.default.createElement(m.default,a({className:s,binding:{default:i,listBinding:d},index:n},t._getRepeatableItemProps(d,n)),r("div",{className:"process-item-wrapper"},void 0,r("div",{className:"process-item-infos"},void 0,r("div",{className:"process-item-index s-font-body"},void 0,n+1),t._shouldRenderItemLinker(n+1,h)?t._renderItemLinker():null),r(g.default,{section:t,itemBinding:i,binding:i,showItemSubtitle:!1,upperChildrenPosition:!0})))},y=this.getComponentProps("repeatable1")
return l.default.createElement(f.default,a({className:"s-mh"+("editor"===u.get("_state")?" s-arranging":"")},y),u.get("list").map(v).toArray())},render:function(){i("Editor|Process")
i("Editor|A numbered list of steps. Explain how your service works!")
i("Sections|Process")
i("Sections|A numbered list of steps. Explain how your service works!")
i("Sections|Purchase")
i("Sections|Pick your favorites from our high-quality collections, and add to your cart.")
i("Sections|Online Pay")
i("Sections|Enter your address and pay with credit, debit, or PayPal. We ship anywhere.")
i("Sections|Deliver")
i("Sections|We'll deliver your goods within 5 business days. Ask us any questions!")
return this.getTemplate().apply(this)}}
t.default=b
e.exports=t.default}).call(t,n(7))},2944:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),s=n(2879),l=function(e){function t(e){i(this,t)
var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.hideAdvancedOptions=!0
n.sectionName="process"
return n}a(t,e)
r(t,[{key:"getRotationKeys",value:function(){return["horizontal","vertical"]}}])
return t}(s.BaseLayoutButton)
t.default=(0,s.connectToStores)(l)
e.exports=t.default},2945:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"info-box",key:t},o.createElement("div",{className:"number-box",dangerouslySetInnerHTML:{__html:t+1}}),e.components.text1.value?o.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text2.value?o.createElement("div",{className:"item-subtitle s-font-body",dangerouslySetInnerHTML:{__html:e.components.text2.value}}):null)}var o=n(0),a=n(1)
e.exports=function(){return o.createElement("div",{className:"s-process-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null)),o.createElement("div",{className:"p100"},o.createElement.apply(this,["div",{className:"info-boxes"},a.map(this._getRepetableList(this.props.content.components.repeatable1.list,3),i.bind(this))]))))}},2946:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=n(8),r=o(a),s=n(73),l=o(s),u={mixins:[],displayName:"BlockSection",getWholeThemeFeature:function(){var e=l.default.get(r.default.getTheme().get("name"))
return null!=e?e.features:void 0},render:function(){i("Editor|Make Your Own Section")
i("Editor|Want more control over layouts? Arrange components yourself!")
return this.getTemplate().apply(this)}}
t.default=u
e.exports=t.default}).call(t,n(7))},2947:function(e,t,n){"use strict";(function(t){var i=n(0),o=(n(1),n(35))
e.exports=function(){return i.createElement("div",{className:"no-bg s-block-thumb s-section-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title"},t("Make Your Own Section!")))),i.createElement("div",{},i.createElement("img",{src:o.cdnAssetPath("/images/editor2/block-components.png")}))))}}).call(t,n(7))},2948:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=n(374),r=o(a),s=n(8),l=o(s),u=n(2490),c=o(u),d=n(2878),f=o(d),p={mixins:[f.default],displayName:"PortfolioSection",componentWillMount:function(){var e=l.default.getThemeName(),t=this._getLayoutVariation()
if(c.default.isOldLayoutKey(e,t)){var n=c.default.getDefaultLayoutKey(e,t)
this._updateLayout(n)}},_showLayoutButton:function(){return r.default.canUse("portfolio_layout")},_getLayoutOptions:function(){var e=l.default.getThemeName()
return c.default.getLayoutOptions(e)},render:function(){i("Editor|Product Showcase")
i("Editor|Add details and descriptions to each product.")
return this.getTemplate().apply(this)}}
t.default=p
e.exports=t.default}).call(t,n(7))},2949:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(287),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a=n(2897)
t.default=(0,a.createCategorySelector)(o.default,"PortfolioCategorySelector",!0)
e.exports=t.default},2950:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),s=n(0),l=o(s),u=n(12),c=o(u),d=n(373),f=o(d),p=n(13),m=o(p),h=n(2),g=o(h),v=n(6),y=o(v),b=n(24),_=o(b),w=n(27),C=o(w),k=n(390),N=o(k),x=n(8),E=o(x),S=n(287),P=o(S),T=n(58),O=o(T),L=n(655),M=o(L),I=n(385),B=o(I),D=n(2439),A=o(D),j=n(2547),H=o(j),R=n(103),U=o(R),F=n(104),V=n(652),z=n(71),W=o(z),$=!1,G=_.default.createPageComponent({displayName:"Portfolio",mixins:[(0,O.default)("editor"),U.default],bobcatPropTypes:{data:{text:c.default.string,category:c.default.oneOfType([c.default.string,c.default.number]),binding:c.default.object},internal:{onConnectionFailed:c.default.func}},getBobcatDefaultProps:function(){return{data:{category:"all"}}},componentWillMount:function(){this.initMeta({currentCategory:this.dtProps.category,nextCategory:this.dtProps.category,currentPage:1,detailMode:!1})},componentDidMount:function(){var e=this
this._loadProductsFromServer()
P.default.getFirstLoadingState("settings")&&N.default.getPortfolioSettings({pageId:E.default.getId()})
P.default.getFirstLoadingState("categories")&&N.default.getPortfolioCategories({pageId:E.default.getId()})
this._token=M.default.register(function(t){switch(t.actionType){case B.default.ActionTypes.GET_ECOMMERCE_PRODUCTS_SUCCESS:e.setMeta("currentCategory",e.getMeta("nextCategory"))
if(!$){$=!0
var i=n(217)
i.init()
i.trackPortfolioBuyerEvent(m.default.getKeenIoPortfolioBuyerLanding())}}})
this._onCategoryChangeListenId=P.default.getCategoriesBinding().addListener("",this._onCategoryChange);(0,y.default)(window).on("resize.portfolio",W.default.debounce(function(){return e.forceUpdate()},300))},componentDidUpdate:function(e){if(this._getRenderCategory(this.dtProps.category)!==this._getRenderCategory(e.category)||e.category!==this.dtProps.category){if("all"===this._getRenderCategory(this.dtProps.category)||"all"===this.dtProps.category){this.setMeta("nextCategory","all")
this.setMeta("currentCategory","all")
this.setMeta("currentPage",1)}else{this.setMeta("nextCategory",this.dtProps.category)
this.setMeta("currentCategory",this.dtProps.category)
this.setMeta("currentPage",1)}this._loadProductsFromServer()}},componentWillUnmount:function(){M.default.unregister(this._token)
P.default.getCategoriesBinding().removeListener(this._onCategoryChangeListenId);(0,y.default)(window).off("resize.portfolio")},_onCategoryChange:function(){var e=this
return this.setTimeout(function(){return e._loadProductsFromServer()},10)},_getProductsData:function(){return P.default.getProducts(this._getRenderCategory(this.dtProps.category),this.getMeta("currentPage"))},_getEditBtnText:function(){var e=this._getProductsData().length
return i(0===e?"Portfolio|Add Product":1===e?"Portfolio|Manage Product":"Portfolio|Manage Products")},_getRenderCategory:function(e){var t="all"===e?this.getMeta("currentCategory"):e
P.default.isCategoryIdExist(t)||(t="all")
return t},_loadProductsFromServer:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments[1]
this.setMeta("currentPage",t)
var i=N.default.getPortfolioProducts({pageId:E.default.getId(),category:n||this._getRenderCategory(this.dtProps.category),page:t})
if(i)return i.fail(function(){return e.props.onConnectionFailed()})},_getCurrentPageNum:function(){return this.getMeta("currentPage")},_loadNextPage:function(){var e=this._getCurrentPageNum()
this.setMeta("currentPage",e+1)
return this._loadProductsFromServer(e+1)},_onClickEditor:function(e){C.default.openPortfolioManagerDialog(e)},_changeCategory:function(e){this.setMeta("nextCategory",e)
this.setMeta("currentCategory",e)
return this._loadProductsFromServer(1,e)},_changeToDetailMode:function(){return this.setMeta("detailMode",!0)},_changeToNormalMode:function(){return this.setMeta("detailMode",!1)},_getCategoryBarProps:function(){return{currentCategory:this.getMeta("nextCategory"),changeCategory:this._changeCategory,categories:P.default.getCategories()}},_getWrapperProps:function(){return{products:this._getProductsData(),pageId:E.default.getId(),hasMultipleProducts:P.default.getProducts().length>=2,settings:P.default.getSettings(),layout:this.props.layout||"landscape-three",category:this.props.category||"all",changeToDetailMode:this._changeToDetailMode,changeToNormalMode:this._changeToNormalMode}},render:function(){var e=this
this.observeBinding(P.default.getBinding())
var t=P.default.getPagination(this.getMeta("currentCategory")),n=this.getMeta("detailMode"),o=this._getEditBtnText(),s=P.default.getLoadingState("product")||P.default.getLoadingState("settings")||P.default.getLoadingState("category"),u="persona"===E.default.getTheme().get("name")?"":"sixteen columns",c=m.default.getFromSiteToApp(),d=r("div",{className:u+" s-ecommerce-empty-box s-common-status no-float"},void 0,r("div",{className:"tags"},void 0,r("div",{className:"fa fa-folder-open"}),r("div",{className:"fa fa-folder-open"}),r("div",{className:"fa fa-folder-open"})),r("div",{className:"text s-font-body"},void 0,i("Portfolio|No products in this product showcase now!"))),f=t&&t.totalPages>=2&&(c?r("div",{className:"s-ecommerce-pagination"},void 0,r(F.Link,{className:"s-ecommerce-pagination-item s-font-body",to:"/store/page?category="+this.dtProps.category},void 0,i("Ecommerce|View more"))):r("div",{className:"s-ecommerce-pagination"},void 0,t.totalPages>this._getCurrentPageNum()&&r("span",{className:"s-ecommerce-pagination-item s-font-body",onClick:this._loadNextPage},void 0,i("Ecommerce|Show more")),this._getCurrentPageNum()>1&&r("span",{className:"s-ecommerce-pagination-item s-font-body",onClick:function(){return e.setMeta("currentPage",1)}},void 0,i("Ecommerce|Show less"))))
return l.default.createElement("div",{className:"s-component s-ecommerce",ref:"root"},r("div",{className:"s-ecommerce-content"},void 0,P.default.getCategories().length>0&&("all"===this.dtProps.category||!P.default.isCategoryIdExist(this.dtProps.category))&&r("div",{className:"persona"===E.default.getTheme().get("name")?"":"sixteen columns",style:{display:n?"none":"block"}},void 0,l.default.createElement(H.default,a({sbClass:this.props.sbClass},this._getCategoryBarProps()),r("div",{className:"s-component-editor-wrapper"},void 0,r("div",{className:(0,g.default)("s-component-overlay",{visible:m.default.getInWeChat()}),onClick:function(){return e._onClickEditor({tab:"category"})}},void 0,r("div",{className:"overlay"},void 0,r("div",{className:"center"},void 0,r("span",{},void 0,i("Portfolio|Manage Categories")))))))),s&&r("div",{className:(0,g.default)("s-loading-wrapper",{"relative-wrapper":!this._getProductsData().length})},void 0,r("div",{className:"s-loading"})),l.default.createElement(A.default,a({},this._getWrapperProps(),{isLoading:s,emptyComponent:d,paginationComponent:f}),!s&&r("div",{className:"s-component-editor-wrapper"},void 0,r("div",{className:"s-component-overlay"+(m.default.getInWeChat()?" visible":""),onClick:function(){return e._onClickEditor({category:e.dtProps.category,tab:"product"})}},void 0,r("div",{className:"overlay"},void 0,r("div",{className:"center"},void 0,r("span",{},void 0,o))))))))}}),K=(0,V.addOffline)(G)
G.WaypointLazy=(0,f.default)(K)
t.default=K
e.exports=t.default}).call(t,n(7))},2951:function(e,t,n){"use strict";(function(t){function i(e,t){return o.createElement("div",{className:"column-image",key:t},o.createElement("div",{className:"image-wrapper"},o.createElement("img",{src:r.cdnAssetPath(this._getImageUrl(e.components.media1.image))})),o.createElement("div",{className:"item-text-group"},e.components.text1.value?o.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null))}var o=n(0),a=n(1),r=n(35)
e.exports=function(){return o.createElement("div",{className:"no-bg s-portfolio-thumb s-section-thumb"},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}}))),this.props.content.components.repeatable1.list.length?o.createElement("div",{className:"p100"},o.createElement.apply(this,["div",{className:"columns-media"},a.map(this._getRepetableList(this.props.content.components.repeatable1.list),i.bind(this))])):null))}}).call(t,n(7))},2952:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),c=n(0),d=o(c),f=n(12),p=(o(f),n(6)),m=o(p),h=n(27),g=o(h),v=function(e){function t(e){a(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n._onClickLink=n._onClickLink.bind(n)
return n}s(t,e)
u(t,[{key:"componentDidMount",value:function(){"terms-and-conditions"===m.default.url().param("open")&&g.default.openDialog("termsDialog")}},{key:"_onClickLink",value:function(){this.props.onClickLink?this.props.onClickLink():g.default.openDialog("termsDialog")}},{key:"_onClickOpenSettings",value:function(){g.default.openPageSettings({tabName:"legal"})}},{key:"render",value:function(){var e="s-terms-link "+(this.props.className||""),t=this.props.hasPrivacyPolicy
return l("div",{className:e,style:{position:"relative",marginRight:t?"20px":"0"}},void 0,!1,l("a",{className:"s-common-link",onClick:this._onClickLink,target:"_blank"},void 0,i("EditorSettings|Terms & Conditions")))}}])
return t}(d.default.Component)
t.default=v
e.exports=t.default}).call(t,n(7))},2953:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),c=n(0),d=o(c),f=n(12),p=(o(f),n(6)),m=o(p),h=n(27),g=o(h),v=function(e){function t(e){a(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n._onClickLink=n._onClickLink.bind(n)
return n}s(t,e)
u(t,[{key:"componentDidMount",value:function(){"privacy-policy"===m.default.url().param("open")&&g.default.openDialog("privacyPolicyDialog")}},{key:"_onClickLink",value:function(){this.props.onClickLink?this.props.onClickLink():g.default.openDialog("privacyPolicyDialog")}},{key:"_onClickOpenSettings",value:function(){g.default.openPageSettings({tabName:"legal"})}},{key:"render",value:function(){var e="s-terms-link "+(this.props.className||"")
return l("div",{className:e,style:{position:"relative"}},void 0,!1,l("a",{className:"s-common-link",onClick:this._onClickLink,target:"_blank"},void 0,i("EditorSettings|Privacy Policy")))}}])
return t}(d.default.Component)
t.default=v
e.exports=t.default}).call(t,n(7))},2954:function(e,t,n){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0})
var i={mixins:[],displayName:"DonationSection",render:function(){n("Editor|Simple Store")
n("Editor|Sell products right on your site! Manage orders, payments, and more.")
return this.getTemplate().apply(this)}}
t.default=i
e.exports=t.default}).call(t,n(7))},2955:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),c=n(0),d=o(c),f=n(27),p=o(f),m=n(2539),h=o(m),g=n(8),v=o(g),y=n(218),b=o(y),_=n(971),w=function(e){var t=e.leftPrice,n=e.rightPrice,i={width:Math.min(t/n*100,100)+"%"},o={left:"calc("+Math.min(t/n*100,100)+"% - 10px)"}
return u("div",{className:"progress-bar"},void 0,u("div",{className:"progress",style:i}),u("div",{className:"indicator",style:o}))},C=function(e){function t(e){a(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n._listener=n._listener.bind(n)
return n}s(t,e)
l(t,[{key:"componentDidMount",value:function(){p.default.getDonationSettings({pageId:v.default.getId()})
h.default.addChangeListener(this._listener)}},{key:"componentWillUnmount",value:function(){h.default.removeChangeListener(this._listener)}},{key:"_listener",value:function(){this.forceUpdate()}},{key:"_onClickOpenManager",value:function(){p.default.openDialog("donationManager")}},{key:"_onClickOpenDonateDialog",value:function(){p.default.openDialog("donateDialog",{strong:!0})}},{key:"render",value:function(){var e=h.default.getData(),t=e.settings,n=(e.state,e.currencyFormat)
return u("div",{className:"s-component s-donation "+(this.props.sbClass?this.props.sbClass:"")},void 0,!1,t.data.showProgress&&u("div",{className:"s-donation-progress"},void 0,u(w,{leftPrice:t.paid,rightPrice:t.goal}),u("div",{className:"left-price"},void 0,u("div",{className:"price"},void 0,(0,_.getFormattedPrice)(t.paid,n)),u("div",{className:"text"},void 0,i("Donation|Raised"))),u("div",{className:"right-price"},void 0,u("div",{className:"price"},void 0,(0,_.getFormattedPrice)(t.goal,n)),u("div",{className:"text"},void 0,i("Donation|Goal")))),u(b.default,{component:"div",className:"s-common-button s-cta-button",onClick:this._onClickOpenDonateDialog},void 0,t.data.buttonText||i("Donation|Donate")))}}])
return t}(d.default.Component)
t.default=C
e.exports=t.default}).call(t,n(7))},2956:function(e,t,n){"use strict";(function(t){var i=n(0)
n(1)
e.exports=function(){return i.createElement("div",{className:"no-bg s-donation-thumb s-section-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}}))),i.createElement("div",{className:"p100"},i.createElement("div",{className:"progress-bar"},i.createElement("div",{className:"progress"}),i.createElement("div",{className:"indicator"})),i.createElement("div",{className:"price-bar"},i.createElement("div",{className:"left-price"},i.createElement("div",{className:"price"},"400"),i.createElement("div",{className:"text"},t("Donation|Raised"))),i.createElement("div",{className:"right-price"},i.createElement("div",{className:"price"},"10000"),i.createElement("div",{className:"text"},t("Donation|Goal")))),i.createElement("div",{className:"button"},t("Sections|Donate Now")))))}}).call(t,n(7))},2957:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2898)
e.exports=t.default},2958:function(e){e.exports=function(e,t){if(e===t)return!0
var n=Object.keys(e),i=Object.keys(t),o=n.length
if(i.length!==o)return!1
for(var a=0;a<o;a++){var r=n[a]
if(e[r]!==t[r])return!1}return!0}},2959:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),c=n(2879),d=n(2960),f=o(d),p=n(0),m=(o(p),n(1)),h=o(m),g=n(2),v=o(g),y=n(2884),b=o(y),_=n(8),w=o(_),C=n(2899),k=o(C),N=function(e){function t(e){a(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.hideAdvancedOptions=!1
n.buttonTitle=i("Editor|Grid Layout")
return n}s(t,e)
u(t,[{key:"getRotationKeys",value:function(){return[]}},{key:"renderLayoutOptions",value:function(){var e=this._getParsedLayoutVariation()
return l("div",{},void 0,this._renderMagazineGridToggle(),e.isGrid()?this._renderGridUI():this._renderMagazineUI(),this._renderDropdowns())}},{key:"_renderDropdowns",value:function(){var e=this,t=w.default.getThemeName(),n=null,o=this._getParsedLayoutVariation()
k.default.themesWithoutWideGridLayout.includes(t)||(n=l("div",{className:"s-layout-menu-field drop-down-select"},void 0,l("div",{className:"s-layout-menu-label"},void 0,i("Editor|Content Width")),l("select",{value:o.contentWidth,onChange:function(t){return e._patchLayout({contentWidth:t.target.value})}},void 0,l("option",{value:"normal"},void 0,i("Editor|Normal")),l("option",{value:"wide"},void 0,i("Editor|Wide")))))
return l("div",{},void 0,l("div",{className:"s-layout-menu-field drop-down-select"},void 0,l("div",{className:"s-layout-menu-label"},void 0,i("Editor|Height")),l("select",{value:this._getParsedLayoutVariation().cellHeight,onChange:function(t){return e._patchLayout({cellHeight:t.target.value})}},void 0,l("option",{value:"small"},void 0,i("Editor|Small")),l("option",{value:"medium"},void 0,i("Editor|Medium")),l("option",{value:"large"},void 0,i("Editor|Large")),o.canBeExtraLarge()?l("option",{value:"extraLarge"},void 0,i("Editor|Extra Large")):null)),l("div",{className:"s-layout-menu-field drop-down-select"},void 0,l("div",{className:"s-layout-menu-label"},void 0,i("Editor|Spacing")),l("select",{value:o.cellSpacing,onChange:function(t){return e._patchLayout({cellSpacing:t.target.value})}},void 0,l("option",{value:"none"},void 0,i("Editor|None")),l("option",{value:"small"},void 0,i("Editor|Small")),l("option",{value:"large"},void 0,i("Editor|Large")))),n)}},{key:"_renderMagazineGridToggle",value:function(){var e=this,t=function(e){return{grid:i("Editor|Grid"),magazine:i("Editor|Magazine")}[e]}
return l(b.default,{keys:["grid","magazine"],selectedKey:this._getParsedLayoutVariation().gridType,textMapping:t,className:"big-buttons",onSelect:function(t){var n=e._getParsedLayoutVariation(),i=n.getCellCount(),o={gridType:t}
if("magazine"===t)o.magazineLayoutName=i<=3?"twoLeftOneRight":4===i?"twoTopTwoBottom":"twoTopThreeBottom"
else if(i<=4){o.rows=2
o.columns=2}else{o.rows=2
o.columns=3}e._patchLayout(o)}})}},{key:"_patchLayout",value:function(e){var t=Object.assign(this._getParsedLayoutVariation(),e),n=t.serialize()
this.props.updateLayout(n)}},{key:"_renderGridUI",value:function(){var e=this,t=this._getParsedLayoutVariation()
return l(f.default,{maxRows:4,maxColumns:4,selectedRows:t.rows,selectedColumns:t.columns,onSelect:function(t,n){e._patchLayout({rows:t,columns:n})}})}},{key:"_renderMagazineUI",value:function(){var e=this,t=h.default.map(k.default.magazineLayouts,function(t){var n=t.name===e._getParsedLayoutVariation().magazineLayoutName,i=(0,v.default)("s-grid-layout-button-magazine",{_selected:n}),o=h.default.range(0,t.cellCount).map(function(e){return l("div",{className:"s-grid-section-cell _"+t.name},e,l("div",{}))})
if("oneLeftTwoRight"===t.name||"twoLeftOneRight"===t.name){var a="s-magazine-column _"+t.name
o=[l("div",{className:a},"column-1",o[0],o[1]),l("div",{className:a},"column-2",o[2])]}var r=l("div",{},void 0,l("div",{className:"s-grid-layout-button-preview"},void 0,o))
return l("button",{onClick:function(){return e._patchLayout({magazineLayoutName:t.name})},className:i},t.name,r)})
return l("div",{className:"s-layout-menu-field s-grid-layout-buttons-magazine"},void 0,t)}},{key:"_getParsedLayoutVariation",value:function(){return k.default.parseLayoutVariation(this._levelKeys.join("-"))}}])
return t}(c.BaseLayoutButton)
t.default=(0,c.connectToStores)(N)
e.exports=t.default}).call(t,n(7))},2960:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e,t,n,i){return n<=e&&i<=t}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}()
Object.defineProperty(t,"__esModule",{value:!0})
var l=n(0),u=n(1),c=n(2),d=function(e){function t(e){i(this,t)
var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.state={previewRows:null,previewColumns:null}
return n}a(t,e)
s(t,[{key:"_isInPreviewSelection",value:function(e,t){return!!this._hasPreview()&&r(this.state.previewRows,this.state.previewColumns,e,t)}},{key:"_isInSelection",value:function(e,t){return r(this.props.selectedRows,this.props.selectedColumns,e,t)}},{key:"_isSelectedSize",value:function(e,t){return e===this.props.selectedRows&&t===this.props.selectedColumns}},{key:"_isPreviewSize",value:function(e,t){return e===this.state.previewRows&&t===this.state.previewColumns}},{key:"_hasPreview",value:function(){return null!==this.state.previewRows&&null!==this.state.previewColumns}},{key:"_renderRow",value:function(e){var t=this,n=this.props.maxColumns,i=u.range(1,n+1).map(function(n){return t._renderCell(e,n)})
return l.createElement("tr",{key:e},i)}},{key:"_renderCell",value:function(e,t){var n=this,i=this._hasPreview(),o=1===e&&1===t,a=void 0
a=i?this.state.previewRows+"×"+this.state.previewColumns:this.props.selectedRows+"×"+this.props.selectedColumns
var r=c("s-grid-size-selector-cell",{"_in-selection":this._isInSelection(e,t),"_in-preview":this._isInPreviewSelection(e,t)})
return l.createElement("td",{key:e+"-"+t,onMouseEnter:function(){return n.setState({previewColumns:t,previewRows:e})},onMouseLeave:function(){return n.setState({previewColumns:null,previewRows:null})},onClick:function(){return n.props.onSelect(e,t)},className:r},o?a:null)}},{key:"render",value:function(){var e=this,t=this.props.maxRows,n=u.range(1,t+1).map(function(t){return e._renderRow(t)}),i=c("s-grid-size-selector",{"_has-preview":this._hasPreview()})
return l.createElement("table",{className:i+" s-layout-menu-field"},l.createElement("tbody",null,n))}}])
return t}(l.Component)
t.default=d},2961:function(e,t,n){"use strict"
var i=n(0)
n(1),n(2898)
e.exports=function(){return i.createElement("div",{},"\n  ",this.renderSection(),"\n")}},2962:function(e,t,n){"use strict"
function i(e){return o.createElement("div",{className:"grid-thumb-item"},o.createElement("div",{className:"grid-thumb-item-content",style:this._getBackgroundStyle(e.components.background1)},o.createElement("div",{className:"s-item-title"},"\n            ",e.components.text1.value,"\n          ")))}var o=n(0),a=n(1)
e.exports=function(){return o.createElement("div",{className:"s-grid-thumb s-section-thumb","=undefined":!0},o.createElement("div",{className:"s-section-thumb-content"},o.createElement.apply(this,["div",{className:"grid-thumb-container"},a.map(this.props.content.components.repeatable1.list,i.bind(this))])))}},2966:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"text-container",key:t},e.components.text1.value?o.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text2.value?o.createElement("div",{className:"item-subtitle s-font-body",dangerouslySetInnerHTML:{__html:e.components.text2.value}}):null)}var o=n(0),a=n(1)
e.exports=function(){return o.createElement("div",{className:"no-bg s-section-thumb s-text-thumb"},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null),this.props.content.components.repeatable1.list.length?o.createElement.apply(this,["div",{},a.map(this.props.content.components.repeatable1.list,i.bind(this))]):null)))}},2967:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"gallery-image",key:t},o.createElement("img",{src:this._getImageUrl(e,!0)}))}var o=n(0),a=n(1)
e.exports=function(){return o.createElement("div",{className:"no-bg s-gallery-thumb s-section-thumb"},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null)),this.props.content.components.gallery1.sources.length?o.createElement("div",{className:"p100"},o.createElement.apply(this,["div",{className:"gallery-media"},a.map(this._getRepetableList(this.props.content.components.gallery1.sources,8),i.bind(this))])):null))}},2968:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"info-box",key:t},e.components.text1.value?o.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text2.value?o.createElement("div",{className:"item-subtitle s-font-body",dangerouslySetInnerHTML:{__html:e.components.text2.value}}):null)}var o=n(0),a=n(1)
e.exports=function(){return o.createElement("div",{className:"s-info-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null)),o.createElement("div",{className:"p100"},o.createElement.apply(this,["div",{className:"info-boxes"},a.map(this._getRepetableList(this.props.content.components.repeatable1.list,4),i.bind(this))]))))}},2969:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"icon",key:t},o.createElement("img",{src:this._getImageUrl(e.components.image1)}),e.components.text1.value?o.createElement("div",{className:"item-subtitle",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null)}var o=n(0),a=n(1),r=n(383)
e.exports=function(){return o.createElement("div",{className:"no-bg s-icons-thumb s-section-thumb"},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null)),o.createElement("div",{className:"p100"},o.createElement(r,{},o.createElement.apply(this,["div",{className:"icons-media s-font-body"},a.map(this._getRepetableList(this.props.content.components.repeatable1.list,4),i.bind(this))]),o.createElement("div",{className:"icons-media s-font-body"},o.createElement("div",{className:"icon"},o.createElement("img",{src:"//o0m4okv24.qnssl.com/static/icons/black/wechat-icon.png"}),o.createElement("div",{className:"item-subtitle"},"微信")),o.createElement("div",{className:"icon"},o.createElement("img",{src:"//o0m4okv24.qnssl.com/static/icons/black/weibo-icon.png"}),o.createElement("div",{className:"item-subtitle"},"微博")),o.createElement("div",{className:"icon"},o.createElement("img",{src:"//o0m4okv24.qnssl.com/page/images/icons/phone-icon.png"}),o.createElement("div",{className:"item-subtitle"},"电话")),o.createElement("div",{className:"icon"},o.createElement("img",{src:"//o0m4okv24.qnssl.com/page/images/icons/email-icon.png"}),o.createElement("div",{className:"item-subtitle"},"邮箱")))))))}},2970:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2895)
e.exports=t.default},2971:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){var n=[],i=!0,o=!1,a=void 0
try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done);i=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){o=!0
a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),l=n(2879),u=n(1),c=(function(e){e&&e.__esModule}(u),function(e){function t(e){i(this,t)
var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.hideAdvancedOptions=!0
n.sectionName="new_title"
return n}a(t,e)
s(t,[{key:"componentDidMount",value:function(){this._rightLayout="center-right-normal"===this.props.layoutVariation}},{key:"getRotationKeys",value:function(){var e=r(this._levelKeys,3),t=(e[0],e[1],e[2]),n=["center-subTop-"+t,"center-bottom-"+t]
this._rightLayout&&n.push("center-right-"+t)
return n}}])
return t}(l.BaseLayoutButton))
t.default=(0,l.connectToStores)(c)
e.exports=t.default},2972:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(12),a=i(o),r=n(2435),s=i(r),l=n(8),u=i(l),c=n(1004),d=i(c),f=n(211),p=i(f),m={observedProps:["showNav"],displayName:"NavbarSection",propTypes:{binding:a.default.object.isRequired,firstSectionBackgroundProps:a.default.object.isRequired,className:a.default.string,navbarItemData:a.default.oneOfType([a.default.object,a.default.array]),showNav:a.default.bool,eagerLoad:a.default.bool.isRequired},componentDidMount:function(){s.default.addChangeListener(this._pagesListListener)},componentWillUnmount:function(){s.default.removeChangeListener(this._pagesListListener)},_pagesListListener:function(){this.forceUpdate()},_getTimestampForLinks:function(){return(new Date).getTime()},getSectionHash:function(e){return d.default.getSectionHashByIndex(e)},_getFirstSectionBackgroundProps:function(){return this.props.firstSectionBackgroundProps},_getNavItemProps:function(e){return e.showNav&&e.name.length?{}:{style:{display:"none"}}},_switchPage:function(e,t){switch(u.default.getSiteMode()){case"editor":t.preventDefault()
return p.default.replace(e.path)
case"preview":t.preventDefault()
return p.default.push(e.path)}},render:function(){return this.getTemplate().apply(this)}}
t.default=m
e.exports=t.default},2973:function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n={mixins:[],displayName:"SocialFeedSection",render:function(){return this.getTemplate().apply(this)}}
t.default=n
e.exports=t.default},2974:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"row-container",key:t},o.createElement("div",{className:"rows-img"},o.createElement("img",{src:this._getImageUrl(e.components.media1.image)})),o.createElement("div",{className:"item-text-group"},e.components.text1.value?o.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text3.value?o.createElement("div",{className:"item-body-text s-font-body",dangerouslySetInnerHTML:{__html:e.components.text3.value}}):null))}var o=n(0),a=n(1)
e.exports=function(){return o.createElement("div",{className:"no-bg s-rows-thumb s-section-thumb "+this._getSectionTypeClass()},o.createElement("div",{className:"s-section-thumb-content s-thumb-"+this._getLayout()},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null)),this.props.content.components.repeatable1.list.length?o.createElement.apply(this,["div",{className:"p100"},a.map(this.props.content.components.repeatable1.list,i.bind(this))]):null))}},2975:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{key:t},o.createElement("div",{className:"media-image-thumb"},o.createElement("img",{src:this._getImageUrl(e.components.media1.image)})),e.components.text1.value?o.createElement("div",{className:"item-body-text s-font-body",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null)}var o=n(0),a=n(1)
e.exports=function(){return o.createElement("div",{className:"no-bg s-media-thumb s-section-thumb"},o.createElement("div",{className:"s-section-thumb-content"},o.createElement.apply(this,["div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null),a.map(this.props.content.components.repeatable1.list,i.bind(this))])))}},2976:function(e,t,n){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0})
var i=void 0,o={mixins:[],displayName:"ContactFormSection",_showMap:function(){i.track("Add Map - Contact Form Section - Editor v1")
this.getComponentBinding("slideSettings").sub("display_settings").set("show_map",!0)
this.savePage()},_hideMap:function(){i.track("Remove Map - Contact Form Section - Editor v1")
this.getComponentBinding("slideSettings").sub("display_settings").set("show_map",!1)
this.savePage()},_showContactInfo:function(){i.track("Add Contact Info - Contact Form Section - Editor v1")
this.getComponentBinding("slideSettings").sub("display_settings").set("show_info",!0)
this.savePage()},_hideContactInfo:function(){i.track("Remove Contact Info - Contact Form Section - Editor v1")
this.getComponentBinding("slideSettings").sub("display_settings").set("show_info",!1)
this.savePage()},_isContactInfoEmpty:function(e){return!(e.address||e.phone||e.hours||e.email)},_fixMapHeight:function(e){var t=void 0,n=$(e)||$("#s-map")
if(n.length)if($(window).width()>=927){var i=n.closest(".s-contact-section").find(".s-email-form-inputs-group"),o=i.find(".s-email-form-field"),a=parseInt(o.first().css("padding-top"),10)||0,r=parseInt(o.last().css("padding-bottom"),10)||0
t=i.height()-a-r
t=Math.max(200,t)
n.height(t).css({"margin-top":a,"margin-bottom":r})}else n.height(250).css({"margin-top":0,"margin-bottom":0})},render:function(){n("Editor|Contact Form")
n("Editor|Let viewers drop their name, email, and message.")
return this.getTemplate().apply(this)}}
t.default=o
e.exports=t.default}).call(t,n(7))},2977:function(e,t,n){"use strict";(function(t){var i=n(0),o=(n(1),n(35)),a=n(383)
e.exports=function(){return i.createElement("div",{className:"s-contact-form-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),i.createElement("div",{className:"form-thumb s-font-body"},i.createElement("div",{className:"form-wrapper"},i.createElement("input",{placeholder:t("Sections|"+this.props.content.components.email1.name_label)}),i.createElement("input",{placeholder:t("Sections|"+this.props.content.components.email1.email_label)}),i.createElement("textarea",{placeholder:t("Sections|"+this.props.content.components.email1.message_label)}),i.createElement("div",{className:"button"},t("Sections|"+this.props.content.components.email1.submit_label))),i.createElement(a,{},i.createElement("img",{src:o.cdnAssetPath("/images/editor2/contact_map.png")}),i.createElement("img",{src:o.cdnAssetPath("/images/editor2/contact_map_sxl.png")}))))))}}).call(t,n(7))},2978:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"column-image",key:t},o.createElement("div",{className:"image-wrapper"},o.createElement("img",{src:this._getImageUrl(e.components.media1.image)})),o.createElement("div",{className:"item-text-group"},e.components.text1.value?o.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text3.value?o.createElement("div",{className:"item-body-text s-font-body",dangerouslySetInnerHTML:{__html:e.components.text3.value}}):null))}var o=n(0),a=n(1)
e.exports=function(){return o.createElement("div",{className:"no-bg s-columns-thumb s-section-thumb"},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null)),this.props.content.components.repeatable1.list.length?o.createElement("div",{className:"p100"},o.createElement.apply(this,["div",{className:"columns-media"},a.map(this._getRepetableList(this.props.content.components.repeatable1.list),i.bind(this))])):null))}},2979:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(12),a=i(o),r=n(8),s=i(r),l={observedProps:["showFooter","showTermsLink","showPrivacyPolicyLink"],propTypes:{showFooter:a.default.bool,showTermsLink:a.default.bool,showPrivacyPolicyLink:a.default.bool},displayName:"FooterSection",_getLayoutOptions:function(){return[{name:"Vertical",key:"vertical"},{name:"Horizontal",key:"horizontal"},{name:"Grid",key:"grid"},{name:"Image",key:"image"}]},_getFooterLayoutProps:function(){var e=this.getDefaultBinding()
return{layoutVariation:e.get("layout_variation"),binding:e}},_getLayout:function(){return this.getDefaultBinding().get("layout_variation")||"vertical"},_hasMobileActions:function(){return s.default.hasNewMobileActions()},render:function(){return this.getTemplate().apply(this)}}
t.default=l
e.exports=t.default},2980:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/base/sections/hero/thumbnail/cover.png"},2981:function(e,t,n){"use strict";(function(t){var i=n(0)
n(1)
e.exports=function(){return i.createElement("div",{className:"s-hero-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p50"},i.createElement("div",{className:"media"},i.createElement("img",{src:this._getImageUrl(this.props.content.components.media1.image)}))),i.createElement("div",{className:"p50"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}}),i.createElement("div",{className:"button s-font-body"},t("Sections|"+this.props.content.components.button1.text)))))}}).call(t,n(7))},2982:function(e,t,n){"use strict"
var i=n(0),o=(n(1),n(2902))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2983:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2892)
e.exports=t.default},2984:function(e,t,n){"use strict"
var i=n(0),o=(n(1),n(2903))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2985:function(e,t,n){"use strict";(function(t){var i,o
i=n(32)
o=n(2878)
e.exports={mixins:[o],displayName:"GallerySection",_getLayoutOptions:function(){return[{name:"normal",key:"normal"},{name:"full width",key:"fullWidth"},{name:"vertical",key:"vertical"}]},_isSmallScreen:function(){return i.isSmallScreen()},render:function(){t("Editor|Gallery")
t("Editor|Image and video thumbnails that open in a full view.")
return this.getTemplate().apply(this)}}}).call(t,n(7))},2986:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2892)
e.exports=t.default},2987:function(e,t,n){"use strict"
var i=n(0),o=(n(1),n(2889),n(382),n(2877),n(2487),n(2875),n(2876),n(13),n(2903))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2988:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(2925),n(382),n(2875)),s=(n(2877),n(2876))
e.exports=function(){return o.createElement(s,i({className:"s-icons-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(r,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:this.sbUniformTextAlignment("text1 text2")},"\n      ",this._renderRepeatable("repeatable1"),"\n    ")))}},2989:function(e,t,n){"use strict"
var i=n(0),o=(n(1),n(2901))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2990:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(382),n(2495)),s=n(2875),l=(n(963),n(2877)),u=n(2876)
e.exports=function(){return o.createElement(u,i({className:"s-section s-social-feed-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(l,a.assign({},{minimal:!0},this.getComponentProps("background1")))):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(s,{section:this,binding:this.getDefaultBinding()})),o.createElement(r,{componentName:"socialFeedComponent",componentProps:this.getComponentProps("social_feed1"),binding:this.getComponentBinding("social_feed1")}),null))}},2991:function(e,t,n){"use strict"
var i=n(0),o=(n(1),n(2890))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2992:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2887)
e.exports=t.default},2993:function(e,t,n){"use strict"
var i=n(0),o=(n(1),n(2890))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2994:function(e,t,n){"use strict"
var i=n(0),o=(n(1),n(2901))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2995:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(382),n(2877)),s=n(2487),l=n(1009),u=n(2875),c=n(2876)
e.exports=function(){return o.createElement(c,i({className:"s-html-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(r,a.assign({},{bgClassNames:this.getThemeFeature("backgroundColorClassNames")},this.getComponentProps("background1")))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(s,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(u,{section:this,binding:this.getDefaultBinding()}),o.createElement(l,this.getComponentProps("html1")))))}},2996:function(e,t,n){"use strict"
var i=n(0),o=(n(1),n(2890))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2997:function(e,t,n){"use strict"
var i=n(0),o=(n(1),n(2998))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2998:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(2944),n(2877),n(382),n(2875)),s=n(2876)
e.exports=function(){return o.createElement(s,i({className:"s-process-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(r,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding()}),o.createElement("div",{className:this.sbUniformTextAlignment("text1 text2")},"\n        ",this._renderRepeatable("repeatable1"),"\n      "))))}},2999:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(382),n(2487)),s=n(2877),l=n(2875),u=n(392),c=n(2876)
e.exports=function(){return o.createElement(c,i({className:"s-block-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(s,this.getComponentProps("background1"))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(r,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(l,{section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:"alignment-container "+this.sbUniformTextAlignment("text1 text2")+(this.isState("editor")?" s-arranging":"")},o.createElement(u,{binding:this.getComponentBinding("block1"),items:this.getComponentBinding("block1").sub("items").get().toArray(),themeFeature:this.getWholeThemeFeature()}))))}},3e3:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(382),n(2495),n(2875)),s=(n(963),n(13),n(2900)),l=n(2877),u=n(2949),c=n(2950),d=n(2876)
e.exports=function(){return o.createElement(d,i({className:"s-section s-store-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(l,a.assign({},{minimal:!0},this.getComponentProps("background1"))),this._showLayoutButton()?o.createElement(s,a.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout},this._getLayoutProps())):null,o.createElement(u,this.getComponentProps("portfolio1"))):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(r,{section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:"s-ecommerce-container"},o.createElement(c,a.assign({},{sbClass:this.sbUniformTextAlignment("text1 text2")},this.getComponentProps("portfolio1"))),null)))}},3001:function(e,t,n){"use strict"
function i(e,t){var n=l.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=l.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}function o(e){var t=this.props.showTermsLink
return s.createElement("div",{className:"has-copy-right"},s.createElement("div",{className:"columns no-float sixteen"},s.createElement("div",{className:"separate-line"})),s.createElement("div",{className:"columns no-float s-text-color-gray "+this.sbUniformTextAlignment("copyright")+" "+l.keys(l.pick({ten:t||this.props.showPrivacyPolicyLink,sixteen:!t&&!this.props.showPrivacyPolicyLink},l.identity)).join(" ")},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",binding:e},e.get().toObject())))),t||this.props.showPrivacyPolicyLink?s.createElement("div",{className:"columns no-float s-text-color-gray six"},s.createElement("div",{className:"right-align s-footer-text",style:{marginTop:"-10px"}},t?s.createElement(p,{className:"s-font-body",hasPrivacyPolicy:this.props.showPrivacyPolicyLink}):null,this.props.showPrivacyPolicyLink?s.createElement(m,{className:"s-font-body"}):null)):null)}function a(e){var t=this.props.showTermsLink
return s.createElement("div",{className:"has-copy-right"},s.createElement("div",{className:"columns no-float sixteen"},s.createElement("div",{className:"separate-line"})),s.createElement("div",{className:"columns no-float s-text-color-gray "+this.sbUniformTextAlignment("copyright")+" "+l.keys(l.pick({ten:t||this.props.showPrivacyPolicyLink,sixteen:!t&&!this.props.showPrivacyPolicyLink},l.identity)).join(" ")},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",binding:e},e.get().toObject())))),t||this.props.showPrivacyPolicyLink?s.createElement("div",{className:"columns no-float s-text-color-gray six"},s.createElement("div",{className:"right-align s-footer-text",style:{marginTop:"-10px"}},t?s.createElement(p,{className:"s-font-body",hasPrivacyPolicy:this.props.showPrivacyPolicyLink}):null,this.props.showPrivacyPolicyLink?s.createElement(m,{className:"s-font-body"}):null)):null)}function r(){var e=this.getComponentBinding("copyright"),t=this.getComponentBinding("socialMedia")
return s.createElement(v,i({className:"s-footer-section s-section "+l.keys(l.pick({"has-terms-link":this.props.showTermsLink,"has-new-mobile-actions":this._hasMobileActions()},l.identity)).join(" ")},this.getThemeFeature("disableBackgrounds")?{}:this.getFooterBackgroundProps("background1")),this.isEditMode()?s.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:s.createElement(g,l.assign({},{minimal:!0,footerSection:!0},this.getComponentProps("background1"))),s.createElement(h,l.assign({},{layoutOptions:this._getLayoutOptions()},this._getFooterLayoutProps()))):null,"vertical"==this._getLayout()?s.createElement("div",{className:"container s-layout-vertical"},s.createElement("div",{className:"columns sixteen "+this.sbUniformTextAlignment("copyright")},s.createElement("div",{},s.createElement(f.WaypointLazy,l.assign({},{binding:t,")":!0},t.toJS()))),s.createElement("div",{className:"s-footer-text"},s.createElement(c,l.assign({},{textType:"body",binding:e},e.get().toObject()))),this.props.showTermsLink?s.createElement(p,{className:"s-font-body",hasPrivacyPolicy:this.props.showPrivacyPolicyLink}):null,this.props.showPrivacyPolicyLink?s.createElement(m,{className:"s-font-body"}):null)):null,"horizontal"==this._getLayout()?s.createElement("div",{className:"container s-layout-horizontal"},s.createElement("div",{className:"columns eight"},s.createElement("div",{},s.createElement(f.WaypointLazy,l.assign({},{binding:t,")":!0},t.toJS())))),s.createElement("div",{className:"columns eight"},s.createElement("div",{className:"right-align s-footer-text"},this.isEditMode()||e.get("value")?s.createElement(c,l.assign({},{textType:"body",binding:e},e.get().toObject())):null,this.props.showTermsLink?s.createElement(p,{className:u("s-font-body",{"s-compact":!this.isEditMode()&&!e.get("value")})+" "+this.sbUniformTextAlignment("copyright"),hasPrivacyPolicy:this.props.showPrivacyPolicyLink}):null,this.props.showPrivacyPolicyLink?s.createElement(m,{className:u("s-font-body",{"s-compact":!this.isEditMode()&&!e.get("value")})+" "+this.sbUniformTextAlignment("copyright")}):null))):null,"grid"==this._getLayout()?s.createElement("div",{className:"container s-layout-grid"},this.sbHasContent("text1")?s.createElement("div",{className:"columns four half-fixed no-float"},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",applyWordBreaks:!0,binding:this.getComponentBinding("text1")},this.getComponentProps("text1"))))):null,this.sbHasContent("text2")?s.createElement("div",{className:"columns four half-fixed no-float"},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",applyWordBreaks:!0,binding:this.getComponentBinding("text2")},this.getComponentProps("text2"))))):null,this.sbHasContent("text3")?s.createElement("div",{className:"columns four half-fixed no-float"},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",applyWordBreaks:!0,binding:this.getComponentBinding("text3")},this.getComponentProps("text3"))))):null,s.createElement("div",{className:"columns four half-fixed no-float right-align"},this.sbHasContent("socialMedia")?s.createElement("div",{},s.createElement(f.WaypointLazy,l.assign({},{binding:t,")":!0},t.toJS()))):null,this.sbHasContent("copyright")?null:s.createElement("div",{},this.props.showTermsLink?s.createElement(p,{className:"s-font-body",hasPrivacyPolicy:this.props.showPrivacyPolicyLink}):null,this.props.showPrivacyPolicyLink?s.createElement(m,{className:"s-font-body"}):null)),this.sbHasContent("copyright")?o.apply(this,[e,t]):null):null,"image"==this._getLayout()?s.createElement("div",{className:"container s-layout-grid s-layout-image"},this.sbHasContent("image1")?s.createElement("div",{className:"columns half-fixed img no-float three"},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(d,l.assign({},{size:"small",needTrim:"true"},this.getReduxComponentProps("image1"))))):null,this.sbHasContent("text1")?s.createElement("div",{className:"columns half-fixed no-float three"},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",applyWordBreaks:!0,binding:this.getComponentBinding("text1")},this.getComponentProps("text1"))))):null,this.sbHasContent("text2")?s.createElement("div",{className:"columns half-fixed no-float three"},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",applyWordBreaks:!0,binding:this.getComponentBinding("text2")},this.getComponentProps("text2"))))):null,this.sbHasContent("text3")?s.createElement("div",{className:"columns half-fixed no-float three"},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",applyWordBreaks:!0,binding:this.getComponentBinding("text3")},this.getComponentProps("text3"))))):null,s.createElement("div",{className:"columns four half-fixed no-float right-align"},this.sbHasContent("socialMedia")?s.createElement("div",{},s.createElement(f.WaypointLazy,l.assign({},{binding:t,")":!0},t.toJS()))):null,this.sbHasContent("copyright")?null:s.createElement("div",{},this.props.showTermsLink?s.createElement(p,{className:"s-font-body",hasPrivacyPolicy:this.props.showPrivacyPolicyLink}):null,this.props.showPrivacyPolicyLink?s.createElement(m,{className:"s-font-body"}):null)),this.sbHasContent("copyright")?a.apply(this,[e,t]):null):null)}var s=n(0),l=n(1),u=n(2),c=n(382),d=n(384),f=n(1010),p=n(2952),m=n(2953),h=n(2889),g=(n(13),n(2877)),v=n(2876)
e.exports=function(){return this.props.showFooter?r.apply(this,[]):null}},3002:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(2487),n(2875)),s=(n(963),n(13),n(2877)),l=n(2955),u=n(2876)
e.exports=function(){return o.createElement(u,i({className:"s-donation-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(s,a.assign({},{minimal:!0},this.getComponentProps("background1")))):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(r,{section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:"s-ecommerce-container"},o.createElement(l,a.assign({},{sbClass:this.sbUniformTextAlignment("text1 text2")},this.getComponentProps("donation1"))),null)))}},3003:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2891)
e.exports=t.default},3004:function(e,t,n){"use strict"
var i=n(0),o=(n(1),n(2902))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},3008:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(382),n(2487)),s=n(974),l=(n(2877),n(2875)),u=n(2876),c=(n(2929),n(973))
n(2930)
e.exports=function(){return o.createElement(u,i({className:"s-blog-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),o.createElement(c,this._getWaypointProps()),null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(r,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns no-float sixteen"},o.createElement(l,{section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:this.sbUniformTextAlignment("text1 text2")},o.createElement(s,i({className:"WaypointLazy"},this.getComponentProps("blog1"))))))}},3009:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2887)
e.exports=t.default},3010:function(e,t,n){"use strict";(function(t){function i(e,t){var n=c.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=c.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}function o(){var e=this.getComponentProps("contactInfo1")
return u.createElement("div",{className:"s-contact-section-columns s-three-columns "+this.sbUniformTextAlignment("text1 text2")},u.createElement("div",{className:"s-contact-info-column"},u.createElement(v,c.assign({},{onDelete:this._hideContactInfo},e))),u.createElement("div",{className:"s-google-maps-column"},u.createElement(g,c.assign({},{onDelete:this._hideMap,fixHeight:this._fixMapHeight},e))),u.createElement("div",{className:"s-email-column"},u.createElement(p,c.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1")))))}function a(){var e=this.getComponentProps("contactInfo1")
return u.createElement("div",{className:"s-contact-section-columns s-two-columns "+this.sbUniformTextAlignment("text1 text2")},u.createElement("div",{className:"s-google-maps-column"},u.createElement(g,c.assign({},{onDelete:this._hideMap,fixHeight:this._fixMapHeight},e))),u.createElement("div",{className:"s-email-column"},u.createElement(p,c.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1")))))}function r(){var e=this.getComponentProps("contactInfo1")
return u.createElement("div",{className:"s-contact-section-columns s-three-columns "+this.sbUniformTextAlignment("text1 text2")},u.createElement("div",{className:"s-contact-info-column"},u.createElement(v,c.assign({},{onDelete:this._hideContactInfo},e))),u.createElement("div",{className:"s-google-maps-column"},u.createElement(g,c.assign({},{onDelete:this._hideMap,fixHeight:this._fixMapHeight},e))),u.createElement("div",{className:"s-email-column"},u.createElement(p,c.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1")))))}function s(e){var t=this.getComponentProps("contactInfo1")
return u.createElement("div",{className:"s-contact-section-columns s-two-columns "+this.sbUniformTextAlignment("text1 text2")},!e.get("show_info")||!this.isEditMode()&&this._isContactInfoEmpty(t)?null:u.createElement("div",{className:"s-contact-info-column"},u.createElement(v,c.assign({},{onDelete:this._hideContactInfo},t))),e.get("show_map")?u.createElement("div",{className:"s-google-maps-column"},u.createElement(g,c.assign({},{onDelete:this._hideMap,fixHeight:this._fixMapHeight},this.getComponentProps("contactInfo1")))):null,u.createElement("div",{className:"s-email-column"},u.createElement(p,c.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1")))))}function l(){var e=this.generateComponentBindingIfMissing(["slideSettings","display_settings"])
return u.createElement("div",{className:"container"},e.get("show_map")||e.get("show_info")?null:u.createElement("div",{className:"columns "+(this.getThemeFeature("narrowContactForm")?"twelve offset-two":"sixteen")},u.createElement(m,{section:this,binding:this.getDefaultBinding()}),u.createElement("div",{className:"s-email-form-container "+this.sbUniformTextAlignment("text1 text2")},u.createElement(p,c.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1"))))),this.isEditMode()&&e.get("show_map")&&e.get("show_info")?u.createElement("div",{className:"columns sixteen"},u.createElement(m,{section:this,binding:this.getDefaultBinding()}),o.apply(this,[e])):null,!this.isEditMode()&&e.get("show_map")&&e.get("show_info")&&this._isContactInfoEmpty(this.getComponentProps("contactInfo1"))?u.createElement("div",{className:"columns sixteen"},u.createElement(m,{section:this,binding:this.getDefaultBinding()}),a.apply(this,[e])):null,!this.isEditMode()&&e.get("show_map")&&e.get("show_info")&&!this._isContactInfoEmpty(this.getComponentProps("contactInfo1"))?u.createElement("div",{className:"columns sixteen"},u.createElement(m,{section:this,binding:this.getDefaultBinding()}),r.apply(this,[e])):null,!e.get("show_map")&&e.get("show_info")||e.get("show_map")&&!e.get("show_info")?u.createElement("div",{className:"columns sixteen"},u.createElement(m,{section:this,binding:this.getDefaultBinding()}),s.apply(this,[e])):null,!this.isEditMode()||e.get("show_map")&&e.get("show_info")?null:u.createElement("div",{className:"s-black-button-container"},e.get("show_map")?null:u.createElement("div",{className:"s-small-black-button",onClick:this._showMap},t("Editor|Add Map")),e.get("show_info")?null:u.createElement("div",{className:"s-small-black-button",onClick:this._showContactInfo},t("Editor|Add Contact Info"))))}var u=n(0),c=n(1),d=(n(382),n(2877)),f=n(2487),p=n(967),m=n(2875),h=n(2876),g=(n(13),n(2505)),v=n(2501)
e.exports=function(){return u.createElement(h,i({className:"s-contact-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?u.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:u.createElement(d,this.getComponentProps("background1"))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?u.createElement(f,this.getBackgroundProps("background1")):null,l.apply(this,[]))}}).call(t,n(7))},3011:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(382),n(2495),n(2875)),s=(n(963),n(13),n(2900)),l=n(2877),u=n(2897),c=n(2492),d=n(2876)
e.exports=function(){return o.createElement(d,i({className:"s-section s-store-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(l,a.assign({},{minimal:!0},this.getComponentProps("background1"))),this._showLayoutButton()?o.createElement(s,a.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout},this._getLayoutProps())):null,o.createElement(u,this.getComponentProps("ecommerce1"))):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(r,{section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:"s-ecommerce-container"},o.createElement(c,a.assign({},{sbClass:this.sbUniformTextAlignment("text1 text2")},this.getComponentProps("ecommerce1"))),null)))}},3012:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2887)
e.exports=t.default},3016:function(e,t,n){"use strict"
var i=n(0)
n(1)
e.exports=function(){return i.createElement("div",{className:"s-section-thumb s-title-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},this.props.content.components.text1.value?i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null),i.createElement("div",{className:"arrow-image"}))))}},3017:function(e,t,n){"use strict"
function i(e,t){var n=c.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=c.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}function o(e,t,n,i,o){var a=this._sbHasMediaContent(i)
return u.createElement("div",{className:"inner"},"noForeground"!==o?u.createElement("div",{className:"container s-rva "+o},this._showMediaWrapper(o)?u.createElement("div",{className:"columns eight media-outer s-rva-media "+o+" "+c.keys(c.pick({"offset-four":!this._sbAnyHasContent(i,"text1 text2 button1")},c.identity)).join(" ")},u.createElement("div",{className:"media-wrapper"},u.createElement(d,c.assign({},{size:"medium"},this.getReduxComponentProps("media1",t.sub(i)))))):null,this._sbAnyHasContent(i,"text1 text2 button1")?u.createElement("div",{className:"columns s-rva-text slider-desc valign "+o+" "+c.keys(c.pick({eight:a,"fourteen offset-one":("noImage"==o||!a)&&this.getThemeFeature("narrowMedia"),sixteen:!("noImage"!=o&&a||this.getThemeFeature("narrowMedia"))},c.identity)).join(" ")},u.createElement("div",{className:c.keys(c.pick({"half-offset-right":"right"==o&&a},c.identity)).join(" ")},u.createElement(h,{section:this,binding:this.getDefaultBinding(),parentBinding:t.sub(i),contentCheck:"button1"}),u.createElement("div",{className:"cta-button-wrapper "+this.sbUniformTextAlignment("text1 text2",{parentBinding:t.sub(i)})},u.createElement(f,this.getComponentProps("button1",t.sub(i)))))):null):null)}function a(e,t,n,a){var r=this._getSliderLayout(a)
return u.createElement(g,i({className:"item "+r,key:a},this.getSliderBackgroundProps("background1",t.sub(a),r)),this.isEditMode()?u.createElement("div",{className:"s-section-editor-wrapper"},e?null:u.createElement(p,c.assign({},{allowColors:!1},this.getComponentProps("background1",t.sub(a)))),e?u.createElement(y,c.assign({},{warnningInfo:this._imageRatioWarnning(a),setStateFunc:this.setStateFunc},this.getComponentProps("background1",t.sub(a)))):null,e?null:u.createElement("s-layoutSelector",{},"\n          ",this._renderSliderLayoutBtn(a),"\n        ")):null,this.hasBackgroundVideo("background1",t.sub(a))?u.createElement(m,this.getBackgroundProps("background1",t.sub(a))):null,o.apply(this,[e,t,n,a,r]))}function r(e,t,n,i){return a.apply(this,[e,t,n,i])}function s(e){var t=this.getRepeatableBinding("slider1")
return u.createElement.apply(this,[v,c.assign({},{fullscreen:this.getThemeFeature("fullscreenSlider"),fullscreenSliderOnlyFirstSection:this.getThemeFeature("fullscreenSliderOnlyFirstSection"),index:this.props.index,getSliderLayouts:this._getSliderLayoutArr,isBanner:e,imgEditorState:this.state.imgEditorState},this.getComponentProps("slider1")),c.map(t.get().toArray(),r.bind(this,e,t))])}function l(){var e=this._isBannerSection()
return u.createElement("div",{className:"s-section s-slider-section "+c.keys(c.pick({"s-banner-section":e},c.identity)).join(" "),style:this.getSectionStyle()},s.apply(this,[e]))}var u=n(0),c=n(1),d=(n(382),n(964)),f=n(998),p=n(2877),m=n(2487),h=n(2875),g=n(2876),v=n(2513),y=n(2530)
e.exports=function(){return l.apply(this,[])}},3022:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(382),n(2877),n(2487),n(2893)),s=n(2923),l=n(2875),u=(n(3023),n(2876))
e.exports=function(){return o.createElement(u,i({className:"s-gallery-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),null,"fullWidth"!=this._getLayoutKey()?o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(l,{section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:"columns sixteen",style:{transition:"none"}},"vertical"!=this._getLayoutKey()?o.createElement(r,a.assign({},{layout:this._getLayoutKey(),isArranging:this.isState("editor"),toggleEditor:this.toggleEditor},this.getComponentProps("gallery1"))):null,"vertical"==this._getLayoutKey()?o.createElement(s,a.assign({},{layout:this._getLayoutKey(),isArranging:this.isState("editor"),toggleEditor:this.toggleEditor},this.getComponentProps("gallery1"))):null)):null,"fullWidth"==this._getLayoutKey()?o.createElement("div",{className:"full-width-gallery"},o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(l,{section:this,binding:this.getDefaultBinding()}))),o.createElement(r,a.assign({},{layout:this._getLayoutKey(),isArranging:this.isState("editor"),toggleEditor:this.toggleEditor},this.getComponentProps("gallery1")))):null)}},3023:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),s=n(2879),l=n(1),u=function(e){return e&&e.__esModule?e:{default:e}}(l),c=function(e){function t(e){i(this,t)
var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.hideAdvancedOptions=!0
n.sectionName="gallery"
return n}a(t,e)
r(t,[{key:"getRotationKeys",value:function(){return u.default.pluck(this.props.layoutOptions,"key")}}])
return t}(s.BaseLayoutButton)
t.default=(0,s.connectToStores)(c)
e.exports=t.default},4041:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/thumbnail.png"},4042:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(6),a=i(o),r=n(71),s=i(r),l=n(37),u=i(l),c=n(386),d=i(c),f=n(4043),p=i(f),m=function(){var e=function(e){(0,a.default)(".dummy-shadow").remove()
if(e){(0,a.default)(".s-section:even").removeClass("s-bg-gray").addClass("s-bg-white");(0,a.default)(".s-section:odd").removeClass("s-bg-white").addClass("s-bg-gray");(0,a.default)(".s-section").find(".s-section-editor-wrapper .s-background .stock-images li.s-bg-gray").addClass("s-bg-white-second")}else(0,a.default)(".s-section").find(".s-section-editor-wrapper .s-background .stock-images li.s-bg-gray").removeClass("s-bg-white-second")
if(!s.default.TH.Util.isIE())return(0,a.default)(".slides li.slide .s-section.s-bg-gray").filter(function(){return!(0,a.default)(this).find(".s-bg-image").length}).append('<div class="dummy-shadow"></div>')},t=function(e){return e.each(function(t,n){var i=(0,a.default)(n)
d.default.setThumbnailColor(i)
i.removeClass("collapse-bottom-padding")
if(0!==t){var o=(0,a.default)(e.eq(t-1)),r=d.default.hasBgImageOrVideo(i)||d.default.hasBgImageOrVideo(o)
i.hasClass("s-bg-gray")&&r?i.parent().find(".dummy-shadow").css("border-top","none"):i.hasClass("s-bg-white")&&r&&o.parent().find(".dummy-shadow").css("border-bottom","none")}})},n=function(){var n=void 0;(0,a.default)("#s-content").hasClass("s-variation-black")&&(n=!0)
e(n)
var i=(0,a.default)(".slide:not(.s-hidden-section) .s-section:visible")
if(n)return t(i)
d.default.collapsePaddingAdjacentSection(i)
return i.each(function(e,t){var n=(0,a.default)(t)
d.default.setThumbnailColor(n)
if(0!==e){var o=(0,a.default)(i.eq(e-1))
if(n.hasClass("s-bg-gray")&&o.hasClass("s-bg-gray")){var r=o.parent().find(".dummy-shadow")
n.parent().find(".dummy-shadow").addClass("bottom")
return r.hasClass("bottom")?r.remove():r.addClass("top")}}})}
n()
p.default.init()
var i=0,o=null,r=function(){"function"==typeof o&&o()
if(!((0,a.default)(".slides").width()<=727)){var e=(0,a.default)(".navigator"),t=(0,a.default)(".s-section").first(),n=t.find(".s-component.s-background, .s-component.s-layout, .s-component.s-slider-editor, .s-component.s-category-selector").not(".s-slider-section .s-component.s-background, .s-slider-section .s-component.s-layout, s-grid-section .s-component.s-background, .s-grid-section .s-component.s-layout"),r=t.closest(".slide").find(".premium-section-notice")
if(r.length){r.css("position","absolute")
n.push(r.get(0))}t.is(":not(.s-grid-section)")&&t.css("padding-top","")
n.css("top","")
i=e.height()
var s=parseInt(t.css("padding-top"),10),l=void 0
void 0!==n.first().offset()&&null!==n.first().offset()&&(l=n.first().offset().top)
var u=(parseInt(l,10)||0)-parseInt((0,a.default)(".s-section-editor-wrapper").css("top"),10)
o=function(){t.is(":not(.s-grid-section)")&&t.css("padding-top",s+"px")
return n.css("top",u+"px")}
t.is(":not(.s-grid-section)")&&t.css("padding-top",s+i+"px")
t.hasClass("strikingly-slider")||n.css("top",u+i-(0,a.default)(".s-mobile-top-bar").height()+"px")}}
r()
window.attachEvent&&!window.addEventListener&&(0,a.default)("#s-nav .logo").remove()
var l=s.default.debounce(function(){n()
return r()},10),c=s.default.debounce(function(){return n()},10)
if(!window.edit_page.isShowPage){u.default.Event.subscribe("Section.changed",c)
u.default.Event.subscribe("Slide.afterAdd",l)
u.default.Event.subscribe("Slide.afterDelete",l)
u.default.Event.subscribe("Slide.afterReorder",l)}u.default.Event.subscribe("Page.beforeNewOneFadeIn",function(){return l()});(0,a.default)(window).resize(s.default.debounce(function(){return r()},10))
var f=(0,a.default)("#s-content #s-nav"),m=(0,a.default)(".logo")
!u.default.isShowPage||f.find(".items li:visible").length||f.find(".links li").length||m.find("img").length||(0,a.default)(".navigator").hide()
!u.default.isShowPage||f.find(".items li:visible").length||f.find(".links li").length||m.css("padding-right","0px")
if(0===(0,a.default)(".navigator .logo .s-component-content a").length)return(0,a.default)(".navigator .logo .s-component-content img").css({cursor:"pointer"}).click(function(){return window.location.hash="#1"})}
t.default=m
e.exports=t.default},4043:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(21),a=i(o),r=n(8),s=i(r),l=n(211),u=i(l),c=n(37),d=i(c),f=n(1),p=i(f)
t.default={init:function(){var e=p.default.debounce(this.rerender.bind(this),10)
$(window).resize(e)
if(!window.edit_page.isShowPage){d.default.Event.subscribe("Section.changed",e)
d.default.Event.subscribe("Slide.afterAdd",e)
d.default.Event.subscribe("Slide.afterDelete",e)
d.default.Event.subscribe("Slide.afterReorder",e)}edit_page.Event.subscribe("Page.beforeNewOneFadeIn",e)
this._setupDomEventHandlers()
this.rerender()},_setupDomEventHandlers:function(){$(".nav-container").on("click",".clickable-nav-item a",function(e){var t=$(this).attr("href")
if(!($(this).parents("#s-nav-more").length>0))switch(s.default.getSiteMode()){case"editor":e.preventDefault()
return u.default.replace(t)
case"preview":e.preventDefault()
return u.default.push(t)}})
$(".nav-container").on("click","#s-nav-more",function(e){e.preventDefault()
var t=$("#s-nav-more").offset().left+$("#s-nav-more").width()-$("#s-content .nav ul.overflow").width()
$("#s-content .nav ul.overflow").css("left",t)
var n=$(".nav-container .overflow")
return"hidden"===n.css("visibility")?n.css({visibility:"visible",opacity:1}):n.css({visibility:"hidden",opacity:0})})
$(".nav-container").on("click",".nav ul.overflow a",function(){return $(".nav-container .overflow").css({visibility:"hidden",opacity:0})})},rerender:function(){$("#s-nav-more").remove()
$("#s-content .nav ul.overflow").remove()
$("#s-nav .links > li:not(.site-search):not(#s-ecommerce-nav-shopping-cart-wrapper):not(#loginContainer):not(#cta)").remove()
var e=$("#s-nav .items")
e.empty()
var t=$("#s-original-nav .items > li").clone()
t.addClass("clickable-nav-item")
t.find("*").addBack().removeAttr("data-reactid")
if(!a.default.getIsMultiPage()){var n=this._getCurrentSelectedNavItemIndex()
null!==n&&t.eq(n).find(".s-nav-item").addClass("selected")}e.append(t)
var i=$("#s-nav .links"),o=$("#s-original-nav .links li").clone()
o.find("*").addBack().removeAttr("data-reactid")
i.prepend(o)
this._adjustMenuLeftBorder()
var r=function(){return"none"!==this.style.display},l=t.filter(r).add(o),u=p.default.sum(l.map(function(){return $(this).width()+1})),c=$(".slides, .page-wrapper .s-section").width()-$("#s-nav .logo").outerWidth()-Math.ceil($("#s-nav .login-container").width()+$("#s-nav #s-ecommerce-nav-shopping-cart-wrapper").width()+$("#s-nav #cta").outerWidth(!0)+$("#s-nav .site-search").width())
a.default.hasSection("ecommerce")&&(c-=60)
s.default.getEnableSiteSearch()&&(c-=48)
if(!(u+20<c)){var d=0,f=null,m=!1
l.each(function(){var e=$(this)
d+=e.outerWidth()
d>=c?m=!0:f=this
if(!m||e.hasClass("s-ecommerce-nav-shopping-cart-wrapper")||e.hasClass("login-container")||e.hasClass("site-search"))return e.removeClass("collapse")
e.addClass("collapse")
if(e.has("s-nav-dropdown").length){e.html(e.html().replace("▾",""))
return e.find("s-nav-dropdown").addClass("s-nav-dropdown-left")}})
$(f).addClass("collapse")
$(f).before('<li id="s-nav-more"><a href="#">•••</a></li>')
var h=$(".nav .items li.collapse, .nav .links li.collapse"),g=$('<ul class="overflow"></ul>')
h.clone().appendTo(g)
g.appendTo($("#s-content .nav"))}},_adjustMenuLeftBorder:function(){0===$(".nav .items li:visible").length?$(".nav .links").addClass("left-border"):$(".nav .links").removeClass("left-border")},_getCurrentSelectedNavItemIndex:function(){var e=null
if(!a.default.getIsMultiPage()){$("#s-nav .items").children().each(function(t,n){if($(n).find(".s-nav-item").hasClass("selected")){e=t
return!1}})}return e}}
e.exports=t.default},4044:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=new r.default(e).lumaCorrection(),i=null
i=t?new r.default(t).lumaCorrection():n
var o=n.toHex(),a=n.mult(.95).toHex(),s=n.mult(1.05).toHex(),u=i.lumaCorrection(-.6).lighten(.9).toHex()
return l.default.generate({"subtitle itemSubtitle blogInfo mobileNavbarButtons":n,button:"\n      background-color: "+o+";\n      background-repeat: repeat-x;\n      background-image: linear-gradient(to bottom, "+s+", "+a+");\n    ",buttonHover:"\n      background: "+n.mult(1.2).toHex()+";\n    ",mobileActionButton:n,mobileActionButtonForApp:n,overlay:i.mult(.5).fade(.35),socialLinks:n.fade(.5),ecommerceGroup:{main:n,mobileBg:i.lumaCorrection(-.6).lighten(.8)},donationGroup:{main:n}})+"\n.s-custom-colors .navigator .nav-container .nav ul li a:hover,\n.s-custom-colors .navigator .nav-container .nav ul li a.selected {\n  background: "+u+";\n}\n.s-custom-colors .navigator .nav-container .nav ul.items li,\n.s-custom-colors .navigator .nav-container .nav ul.items,\n.s-custom-colors .navigator {\n  border-color: "+i.lumaCorrection(-.6).lighten(.7).toHex()+";\n}\n\n.s-custom-colors .s-section.s-bg-gray, .s-custom-colors .s-component.s-background .s-component-editor .stock-images li.s-bg-gray {\n  background-color: "+u+";\n}\n\n.s-custom-colors .dummy-shadow {\n  box-shadow: "+i.lumaCorrection(-.6).lighten(.8).toHex()+" 0 0 10px 0 inset;\n}\n.navbar-drawer.strikingly-drawer ul#nav-drawer-list {\n  border-right: 1px solid "+u+";\n}\n.navbar-drawer.strikingly-drawer ul#nav-drawer-list li a.selected {\n  background: "+u+";\n  box-shadow: 5px 0 0 0 "+i.lumaCorrection(-.6).lighten(.7).toHex()+" inset;\n}\n.navbar-drawer.strikingly-drawer ul#nav-drawer-list li a {\n  border-bottom: 1px solid "+i.lumaCorrection(-.6).lighten(.7).toHex()+";\n}"}Object.defineProperty(t,"__esModule",{value:!0})
t.default=o
var a=n(219),r=i(a),s=n(2910),l=i(s)
e.exports=t.default},4045:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/signup_form/thumbnail/cover.png"},4046:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/text/thumbnail/cover.png"},4047:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/gallery/thumbnail/cover.png"},4048:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/info/thumbnail/cover.png"},4049:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/icons/thumbnail/cover.png"},4050:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/title/thumbnail/cover.png"},4051:function(e,t,n){"use strict"
function i(e,t,n){return l.createElement("li",u.assign({},{key:n},this._getNavItemProps(t)),l.createElement("a",{className:"s-font-body s-nav-item",href:this.getSectionHash(n)},t.name))}function o(e,t,n,i){return l.createElement("li",{},l.createElement("a",{className:u.keys(u.pick({"s-nav-item s-font-body":!0,selected:i.selected},u.identity)).join(" "),target:i.newTarget?"_blank":"_self",href:i.path},"\n                  ",i.title,"\n                "))}function a(e,t,n){return l.createElement("li",{key:n},t.items?l.createElement("div",{className:u.keys(u.pick({"s-nav-item":!0,"s-nav-dropdown":!0},u.identity)).join(" ")},l.createElement("a",{className:"s-font-body s-nav-item "+u.keys(u.pick({selected:t.selected},u.identity)).join(" ")},t.title+" ","\n              ",l.createElement("i",{className:"fa fa-angle-down"})),l.createElement.apply(this,["ul",{className:u.keys(u.pick({"s-nav-item":!0,selected:t.selected},u.identity)).join(" ")},u.map(t.items,o.bind(this,e,t,n))])):null,t.items?null:l.createElement("a",{className:u.keys(u.pick({"s-nav-item":!0,"s-font-body":!0,selected:t.selected},u.identity)).join(" "),href:t.path,target:t.newTarget?"_blank":"_self"},t.title))}function r(e,t,n){return l.createElement(d,u.assign({},{updateTimeStamp:this._getTimestampForLinks(),key:n},t.getIn(["components","link"]).toObject()))}function s(){var e=f.Link
return l.createElement("div",{className:"navigator s-navbar-section"},l.createElement("div",{className:"nav-container"},l.createElement("div",{className:"center nav",id:"s-nav"},this.sbHasContent("image1")?l.createElement("div",{className:"ib logo"},l.createElement(c,u.assign({},{size:"small",needTrim:"true"},this.getReduxComponentProps("image1")))):null,l.createElement("ul",{className:"ib items s-nav"}),l.createElement("ul",{className:"ib links"},l.createElement("div",{id:"loginContainer"}),l.createElement("li",{className:"hidden s-ecommerce-nav-shopping-cart-wrapper",id:"s-ecommerce-nav-shopping-cart-wrapper",key:"ECOMMERCE_NAV_SHOPPING_CART_WRAPPER"}),this.props.enableSiteSearch?l.createElement("li",{className:"site-search",onClick:this.props.onClickSiteSearch},l.createElement(e,{className:"s-font-body s-nav-item "+u.keys(u.pick({selected:this.props.selectSiteSearchTab},u.identity)).join(" "),to:this.props.siteSearchUrl},l.createElement("span",{className:"fa fa-search"}))):null)),l.createElement("div",{id:"s-original-nav"},l.createElement.apply(this,["ul",{className:"ib items s-nav"},this.props.isMultiPage?null:u.map(this.props.navbarItemData,i.bind(this,e)),this.props.isMultiPage?u.map(this.props.navbarItemData,a.bind(this,e)):null]),l.createElement.apply(this,["ul",{className:"ib links"},u.map(this.getBinding("submenu").get().toArray(),r.bind(this,e))]))))}var l=n(0),u=n(1),c=(n(382),n(998),n(384)),d=n(2926),f=n(104)
e.exports=function(){return this.props.showNav?s.apply(this,[]):null}},4052:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/blog/thumbnail/cover.png"},4053:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/social_feed/thumbnail/cover.jpg"},4054:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/rows/thumbnail/cover.png"},4055:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/media/thumbnail/cover.png"},4056:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/slider/thumbnail/cover.jpg"},4057:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/cta/thumbnail/cover.png"},4058:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/contact_form/thumbnail/cover.png"},4059:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/html/thumbnail/cover.png"},4060:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/ecommerce/thumbnail/cover.png"},4061:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/columns/thumbnail/cover.png"},632:function(e){"use strict"
function t(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined")
return Object(e)}var n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable
e.exports=function(){try{if(!Object.assign)return!1
var e=new String("abc")
e[5]="de"
if("5"===Object.getOwnPropertyNames(e)[0])return!1
for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n
if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1
var i={}
"abcdefghijklmnopqrst".split("").forEach(function(e){i[e]=e})
return"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(e){for(var a,r,s=t(e),l=1;l<arguments.length;l++){a=Object(arguments[l])
for(var u in a)i.call(a,u)&&(s[u]=a[u])
if(n){r=n(a)
for(var c=0;c<r.length;c++)o.call(a,r[c])&&(s[r[c]]=a[r[c]])}}return s}},968:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(1),a=i(o),r=n(15),s=(i(r),n(25)),l=n(43),u=i(l),c=n(375),d=(i(c),n(220)),f=(i(d),void 0),p=void 0,m=a.default.assign({},s.EventEmitter.prototype,{init:function(e){f=new u.default(e)
p=f.binding
return p},getBinding:function(){return f.binding},getSideMenuOpenState:function(){return this.getImmutableSideMenuOpenState().toJS()},getImmutableSideMenuOpenState:function(){return this.getBinding().get("sideMenuOpenState")}})
window.DEBUG.PageBridgeStore=m
t.default=m
e.exports=t.default},999:function(e,t,n){"use strict"
e.exports=n(2514)}})
