attendance.js

1. **Event Listener for DOMContentLoaded**:
   ```javascript
   document.addEventListener('DOMContentLoaded', ()=>{
   ```
   - This line sets up an event listener that waits for the entire HTML document to be fully loaded and parsed before executing the enclosed function.

2. **Fetch IP and MAC Address**:
   ```javascript
   fetch('/get-ip-mac')
       .then(Response = Response.json())
   ```
   - This fetches data from the `/get-ip-mac` endpoint.
   - The `.then(Response = Response.json())` line processes the response and converts it to JSON format.

3. **Process the Data**:
   ```javascript
   .then(data =>{
       const {ip, mac} = data;
   ```
   - This line extracts the `ip` and `mac` values from the JSON data received from the server.

4. **Send IP and MAC for Verification**:
   ```javascript
   return fetch('/verify-attendance', {
       method: 'POST',
       headers:{
           'Content-Type': 'Application/json'
       },
       body: JSON.stringify({ip,mac})
   });
   ```
   - This sends a POST request to the `/verify-attendance` endpoint with the `ip` and `mac` values in the request body.
   - The `Content-Type` header is set to `application/json` to indicate that the request body contains JSON data.

5. **Process the Verification Response**:
   ```javascript
   .then(Response = Response.json())
   .then(result =>{
       const messageElement = document.getElementById('message');
       if(result.success){
           messageElement.textContent = 'Attendance has been taken'
       }
       else{
           messageElement.textContent = 'Attendance Failed'
       }
   })
   ```
   - This processes the response from the `/verify-attendance` endpoint, converting it to JSON format.
   - It then updates the text content of the HTML element with the ID `message` based on whether the verification was successful or not.

6. **Error Handling**:
   ```javascript
   .catch(error =>{
       console.error('Error',error);
   });
   ```
   - This catches any errors that occur during the fetch requests and logs them to the console.

In summary, this script fetches the IP and MAC address from the server, sends them for verification, and updates the page with a message indicating whether the attendance was successfully taken or not. If any errors occur during this process, they are logged to the console.

