class User < ApplicationRecord
    has_many :goals
    has_many :workouts
    has_many :workout, through: :review
    
    has_secure_password
    validates :first_name, :username, :password, :monthly_goal, presence: true
    validates :username, uniqueness: true 
end
