class CountriesController < ApplicationController
  def index
  	respond_to do |format|
  		format.html { }
  		format.json { render json: Country.all}
  	end
  end
end
