class GoalsController < ApplicationController
    def create
        user = User.find(session[:user_id])
        goal = user.goals.create!(goal_params)
        render json: goal, status: :created
    end

    def index
        user = User.find(session[:user_id])
        render json: user.goals, status: :ok
    end

    def update
        goal = Goal.find_by(id: params[:id])
        goal.update!(current: params[:current], completed: params[:completed])
        render json: goal, status: :ok
    end

    def destroy
        goal = Goal.find_by(id: params[:id])
        goal.destroy
        head :no_content
    end


    private

    def goal_params
        params.permit(:title, :starting, :current, :completed, :goal, :end_date)
    end
end
