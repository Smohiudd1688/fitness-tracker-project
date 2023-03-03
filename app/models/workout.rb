class Workout < ApplicationRecord
    has_many :user_workouts
    has_many :users, through: :user_workouts
    validates :title, presence: true
    serialize :exercises, Array

    def self.find_by_word(word)
        workouts = Workout.all
        newWorkouts = workouts.filter do |workout|
            workout.title.include?(word)
        end

        newWorkouts.map do |workout|
            workout.users
        end
    end
end
