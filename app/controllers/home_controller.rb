class HomeController < ApplicationController
  respond_to :html, :js, :json

  def index
    @countries = Country.order(:name)
  end

  def countries

  end

  def country # this doesn't work
    @country = Country.where(params[:id])
  end
end
