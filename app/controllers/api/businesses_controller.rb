class Api::BusinessesController < ApplicationController
  def index
    name = params[:businesses][:name].downcase
    #find category based on what someone inputted
    @category = Category.where("title ilike ?", "%#{name}%").first
    @name = Business.where("name ilike ?", "%#{name}%")

    #if the category exists
    if @category
      #find all associated businesses
      @businesses = [(@category.businesses.includes(:categories, :reviews)), @name].flatten
    else
      @businesses = @name
    end
    # render :index
  end


  def show
    @business = Business.find(params[:id])
  end

  private

  def business_params
    params.require(:businesses).permit(:name, photos: [])
  end
end
