class AddCurrentToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :current, :integer
  end
end
