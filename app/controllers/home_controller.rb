class HomeController < ApplicationController
 

  def index
  	@countries = Country.all
  	binding.pry
  end

  def countries
  end

 
end
