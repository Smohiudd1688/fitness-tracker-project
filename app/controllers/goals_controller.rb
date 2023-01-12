class GoalsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def create
        goal = Goal.create!(goal_params)
        render json: goal, status: :created
    end

    def index
        goals = Goal.all
        render json: goals, status: :ok
    end

    def update
        goal = Goal.find_by(id: params[:id])
        goal.update(current: params[:current], completed: params[:completed])
        render json: goal, status: :ok
    end

    def destroy
        goal = Goal.find_by(id: params[:id])
        goal.destroy
        head :no_content
    end


    private

    def goal_params
        params.permit(:title, :starting, :current, :completed, :goal, :end_date, :user_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found
        render json: {errors: "Goal not found"}, status: :not_found
    end

end
