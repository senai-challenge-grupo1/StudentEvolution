source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.7'

# Use Puma as the app server
gem 'puma', '~> 3.0'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Use jquery mask to mask the inputs
gem 'jquery_mask_rails', '~> 0.1.0'

# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'

# Devise
gem 'devise'

# Bootstrap
gem 'bootstrap', '~> 4.1.3'

# Simple Form
gem 'simple_form'

# Font Awesome 5
gem 'font_awesome5_rails'

#Rails Admin for administrators
gem 'rails_admin', '~> 1.3'
gem "rails_admin_import", "~> 2.1"

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'

	# Use mysql as the database for Active Record
	gem 'mysql2', '>= 0.3.18', '< 0.6.0'
end

group :production do
	# PostgreSQL
	gem 'pg'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
