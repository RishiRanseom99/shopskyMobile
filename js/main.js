// const { S_IRGRP } = require("constants");
// const { listenerCount } = require("process");
// const { node } = require("prop-types");

const user=document.getElementById('user');
function isMobile(){
    
    
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        //mobile version
        // user.innerText="mobile";
    
   }
   else{
       //web version
    // user.innerText="web";
   }
} 

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
     }
  slides[slideIndex-1].style.display = "block";

  for (i = 0; i < slides.length; i++) {
    if(slides[i].style.display != "none")
    {
        const currentDot=slides[i].getElementsByClassName('dots')[0].children[slideIndex-1];
        
        currentDot.classList.add("active");
        
    }
    
   }
}
// console.log(bannerList);
// const bannerLists=bannerList.split("+");

// bannerLists.map((value,inx)=>{
//   bannerLists[inx]=JSON.parse(bannerLists[inx]);
// })
// console.log(bannerLists);

function createBannerTiles(tiles,tilesText){
  let content=document.createElement('div');
  content.className='content';
  let img=document.createElement('img');
  img.className='tiles';
  img.src=tiles;
  let para=document.createElement('p');
  para.className='tiles-text';
  para.innerText=tilesText;
  content.append(img,para);
  return content;

}
function createBannerTitle(tilesCount,bannerTitle,bannerDiscount,bannerTitleColor="#33ccff")
{
  let banner__title=document.createElement('div');
  let banner__title__text=document.createElement('div');
  let banner__title__discount=document.createElement('div');

  if(tilesCount==4)
  banner__title.className='card4-title';
  else
  banner__title.className='card21-title'


  banner__title__text.className='card-title-text';
  let para=document.createElement('p');
  para.style.textShadow=`3px 3px 3px  ${bannerTitleColor}`;
  para.innerText=bannerTitle;
  banner__title__text.append(para);
  banner__title__discount.className='card-title-discount';
  let para1=document.createElement('p');
  para1.innerText= `${String.fromCharCode(160)}${bannerDiscount}`;
  let span=document.createElement('span');
  let i=document.createElement('i');
  i.className="fas fa-tags";
  span.append(i,para1);

  banner__title__discount.append(span);
  banner__title.append(banner__title__text,banner__title__discount);


  return banner__title;

}

function create4ItemBanner(bannerTitle,bannerDiscount,bannerTitleColor)
{
  //4 item card banner
  let banner=document.createElement('div');
  
  //banner items
  let banner__items=document.createElement('div');
  let banner__items__row1=document.createElement('div');
  let banner__items__row2=document.createElement('div');
  let banner__items__row1col1=document.createElement('div');
  let banner__items__row1col2=document.createElement('div');
  let banner__items__row2col1=document.createElement('div');
  let banner__items__row2col2=document.createElement('div');

  //banner body design

  banner.className='card';
  


  //creating banner title
  let banner__title=createBannerTitle(4,bannerTitle,bannerDiscount,bannerTitleColor);
  //row1 col1


  banner__items__row1col1.className="card-col1";
  banner__items__row1col1.append(createBannerTiles("./images/healthcare.jpeg","Electronics"));


  //row1 col2


  banner__items__row1col2.className="card-col2";
  banner__items__row1col2.append(createBannerTiles("./images/healthcare.jpeg","Games"));

  banner__items__row1.className="card-row1";
  banner__items__row1.append(banner__items__row1col1,banner__items__row1col2);

  //row2 col1

  banner__items__row2col1.className="card-col1";
  banner__items__row2col1.append(createBannerTiles("./images/healthcare.jpeg","Fashion"));



  //row2 col2

  banner__items__row2col2.className="card-col2";
  banner__items__row2col2.append(createBannerTiles("./images/healthcare.jpeg","Sports"));

  banner__items__row2.className="card-row2";
  banner__items__row2.append(banner__items__row2col1,banner__items__row2col2);


  banner__items.className="card-items";
  banner__items.append(banner__items__row1,banner__items__row2);

  //appending banner title and banner items
  banner.append(banner__title,banner__items);
  return banner;
}

// Create 2 item banner
function create2ItemBanner(bannerTitle,bannerDiscount,bannerTitleColor)
{
  let banner=document.createElement("div");
  banner.className="card2";
  let banner__title=createBannerTitle(2,bannerTitle,bannerDiscount,bannerTitleColor);

  
  let banner__items=document.createElement('div');
  let banner__items__row=document.createElement('div');
  let banner__items__rowcol1=document.createElement('div');
  let banner__items__rowcol2=document.createElement('div');
  banner__items__rowcol1.className="card2-col1";
  banner__items__rowcol2.className="card2-col2";
  banner__items__row.className="card2-row";
  banner__items.className="card2-items";
  

  banner__items__rowcol1.append(createBannerTiles("./images/healthcare.jpeg","Healthcare"));
  banner__items__rowcol2.append(createBannerTiles("./images/healthcare.jpeg","Beauty"));
  banner__items__row.append(banner__items__rowcol1,banner__items__rowcol2);
  banner__items.append(banner__items__row);
  banner.append(banner__title,banner__items);
  return banner;
}

//create 1 item banner
function create1ItemBanner(bannerTitle,bannerDiscount,bannerTitleColor)
{
  let banner=document.createElement("div");
  banner.className="card3";
  let banner__title=createBannerTitle(1,bannerTitle,bannerDiscount,bannerTitleColor);
  let banner__items=document.createElement('div');
  banner__items.className="card3-items";
  let banner__items__row=document.createElement('div');
  banner__items__row.className="card3-row";
  banner__items.append(banner__items__row);
  banner__items__row.append(createBannerTiles("./images/healthcare.jpeg","Mobile"));
  
  banner.append(banner__title,banner__items);
  return banner;
}

//creating banners
let banner1=create4ItemBanner("Banner1","5%","#db4edb");
let banner2=create4ItemBanner("Banner2","10%","#993333");
let banner3=create2ItemBanner("Banner3","20%","#db4edb");
let banner4=create1ItemBanner("Banner4","50%","#993333");

// body.append(banner1,banner2,banner3,banner4);


// console.log(banner);



















//fetching data from index.php
// $(function () 
//   {
//     //-----------------------------------------------------------------------
//     // 2) Send a http request with AJAX http://api.jquery.com/jQuery.ajax/
//     //-----------------------------------------------------------------------
//     console.log("hello inside ajax function");
//     $.ajax({                                      
//       url: 'index.php',                  //the script to call to get data          
//       data: "",                        //you can insert url argumnets here to pass to api.php
//                                        //for example "id=5&parent=6"
//       dataType: 'json',                //data format      
//       success: function(data)          //on recieve of reply
//       {
//         console.log("success function");
//         var id = data[0];              //get id
//         var vname = data[1];           //get name
//         //--------------------------------------------------------------------
//         // 3) Update html content
//         //--------------------------------------------------------------------
//         console.log(id,vname);
//       } 
//     });
//  
// fetch("client.php",{
//   method:"GET",
//   headers: {
//     'Content-Type': 'application/json'
    
//   } 
// }).then(response => response.json())
// .then((json)=>{
//   console.log("hello boys");
//   console.log(json);}
//   )
// .catch(error => {
//   console.error('Error:', error);
// });

// $.ajax({
//   type:"GET",
//   url:"client.php",
//   dataType: "json",
  
 
// }).done((results)=>{
//   console.log(results);
// })
// ;



