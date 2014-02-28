class CountriesController < ApplicationController
  def index

  	if params[:limit]
  		@countries = Country.limit(params[:limit]).offset(params[:offset])
  	else
  		@countries = Country.all
  	end

  	respond_to do |format|
  		format.html
  		format.json { render json: @countries }

  	end
  end
end
