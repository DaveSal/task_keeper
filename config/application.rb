require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module NoteKeeper
  class Application < Rails::Application
  end
end
