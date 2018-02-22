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
    var title = this.state.editable ? <input type='text' ref={ input => this._title = input } defaultValue={this.props.note.title} /> : <h3>{this.props.note.title}</h3>;
    var description = this.state.editable ? <input ref={ input => this._description = input } type='text' defaultValue={this.props.note.description} /> : <p>{this.props.note.description}</p>;

    return (
      <div>
        { title }
        { description }
        <button onClick={this.props.handleDelete} >Удалить</button>
        <button onClick={this.handleEdit}> {this.state.editable ? 'Добавить' : 'Изменить' } </button>
      </div>
    )
  }
});
