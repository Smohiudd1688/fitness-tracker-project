class GoalSerializer < ActiveModel::Serializer
  attributes :id, :title, :starting, :goal, :end_date, :current, :completed
end
