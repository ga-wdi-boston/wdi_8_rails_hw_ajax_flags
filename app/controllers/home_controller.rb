class HomeController < ApplicationController
	respond_to :json, :js, :html

  def index
    @countries = Country.all
  end

  def countries
  	 # respond_with Country.from(params[:step])to(params[:offset])
  end

  def country
    # @country = Country.where(params[:id])
  end

end
