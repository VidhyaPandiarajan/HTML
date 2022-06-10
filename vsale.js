const sales = [ 
    { item: 'PS4 Pro', stock: 3, original: 399.99 }, 
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 }, 
    { item: 'Nintendo Switch', stock: 4, original: 299.99 }, 
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 }, 
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 } 
    ]; 

    SaleItems = Salefunction(sales);
    
    function Salefunction(sales)
    {
   
    for (let i=0;i<=4;i++)
    {
    sales[i].Itemsale = sales[i].original-(sales[i].original*sales[i].discount);  
  
    sales[i].Total = (sales[i].stock * sales[i].Itemsale);
   
    }
    console.log(sales);
    return sales;
    }
    console.log(SaleItems);
  