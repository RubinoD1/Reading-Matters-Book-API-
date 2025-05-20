//bookSearch is form 
const bookSearch = document.querySelector(".bookSearch");
// searchInput is text box 
const searchInput = document.querySelector(".searchInput");

bookSearch.addEventListener("submit", async event => {
    //prevents page refresh
    event.preventDefault();

    //search is used as a query parameter =?${} value that is passed into the api call
    let search = searchInput.value; 
    console.log(search, " is search");

    if (search){//if there is a value this will be true 
        //get radio checked value 
        const radioValueCheck = document.getElementsByName("search-radio");
        let radioSelection = "";
    
        // iterate through radio buttons and set radioSelection to the name of checked radio button
        for(i = 0; i < radioValueCheck.length; i++) {
            if (radioValueCheck[i].checked){
                radioSelection = radioValueCheck[i].value;
            }
        }

        console.log(radioSelection, " is radio selection");
    
        //switch statement to select api call -- pass search value and radio value in function call 


    } else { //If no value is entered in search 
        
        console.log("Please enter a search parameter");
    
    }
    

}); 

