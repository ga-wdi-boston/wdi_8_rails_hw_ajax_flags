class HomeController < ApplicationController
  def index
	
  end

  def countries
   respond_with Country.all
  end

end
