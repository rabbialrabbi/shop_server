import{bm as i,b3 as e,b4 as s}from"./index.49b3a9ac.js";import{h as r}from"./moment.9709ab41.js";const o=i("report",{state:()=>({salesReportDate:r().format("YYYY-MM-DD"),buyReportDate:r().format("YYYY-MM-DD"),dailySellingProduct:[],salesOrderList:[],salesOrderDetails:[],buyOrderList:[],buyOrderDetails:[],customerCollection:[]}),getters:{},actions:{async updateCategoryList(t){let a=await e.get(s.dailyProductSell);this.dailySellingProduct=a.data.data},async getOrderList(t){let a=await e.get(s.salesOrderList,{params:{date:this.salesReportDate}});this.salesOrderList=a.data.data},async getOrderDetails(t){let a=await e.get(s.salesOrderDetails+"/"+t);this.salesOrderDetails=a.data.data},async getBuyOrderList(t){let a=await e.get(s.buyOrderList,{params:{date:this.buyReportDate}});this.buyOrderList=a.data.data},async getBuyOrderDetails(t){let a=await e.get(s.buyOrderDetails+"/"+t);this.buyOrderDetails=a.data.data},async getCollection(){let t=await e.get(s.dailCustomerCollection);console.log(t.data.data.details),this.customerCollection=t.data.data}}});export{o as u};
