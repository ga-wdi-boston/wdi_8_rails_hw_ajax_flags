class HomeController < ApplicationController
  def index
		@countries = Country.all
  end

  def countries
   # respond_with Country.all
  end

end
