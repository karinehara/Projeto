import CompositeReportFormater from "./src/CompositeReportFormater.js";
import FormaterHTML from "./src/FormaterHTML.js";
import fs from 'node:fs'

const filename = './data/cidades-2.json';
let cities;

try {
  const fileContent = fs.readFileSync(filename, 'utf-8');
  cities = JSON.parse(fileContent);
  
//console.log(cities);
} catch (error) {
  console.error('Erro ao ler ou analisar o arquivo JSON:', error);
}


const compositeReportFormater = new CompositeReportFormater();
const html = new FormaterHTML();
console.log(html.outputReport(cities));



// compositeReportFormater.addReportFormater(new FormaterHTML());




