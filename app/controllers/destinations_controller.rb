class DestinationsController < ApplicationController

    def index 
        render json: Destination.all, status: :ok
    end

    def show 
        render json: Destination.find(params[:id])
    end

    def create
        render json: Destination.create!(destination_params), status: :created
    end

    private 

    def destination_params
        params.permit(:image, :title, :location, :description)
    end
end
