var NewNote = createReactClass({
  handleClick() {
    var title = this._title.value;
    var description = this._description.value;

    $.ajax({
      url: '/api/v1/notes',
      type: 'POST',
      data: { note: { title: title, description: description } },
      success: (note) => {
        this.props.handleSubmit(note)
      }
    });
  },

  render() {
    return (
      <div>
        <input ref={ input => this._title = input } placeholder='Название' />
        <input ref={ input => this._description = input } placeholder='Задача' />
        <button onClick={ this.handleClick } >Создать</button>
      </div>
    )
  }
});
