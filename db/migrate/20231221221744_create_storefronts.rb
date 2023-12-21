class CreateStorefronts < ActiveRecord::Migration[7.1]
  def change
    create_table :storefronts do |t|
      t.string :name
      t.timestamps
    end

    add_index :storefronts, :name, unique: true
  end
end
