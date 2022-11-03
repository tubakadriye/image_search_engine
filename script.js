
let API_KEY = '31061273-0aa24f03fea9709282a7555b6';
let URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('elephant');
let ul= document.getElementById("image-list");


// fetch(URL)
// .then(response => response.json())
// .then(data => {
//     //console.log(data.hits);
//     //images = data.hits;
//     //console.log(data_array);
//     for (let i=0; i<data.hits.length; i++) {
//         //console.log("hello");
//         let imgUrl = data.hits[i].previewURL;
//         //console.log(imgUrl);
//         //document.getElementsByTagName("img")[0].src = imgUrl;
//         images.push(imgUrl);
//     }   
//     console.log(images);
//     appendImg(images);
    

   
// })

fetchImage(URL);

//console.log(images);
function appendImg(images) {
    ul.innerHTML = "";
    for (let i=0; i<images.length; i++)
{

    let image = document.createElement("img");
    let li = document.createElement("li");
    image.src = images[i];
    li.appendChild(image);
    ul.appendChild(li);
}
}

//console.log(images);

function fetchImage(url) {
    let images=[];
    // url = URL
    fetch(url)
    .then(response => response.json())
    .then(data => {
    //console.log(data.hits);
    //images = data.hits;
    //console.log(data_array);
    for (let i=0; i<data.hits.length; i++) {
        //console.log("hello");
        let imgUrl = data.hits[i].previewURL;
        //console.log(imgUrl);
        //document.getElementsByTagName("img")[0].src = imgUrl;
        images.push(imgUrl);
    }   
    console.log(images);
    appendImg(images);
   
})
    
}


let searchInput = document.getElementById("search");
console.log(searchInput);
let searchButton = document.getElementsByTagName("button")[0];
let imgTag = document.getElementsByTagName("img")[0];
let counter = 0;

searchButton.addEventListener("click",searchImage);
//console.log(searchInput);



function searchImage() {   
    

    console.log(searchInput.value); 
    
    let URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(searchInput.value);
    fetchImage(URL);
//     fetch(URL)
//     .then(response => response.json())
//     .then(data => {
//     console.log(data.hits);
//         images = data.hits;
//         appendImg(images);
//         //console.log(data_array);
//          //for (let i=0; i<data.hits.length; i++) {
//         //console.log("hello");
//         let imgUrl = data.hits[i].previewURL;
            
//         //console.log(imgUrl);
//         document.getElementsByTagName("img")[0].src = imgUrl;
//    // }   
    
// })
}

