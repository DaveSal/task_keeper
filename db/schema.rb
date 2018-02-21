ActiveRecord::Schema.define(version: 20180221083552) do
  enable_extension "plpgsql"

  create_table "notes", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end
end
