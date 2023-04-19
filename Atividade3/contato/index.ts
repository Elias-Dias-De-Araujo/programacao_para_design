import Phone from "./phone";

function main() {
  // case sucess
  console.log(Phone.validate("(88)998131458"));
  const myPhone = new Phone("oi", "(88)998131458");
  console.log(myPhone.tostring());

  // case fail
  console.log(Phone.validate("(88)99.131458"));

  // case fail
  console.log(Phone.validate("(88)998-131458"));

  // case fail
  console.log(Phone.validate("((88)9981-31458"));

}

main();