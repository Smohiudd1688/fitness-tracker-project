class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
skip_before_action :authorized, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find(session[:user_id])
        goals = user.goals
        render json: user, include: :goals, status: :ok
    end

    def update
        user = User.find_by(id: params[:id])
        user.update!(first_name: params[:first_name], last_name: params[:last_name], monthly_goal: params[:monthly_goal])
        render json: user, status: :ok
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :username, :password, :monthly_goal)
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found
        render json: {errors: "User not found"}, status: :not_found
    end
end
