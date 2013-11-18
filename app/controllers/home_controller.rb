class HomeController < ApplicationController

  def index 
    @countries = Country.limit(20)
    respond_to do |format|
      format.html
    end
  end

#   def load
#     @start_point = params[:start].to_i
#     @countries = Country.where('id < ?', @start_point).limit(20)
#     respond_to do |format|
#       format.js
#     end
#   end

# end



  def load
    @countries = Country.limit(20).offset(params[:offset])
    respond_to do |format|
      format.js
    end
  end

end