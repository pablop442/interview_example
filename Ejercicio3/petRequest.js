import DataProcessor from "./dataProcessor.js";

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



listPets().then(res=>{
const processor = new DataProcessor(res);
const result = processor.getRepeatedNames()
console.log(result)
})

