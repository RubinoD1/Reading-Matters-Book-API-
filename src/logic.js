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

        console.log(radioSelection, " is radio selection");
    
        //switch statement to select api call -- pass search value and radio value in function call 
        testCall(search);

    } else { //If no value is entered in search 
        
        console.log("Please enter a search parameter");
    
    }
    

}); 

async function testCall(searchValue) {
        
        let search = searchValue;
    

          try{
              //await response (retrieving data)
              const response = await fetch(`/.netlify/functions/fetch-title?search=${search}`);
      
              //once the response has been resolved we check its status 
              if(!response.ok){ //if response is NOT okay throw an error message 
      
                  throw new Error("Could not fetch resource");
      
              }
              //if response IS okay 
      
              //covert our response to JSON -- Also returns a promise that is why we are using await
              const data = await response.json();
              console.log(data);
              
              
              //****pass response data to function****
             
      
          }
          //error response if api call fails
          catch(error){
              console.error(error);
              //errorMessage(error);
          }
     
}