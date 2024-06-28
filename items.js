let filterarray=[];
 
 const items1 = [
 
//   Carlton London
// CUKOO
// Rhodium-Plated CZ Floral Studs
// Women Padded Halter Neck Swimming Dress


{
    id: '004',
    image: 'photo/4.jpg',
    company: 'INDRANI FABRICS',
    item_name: 't-shirt',
   original_price: 1045,
   current_price: 606,
   discount_percentage: 42,
   return_period: 14,
   delivery_date: '17 Dec 2024',
   rating: {
     stars: 4.5,
     count: 1400,
 },
},
   {
       id: '005',
       image: 'photo/5.jpg',
       company: 'NUEVOSDAMAS',
       item_name: 't-shirt',
         original_price: 5599,
         current_price: 1495,
         discount_percentage: 44,
         return_period: 14,
         delivery_date: '30 Dec 2024',
         rating: {
             stars: 4.1,
             count: 249,
         },
     },
     {
         id: '006',
         image: 'photo/6.jpg',
         company: 'ADIDAS',
         item_name: 'shoes',
         original_price: 5000,
         current_price: 5000,
         discount_percentage: 0,
         return_period: 14,
         delivery_date: '17 Oct 2024',
         rating: {
             stars: 5.0,
             count: 10,
       },
   },
   {
       id: '007',
        image: 'photo/7.jpg',
        company: 'Roadster',
        item_name: 'shorts',
        original_price: 1399,
        current_price: 489,
        discount_percentage: 65,
        return_period: 14,
        delivery_date: '6 Sep 2024',
        rating: {
            stars: 4.2,
            count: 3500,
        },
    },
    {
        id: '008',
        image: 'photo/8.jpg',
        company: 'NIVEA',
        item_name: 'perfume',
      original_price: 499,
      current_price: 499,
      discount_percentage: 0,
      return_period:14,
      delivery_date:'17 oct 2024',
      rating: {
          stars: 3.5,
          count: 110,
      },
  },

   {
      id: '009',
      image: 'photo/9.jpg',
      company: 'IPHONE',
      item_name: 'phone',
      original_price: 50000,
      current_price: 50000,
      discount_percentage: 0,
      return_period:14,
      delivery_date:'1 Aug 2024',
      rating: {
          stars: 4.5,
          count: 1388,
      },
    },
    {
        id: '10',
        image: 'photo/10.jpg',
        company: 'MAX',
        item_name: 'headphone',
       original_price: 3599,
       current_price: 1500,
       discount_percentage: 40,
       return_period: 14,
       delivery_date: '10 Oct 2024',
       rating: {
         stars: 4.5,
         count: 1400,
     },
 },
 {
    id: '11',
    image: 'photo/11.jpg',
    company: 'TIMEMAX',
    item_name: 'watch',
   original_price: 2645,
   current_price: 1200,
   discount_percentage: 40,
   return_period: 14,
   delivery_date: '11 May 2024',
   rating: {
     stars: 4.5,
     count: 1400,
 },
},
{
    id: '12',
    image: 'photo/12.jpg',
    company: 'MAX',
    item_name: 'speaker',
   original_price: 10000,
   current_price: 10000,
   discount_percentage: 0,
   return_period: 14,
   delivery_date: '16 Feb 2024',
   rating: {
     stars: 4.5,
     count: 1400,
 },
},
{
    id: '13',
    image: 'photo/13.jpg',
    company: 'DEAL',
    item_name: 'laptop',
   original_price: 45000,
   current_price: 35000,
   discount_percentage: 42,
   return_period: 14,
   delivery_date: '9 Oct 2024',
   rating: {
     stars: 4.5,
     count: 1400,
 },
},
{
    id: '14',
    image: 'photo/14.jpg',
    company: 'TIMEMAX',
    item_name: 'smartwatch',
   original_price: 1045,
   current_price: 606,
   discount_percentage: 42,
   return_period: 14,
   delivery_date: '2 Oct 2024',
   rating: {
     stars: 4.5,
     count: 1400,
 },
},
  {
         id: '15',
         image: 'photo/15.jpg',
         company: 'SAMSUNG',
         item_name: 'phone',
         original_price: 150000,
         current_price: 150000,
         discount_percentage: 0,
         return_period: 14,
         delivery_date: '3 Oct 2024',
         rating: {
             stars: 4.5,
             count: 5200,
         },
     }
    ];
//  function dispalybagitem(){
//     let bagitemcount=document.querySelector('bag-item-count')
//     bagitemcount.innerText=bagitems.length;
//  }

 let bagitems=[];

 onload();
 function onload(){
 let bagitemstr=localStorage.getItem('bagitems')
 console.log(bagitemstr);
  bagitems=bagitemstr? JSON.parse(bagitemstr):[];
    displayitemonhomepage(items1);
    dispalybagicon();
 }

 function addtobag(item){
  bagitems.push(item)
  
  console.log(item)
//   convert the object into srting
  localStorage.setItem('bagitems',JSON.stringify(bagitems))
  dispalybagicon();
 }
 function dispalybagicon(){
    let bagitemcount=document.querySelector('.bag-item-count')

    if(bagitems.length>0){
        bagitemcount.style.visibility="visible"
    bagitemcount.innerText=bagitems.length;
    }else{
        bagitemcount.style.visibility="hidden"
    }
 }
 function displayitemonhomepage(items1){
   
 let item=document.querySelector('.item-container');

 if(!item){
    return;
 }

 let innerhtml='';
 items1.forEach(items1=> {
    innerhtml +=`<div class="item">
    <img class="item-img" src="${items1.image}" alt="error">
    <div class="rating">
        ${items1.rating.stars} ⭐ | ${items1.rating.count} 
    </div>
    <div class="company-name">${items1.company} </div>
    <div class="item-name">
     ${items1.item_name}
      
    </div>
    <div class="price" >
        <span class="current-price">${items1.current_price}</span>
        <span class="original-price">${items1.original_price}</span>
        <span class="discount">(${items1.discount_percentage})%OFF</span>
    </div>
    <button class="btn-add-bag" onclick="addtobag(${items1.id})">Add to Bag</button>
    </div>`
 });
 item.innerHTML= innerhtml;
}

// live searching and filtering the product  

document.getElementById("myinput").addEventListener("keyup",function(){
    let text=document.getElementById("myinput").value;
    filterarray= items1.filter(function(items1){
        if (items1.item_name.includes(text)) {
            return items1.company;

        }

    });
    displayitemonhomepage(filterarray);
})

//  referance only
    // if (this.value =="") {
        
    //     displayitemonhomepage(items1);
    // }
    // else{
    //     if (filterarray =="") {
    //         document.getElementsByClassName("item-container").innerHTML="";
    //     }
    //     else{
    //       displayitemonhomepage(filterarray);
    //     }
    // }


