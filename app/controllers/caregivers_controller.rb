class CaregiversController < ApplicationController

    def index
        caregivers = Caregiver.all 
        render json: caregivers
    end

    def create
        caregiver = Caregiver.create(caregiver_params)
        if caregiver.valid?
            session[:user_id] = caregiver.id
            render json: caregiver, status: :created
        else
            render_unprocessable_entity_response(caregiver)
        end
    end

    def show
        caregiver = find_caregiver
        if caregiver && caregiver.status === "caregiver"
            render json: caregiver, status: :created
        else
            render_unauthorized_response
        end
    end

    def update
        caregiver = find_caregiver
        if caregiver
            caregiver.update(caregiver_params)
            if caregiver.valid?
                render json: caregiver, status: :created
            else
                render_unprocessable_entity_response(caregiver)
            end
        else
            render_not_found_response
        end
    end

    def destroy
        caregiver = find_caregiver
        if caregiver
            caregiver.destroy
            head :no_content
        else
            render_unauthorized_response
        end
    end

    private

    def find_caregiver
        Caregiver.find_by(id: session[:user_id])
    end

    def caregiver_params
        params.permit(:username, :password, :password_confirmation, :name, :bio, :img_url)
    end

    # exception handling helper methods
    def render_unauthorized_response
        render json: { errors: ["Unauthorized"]}, status: :unauthorized
    end

    def render_unprocessable_entity_response(obj)
        render json: { errors: obj.errors.full_messages }, status: :unprocessable_entity
    end
end
