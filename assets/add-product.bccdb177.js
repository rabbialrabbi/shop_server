import{aY as _,aZ as V,a_ as v,a$ as w,U as b,o as y,c as T,a as t,w as a,T as r,k as l,as as L,az as U,i as d,_ as h,m as c}from"./index.81261210.js";import{_ as k,a as x}from"./ProductList.62ce5060.js";import{V as n,a as C,b as p,c as P}from"./VWindowItem.77ee2326.js";import"./moment.9709ab41.js";import"./VForm.ba5c7b90.js";import"./VAutocomplete.5c8c8686.js";import"./VSelect.5de91618.js";import"./VCheckboxBtn.bb996ea2.js";import"./VTextarea.538aa4f7.js";import"./VDialog.7e8194f0.js";const S={__name:"add-product",setup(z){let m=_();const u=V(),s=v();w(async()=>{await u.updateProductList()});function f(){s.updateCategoryList(),s.updateProductTypeList(),s.updateUnitTypeList()}const e=b("list");return($,o)=>(y(),T("div",null,[t(C,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=i=>e.value=i),"show-arrows":""},{default:a(()=>[t(n,{value:"list"},{default:a(()=>[t(r,{size:"20",start:"",icon:"la:list-alt"}),l(" List ")]),_:1}),L(t(n,{value:"create",onClick:f},{default:a(()=>[t(r,{size:"20",start:"",icon:"uit:create-dashboard"}),l(" Create ")]),_:1},512),[[U,d(m).can("product-create")]])]),_:1},8,["modelValue"]),t(h),t(P,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=i=>e.value=i),class:"mt-5 disable-tab-transition",touch:!1},{default:a(()=>[t(p,{value:"create"},{default:a(()=>[t(k)]),_:1}),t(p,{value:"list","onGroup:selected":d(u).updateProductList},{default:a(()=>[t(x)]),_:1},8,["onGroup:selected"])]),_:1},8,["modelValue"])]))}};typeof c=="function"&&c(S);export{S as default};
