class UserWorkoutsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def create
        user_workout = UserWorkout.create!(user_workout_params)
        workout = Workout.find_by(id: params[:workout_id])
        render json: workout, status: :ok
    end

    private

    def user_workout_params
        params.permit(:user_id, :workout_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found
        render json: {errors: "Goal not found"}, status: :not_found
    end
end
