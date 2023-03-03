class UserWorkoutsController < ApplicationController
    def create
        user = User.find(session[:user_id])
        user_workout = user.user_workouts.create!(user_workout_params)
        render json: user_workout, status: :created
    end

    def index
        user_workouts = UserWorkout.all
        render json: user_workouts, status: :ok
    end

    private

    def user_workout_params
        params.permit(:time, :date, :workout_id)
    end
end
