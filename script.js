
let fs = require("fs");

let args = process.argv.slice(2);

let filename = args[0];

fs.readFile(filename, "UTF8", (error, data) => { 
        if (error) throw error

        const nameFile = filename.split('.')[0]
        const typeFile =filename.split('.')[1]
    
        fs.writeFile(nameFile + "_MAIÚSCULO" + `.${typeFile}`, data.toUpperCase(), (error) => {
            if (error) throw error
                else {
                    console.log("Arquivo editado com sucesso")
}}
)});       