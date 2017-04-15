class CountriesController < ApplicationController
  def index
    if params[:limit]
      @countries = Country.all.offset(params[:offset]).limit(params[:limit])
    else
      @countries = Country.all.offset(params[:offset])
    end

    respond_to do |f|
      f.json  { render json: @countries }
      f.html
    end
  end
end
