class Workout < ApplicationRecord
    belongs_to :user
    has_many :reviews
    has_many :user_workouts
    has_many :workouters, through: :user_workouts, source: :user
    has_many :reviewers, through: :reviews, source: :user
    validates :title, :time, :date, presence: true
    serialize :exercises, Array
end
