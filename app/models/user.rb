class User < ApplicationRecord
    has_many :goals
    has_many :user_workouts
    has_many :workouts, through: :user_workouts

    has_secure_password
    validates :first_name, :username, :current, :monthly_goal, presence: true
    validates :username, uniqueness: true 
end
