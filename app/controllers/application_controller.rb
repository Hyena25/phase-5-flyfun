class ApplicationController < ActionController::API
  
  include ActionController::Cookies
  before_action :authorized_user
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  def current_user
    User.find_by(id: session[:user_id])
  end

  def authorized_user
      return render json: { error: "Not authorized" }, status: :unauthorized unless current_user
  end
  
  private

  def render_not_found_response error
    render json: {errors: {error.model => "Not Found"}}, status: :not_found
  end

  def render_invalid_response invalid
    render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end
end
