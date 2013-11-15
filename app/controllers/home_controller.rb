class HomeController < ApplicationController
  def index
    # @countries = Country.all
        @countries = Country.paginate(:page => params[:page]) # replaces Post.all
    respond_to do |format|
      format.html
      format.js # add this line for your js template
    end
  end

  def countries
  end
end
