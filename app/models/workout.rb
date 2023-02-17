class Workout < ApplicationRecord
    has_many :user_workouts
    has_many :users, through: :workouts
    validates :title, presence: true
    serialize :exercises, Array
end
