class User < ApplicationRecord
    has_many :goals, dependent: :destroy
    has_many :reviewers, dependent: :destroy
    has_many :workouts, dependent: :destroy
    has_many :reviewed_workouts, through: :reviews, source: :workout, dependent: :destroy

    has_secure_password
    validates :first_name, :username, :current, :monthly_goal, presence: true
    validates :username, uniqueness: true 
end
