import{p as v,aD as p,aE as b,U as h,ae as F,a as V,aF as R}from"./index.81261210.js";const D=v({name:"VForm",props:{...p()},emits:{"update:modelValue":o=>!0,submit:o=>!0},setup(o,i){let{slots:s,emit:u}=i;const n=b(o),r=h();function f(t){t.preventDefault(),n.reset()}function m(t){const a=t,e=n.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),u("submit",a),a.defaultPrevented||e.then(d=>{let{valid:c}=d;if(c){var l;(l=r.value)==null||l.submit()}}),a.preventDefault()}return F(()=>{var t;return V("form",{ref:r,class:"v-form",novalidate:!0,onReset:f,onSubmit:m},[(t=s.default)==null?void 0:t.call(s,n)])}),R(n,r)}});export{D as V};
