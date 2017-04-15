class HomeController < ApplicationController
  respond_to :html, :js, :json

  def index
    @countries = Country.all
  end
end
