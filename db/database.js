const fs = require("fs")
const util = require("util"); 
const { v4: uuidv4 } = require('uuid');

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
        
            let jsonNotes = [].concat(JSON.parse(myNotes))
            return jsonNotes;
        })
    }


    addNote(myNewNote){
       const { title, text } = myNewNote;

       const newNote = { title, text, id: uuidv4()  };

       return this.getNotes()
       .then((myNotes) => [...myNotes, newNote])
       .then((updatedNotes) => this.write(updatedNotes))
       .then(() => newNote);
    }


    deleteNote(){}
}

module.exports = new databaseFunctionality();