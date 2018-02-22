class Api::V1::NotesController < Api::V1::BaseController
  def index
    respond_with Note.all
  end

  def create
    respond_with :api, :v1, Note.create(notes_params)
  end

  def update
    note = Note.find(params['id'])
    note.update_attributes(notes_params)
    respond_with note
  end

  def destroy
    respond_with Note.destroy(params['id'])
  end

  private

  def notes_params
    params.require(:note).permit(:id, :title, :description)
  end
end
