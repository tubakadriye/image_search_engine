
let API_KEY = '31061273-0aa24f03fea9709282a7555b6';
let URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('elephant');
let ul= document.getElementById("image-list");

//history.back();
//fetch(URL);
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


let searchInput = document.getElementById("search");
console.log(searchInput);
let searchButton = document.getElementsByTagName("button")[0];
searchButton.addEventListener("click",handleClick);

let myValue = localStorage.getItem("inputValue");
fetchURL(myValue);

//fetchImage(URL);


//console.log(images);
function appendImg(images) {
    ul.innerHTML = "";
    for (let i=0; i<images.length; i++)
{
    let linkElement = document.createElement("a");
    let image = document.createElement("img");
    let li = document.createElement("li");
    image.src = images[i];
    linkElement.appendChild(image);
    li.appendChild(linkElement);
    ul.appendChild(li);
}
}


//console.log(images);

function fetchImage(url) {
    let images=[];
    let largeImages = [];
    // url = URL
    fetch(url)
    .then(response => response.json())
    .then(data => {
    console.log(data.hits);
    //images = data.hits;
    //console.log(data_array);
    for (let i=0; i<data.hits.length; i++) {
        //console.log("hello");
        let imgUrl = data.hits[i].previewURL;
        let largeimgUrl = data.hits[i].largeImageURL;

        //console.log(imgUrl);
        //document.getElementsByTagName("img")[0].src = imgUrl;
        images.push(imgUrl);
        largeImages.push(largeimgUrl);
    }   
    console.log(images);
    appendImg(images);

    for (let i=0; i<data.hits.length; i++) {
        let linkelement = document.getElementsByTagName("a")[i];
        linkelement.href=largeImages[i];
    }
    
})
    
}

// fetchback() {
//     let url_back = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('elephant');
//     fetch()
    

// }

// let research;
// localStorage.setItem(research, searchInput.value);
// let researchValue = localStorage.getItem(research);
// console.log(researchValue);

//let imgTag = document.getElementsByTagName("img")[0];
//let counter = 0;

//createItem();

//console.log(searchInput);

// function createItem() {
//     localStorage.setItem("searchInput",searchInput);
// }


// function readValue() {
//     let x = localStorage.getItem("searchInput");
//     document.getElementById()
// }




function handleClick() {   //
    let storedValue = searchInput.value;
    localStorage.setItem("inputValue", storedValue);

    console.log(searchInput.value); 
    
    // let URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(searchInput.value); //
    // console.log(myValue);
    // fetchImage(URL);

    fetchURL(searchInput.value);
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

function fetchURL(inputValue) {   //

    //console.log(searchInput.value); 
    
    let URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(inputValue); //
    console.log(myValue);
    fetchImage(URL);

}





