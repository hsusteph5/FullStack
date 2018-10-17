class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

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
