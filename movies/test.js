fetch("http://www.omdbapi.com/?i=tt3896198&apikey=d2f0e2a7")
.then(res => {
   return res.json();
})
.then(data =>{
    console.log(data);
})