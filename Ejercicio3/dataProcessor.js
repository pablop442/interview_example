export default class DataProcessor {
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