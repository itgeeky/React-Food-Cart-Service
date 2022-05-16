(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},,,function(e,t,n){e.exports={meal:"MealsItem_meal__2N4W-",description:"MealsItem_description__1E_ku",price:"MealsItem_price__35Rh5"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},function(e,t,n){e.exports={header:"knx-EUPDVbsRtkNqe6AYpw==","main-image":"Apwr8ohhCjWX7s2yqSIfkg=="}},,,,function(e,t,n){e.exports={meals:"AvailableMeals_meals__2ZLCP","meals-appear":"AvailableMeals_meals-appear__ONwLi"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(15),a=n.n(c),i=(n(28),n(3)),r=n(1),s=n.n(r),o=n(12),l=n.n(o),d=n.p+"static/media/meals.2971f633.jpeg",m=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),u=n(0),j=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},b=n(7),O=n.n(b),x=function(e){var t=Object(r.useContext)(m),n=t.items.reduce((function(e,t){return e+t.amount}),0),c=Object(r.useState)(!1),a=Object(i.a)(c,2),s=a[0],o=a[1],l=t.items,d="".concat(O.a.button," ").concat(s?O.a.bump:"");return Object(r.useEffect)((function(){if(0!==l.length){var e=o(!0);return setTimeout((function(){o(!1)}),300),function(){clearTimeout(e)}}}),[l]),Object(u.jsxs)("button",{className:d,onClick:e.onClick,children:[Object(u.jsx)("span",{className:O.a.icon,children:Object(u.jsx)(j,{})}),Object(u.jsx)("span",{children:"Your cart"}),Object(u.jsx)("span",{className:O.a.badge,children:n})]})},h=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("header",{className:l.a.header,children:[Object(u.jsx)("h1",{children:"ReactMeals"}),Object(u.jsx)(x,{onClick:e.onShowCart})]}),Object(u.jsx)("div",{className:l.a["main-image"],children:Object(u.jsx)("img",{src:d,alt:"food-header"})})]})},p=n(16),f=n.n(p),_=n(17),v=n.n(_),C=function(e){return Object(u.jsx)("div",{className:v.a.card,children:e.children})},g=n(10),N=n.n(g),A=n(18),y=n.n(A),w=n(2),I=n(19),M=n.n(I),k=s.a.forwardRef((function(e,t){return Object(u.jsxs)("div",{className:M.a.input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object(w.a)({ref:t},e.input))]})})),B=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(r.useRef)();return Object(u.jsxs)("form",{className:y.a.form,onSubmit:function(t){console.log(t),t.preventDefault();var n=s.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(u.jsx)(k,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"10",step:"1",defaultValue:"1"}}),Object(u.jsx)("button",{children:"Add +"}),!c&&Object(u.jsx)("p",{children:"Please enter a valid amount."})]})},D=function(e){var t="$".concat(e.price.toFixed(2)),n=Object(r.useContext)(m);return Object(u.jsxs)("li",{className:N.a.meal,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("div",{className:N.a.description,children:Object(u.jsx)("h3",{children:e.desc})}),Object(u.jsx)("div",{className:N.a.price,children:Object(u.jsx)("h3",{children:t})})]}),Object(u.jsx)("div",{children:Object(u.jsx)(B,{id:e.id,onAddToCart:function(t){n.addItem({id:e.id,name:e.name,amount:t,price:e.price})}})})]})},F=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],R=function(e){var t=F.map((function(e){return Object(u.jsx)(D,{id:e.id,name:e.name,desc:e.description,price:e.price},e.id)}));return Object(u.jsx)("section",{className:f.a.meals,children:Object(u.jsx)(C,{children:Object(u.jsx)("ul",{children:t})})})},E=n(20),H=n.n(E),S=function(){return Object(u.jsxs)("section",{className:H.a.summary,children:[Object(u.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(u.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(u.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},P=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(S,{}),Object(u.jsx)(R,{})]})},T=n(13),V={items:[],totalAmount:0},q=function(e,t){if("ADD"===t.type){var n,c=e.items.findIndex((function(e){return e.id===t.item.id})),a=e.items[c];if(a){var i=Object(w.a)(Object(w.a)({},a),{},{amount:a.amount+t.item.amount});(n=Object(T.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:e.totalAmount+t.item.price*t.item.amount}}if("REMOVE"===t.type){var r,s=e.items.findIndex((function(e){return e.id===t.id})),o=e.items[s],l=e.totalAmount-o.price;if(1===o.amount)r=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(w.a)(Object(w.a)({},o),{},{amount:o.amount-1});(r=Object(T.a)(e.items))[s]=d}return{items:r,totalAmount:l}}return V},z=function(e){var t=Object(r.useReducer)(q,V),n=Object(i.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})}};return Object(u.jsx)(m.Provider,{value:s,children:e.children})},U=n(8),L=n.n(U),W=n(11),X=n.n(W),J=function(e){return Object(u.jsx)("div",{className:X.a.backdrop,onClick:e.onClose})},Q=function(e){return Object(u.jsx)("div",{className:X.a.modal,children:Object(u.jsx)("div",{className:X.a.content,children:e.children})})},Y=document.getElementById("overlays"),Z=function(e){return Object(u.jsxs)(r.Fragment,{children:[L.a.createPortal(Object(u.jsx)(J,{onClose:e.onClose}),Y),L.a.createPortal(Object(u.jsx)(Q,{children:e.children}),Y)]})},$=n(4),G=n.n($),K=function(e){var t="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:G.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("div",{className:G.a.summary,children:[Object(u.jsx)("span",{className:G.a.price,children:t}),Object(u.jsxs)("span",{className:G.a.amount,children:["x ",e.amount]})]})]}),Object(u.jsxs)("div",{className:G.a.actions,children:[Object(u.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(u.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},ee=n(5),te=n.n(ee),ne=function(e){var t=Object(r.useContext)(m),n="$".concat(t.totalAmount.toFixed(2)),c=t.items.length>0,a=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(w.a)(Object(w.a)({},e),{},{amount:1}))},s=Object(u.jsx)("ul",{className:te.a["cart-items"],children:t.items.map((function(e){return Object(u.jsx)(K,{name:e.name,amount:e.amount,price:e.price,onRemove:a.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(u.jsxs)(Z,{onClose:e.onClose,children:[s,Object(u.jsxs)("div",{className:te.a.total,children:[Object(u.jsx)("span",{children:"Total Amount"}),Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("div",{className:te.a.actions,children:[Object(u.jsx)("button",{className:te.a["button--alt"],onClick:e.onClose,children:"Close"}),c&&Object(u.jsx)("button",{className:te.a.button,children:"Order"})]})]})};var ce=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(z,{children:[n&&Object(u.jsx)(ne,{onClose:function(){c(!1)}}),Object(u.jsx)(h,{onShowCart:function(){c(!0)}}),Object(u.jsx)("main",{children:Object(u.jsx)(P,{})})]})};a.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(ce,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.df50a8c8.chunk.js.map