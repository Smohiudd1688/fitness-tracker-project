class User < ApplicationRecord
    has_many :goals, dependent: :destroy
    has_many :reviews, dependent: :destroy
    has_many :workouts, dependent: :destroy
    has_many :user_workouts, dependent: :destroy
    has_many :completed_workouts, through: :user_workouts, source: :workout
    has_many :reviewed_workouts, through: :reviews, source: :workout

    has_secure_password
    validates :first_name, :username, :current, :monthly_goal, presence: true
    validates :username, uniqueness: true 
end
