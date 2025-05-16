# Google Book API 

<!-- Site Banner -->
<p align="center">
  <img src="./assets/images/site banner/reading matters banner.png" />
</p>

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)


Live page: 

GitHub: 


Netlify deployment status: &nbsp;&nbsp;
<!-- [![Netlify Status](https://api.netlify.com/api/v1/badges/af099b76-46ea-4069-84cf-31455d5ae5b1/deploy-status)](https://app.netlify.com/sites/inquisitive-granita-a0d603/deploys) -->



**Site Background Photo**

"Books on Wooden Shelves Inside Library" by: [ Stanislav Kondratiev](https://www.pexels.com/@technobulka/)

## Potential Backgrounds

"Books on Wooden Shelves Inside Library" by: [ Stanislav Kondratiev](https://www.pexels.com/@technobulka/)

![Books on Wooden Shelves Inside Library](./assets/images/background/Books%20on%20Wooden%20Shelves%20Inside%20Library.jpg)
<!-- &nbsp; adds space between images -->
&nbsp;


<!-- "Books on Wooden Shelves Inside Library" by: [ Stanislav Kondratiev](https://www.pexels.com/@technobulka/)

![Books on Wooden Shelves Inside Library](./assets/images/background/Books%20on%20Wooden%20Shelves%20Inside%20Library.jpg) -->
<!-- &nbsp; adds space between images -->
&nbsp;



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