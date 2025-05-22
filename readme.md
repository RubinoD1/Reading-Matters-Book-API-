# Google Book API 

<!-- Site Banner -->
<p align="center">
  <img src="./src/assets/images/site banner/reading matters banner.png" />
</p>

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)


Live page: https://eclectic-sopapillas-cb1982.netlify.app/

GitHub: 


Netlify deployment status: &nbsp;&nbsp;
<!-- [![Netlify Status](https://api.netlify.com/api/v1/badges/af099b76-46ea-4069-84cf-31455d5ae5b1/deploy-status)](https://app.netlify.com/sites/inquisitive-granita-a0d603/deploys) -->



**Site Background Photo**

"Books on Wooden Shelves Inside Library" by: [ Stanislav Kondratiev](https://www.pexels.com/@technobulka/)




## API Notes 

Performing a search

You can perform a volumes search by sending an HTTP GET request to the following URI:

https://www.googleapis.com/books/v1/volumes?q=search+terms

This request has a single required parameter:

    q - Search for volumes that contain this text string. There are special keywords you can specify in the search terms to search in particular fields, such as:
        
        intitle: Returns results where the text following this keyword is found in the title.
        
        inauthor: Returns results where the text following this keyword is found in the author.
        
        inpublisher: Returns results where the text following this keyword is found in the publisher.
        
        subject: Returns results where the text following this keyword is listed in the category list of the volume.
        
        isbn: Returns results where the text following this keyword is the ISBN number.
        
        lccn: Returns results where the text following this keyword is the Library of Congress Control Number.
        
        oclc: Returns results where the text following this keyword is the Online Computer Library Center number.

Request

Here is an example of searching for Daniel Keyes' "Flowers for Algernon":

GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

**Note: Performing a search does not require authentication, so you do not have to provide the Authorization HTTP header with the GET request. However, if the call is made with authentication, each Volume will include user-specific information, such as purchased status.**


inauthor search sample: https://www.googleapis.com/books/v1/volumes?q=inauthor:"Richard+Moreno"&key=my_key

--------------

**Setting max search results**

To set the number of search results using the Google Books API, you utilize the maxResults parameter within your API request. The maximum allowable value for this parameter is 40. To configure the number of results, simply include maxResults=x in your API query, where 'x' is the desired number of results (between 0 and 40). 
Here's a more detailed breakdown: 

    Parameter Name: maxResults

    Acceptable Values: 0 to 40 (inclusive)

    Default Value: The API has a default value, but it's best to explicitly set the desired number of results for control.

    Example: 

Code

    https://www.googleapis.com/books/v1/volumes?q=java&maxResults=20



