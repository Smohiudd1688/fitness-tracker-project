class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def index
        if params[:workout_id]
          workout = Workout.find(params[:workout_id])
          reviews = workout.reviews
        else
          reviews = Review.all
        end
        render json: reviews, include: :workout, status: :ok
      end

    private

    def review_params
        params.permit(:difficulty, :would_repeat, :username, :description, :user_id, :workout_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found
        render json: {errors: "Goal not found"}, status: :not_found
    end
end
