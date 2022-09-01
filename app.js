function isAnag(string1, string2){

    let frequency = {}
    let frequency2 = {}
    if (string1.length !== string2.length) {
      return false;
    }
    for (let i = 0; i < string1.length; i++) {
        if (frequency[string1[i]]) { 
          frequency[string1[i]]++ 
        } else { 
          frequency[string1[i]] = 1 
        }
      }
   
      for (let i = 0; i < string2.length; i++) {
        if (frequency2[string2[i]]) {
          frequency2[string2[i]]++
        } else {
          frequency2[str2[i]] = 1
        }
      }

 // console.log(frequency1);
  // console.log(frequency2):
  const frequencyKeys = Object.keys(frequency);

  for (let i = 0; i < frequencyKeys.length; i++) { 
    if (frequency[frequencyKeys[i]] !== frequency2[frequencyKeys[i]]) {
      return false
    }
  }
  return true
}

console.log( sAnag('rail safety', 'fairy tales'))
console.log( sAnag('RAIL! SAFETY!', 'fairy tales'))
console.log( sAnag('Hi there', 'Bye there'))