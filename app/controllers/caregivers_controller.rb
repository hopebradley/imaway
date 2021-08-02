class CaregiversController < ApplicationController

    def index
        caregivers = Caregiver.all 
        render json: caregivers
    end

    def create
        caregiver = Caregiver.create(caregiver_params)
        if caregiver.valid?
            session[:caregiver_id] = caregiver.id
            render json: caregiver, status: :created
        else
            render_unprocessable_entity_response(caregiver)
        end
    end

    def show
        if current_caregiver 
            render json: current_caregiver, status: :created
        else
            render_unauthorized_response
        end
    end

    def update
        if current_caregiver
            current_caregiver.update(caregiver_params)
            byebug
            if current_caregiver.valid?
                render json: current_caregiver, status: :created
            else
                render_unprocessable_entity_response(current_caregiver)
            end
        else
            render_not_found_response
        end
    end

    def destroy
        if current_caregiver
            current_caregiver.destroy
            head :no_content
        else
            render_unauthorized_response
        end
    end

    private

    def caregiver_params
        params.permit(:username, :password, :password_confirmation, :name, :bio, :img_url, :phone_number, :status)
    end

end
