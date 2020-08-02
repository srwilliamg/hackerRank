'use strict';

/*
 * Complete the 'filledOrders' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY order
 *  2. INTEGER k
 */

function filledOrders(order, k) {
  k = parseInt(k);
  let resp = 0;

  order.sort((a, b) => (a < b ? -1 : 1));

  if(order[0] > k){
    return 0;
  }

  let tmpk = k;
  let tmp = [];
  for (let j = 0; j < order.length; j++) {
    console.log(tmpk);
    tmpk = tmpk-order[j];
    tmp.push(order[j]);
    if(tmpk == 0 || (tmpk - order[j+1]) < 0){
      resp = tmp.length;
      break;
    }
    else if(tmpk < 0){
      temp.shift();
      break;
    }
  }
  resp = tmp.length;
  return resp;
}

function main() {
  console.log(filledOrders([20001,24],21+24));
}

main();