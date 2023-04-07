export default function event(){
   // Define the data you want to send to the Flask API
const data = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };
  
  // Define the URL of the Flask API endpoint
  const url = 'http://localhost:5000/api/users';
  
  // Define the options for the fetch request
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  
  // Send the fetch request and receive the response
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  
}