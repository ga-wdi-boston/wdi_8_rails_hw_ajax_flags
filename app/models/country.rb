class Country < ActiveRecord::Base


	def self.display_countries
		countries = Country.all
	end

end