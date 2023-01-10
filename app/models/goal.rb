class Goal < ApplicationRecord
    belongs_to :user
    validates :title, :starting, :goal, :end, presence: true
end
