class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :difficulty
      t.integer :would_repeat
      t.text :description
      t.integer :user_id
      t.integer :workout_id

      t.timestamps
    end
  end
end
