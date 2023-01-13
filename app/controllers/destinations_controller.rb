class DestinationsController < ApplicationController

    def index 
        render json: Destination.all, status: :ok
    end

    def show 
        render json: Destination.find(params[:id])
    end

    def show_destinations
        render json: Destination.find(params[:id]).reviews
    end

    def create
        render json: Destination.create!(destination_params), status: :created
    end

    def destroy
        Destination.find(params[:id]).destroy
        head :no_content
    end
    private 

    def destination_params
        params.permit(:image, :title, :country, :city, :description)
    end
end
