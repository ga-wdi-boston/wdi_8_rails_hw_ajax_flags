class HomeController < ApplicationController
  def index
  	@countries = Country.all
  	respond_to do |f|
			f.html # does default without a block (index.html.erb)
			f.json { render json: @countries}
		end
  end
end
