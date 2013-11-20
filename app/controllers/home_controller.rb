class HomeController < ApplicationController
  def index
		@countries = Country.all.page(params[:page]).per_page(10)
		
	end

  def countries
  end
end
