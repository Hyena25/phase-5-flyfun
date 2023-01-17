class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create]

    def show
        render json: current_user, status: :ok
    end

    def create
        render json: User.create!(new_user_params), status: :created
    end

    def update
        current_user.update(new_user_params)
        render json: current_user, status: :accepted
    end

    private

    def new_user_params
        params.permit(:full_name, :username, :email, :password)
    end
end
