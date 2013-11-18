class HomeController < ApplicationController
  respond_to :html, :js, :json

  def index
    @countries = Country.order(:name)
    respond_with @countries
  end

  def countries
    @countries = Country.order(:name).limit(params[:step]).offset(params[:offset])
    respond_with @countries
  end
end
