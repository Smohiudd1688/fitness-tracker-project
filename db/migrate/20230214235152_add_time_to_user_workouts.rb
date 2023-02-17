class AddTimeToUserWorkouts < ActiveRecord::Migration[6.1]
  def change
    add_column :user_workouts, :time, :integer
  end
end
