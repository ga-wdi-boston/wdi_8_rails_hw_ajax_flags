class HomeController < ApplicationController
  respond_to :html, :js, :json

  def index
    @countries = Country.order(:name)
  end

  def countries

  end
end
