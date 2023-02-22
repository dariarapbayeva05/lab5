function load () {
     let column_1 = [6,4,9,1,4,8,10,8,4,10,2,7,8,5,9,7,4,5,2,9,10,5,4,3,9,7,8,5,2];
     let column_2 = [6,9,10,7,10,1,1,4,6,2,5,2,8,4,1,1,4,2,8,3,7,2,7,5,2,7,1,10,5];
    
     let column_3 = [96,82,56,57,78, 74,75,68,100,84,82,47,77,60,62,76,88,98,60,92,83,98,47,62,40,53,96,87,92];
    
     let column_4 = [65,70,78,42,74,41,90,87,45,60,75,86,43,60,54,60,84,51,79,76,61,96,68,86,69,81,58,43,82];
    
     let sum_1 = 0;
     let sum_2 = 0;
     let sum_3 = 0;
     let sum_4 = 0;



     
     for (let i = 0; i < column_1.length; i++){
        sum_1=sum_1+column_1[i];
    }
     for (let i = 0; i < column_2.length; i++){
         sum_2=sum_2+column_2[i];
    }
     for (let i = 0; i < column_3.length; i++){
         sum_3=sum_3+column_3[i];
    }
     for (let i = 0; i < column_4.length; i++){
         sum_4=sum_4+column_4[i];
    }

    let total_sum = [];
     
    total_sum.push(sum_1);
    total_sum.push(sum_2);
    total_sum.push(sum_3);
    total_sum.push(sum_4);

    let total_score = 0;

    for (let i = 0; i < total_sum.length; i++){
        total_score=total_score+total_sum[i];
   }
     
    alert(JSON.stringify(" SUM of column_1: " +sum_1 +
    " SUM of column_2: " +sum_2 +
    " SUM of column_3: " +sum_3 + 
    " SUM of column_4: " +sum_4 


    ))   

    alert(JSON.stringify(" TOTAL SCORE: " + total_score))
    console.log(total_score)

    } 

    load()
    
    