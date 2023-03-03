class UserWorkoutSerializer < ActiveModel::Serializer
  attributes :id, :time, :date

  belongs_to :workout
end
