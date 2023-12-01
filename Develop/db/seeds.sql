INSERT INTO Category (id, category_name)
VALUES (1,"Shirts"),
       (2,"Shorts"),
       (3,"Music"),
       (4,"Hats"),              
       (5,"Shoes"); 

INSERT INTO Product (id, product_name, price, stock)
VALUES (1,"Plain T-Shirt", 14.99, 14,),
       (5,"Running Sneakers", 90, 25),
       (4,"Brander Baseball Hat", 22.99, 12),
       (3,"Top 40 Music Compilation Vinyl Record", 12.99, 50),    
       (2,"Cargo Shorts", 29.99, 22);

INSERT INTO ProductTag (id, product_id, tag_id)
VALUES (1,1,6),
       (1,1,7),
       (1,1,8),
       (2,2,6),    
       (3,3,1),
       (3,3,3),
       (3,3,4),       
       (3,3,5),
       (4,4,1),
       (4,4,2),
       (4,4,8),
       (5,5,3);                            

INSERT INTO Tag (id, tag_name)
VALUES (3,"rock music"),
       (3,"pop music"),
       (3,"blue"),
       (3,"red"), 
       (3,"green"), 
       (3,"white"),  
       (3,"gold"),  
       (3,"pop culture");                
