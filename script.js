    
     let row = document.querySelector(".row");
     let  sbtn = document.querySelector(".btn");
     let sinpt = document.querySelector(".form-control");
    async function fetchData() {
      try {
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    }
        
    function renderProducts(products) {
      row.innerHTML = "";
      products.forEach((product) => {
        let col = document.createElement("div");
        col.classList.add("col-12", "col-sm-6", "col-md-4", "col-xl-3", "mb-4");
        col.innerHTML = `
          <div class="card">
            <img src=${product.image} class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text">$${product.price}</p>
              <a href="#" class="btn btn-success">View Product</a>
              <a href="#" class="btn btn-success">Add to cart</a>
            </div>
          </div>`;
        row.append(col);
      });
    }
    
    fetchData().then((data) => {
      products = data;
    
      renderProducts(products);
    
      sbtn.addEventListener("click", (event) => {
        event.preventDefault();
    
        let price = parseInt(sinpt.value);
    
        const searchProduct = products.filter((product) => product.price < price);
    
        if (searchProduct.length > 0) {
          renderProducts(searchProduct);
        } else {
          renderProducts(products);
        }
      });
    });
    
     