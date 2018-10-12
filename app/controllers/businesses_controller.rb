class BusinessesController < ApplicationController
  def index
    @business = Business.all
  end


  def show
    # @business = Business.find_by(name: )
  end

  private

  def business_params
    params.require(:businesses).permit(:name, :address)
  end

end
