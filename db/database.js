const fs = require("fs")
const util = require("util"); 

const promisifyReadFile = util.promisify(fs.readFile);
const promisifyWriteFile = util.promisify(fs.writeFile);


class databaseFunctionality {

    read() {
        return promisifyReadFile("db/db.json", "utf8");
    }

    write(myNotes) {
        return promisifyWriteFile("db/db.json", JSON.stringify(myNotes));
    }

    getNotes(){
        return this.read().then((myNotes) => {
            let parsedNotes;
        })
    }


    addNote(myNotes){
       const { title, text } = myNotes;
       
       if (!title || !text) {
           throw new Error("the 'title and 'text' cannot be blank");
       }

       const newNote = { title, text, id: util() };

       return this.getNotes()
       .then((myNotes) => [...myNotes, newNote])
       .then((updatedNotes) => this.write(updatedNotes))
       .then(() => newNote);
    }


    deleteNote(){}
}

module.exports = new databaseFunctionality();