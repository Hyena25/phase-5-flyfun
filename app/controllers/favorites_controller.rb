class FavoritesController < ApplicationController

  # GET /favorites
  def index
    @favorites = current_user.favorites

    render json: @favorites
  end

  def show
    render json: @favorite
  end

  def create
    @favorite = Favorite.new(favorite_params)

    if @favorite.save
      render json: @favorite, status: :created, location: @favorite
    else
      render json: @favorite.errors, status: :unprocessable_entity
    end
  end

  def destroy
    Favorite.find(params[:id]).destroy
    head :no_content
  end

  private
    def favorite_params
      params.require(:favorite).permit(:user_id, :destination_id)
    end
end
