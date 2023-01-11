class ReviewsController < ApplicationController

    def index
        render json: Review.all, status: :ok
    end

    def show
        render json: Review.find(params[:id])
    end

    def create
        render json: Review.create!(review_params), status: :created
    end

    def update
        updated_review = Review.find(params[:id])
        updated_review.update(review_params)
        render json: updated_review
    end

    def destroy
        Review.find(params[:id]).destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:star_rating, :comment, :user_id, :destination_id)
    end
end
