class AddCurrentToGoals < ActiveRecord::Migration[6.1]
  def change
    add_column :goals, :current, :integer
  end
end
