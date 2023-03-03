class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionController::Serialization

rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  before_action :authorized

  def authorized
    return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end

  private

  def render_unprocessable_entity_response(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def render_not_found
      render json: {errors: "Not found"}, status: :not_found
  end

end
