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




get_mac function


1. **Retrieve the MAC Address**:
   - The `uuid.getnode()` function returns the hardware address as a 48-bit positive integer. This integer represents the MAC address of the device.

2. **Format the MAC Address**:
   - The MAC address needs to be formatted as a string of six pairs of hexadecimal digits, separated by colons.
   - The updated function uses a list comprehension to extract each byte of the MAC address and format it as a two-digit hexadecimal string.
   - The `mac >> i` operation shifts the bits of the MAC address to the right by `i` positions, allowing us to extract each byte.
   - The `& 0xff` operation masks the lower 8 bits (one byte) of the shifted MAC address.
   - The `'{:02x}'.format(...)` expression formats the byte as a two-digit hexadecimal string.
   - The `':'.join(...)` function joins the formatted bytes with colons to create the final MAC address string.


```python
def get_mac():
    mac = uuid.getnode()
    mac_address = ':'.join(['{:02x}'.format((mac >> i) & 0xff) for i in range(0, 48, 8)])
    return mac_address
```


Let's say `uuid.getnode()` returns the integer `281474976710655`. The function will format it as follows:
- `mac >> 0 & 0xff` extracts the first byte: `ff`
- `mac >> 8 & 0xff` extracts the second byte: `ff`
- `mac >> 16 & 0xff` extracts the third byte: `ff`
- `mac >> 24 & 0xff` extracts the fourth byte: `ff`
- `mac >> 32 & 0xff` extracts the fifth byte: `ff`
- `mac >> 40 & 0xff` extracts the sixth byte: `ff`

The final MAC address string will be `ff:ff:ff:ff:ff:ff`.

This approach ensures that the MAC address is correctly formatted and stored in the database. If you have any more questions or need further assistance, feel free to ask!
