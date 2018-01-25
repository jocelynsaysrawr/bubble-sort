/**
 * Create a function that will sort an array using the bubble sort algorithm.
 * This function takes one parameter - an array.
 * 
 * The function will loop through the array.
 * 
 * While looking at 2 indexes at a time, if the item in the index to the left is greater than the item in the index to the right, the items will 'swap' places.
 * 
 * When no more swaps can be made (the array goes from smallest value on the left to greatest value on the right) the function will return the newly sorted array.
 * 
 * @name bubbleSort
 * @param {array} arr
 * @return {array}
 * 
 */

 function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (var i = 0; i < arr.length; i++){
            if (arr[i] > arr[i+1]){
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
 }



 module.exports = {
     bubbleSort
 }