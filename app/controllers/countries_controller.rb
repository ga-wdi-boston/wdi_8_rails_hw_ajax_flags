class CountriesController < ApplicationController
  def index
  	@countries = Country.all
  end

  	respond_to do |format|
  		format.html
  		format.json { render json: @countries }

  	end
  end
end
