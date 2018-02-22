var Note = createReactClass({
  getInitialState() {
    return { editable: false }
  },

  handleEdit() {
    if(this.state.editable) {
      var id = this.props.note.id;
      var title = this._title.value;
      var description = this._description.value;
      var note = {id: id , name: title , description: description};
      this.props.handleUpdate(note);
    }

    this.setState({ editable: !this.state.editable })
  },

  render() {
    var title = this.state.editable ? <input type='text' ref={ input => this._title = input } defaultValue={this.props.note.title} /> : <h4 className="card-header text-center note-header">{this.props.note.title}</h4>;
    var description = this.state.editable ? <input ref={ input => this._description = input } type='text' defaultValue={this.props.note.description} /> : <p className="card-text note-body">{this.props.note.description}</p>;

    return (
      <div className="card">
        <div className="card-block">
          { title }
          { description }
          <button className="btn btn-outline-warning btn-sm float-left" onClick={ this.handleEdit }> { this.state.editable ? 'Добавить' : 'Изменить' } </button>
          <button className="btn btn-outline-danger btn-sm float-right" onClick={ this.props.handleDelete }>Удалить</button>
        </div>
      </div>
    )
  }
});
