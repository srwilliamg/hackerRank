/*
 * Complete the 'decryptPassword' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */



function decryptPassword(s) {
  let v = s.split("");
  let x = s.split("");
  let tmp = [];
  for (let i = 0; i+2 < v.length; i++) {
    const element1 = v[i];
    const element2 = v[i+1];
    const element3 = v[i+2];
    // is it numeric?
    if(!isNaN(element1) && element1 != '0'){
      tmp.push(element1);
    }

    if(element1 == element1.toUpperCase() && element2 == element2.toLowerCase() && element3 == '*'){
      x[i] = element2;
      x[i+1] = element1;
    }
  }

  replaceNumber(x, tmp);
  x = x.filter((v) => v!="*");
  let resp = x.join("");
  resp = resp.substring(tmp.length, resp.length);
  return resp;
}

function replaceNumber(arr,element) {
  console.log(element);
  let index = element.length -1;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] == 0){
      arr[i] = element[index];
      index--;
    }
  }
}

function main() {
  console.log(decryptPassword("51Pa*0Lp*0e"));
}

main();