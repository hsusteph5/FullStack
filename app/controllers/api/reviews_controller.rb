class Api::ReviewsController < ApplicationController
  #index is fetched with the business 

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
