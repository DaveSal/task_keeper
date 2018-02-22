require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module TaskKeeper
  class Application < Rails::Application
  end
end
