//bookSearch is form 
const bookSearch = document.querySelector(".bookSearch");
// searchInput is text box 
const searchInput = document.querySelector(".searchInput");
// parent element for search results
const results = document.querySelector(".searchResults");

bookSearch.addEventListener("submit", async event => {
    //prevents page refresh
    event.preventDefault();

    //search is used as a query parameter =?${} value that is passed into the api call
    let search = searchInput.value; 
    
    //verify if a value has been enetered by the user 
    if (search){//if there is a value this will be true 
        //get radio checked value 
        const radioValueCheck = document.getElementsByName("search-radio");
        let radioSelection = "";
    
        // iterate through radio buttons and set radioSelection to the name of checked radio button
        for(let i = 0; i < radioValueCheck.length; i++) {
            if (radioValueCheck[i].checked){
                radioSelection = radioValueCheck[i].value;
            } else {
                //DO NOTHING 
            }
        }
    
         apiCalls(search, radioSelection);

    } else { //If no value is entered in search     
        
        displayError("Please enter a search parameter");
    
    }
}); 

// api calls 
async function apiCalls(searchValue, radioSelection) {
    
    let search = searchValue;
    let callCategory = radioSelection;

          try{
              //await response (retrieving data)
              const response = await fetch(`/.netlify/functions/fetch-${callCategory}?search=${search}`);
      
              //once the response has been resolved we check its status 
              if(!response.ok){ //if response is NOT okay throw an error message 
      
                  throw new Error("Could not fetch resource");
      
              }
              //if response IS okay 
      
              //covert our response to JSON 
              const data = await response.json();

              searchResults(data);
          }
          //error response if api call fails
          catch(error){
              displayError(error);
          }    
}

// create search elements 
function searchResults(data) {

    // if search results already exist the empty string will reset it 
    results.textContent = "";
    // make search ul visible by removing display: none property 
    results.style.display = "flex";


    //iterate through array.length 
    for (let i = 0; i < data.items.length; i++) {
        // create elements 
        const parent = document.createElement("li");//parent that holds all book search results for a volume 
        const thumbnail = document.createElement("img"); // book thumbnail image
        const div = document.createElement("div");//holds all book details (parent)
        const title = document.createElement("h3");//title
        const author =  document.createElement("p");//author
        const details = document.createElement("details"); //details element (parent within div)
        const summary = document.createElement("summary"); // summary element
        const description = document.createElement("p"); //book description
        const categories = document.createElement("p"); //book categories
        const ratingParent = document.createElement("p"); //book rating info parent
        const ratingIcon = document.createElement("img"); //book rating icon
        const ratingInfo = document.createElement("p"); //book rating info 
        const publisherParent = document.createElement("p"); //book publisher info parent
        const publisherIcon = document.createElement("img"); //book publisher icon
        const publisherInfo = document.createElement("p"); //book publisher info 
        const publicationParent = document.createElement("p"); //book publication info parent
        const publicationIcon = document.createElement("img"); //book publication icon
        const publicationInfo = document.createElement("p"); //book publication info     
        const pagesParent = document.createElement("p"); //book page count info parent
        const pagesIcon = document.createElement("img"); //book pages icon
        const pagesInfo = document.createElement("p"); //book pages info  
    
        // set created elements content
    
        //thumbnail 
        if ("imageLinks" in data.items[i].volumeInfo === true){
            if ("smallThumbnail" in data.items[i].volumeInfo.imageLinks === true){
                thumbnail.src = `${data.items[i].volumeInfo.imageLinks.smallThumbnail}`;
                thumbnail.alt = `Book cover thumbnail`; 
            } else {
                // set placeholder image if no thumbnail avaliable
                thumbnail.src = `./assets/images/no image/No-Image-Placeholder.png`;
                thumbnail.alt = `Book cover not avaliable thumbnail`;
        }
        }else {
            // set placeholder image if no thumbnail avaliable
            thumbnail.src = `./assets/images/no image/No-Image-Placeholder.png`;
            thumbnail.alt = `Book cover not avaliable thumbnail`;
        }




        //title 
        if ("title" in data.items[i].volumeInfo === true) {
            title.textContent = `${data.items[i].volumeInfo.title}`; 
        } else {
            title.textContent = "Title: N/A"; 
        }

        //author 
        if ("authors" in data.items[i].volumeInfo === true) {
            //add space after comma     
            function addSpaceAfterComma(str) {
                return str.replace(/,/g, ', ');
            }

            author.textContent  = addSpaceAfterComma(`${data.items[i].volumeInfo.authors}`);

        } else {
            author.textContent = "Author: N/A"; 
        }    

        //description
        if ("description" in data.items[i].volumeInfo === true) {
            description.textContent = `${data.items[i].volumeInfo.description}`;
        } else {
            description.textContent = "Description: N/A"; 
        } 
    
        //categories 
        if ("categories" in data.items[i].volumeInfo === true) {
            categories.textContent = `${data.items[i].volumeInfo.categories}`;
        } else {
            categories.textContent = "Categories: N/A"; 
        }     

        //rating
        if ("averageRating" in data.items[i].volumeInfo === true) {
            ratingInfo.innerHTML = "<b>Rating: </b>" + `${data.items[i].volumeInfo.averageRating}`;
        } else {
            ratingInfo.innerHTML = "<b>Rating: </b> N/A";
        }      

        ratingIcon.src = `./assets/images/icons/rating.svg`;
        ratingIcon.alt = `rating icon`;

        //publisher
        if ("publisher" in data.items[i].volumeInfo === true) {
            publisherInfo.innerHTML = "<b>Publisher: </b>" + `${data.items[i].volumeInfo.publisher}`;
        } else {
            publisherInfo.innerHTML = "<b>Publisher: </b> N/A";
        }     

        publisherIcon.src = `./assets/images/icons/publisher.svg`;
        publisherIcon.alt = `publisher icon`;

        //publication
        if ("publishedDate" in data.items[i].volumeInfo === true) {
            publicationInfo.innerHTML = "<b>Published: </b>" + `${data.items[i].volumeInfo.publishedDate}`;
        } else {
            publicationInfo.textContent = "<b>Published: </b> N/A"; 
        }        

        publicationIcon.src = `./assets/images/icons/publication.svg`;
        publicationIcon.alt = `publication date icon`;

        //page count 
        if ("pageCount" in data.items[i].volumeInfo === true) {
            pagesInfo.innerHTML = "<b>Pages: </b>" + `${data.items[i].volumeInfo.pageCount}`;
        } else {
            pagesInfo.innerHTML = "<b>Rating: </b> N/A";
        }       
    
        pagesIcon.src = `./assets/images/icons/pages.svg`;
        pagesIcon.alt = `page count icon`;
   

        // add CSS classes to elements 
        thumbnail.classList.add("smallThumbnail"); 
        div.classList.add("thumbnailContent");
        description.classList.add("detailsDescription");
        categories.classList.add("detailsCatergories");
        ratingIcon.classList.add("detailsIcon");
        publisherIcon.classList.add("detailsIcon");
        publicationIcon.classList.add("detailsIcon");
        pagesIcon.classList.add("detailsIcon");


        // append child elements to parent 
        parent.appendChild(thumbnail);//thumbnail
        parent.appendChild(div);//div parent of book details
        div.appendChild(title);//title
        div.appendChild(author);//author
        div.appendChild(details); // parent of more info details
        
        //append to details element
        details.appendChild(summary);
        details.appendChild(description);
        details.appendChild(categories);

        //rating 
        details.appendChild(ratingParent);
        ratingParent.appendChild(ratingIcon);
        ratingParent.appendChild(ratingInfo);
        //publisher
        details.appendChild(publisherParent);
        publisherParent.appendChild(publisherIcon);
        publisherParent.appendChild(publisherInfo);
        //publication date
        details.appendChild(publicationParent);
        publicationParent.appendChild(publicationIcon);
        publicationParent.appendChild(publicationInfo);
        //page count
        details.appendChild(pagesParent);
        pagesParent.appendChild(pagesIcon);
        pagesParent.appendChild(pagesInfo);

        results.appendChild(parent); //append to ul parent element
    }    

}


// display error message
function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorMessage");

    // if search results already exist the empty string will reset it 
    results.textContent = "";
    // make search ul visible by removing display: none; property 
    results.style.display = "flex";
    
    results.appendChild(errorDisplay);


}