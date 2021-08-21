function extraParts(extrapart,price){
    const GbMemory=document.getElementById(extrapart);
    GbMemory.innerText=price;
}
function singleSum(id){
    const leastPrice=document.getElementById(id);
    const bestInt =parseFloat(leastPrice.innerText);
    return bestInt;
}
function totalSum(){
    const bestPriceForEverything=singleSum("costwise");
    const everyRamPrice=singleSum('extraRam');
    const everyStoragePrice=singleSum('storage-cost');
    const everydeliveryPrice=singleSum('delivery-cost');
    const totalPrice=bestPriceForEverything+everyRamPrice+everyStoragePrice+everydeliveryPrice;
    const costTotal=document.getElementById("setTotal");
    costTotal.innerText=totalPrice;
    
}
function OverAllProductPrice(){
   const totalValue=document.getElementById("setTotal");
    const OverAllCost =document.getElementById("overAllTotal");
     OverAllCost.innerText= totalValue.innerText;
}
document.getElementById("8Gbmemory").addEventListener('click',function(){
   extraParts("extraRam",0);
   totalSum();
   OverAllProductPrice()
})
document.getElementById("extramemory").addEventListener('click',function(){
    extraParts("extraRam",180);
    totalSum();
    OverAllProductPrice()
})
document.getElementById("harddisksmall").addEventListener('click',function(){
    extraParts("storage-cost",0);
    totalSum();
    OverAllProductPrice()
})
document.getElementById("harddiskmedium").addEventListener('click',function(){
    extraParts("storage-cost",100);
    totalSum();
    OverAllProductPrice()
})
document.getElementById("harddiskbig").addEventListener('click',function(){
    extraParts("storage-cost",180);
    totalSum();
    OverAllProductPrice()
})
document.getElementById("delivery-free").addEventListener('click',function(){
    extraParts("delivery-cost",0);
    totalSum();
    OverAllProductPrice()
})
document.getElementById("delivery-paid").addEventListener('click',function(){
    extraParts("delivery-cost",20);
    totalSum();
    OverAllProductPrice()
})
document.getElementById("applyButton").addEventListener('click',function(){
  const couponInput=  document.getElementById("couponDiscount");
  const couponInside=couponInput.value;
  if( couponInside=="stevekaku"){
     const discount= singleSum("setTotal");
     const yourDicount=discount/5;
     const TotalPriceAfterDiscount=singleSum("overAllTotal");
     const WithDiscount=TotalPriceAfterDiscount-yourDicount;
     document.getElementById('overAllTotal').innerText=WithDiscount;
    //  only for one time coupon 
     const button = document.getElementById("applyButton");
     button.disabled=true;
     couponInput.value='';
  }
})