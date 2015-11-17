class PracticesController < ApplicationController

  def index
      @practices = Practice.all
  end

  def show
    @practice = Practice.find(params[:id])
  end

  def new
    @practice = Practice.new
  end

  def edit
    @practice = Practice.find(params[:id])
  end

  def create
    @practice = Practice.new(params.require(:practice).permit(:title, :target, :image))

    @practice.save
    redirect_to practices_path
  end

  def update
    @practice = Practice.find(params[:id])

    if @practice.update(params.require(:practice).permit(:title, :target, :image))
      redirect_to practices_path
    else
      render 'edit'
    end
  end

   def destroy
    @practice = Practice.find(params[:id])
    @practice.destroy

    redirect_to practices_path
  end

  private
    def practice
      params.require(:practice).permit(:title, :target, :image)
    end

end
