class AddMonthToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :month, :integer
  end
end
