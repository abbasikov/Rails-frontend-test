# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2023_12_21_221802) do
  create_table "reasons", force: :cascade do |t|
    t.integer "storefront_id", null: false
    t.string "code"
    t.string "label"
    t.json "restricted_resolution_types"
    t.boolean "active"
    t.integer "ordering"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["storefront_id", "code"], name: "index_reasons_on_storefront_id_and_code", unique: true
    t.index ["storefront_id"], name: "index_reasons_on_storefront_id"
  end

  create_table "storefronts", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_storefronts_on_name", unique: true
  end

  add_foreign_key "reasons", "storefronts"
end
