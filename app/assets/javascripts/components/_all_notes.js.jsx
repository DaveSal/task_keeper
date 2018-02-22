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
        <div key={ note.id } className="col-sm-2 col-xs-8 note">
          <Note note={ note }
                handleUpdate={ this.onUpdate }
                handleDelete={ this.handleDelete.bind(this, note.id) } />
        </div>
      )
    })

    return (
      <div className="row">
        { notes.reverse() }
      </div>
    )
  }
});
