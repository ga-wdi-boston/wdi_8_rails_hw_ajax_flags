class HomeController < ApplicationController
  respond_to :html, :js, :json

  def index
    @countries = Country.paginate(page: params[:page], per_page: 20)
  end

  def countries

  end
end
