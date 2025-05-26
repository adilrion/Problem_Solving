// ProtoType Chain
{
  const myObj = {
    name: "hello",
    district: 'Chandpur',
    greet() {
      console.log(`this is ${this.name} from ${this.district}`);
    }
  };
  console.log(myObj.toString());
  const newObj = Object.create(myObj)
}

{
  const myDate = new Date();
  let object = myDate;

  do {
      object = Object.getPrototypeOf(object);
      console.log(object);
  } while (object);
}