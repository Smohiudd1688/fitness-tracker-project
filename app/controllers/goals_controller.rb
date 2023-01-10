class GoalsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def create
        goal = Goal.create!(goal_params)
        render json: goal, status: :created
    end


    private

    def goal_params
        params.permit(:title, :starting, :goal, :end_date, :user_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found
        render json: {error: "User not found"}, status: :not_found
    end

end
