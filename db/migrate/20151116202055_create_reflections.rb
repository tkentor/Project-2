class CreateReflections < ActiveRecord::Migration
  def change
    create_table :reflections do |t|
      t.text :note
      t.references :practice, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
