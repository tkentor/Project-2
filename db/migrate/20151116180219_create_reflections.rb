class CreateReflections < ActiveRecord::Migration
  def change
    create_table :reflections do |t|
      t.string :note

      t.timestamps null: false
    end
  end
end
