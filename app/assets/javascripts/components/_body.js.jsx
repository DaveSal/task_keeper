var Body = createReactClass({
  getInitialState() {
    return { notes: [] }
  },

  componentDidMount() {
    $.getJSON('api/v1/notes.json', (response) => { this.setState({ notes: response }) })
  },

  handleSubmit(note) {
    var newState = this.state.notes.concat(note);
    this.setState({ notes: newState });
  },

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/notes/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeNoteFromArray(id);
      }
    });
  },

  handleUpdate(note) {
    $.ajax({
      url: `/api/v1/notes/${note.id}`,
      type: 'PATCH',
      data: { note: note },
      success: () => {
        this.updateNotes(note);
      }
    });
  },

  updateNotes(note) {
    var notes = this.state.notes.filter((n) => {
      return n.id != note.id });
      notes.push(note);
      this.setState({notes: notes});
  },

  removeNoteFromArray(id){
    var newNotes = this.state.notes.filter((note) => {
      return note.id != id;
    });

    this.setState({ notes: newNotes });
  },

  render() {
    return (
      <div>
        <h3>Новая задача</h3>
        <NewNote handleSubmit={ this.handleSubmit }/>
        <h3>Все задачи</h3>
        <AllNotes notes={ this.state.notes } handleDelete={ this.handleDelete } onUpdate={ this.handleUpdate }/>
      </div>
    )
  }
});
