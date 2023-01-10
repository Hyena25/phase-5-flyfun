class DestinationsController < ApplicationController

    def index 
        render json: Destination.all, status: :ok
    end

    def show 
        render json: Destination.find(params[:id])
    end

    def create
        render json: Destination.create
    end

    private 

    def destination_params
        params.permit()
    end
end
