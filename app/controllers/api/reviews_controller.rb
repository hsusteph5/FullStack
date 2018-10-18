class Api::ReviewsController < ApplicationController
  # def index
  #   #pulls all the reviews with the associated business
  #   # @reviews = Review.where(business_id: params[:reviews][:business_id])
  #   @reviews = Review.where(business_id: params[:reviews][:business_id])
  #   if @reviews
  #     render "api/businesses/business"
  #   else
  #     render json: {}
  #   end
  # end

  def create
  end


  def edit
  end

  def delete
  end

  private
  def review_params
    params.require(:reviews).permit(:description, :rating)
  end
end
