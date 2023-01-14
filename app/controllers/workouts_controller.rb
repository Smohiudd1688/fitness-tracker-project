class WorkoutsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def create
        workout = Workout.create!(workout_params)
        render json: workout, status: :created
    end

    def index
        workouts = Workout.all
        render json: workouts, status: :ok
    end

    private

    def workout_params
        params.permit(:title, :time, :date, :user_id, exercises: [])
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found
        render json: {errors: "Goal not found"}, status: :not_found
    end
end