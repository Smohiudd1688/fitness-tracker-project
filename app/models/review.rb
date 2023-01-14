class Review < ApplicationRecord
    belongs_to :user
    belongs_to :workout

    validates :difficulty, :would_repeat, :description, presence: :true
end
