class MonsterasController < ApplicationController
  before_action :set_monstera, only: [:show, :update, :destroy]

  # GET /monsteras
  def index
    @monsteras = Monstera.all

    render json: @monsteras
  end

  # GET /monsteras/1
  def show
    render json: @monstera
  end

  # POST /monsteras
  def create
    @monstera = Monstera.new(monstera_params)

    if @monstera.save
      render json: @monstera, status: :created, location: @monstera
    else
      render json: @monstera.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /monsteras/1
  def update
    if @monstera.update(monstera_params)
      render json: @monstera
    else
      render json: @monstera.errors, status: :unprocessable_entity
    end
  end

  # DELETE /monsteras/1
  def destroy
    @monstera.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_monstera
      @monstera = Monstera.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def monstera_params
      params.require(:monstera).permit(:name, :img_url, :details, :care, :water, :sun, :toxicity)
    end
end
