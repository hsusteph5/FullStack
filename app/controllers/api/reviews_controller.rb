class Api::ReviewsController < ApplicationController
  #index is fetched with the business

  def create
    #has a response
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    @review.business_id = params[:business_id]
    if @review.save
      #does not render JSON 
      # render json: 'api/reviews/review'
    else
      render json: @review.errors.full_messages, status: 401
    end
  end


  def update
    @review = current_user.reviews.find_by(id: params[:id])
    if @review.update_attributes(review_params)
      render json: @review
    else
      render json: ['Cannot find this review'], status: 401
    end
  end

  def show
    @review = Review.find(params[:id])
  end

  def delete
  end

  private
  def review_params
    params.require(:review).permit(:description, :rating, :business_id)
  end
end
#
# $.ajax({
#     method: "PATCH",
#     url: `api/reviews/${152}`,
#     data:
#       {review: {rating: 2, description: 'not a great place to eat! GAHHHH'}}})
#.then(res => console.log(res));
