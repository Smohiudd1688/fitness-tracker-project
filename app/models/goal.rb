class Goal < ApplicationRecord
    belongs_to :user
    validates :title, :starting, :current, :goal, :end_date, presence: true
end
