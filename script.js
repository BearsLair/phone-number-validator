const validatePhoneNumber = (userNumber) => {
  let pureNumberArray = [];

  const userNumberArray = userNumber.split("").map((el) => {
    if (el == /\d/) {
      pureNumberArray.push(el);
    }
  });
  return pureNumberArray;
};

console.log(validatePhoneNumber("(123)-456-7890"));
