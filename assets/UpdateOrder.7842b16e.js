import{aW as q,bf as T,P as O,aa as g,o as y,Q as I,w as t,a as e,e as r,aZ as d,X as c,N as k,W as f,c as B,F as K,a0 as L,bg as V,bh as R,$ as D,b as p,bi as F,bj as Q,aY as z,b2 as W,b3 as Y,R as j,bk as C,Y as x,S as P,U as A,O as $}from"./index.24ce2781.js";import{u as H}from"./report.a47ace16.js";import{u as U}from"./sellsOrders.afab77f6.js";import{V as E}from"./VAutocomplete.1567798f.js";import"./moment.9709ab41.js";const M={__name:"ItemInput",props:["item"],setup(_){const a=_,o=U(),u=q();T(o);const l=O(a.item.product_id),n=O(a.item.quantity),b=O(a.item.unit_price),v=O(a.item.total_price);return g(l,(s,i)=>{if(s){console.log("Inside Product ID");let m=u.productList.find(N=>N.product_id===s);o.updateItem.product_id=s,o.updateItem.quantity=n.value,o.updateItem.unit_price=m.selling_price,o.updateItem.total_price=m.selling_price,v.value=m.selling_price,b.value=m.selling_price,o.updateEditProductData()}}),g(n,s=>{if(s){console.log("Inside Quantity"),o.updateItem.quantity=s;let i=o.updateItem.quantity*o.updateItem.unit_price;o.updateItem.total_price=i,o.updateEditProductData(),v.value=i}}),g(b,s=>{s&&(console.log("Inside Unit Price"),o.updateItem.unit_price=s,o.updateItem.total_price=o.updateItem.quantity*o.updateItem.unit_price,o.updateEditProductData(),v.value=o.updateItem.total_price)}),g(v,s=>{s&&(console.log("Inside Total price"),o.updateItem.unit_price=s/o.updateItem.quantity,o.updateItem.total_price=s,b.value=s/o.updateItem.quantity,o.updateEditProductData())}),(s,i)=>(y(),I(f,null,{default:t(()=>[e(r,{cols:"12",lg:"3"},{default:t(()=>[e(E,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=m=>l.value=m),items:d(u).getProductsSelect,class:"centered-input",label:"Product",variant:"underlined",onUpdate:i[1]||(i[1]=m=>s.alert("Hello"))},null,8,["modelValue","items"])]),_:1}),e(r,{cols:"12",lg:"2"},{default:t(()=>[e(c,{modelValue:n.value,"onUpdate:modelValue":i[2]||(i[2]=m=>n.value=m),label:"Quantity",placeholder:"Quantity",variant:"underlined",class:"centered-input"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",lg:"3"},{default:t(()=>[e(c,{modelValue:b.value,"onUpdate:modelValue":i[3]||(i[3]=m=>b.value=m),label:"Price",variant:"underlined"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",lg:"3"},{default:t(()=>[e(c,{modelValue:v.value,"onUpdate:modelValue":i[4]||(i[4]=m=>v.value=m),label:"Subtotal",variant:"underlined"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",lg:"1"},{default:t(()=>[e(k,{size:"20",start:"",icon:"ep:close-bold",onClick:i[5]||(i[5]=m=>d(o).removeEditItem(d(a).item.item_id))})]),_:1})]),_:1}))}},X={__name:"OrderItem",setup(_){const a=U();return console.log(a.updateItem),(o,u)=>(y(),I(V,null,{default:t(()=>[(y(!0),B(K,null,L(d(a).updateOrder.items,(l,n)=>(y(),I(M,{key:n,item:l,onClick:b=>d(a).selectedUpdateOrderItem=l.item_id},null,8,["item","onClick"]))),128))]),_:1}))}};const S=_=>(F("data-v-0a0c8674"),_=_(),Q(),_),Z={class:"text-center"},G={class:"text-center"},J={class:"text-center"},w={class:"text-center"},h=S(()=>p("td",null,"Total",-1)),ee={class:"text-center"},te=S(()=>p("td",null,"Pay",-1)),le={class:"text-center"},ae=S(()=>p("td",null,"Balance",-1)),de={class:"text-center"},ue={__name:"Subtotal",setup(_){const a=U();return(o,u)=>(y(),I(f,{class:"pa-x ma-x"},{default:t(()=>[e(r,{md:"6",lg:"8",cols:"12",class:"pa-x ma-x"},{default:t(()=>[e(D,null,{default:t(()=>[p("tbody",null,[p("tr",null,[p("td",Z,[e(c,{modelValue:d(a).updateOrder.subtotal,"onUpdate:modelValue":u[0]||(u[0]=l=>d(a).updateOrder.subtotal=l),type:"number",variant:"underlined",class:"centered-input",label:"Subtotal",readonly:""},null,8,["modelValue"])]),p("td",G,[e(c,{modelValue:d(a).updateOrder.labour,"onUpdate:modelValue":u[1]||(u[1]=l=>d(a).updateOrder.labour=l),onKeyup:u[2]||(u[2]=l=>d(a).updateEditProductData()),type:"number",variant:"underlined",class:"centered-input",label:"Labour"},null,8,["modelValue"])]),p("td",J,[e(c,{modelValue:d(a).updateOrder.discount,"onUpdate:modelValue":u[3]||(u[3]=l=>d(a).updateOrder.discount=l),onKeyup:u[4]||(u[4]=l=>d(a).updateEditProductData()),type:"number",class:"centered-input",variant:"underlined",label:"Discount"},null,8,["modelValue"])]),p("td",w,[e(c,{modelValue:d(a).updateOrder.collection,"onUpdate:modelValue":u[5]||(u[5]=l=>d(a).updateOrder.collection=l),onKeyup:u[6]||(u[6]=l=>d(a).updateEditProductData()),type:"number",class:"centered-input",variant:"underlined",label:"Collection"},null,8,["modelValue"])])])])]),_:1})]),_:1}),e(r,{md:"6",lg:"4",cols:"12"},{default:t(()=>[e(D,null,{default:t(()=>[p("tbody",null,[p("tr",null,[h,p("td",ee,[e(c,{modelValue:d(a).updateOrder.total,"onUpdate:modelValue":u[7]||(u[7]=l=>d(a).updateOrder.total=l),type:"number",placeholder:"Discount",variant:"solo-filled",class:"centered-input",readonly:""},null,8,["modelValue"])])]),p("tr",null,[te,p("td",le,[e(c,{modelValue:d(a).updateOrder.pay,"onUpdate:modelValue":u[8]||(u[8]=l=>d(a).updateOrder.pay=l),onKeyup:u[9]||(u[9]=l=>d(a).updateEditBalance()),type:"number",placeholder:"Pay",variant:"solo-filled",class:"centered-input"},null,8,["modelValue"])])]),p("tr",null,[ae,p("td",de,[e(c,{modelValue:d(a).updateOrder.balance,"onUpdate:modelValue":u[10]||(u[10]=l=>d(a).updateOrder.balance=l),type:"number",placeholder:"Discount",variant:"solo-filled",class:"centered-input",readonly:""},null,8,["modelValue"])])])])]),_:1})]),_:1})]),_:1}))}},oe=R(ue,[["__scopeId","data-v-0a0c8674"]]),me={__name:"UpdateOrder",props:["ordercode"],setup(_){const a=U();H();const o=O([]);return z(async()=>{let u=await W.get(Y.getCustomer);o.value=u.data.data.map(l=>({title:l.name,value:l.customer_id}))}),(u,l)=>(y(),I(f,null,{default:t(()=>[e(r,{md:"6",lg:"12",cols:"12"},{default:t(()=>[e(j,null,{default:t(()=>[e(f,{"no-gutters":""},{default:t(()=>[e(r,{cols:"12",sm:"8",md:"12",lg:"6",order:"2","order-lg":"1"},{default:t(()=>[e(V,null,{default:t(()=>[e(C,null,{default:t(()=>[x("Customer")]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(f,null,{default:t(()=>[e(r,{cols:"12",md:"6"},{default:t(()=>[e(E,{modelValue:d(a).updateOrder.customer_id,"onUpdate:modelValue":l[0]||(l[0]=n=>d(a).updateOrder.customer_id=n),items:o.value,label:"Customer Name",placeholder:"Customer Name"},null,8,["modelValue","items"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(c,{modelValue:d(a).updateOrder.customer_contact,"onUpdate:modelValue":l[1]||(l[1]=n=>d(a).updateOrder.customer_contact=n),label:"Contact No",placeholder:"Contact No"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{cols:"12",sm:"4",md:"12",lg:"6",order:"1","order-lg":"2"},{default:t(()=>[e(V,null,{default:t(()=>[e(C,null,{default:t(()=>[x("Order")]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(f,null,{default:t(()=>[e(r,{cols:"12",md:"6"},{default:t(()=>[e(c,{modelValue:d(a).updateOrder.order_code,"onUpdate:modelValue":l[2]||(l[2]=n=>d(a).updateOrder.order_code=n),label:"Order No",placeholder:"Order No",readonly:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(c,{modelValue:d(a).updateOrder.order_date,"onUpdate:modelValue":l[3]||(l[3]=n=>d(a).updateOrder.order_date=n),label:"Order Date",placeholder:"Order Date",type:"date"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(V,null,{default:t(()=>[e(C,null,{default:t(()=>[x("Items")]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(A)]),_:1}),e(X),e(V,null,{default:t(()=>[e($,{block:"",onClick:l[4]||(l[4]=n=>d(a).addUpdateProductItem())},{default:t(()=>[e(k,{size:"2rem",icon:"material-symbols:add-circle-outline-rounded"})]),_:1})]),_:1}),e(V,null,{default:t(()=>[e(oe)]),_:1}),e(V,null,{default:t(()=>[e(f,{class:"pa-x ma-x"},{default:t(()=>[e(r,{md:"6",lg:"8",cols:"12",class:"pa-x ma-x"}),e(r,{md:"6",lg:"4",cols:"12"},{default:t(()=>[e(f,null,{default:t(()=>[e(r,{md:"12",lg:"12",cols:"12",class:"text-center"},{default:t(()=>[e($,{class:"bg-success",onClick:l[5]||(l[5]=n=>d(a).updateOrderPayment())},{default:t(()=>[x(" Edit ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{me as _};
