class UserWorkout < ApplicationRecord
    belongs_to :user
    belongs_to :workout

    validates :time, :date, presence: true
end
