class HomeController < ApplicationController
	# respond_to :json, :js, :html

  def index
    @countries = Country.paginate(:page => params[:page])
  end

  # def countries
  #   @countries = Country.paginate(:page => params[:page])
  # end

  def country
    # @country = Country.where(params[:id])
  end

  def all
    @countries = Country.all
    respond_with @countries
  end


end
