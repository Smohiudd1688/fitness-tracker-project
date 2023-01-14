class User < ApplicationRecord
    has_many :goals
    has_many :workouts
    has_many :reviewed_workouts, through: :reviews, source: :workout

    has_secure_password
    validates :first_name, :username, :current, :monthly_goal, presence: true
    validates :username, uniqueness: true 
end
