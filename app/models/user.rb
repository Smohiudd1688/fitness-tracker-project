class User < ApplicationRecord
    has_secure_password
    validates :first_name, :username, :password, :monthly_goal, presence: true
    validates :username, uniqueness: true 
end
