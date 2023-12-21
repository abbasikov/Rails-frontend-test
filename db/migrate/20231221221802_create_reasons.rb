class CreateReasons < ActiveRecord::Migration[7.1]
  def change
    create_table :reasons do |t|
      t.references :storefront, null: false, foreign_key: true
      t.string :code
      t.string :label
      t.json :restricted_resolution_types
      t.boolean :active
      t.integer :ordering

      t.timestamps
    end

    add_index :reasons, [:storefront_id, :code], unique: true
  end
end
