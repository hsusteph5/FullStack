class Api::ReviewsController < ApplicationController
  #index is fetched with the business

  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    @review.business_id = params[:business_id]
    if @review.save
      # render json: 'api/reviews/review'
    else
      render json: ['Invalid review entry']
    end
  end


  def edit
  end

  def delete
  end

  private
  def review_params
    params.require(:review).permit(:description, :rating, :business_id)
  end
end
