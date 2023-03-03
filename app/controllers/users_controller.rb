class UsersController < ApplicationController
skip_before_action :authorized, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end 

    def index
        users = User.all
        render json: users, include: ['goals', 'user_workouts', 'user_workouts.workout'], status: :ok
    end

    def show
        user = User.find(session[:user_id])
        render json: user, include: ['goals', 'user_workouts', 'user_workouts.workout'], status: :ok
    end

    def update
        user = User.find_by(id: params[:id])
        user.update!(user_params)
        render json: user, status: :ok
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :username, :current, :password, :monthly_goal, :month, :year)
    end
end
