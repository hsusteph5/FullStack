class CreateCategorizings < ActiveRecord::Migration[5.2]
  def change
    create_table :categorizings do |t|
      t.integer :category_id, null: false
      t.integer :business_id, null: false
    end
    add_index :categorizings, :category_id
    add_index :categorizings, :business_id
    add_index :categorizings, [:category_id, :business_id], unique: true
  end
end
