

const wrapper= document.querySelector(".sliderWrapper")
console.log(wrapper)
const products = [
  {
    id: 1,
    title: "Some Item 0",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/airforce1.png",
      },
      {
        code: "darkblue",
        img: "./img/chappal1.png",
      },
    ],
  },
  {
    id: 2,
    title: "Some Item 1",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/airforce1.png",
      },
      {
        code: "green",
        img: "./img/chappal1.png",
      },
    ],
  },
  {
    id: 3,
    title: "Some Item 2",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/airforce1.png",
      },
      {
        code: "green",
        img: "./img/chappal1.png",
      },
    ],
  },
  {
    id: 4,
    title: "Some Item 3",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/airforce1.png",
      },
      {
        code: "lightgray",
        img: "./img/chappal1.png",
      },
    ],
  },
  {
    id: 5,
    title: "Some Item 4",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/airforce1.png",
      },
      {
        code: "black",
        img: "./img/chappal1.png",
      },
    ],
  },
];

let choosenProduct=products[0];

const currentProductImg=document.querySelector(".imageProduct")
const currentProductTitle=document.querySelector(".productTitle")
const currentProductPrice=document.querySelector(".productPrice")
const currentProductColors=document.querySelectorAll(".color")
const currentProductSizes=document.querySelectorAll(".size")

const menuItems=document.querySelectorAll(".menuItem")

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      //change the current slide
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
  
      //change the choosen product
      choosenProduct = products[index];
  
      //change texts of currentProduct
      currentProductTitle.textContent = choosenProduct.title;
      currentProductPrice.textContent = "$" + choosenProduct.price;
      currentProductImg.src = choosenProduct.colors[0].img;
  
      //assing new colors
      currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
      });
    });
  });

  currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
      currentProductImg.src=choosenProduct.colors[index].img
    })
  })

  currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
      currentProductSizes.forEach((size)=>{
        size.style.backgroundColor="white"
      size.style.color="black"
      })
      size.style.backgroundColor="black"
      size.style.color="white"
    })
  })

  const productButton=document.querySelector(".productBtn");
  const payment=document.querySelector(".payment");
  const close=document.querySelector(".close");

  productButton.addEventListener("click",()=>{
    payment.style.display="flex";
  })

  close.addEventListener("click",()=>{
    payment.style.display="none";
  })