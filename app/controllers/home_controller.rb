class HomeController < ApplicationController
   respond_to :json, :js, :html

  def index
    @countries = Country.all.order('name ASC').limit(20)
    respond_with @countries
  end

  def countries
    respond_with Country.all.order('name ASC')
  end

  def all
    @countries = Country.all.order('name ASC')
    respond_with @countries
  end

end
