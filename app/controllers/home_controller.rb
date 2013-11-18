class HomeController < ApplicationController
  respond_to :html, :js, :json

  def index
    @countries = Country.order(:name)
    respond_with @countries
  end

  def countries

  end
end
