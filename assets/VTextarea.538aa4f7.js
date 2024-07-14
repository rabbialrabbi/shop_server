import{p as K,b6 as L,aP as Q,b7 as W,D as X,g as V,U as d,a$ as Y,ad as v,b8 as Z,ae as ee,aR as te,aS as ae,b9 as ne,a,ba as le,ak as w,F as P,as as _,at as oe,bb as re,bc as ue,aT as ie,aF as se,aC as N,bd as ce,aB as de,ag as fe}from"./index.81261210.js";const xe=K({name:"VTextarea",directives:{Intersect:L},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,...Q(),...W()},emits:{"click:control":e=>!0,"update:modelValue":e=>!0},setup(e,$){let{attrs:C,emit:p,slots:u}=$;const n=X(e,"modelValue"),T=V(()=>typeof e.counterValue=="function"?e.counterValue(n.value):(n.value||"").toString().length),z=V(()=>{if(C.maxlength)return C.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function D(t,l){var o,r;!e.autofocus||!t||(o=l[0].target)==null||(r=o.focus)==null||r.call(o)}const I=d(),x=d(),i=d(!1),R=d(""),g=d(),S=V(()=>i.value||e.persistentPlaceholder),A=V(()=>e.messages.length?e.messages:S.value||e.persistentHint?e.hint:"");function y(){if(g.value!==document.activeElement){var t;(t=g.value)==null||t.focus()}i.value||(i.value=!0)}function G(t){y(),p("click:control",t)}function U(t){t.stopPropagation(),y(),N(()=>{n.value="",ce(e["onClick:clear"],t)})}function M(t){n.value=t.target.value}const s=d();function c(){!e.autoGrow||N(()=>{if(!s.value||!x.value)return;const t=getComputedStyle(s.value),l=getComputedStyle(x.value.$el),o=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),r=s.value.scrollHeight,b=parseFloat(t.lineHeight),F=Math.max(parseFloat(e.rows)*b+o,parseFloat(l.getPropertyValue("--v-input-control-height"))),k=parseFloat(e.maxRows)*b+o||1/0;R.value=de(fe(r!=null?r:0,F,k))})}Y(c),v(n,c),v(()=>e.rows,c),v(()=>e.maxRows,c),v(()=>e.density,c);let m;return v(s,t=>{if(t)m=new ResizeObserver(c),m.observe(s.value);else{var l;(l=m)==null||l.disconnect()}}),Z(()=>{var t;(t=m)==null||t.disconnect()}),ee(()=>{const t=!!(u.counter||e.counter||e.counterValue),l=!!(t||u.details),[o,r]=te(C),[{modelValue:b,...F}]=ae(e),[k]=ne(e);return a(ie,w({ref:I,modelValue:n.value,"onUpdate:modelValue":f=>n.value=f,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},o,F,{messages:A.value}),{...u,default:f=>{let{isDisabled:h,isDirty:B,isReadonly:E,isValid:O}=f;return a(le,w({ref:x,style:{"--v-textarea-control-height":R.value},"onClick:control":G,"onClick:clear":U,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},k,{active:S.value||B.value,dirty:B.value||e.dirty,focused:i.value,error:O.value===!1}),{...u,default:j=>{let{props:{class:H,...q}}=j;return a(P,null,[e.prefix&&a("span",{class:"v-text-field__prefix"},[e.prefix]),_(a("textarea",w({ref:g,class:H,value:n.value,onInput:M,autofocus:e.autofocus,readonly:E.value,disabled:h.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:y,onBlur:()=>i.value=!1},q,r),null),[[oe("intersect"),{handler:D},null,{once:!0}]]),e.autoGrow&&_(a("textarea",{class:[H,"v-textarea__sizer"],"onUpdate:modelValue":J=>n.value=J,ref:s,readonly:!0,"aria-hidden":"true"},null),[[re,n.value]]),e.suffix&&a("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:l?f=>{var h;return a(P,null,[(h=u.details)==null?void 0:h.call(u,f),t&&a(P,null,[a("span",null,null),a(ue,{active:e.persistentCounter||i.value,value:T.value,max:z.value},u.counter)])])}:void 0})}),se({},I,x,g)}});export{xe as V};
