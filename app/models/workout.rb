class Workout < ApplicationRecord
    belongs_to :user
    has_many :reviewers, through: :review, source: :user
    validates :title, :time, :date, presence: true
    serialize :exercises, Array
end
