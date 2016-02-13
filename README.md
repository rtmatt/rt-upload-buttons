# rt-upload-buttons
Pretty file upload buttons

### Dependencies
* jQuery
* SASS build process

## Installation



### Pull In Source

``` bash 

$ npm install rt-upload-buttons

```



### Include Script in Gulp Build
in gulpfile:


``` javascript 

 mix.scripts([
       // [...] 
         './node_modules/rt-upload-buttons/dist/rt-upload-buttons.min.js',
       // [...] 
    ],[dest file]);

```



   
  

 ## Usage
 Simply include the following in your sites app scripts:
 
 ``` JavaScript 
 
 jQuery(document).ready(function(){
     new RTButtons();     
 });
 
 
 ```
 
 By default, your form must reflect at least the following:
 1. A Form with class "rt-form"
 2. A input with type of "file" wrapped in an element with a class of "file-upload"
 
 ``` html 
 
 <form class="rt-form">
     <div class="file-upload">
         <input name="image" type="file">
     </div>
 </form>
 
 ```
 
 ### Note
 By default, this will replace the native input with a ``` <button class="btn btn-info"> ``` element.
 
 
 ## Configuration
The above mentioned requirements can be overridden by changing any of the default options upon instantiation:

  ``` html 
  
  <form class="your-form-class">
      <div class="your-input-wrapper">
          <input name="image" type="file">
      </div>
  </form>
  
  ```
  
  
  ``` JavaScript 
  
  new RTButtons({
  	classes:'custom-button-class' //any class names for the rendered button go here
  	form_selector:'.your-form-class',  //jQuery selector if you want to use a different form class
  	upload_group_selector: '.your-input-wrapper'  //jQuery selector if you want to change the input wrapper class
  });
  
  ```
  
  
  
 
 
 
 ``` javascript 
 
	$('#form_group_description').rtcharcount({
		min:0,
		max:170
	});
 
 ```
 
