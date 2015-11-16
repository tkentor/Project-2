class ReflectionsController < ApplicationController
  def create
    @practice = Practice.find(params[:practice_id])
    @reflection = @practice.reflections.create(reflection_params)
    redirect_to practice_path(@practice)
  end

  private
    def reflection_params
      params.require(:note).permit(:note)
    end
end
