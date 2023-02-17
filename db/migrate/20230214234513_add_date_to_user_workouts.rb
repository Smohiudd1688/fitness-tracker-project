class AddDateToUserWorkouts < ActiveRecord::Migration[6.1]
  def change
    add_column :user_workouts, :date, :string
  end
end
