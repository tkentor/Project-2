class PracticesController < ApplicationController

  def index
      @practice = Practice.all
  end

  def new
    @practice = Practice.new
  end

  def update
   @practice = Practice.find(params[:id])
   @practice.update(practice_params)
   redirect_to practices_path
  end

   def destroy
    @practice = Practice.find(params[:id])
    @practice.destroy
    redirect_to practices_path
  end

  def create
    @practice = Practice.new(params.require(:practice).permit(:title, :target))

    @practice.save
    redirect_to practices_path
  end

  def show
    @practice = Practice.find(params[:id])
  end

  private
    def article_params
      params.require(:article).permit(:title, :text)
    end

end
