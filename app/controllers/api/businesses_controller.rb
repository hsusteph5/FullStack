class Api::BusinessesController < ApplicationController
  def index
    name = params[:businesses][:name]
    @businesses = Business.where("name ilike ?", "%#{name}%")
    # render :index
  end


  def show
    # @business = Business.find_by(name: )
  end

  private

  def business_params
    params.require(:businesses).permit(:name)
  end
end

# retrieval by url
# http://localhost:3000/api/businesses?businesses[name]=boba
