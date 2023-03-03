class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :monthly_goal, :username, :year, :month, :current

  has_many :goals
  has_many :workouts
  has_many :user_workouts
end
