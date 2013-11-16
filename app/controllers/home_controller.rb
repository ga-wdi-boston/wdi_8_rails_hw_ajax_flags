class HomeController < ApplicationController
	respond_to :json, :js, :html

  def index
    # @countries = Country.all
   
  end

  def countries
    @countries = Country.order('name').page(params[:page]).per_page(20)
  	 # respond_with Country.from(params[:step])to(params[:offset])
  end

  def country
    # @country = Country.where(params[:id])
  end

end
