const data = [
    ["Ali", "Wali","Zia" ,"Gyan"],
    ["Ali", "Wali","Zia" ,"Gyan"],
    ["Ali", "Wali","Zia" ,"Gyan"],
    
    ]
    for(let i =0; i<data.length ;i++){
        document.write(`<h1> Element of array index ${i}</h2>`);
    
    for(let j =0; j<data[i].length ;j++){
        document.write(data[i][j]+"<br>");
        
    }
    
    }