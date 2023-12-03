document.getElementById('myForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // prevent default form submission behavior
     
    // gather form data
    var formData = new FormData(event.target);
     
    // create request data
    var requestData = new URLSearchParams(formData).toString();
     
    try {
       // send request
       var response = await fetch('api_endpoint', {
         method: 'POST',
         headers: {
           'Content-Type': 'application.json'
         },
         body: requestData
       });
       
       // check if request was successful
       if (!response.ok) {
         throw new Error('Failed to send form data to backend.');
       }
       
       // parse response JSON
       var data = await response.json();
       
       // get ID from response
       var id = data.id;
       console.log('ID received from backend:', id);
       
    } catch (error) {
       console.error('Failed to send form data to backend:', error);
    }
   });