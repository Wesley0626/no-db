const notes = []
id = 0


module.exports ={
  addNote(req, res){
    let {note} = req.body
    console.log(note)
    let newNote = {
      note, 
      id
    }
    id++
    notes.push(newNote)
    console.log(notes[id-1])
    res.status(200).send(notes[id-1])
  }
}