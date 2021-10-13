const bidsStorageKey = 'bids';

let bids;

let existingBids = retrieve();

if (existingBids) {
  bids = existingBids;
} else {
  bids = [];
}
console.log(existingBids);











function render() {
  let bidsHtml ='' ;
  bids.forEach((bid) => {
    bidsHtml += `<div style="display:flex ;justify-content:space-between;border:2px solid black; padding:30px;">
            <div style="font-size:30px">Bid: $${bid.bid}</div>
            <div style="font-size:30px">Bidder: ${bid.bidder}</div>
        </div>`;
  });

  document.querySelector('#bids').innerHTML = bidsHtml;

    



}




function betterbid(){
  let box1= document.getElementById('leadingbox')
   const bestbid = Math.max(...existingBids.map(o => {
     return o.bid}),0);
 
     let bestbidder=existingBids.filter(function(value){
      if(value.bid===bestbid){
   return value.bidder;
        
     }

    
   
    });
  bestbidder =bestbidder[0].bidder;
  console.log(bestbidder);
 

 box1.innerHTML=`$${bestbid} is the highest bid by ${bestbidder}`;
 

 
 
}
 
 

function addBid(user) {
  bids.push({
    bid: +document.getElementById(user).value,
    bidder: user,
  });

  render();
  save();
  betterbid();
  
}

















function save() {
  localStorage.setItem(bidsStorageKey, JSON.stringify(bids));
  
}

function retrieve() {
  return JSON.parse(localStorage.getItem(bidsStorageKey)) || [];
}

render();
save();
betterbid();