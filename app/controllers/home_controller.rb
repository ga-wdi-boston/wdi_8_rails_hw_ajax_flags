class HomeController < ApplicationController
  def index
		@countries = Country.limit(20)
	end

  def countries
  end
end
