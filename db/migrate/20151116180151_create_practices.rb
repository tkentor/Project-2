class CreatePractices < ActiveRecord::Migration
  def change
    create_table :practices do |t|
      t.string :title
      t.integer :target
      t.string :image

      t.timestamps null: false
    end
  end
end
