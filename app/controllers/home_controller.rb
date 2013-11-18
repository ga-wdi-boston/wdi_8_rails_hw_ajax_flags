class HomeController < ApplicationController

  def index 
    @countries = Country.limit(20)
    respond_to do |format|
      format.html
    end
  end

  def load
    @countries = Country.limit(params[:limit]).offset(params[:offset].to_i)
    respond_to do |format|
      format.js
    end
  end

end