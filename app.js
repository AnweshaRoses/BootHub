

const wrapper= document.querySelector(".sliderWrapper")
console.log(wrapper)
const products = [
  {
    id: 1,
    title: "louis vuitton",
    price: 119,
    colors: [
      {
        code: "white",
        img: "./img/chappal1.png",
      },
      {
        code: "brown",
        img: "./img/airforce1.png",
      },
    ],
  },
  {
    id: 2,
    title: "Canvas",
    price: 149,
    colors: [
      {
        code: "green",
        img: "./img/40.png",
      },
      {
        code: "red",
        img: "./img/41.png",
      },
    ],
  },
  {
    id: 3,
    title: "Ankle Boots",
    price: 109,
    colors: [
      {
        code: "maroon",
        img: "./img/31.png",
      },
      {
        code: "purple",
        img: "./img/30.png",
      },
    ],
  },
  {
    id: 4,
    title: "High Heels",
    price: 129,
    colors: [
      {
        code: "red",
        img: "./img/21.png",
      },
      {
        code: "blue",
        img: "./img/20.png",
      },
    ],
  },
  {
    id: 5,
    title: "Nike",
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