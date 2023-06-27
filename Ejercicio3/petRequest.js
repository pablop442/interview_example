
const url = "https://petstore.swagger.io/v2/"

async function listPets() {
    const response = await fetch(`${url}pet/findByStatus?status=sold`);
    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }
    const result = await response.json();
    const formattedResult = result.map(object =>{
            return{
                id: object.id,
                name: object.name
            }
        })
    return formattedResult;
  }




class DataProcessor {
  constructor(data) {
    this.data = data;
  }

  getRepeatedNames() {
    const nameCount = {};
//Go through array
    for (let i = 0; i < this.data.length; i++) {
      const name = this.data[i].name
      if (nameCount[name]) {
        nameCount[name]++;
      } else {
        nameCount[name] = 1;
      }
    }
//Filter the object
    const result = {};
    for (const name in nameCount) {
      if (nameCount[name] > 1) {
        result[name] = nameCount[name];
      }
    }

    return result;
  }
}

listPets().then(res=>{
const processor = new DataProcessor(res);
const result = processor.getRepeatedNames()
console.log(result)
})

