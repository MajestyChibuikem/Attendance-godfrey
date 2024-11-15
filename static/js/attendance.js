document.addEventListener('DOMContentLoaded', ()=>{
    fetch('/get-ip-mac')
        .then(Response = Response.json())
        .then(data =>{
            const {ip, mac} = data;
            return fetch('/verify-attendance', {
                method: 'POST',
                headers:{
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify({ip,mac})
            });
        })
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
        .catch(error =>{
            console.error('Error',error);
        });
});