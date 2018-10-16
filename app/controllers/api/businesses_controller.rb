class Api::BusinessesController < ApplicationController
  def index
    #name is
    # debugger;
    name = params[:businesses][:name].downcase
    #find category based on what someone inputted
    @category = Category.find_by(title: name)
    #if the category exists
    if @category
      #find all associated businesses
      #
      # @categories = @businesses.categories
      @businesses = @category.businesses.includes(:categories)
    else
      @businesses = Business.where("name ilike ?", "%#{name}%")
    end
    # render :index
  end


  def show
    @business = Business.find(params[:id])
  end

  private

  def business_params
    params.require(:businesses).permit(:name)
  end
end

# retrieval by url
# http://localhost:3000/api/businesses?businesses[name]=boba
