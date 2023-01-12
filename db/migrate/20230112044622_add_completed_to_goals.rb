class AddCompletedToGoals < ActiveRecord::Migration[6.1]
  def change
    add_column :goals, :completed, :boolean
  end
end
