class Goal < ApplicationRecord
    belongs_to :user
    validates :title, :starting, :goal, :end_date, presence: true
end
