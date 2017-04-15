class CountriesController < ApplicationController
  def index
  	if params[:limit]
  		@countries = Country.find(:all, offset: params[:offset], limit: params[:limit])
  	else
  		@countries = Country.all
  	end

  	respond_to do | format |
  		format.html
  		format.json { render json: @countries }
  	end
  end
end
