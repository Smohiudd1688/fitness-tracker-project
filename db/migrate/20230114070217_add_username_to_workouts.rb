class AddUsernameToWorkouts < ActiveRecord::Migration[6.1]
  def change
    add_column :workouts, :username, :string
  end
end
