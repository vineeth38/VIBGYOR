// function orderDetails(product,process){
//       alert(`You orderd ${product}`)
//       setTimeout(()=>{
//         process()
//       },2000)
// }
// orderDetails("hp laptop",()=>{
//     alert("Order has been shipped");
// })

// setTimeout(() => {
//     alert("placed order!!")
//     setTimeout(() => {
//         alert("oder shipped successsfully!!!")
//         setTimeout(() => {
//             alert("order reached to nearest hub!!")
//         }, 6000)
//     }, 4000)
// }, 110000)

let container = document.getElementById("container")
for(let i = 1;i<8;i++){
   let btn = document.createElement("button");
   btn.className="color-btn";
   btn.style.cursor="pointer";
   let ColorName=""
   let colorHex = ""
   if(i===1){
     ColorName="Violet";
     colorHex="#8F00FF";
   }else if(i===2){
    ColorName="Indigo";
    colorHex="#4B0082";
   }else if(i===3){
    ColorName="Blue";
    colorHex="#0000FF";
   }else if(i===4){
    ColorName="Green";
    colorHex="#00FF00";
   }else if(i===5){
    ColorName="Yellow";
    colorHex="#FFFF00";
   }else if(i===6){
    ColorName="Orange";
    colorHex="#FFA500";
   }else if(i===7){
    ColorName="Red";
    colorHex="#FF0000";
   }
  btn.textContent = ColorName;
  btn.style.backgroundColor=colorHex;
  btn.style.color="white";
  btn.addEventListener("click",()=>{
    document.body.style.backgroundColor=colorHex;
    let allbtns = document.querySelectorAll(".color-btn");
    allbtns.forEach(b => {
        b.style.backgroundColor=b.textContent.toLowerCase();
        b.style.color="white";
    });
    // btn.style.backgroundColor="white"
    // btn.style.color="black";
  });
   
  container.appendChild(btn);
}
let default1 = document.querySelector("p");
default1.addEventListener("click",()=>{
    document.body.style.backgroundColor="white";
})