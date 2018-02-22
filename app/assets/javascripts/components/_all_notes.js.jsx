var AllNotes = createReactClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  onUpdate(note) {
    this.props.onUpdate(note);
  },

  render() {
    var notes = this.props.notes.map((note) => {
      return (
        <div key={ note.id }>
          <Note note={ note }
                handleUpdate={ this.onUpdate }
                handleDelete={ this.handleDelete.bind(this, note.id) } />
        </div>
      )
    })

    return (
      <div>
          { notes.reverse() }
      </div>
    )
  }
});
