class EmployersController < ApplicationController

    def index
        employers = Employer.all 
        render json: employers
    end

    def create
        employer = Employer.create(employer_params)
        if employer.valid?
            session[:employer_id] = employer.id
            render json: employer, status: :created
        else
            render_unprocessable_entity_response(employer)
        end
    end

    def show
        if current_employer 
            render json: current_employer, status: :created
        else
            render_unauthorized_response
        end
    end

    def update
        if current_employer
            current_employer.update(employer_params)
            # if current_employer.valid?
            render json: current_employer, status: :created
            # else
            #     render_unprocessable_entity_response(current_employer)
            # end
        else
            render_not_found_response
        end
    end

    def destroy
        if current_employer
            current_employer.destroy
            head :no_content
        else
            render_unauthorized_response
        end
    end

    private

    def employer_params
        params.permit(:username, :password, :password_confirmation, :name, :bio, :img_url, :phone_number, :status)
    end

end
