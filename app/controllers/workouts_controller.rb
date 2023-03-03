class WorkoutsController < ApplicationController
    def create
        workout = Workout.create!(title: params[:title], exercises: params[:exercises])
        user_workout = workout.user_workouts.create!(time: params[:time], date: params[:date], user_id: session[:user_id])
        render json: user_workout, status: :created
    end

    def index
        workouts = Workout.all
        render json: workouts, status: :ok
    end

    def find_title
        users = Workout.find_by_word(params[:word])
        if users != []
            render json: users, status: :ok
        else 
            render json: {error: "No Workout that matches word."}, status: :not_found
        end
    end

    private

    def workout_params
        params.permit(:title, :time, :date, exercises: [])
    end
end