class HomeController < ApplicationController
  def index
		@countries = Country.order(:name).page params[:page]
  end

  def countries
   # respond_with Country.all
  end

end
