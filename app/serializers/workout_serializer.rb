class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :title, :exercises

  has_many :user_workouts
end
