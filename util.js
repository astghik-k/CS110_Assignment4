

module.exports ={
  
  matrixProduct: function(mat1, mat2) {
      if (mat2.length === mat1[0].length){
      
        let matrix = [];
        for (let row1 = 0; row1 < mat1.length; row1++) {
            matrix.push([]);
  //count of the rows
        for (let col2 = 0; col2 < mat2[0].length; col2++) {
          //count of the columns            
          let element = 0;
          
            for (let row2 = 0; row2 < mat1[0].length; row2++) { 
              //row2 ===col1
                let element1 = 0;
                let element2 = 0;
                element1= mat1[row1][row2]; 
                element2= mat2[row2][col2];
                element+= element1 * element2;
              
            }
            matrix[row1][col2] = element;
          }}
            return matrix;
          }
    else return('These matrices cannot be multiplied');
  },

  sumOfMatrices: function (mat1, mat2) {
    let sum = [];
    for ( let row = 0; row < mat1.length; row++) {
      sum.push([]);
    }
    for (let row = 0; row < mat1.length; row++) {
      for (let col = 0; col < mat1[row].length; col++) {
        sum[row][col] = mat1[row][col] + mat2[row][col];
   }
  }
return sum;
},

sumOfEachRow: function (mat) {
  function sumOfArray(arr) {
    
    let sum = [0];
    for (let i = 0; i < arr.length; i++) {
        sum[0] += arr[i];
    }
    return sum;
  }
  let sum = [];
  for (let row= 0; row < mat.length; row++){
      sum.push(sumOfArray(mat[row]));
      
    }
    return sum;
  }
  
}