class HomeController < ApplicationController
  def index
		@countries = Country.all
	end

  def countries
  end
end
