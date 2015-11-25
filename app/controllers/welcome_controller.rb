class WelcomeController < ApplicationController
  def index
  end
  # Don't think you need the index action. I'm interested though that you don't have a mindfulness action but the view still gets rendered. Probably best to add an empty mindfulness action for clarity
  def about
  end

end
