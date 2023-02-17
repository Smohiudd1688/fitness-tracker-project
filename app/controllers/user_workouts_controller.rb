class UserWorkoutsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def create
        user = User.find(session[:user_id])
        user_workout = user.user_workouts.create!(user_workout_params)
        render json: user_workout, include: :workout, status: :created
    end

    def index
        user_workouts = UserWorkout.all
        render json: user_workouts, include: :workout, status: :ok
    end

    private

    def user_workout_params
        params.permit(:time, :date, :workout_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found
        render json: {errors: "User-workout not found"}, status: :not_found
    end
end
