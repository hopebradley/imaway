class EmployersController < ApplicationController

    def index
        employers = Employer.all 
        render json: employers
    end

    def create
        employer = Employer.create(employer_params)
        if employer.valid?
            session[:user_id] = employer.id
            render json: employer, status: :created
        else
            render_unprocessable_entity_response(employer)
        end
    end

    def show
        employer = find_employer
        if employer && employer.status === "employer"
            render json: employer, status: :created
        else
            render_unauthorized_response
        end
    end

    def update
        employer = find_employer
        if employer
            employer.update(employer_params)
            if employer.valid?
                render json: employer, status: :created
            else
                render_unprocessable_entity_response(employer)
            end
        else
            render_not_found_response
        end
    end

    def destroy
        employer = find_employer
        if employer
            employer.destroy
            head :no_content
        else
            render_unauthorized_response
        end
    end

    private

    def find_employer
        Employer.find_by(id: session[:user_id])
    end

    def employer_params
        params.permit(:username, :password, :password_confirmation, :name, :bio, :img_url)
    end

    # exception handling helper methods
    def render_unauthorized_response
        render json: { errors: ["Unauthorized"]}, status: :unauthorized
    end

    def render_unprocessable_entity_response(employer)
        render json: { errors: employerer.errors.full_messages }, status: :unprocessable_entity
    end
end
