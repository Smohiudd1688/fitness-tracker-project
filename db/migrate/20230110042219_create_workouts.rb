class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :title
      t.integer :time
      t.string :date
      t.string :exercises
      t.integer :user_id

      t.timestamps
    end
  end
end
