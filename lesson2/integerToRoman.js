(() => {
  const DEF_NUMBERRS = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  };

  const getMiddleNumber = (min, number, pivot, next) => {
    return element = number < pivot
      ? DEF_NUMBERRS[min].repeat(pivot.toString()[0] - number[0]).concat(DEF_NUMBERRS[pivot])
      : next && number >= next - min
        ? DEF_NUMBERRS[min].concat(DEF_NUMBERRS[next])
        : DEF_NUMBERRS[pivot].concat(DEF_NUMBERRS[min].repeat(number[0] - pivot.toString()[0]));
  }


  const getSimbol = str => {
    if (str === "") return "";

    let element;
    switch (true) {
      case str <= 3:
        element = DEF_NUMBERRS[1].repeat(str[0]);
        break;
      case +str > 3 && +str < 10:
        element = getMiddleNumber(1, str, 5, 10);
        break;
      case  +str > 10 && +str < 40:
        element = DEF_NUMBERRS[10].repeat(str[0]);
        break;
      case  +str >= 40 && +str < 100:
        element = getMiddleNumber(10, str, 50, 100);
        break;
      case  +str > 100 && +str < 400:
        element = DEF_NUMBERRS[100].repeat(str[0]);
        break;
      case  +str >= 400 && +str < 1000:
        element = getMiddleNumber(100, str, 500, 1000);
        break;
      case  +str >= 1000:
        element = DEF_NUMBERRS[1000].repeat(str[0]);
        break;
    }

    return element.concat(getSimbol(str.slice(1)));
  }

  const intToRoman = function(num) {
    return getSimbol(num.toString());
  };

  console.log(intToRoman(3));
  console.log(intToRoman(4));
  console.log(intToRoman(9));
  console.log(intToRoman(58));
  console.log(intToRoman(1994));

})();
