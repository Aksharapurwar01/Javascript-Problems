const arr = ['20','120','111','215','54','78', '120'];   
let intArray = arr.map(Number); // convert into number
intArray = [...new Set(intArray)]; // Remove duplicate numbers
const secondLargestNumber = intArray.sort((a,b) => {
    return b - a;
})[1];
console.log(secondLargestNumber);// 120