fetch("https://fakestoreapi.com/products")
.then(res => res.json)
.then(data => {
    alert("Malumotlar keldi");
    console.log(data);
})

.catch((error) => {
    console.log("Error",error);
})
