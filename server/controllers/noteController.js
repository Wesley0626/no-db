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
    res.status(200).send(notes[id-1])
  }
}