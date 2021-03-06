class ApplicationController < ActionController::API
  include ActionController::Cookies

  def find_job
    Job.find_by(id: params[:id])
  end

  def current_employer
    Employer.find_by(id: session[:employer_id])
  end

  def current_caregiver
    Caregiver.find_by(id: session[:caregiver_id])
  end

  def find_alert
    Alert.find_by(id: params[:id])
  end

  def render_unprocessable_entity_response(obj)
    render json: { errors: obj.errors.full_messages }, status: :unprocessable_entity
  end

  def render_unauthorized_response
      render json: { errors: ["Unauthorized"]}, status: :unauthorized
  end

  def render_not_found_response
    render json: { errors: ["Not found"] }, status: :not_found
  end

end
