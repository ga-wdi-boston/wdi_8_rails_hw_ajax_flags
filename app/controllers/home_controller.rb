class HomeController < ApplicationController
	respond_to :json, :js, :html

  def index
    @countries = Country.order('name ASC').limit(20)
  end

  def countries
    @countries = Country.order('name ASC').limit(params[:step]).offset(params[:offset])
      respond_with @countries
  end

  def country
    # @country = Country.where(params[:id])
  end

  def all
    binding.pry
    @countries = Country.order('name ASC').offset(params[:offset])
    respond_with @countries
  end

end
