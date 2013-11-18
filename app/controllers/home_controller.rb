class HomeController < ApplicationController
  def index
    @countries = Country.paginate(page: params[:page], per_page: 20)
  end

  def countries

  end
end
