function addingEventListener() {
    const input = document.getElementById('button');
    console.log(input); // Add this line to check if the element is found
    input.addEventListener('click', function() {
      alert('I was clicked!');
    });
}