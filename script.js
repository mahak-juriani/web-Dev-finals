let image = document.querySelector('https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679');

let addBtn = document.querySelector('.delete-icon');
let modal = document.querySelector('.modal-container');
let addModal = true;


addBtn.addEventListener('click', function(){
    console.log("Btn has been clicked")
    if(addModal){
        modal.style.display = 'flex' //show modal
    }
    else{
        modal.style.display = 'none' //hide modal
    }
    alert("Are you sure you want to permanently delete this tweet?");
    addModal = !addModal;
})


image.addEventListener('click', function() {
   if(image.src = 'https://dirask.com/static/bucket/1633375165831-yjQ7G6WQeL--image.png'){
    image.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455'
    } 
    else{
        image.src = 'https://dirask.com/static/bucket/1633375165831-yjQ7G6WQeL--image.png'
    }

    
});