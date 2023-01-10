class Workout < ApplicationRecord
    belongs_to :user
    has_many :users, through: :review
    validates :title, :time, :date, :exercises, presence: true
    serialize :exercises, Array
end
