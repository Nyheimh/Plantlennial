class SnakeplantsController < ApplicationController
  before_action :set_snakeplant, only: [:show, :update, :destroy]

  # GET /snakeplants
  def index
    @snakeplants = Snakeplant.all

    render json: @snakeplants
  end

  # GET /snakeplants/1
  def show
    render json: @snakeplant
  end

  # POST /snakeplants
  def create
    @snakeplant = Snakeplant.new(snakeplant_params)

    if @snakeplant.save
      render json: @snakeplant, status: :created, location: @snakeplant
    else
      render json: @snakeplant.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /snakeplants/1
  def update
    if @snakeplant.update(snakeplant_params)
      render json: @snakeplant
    else
      render json: @snakeplant.errors, status: :unprocessable_entity
    end
  end

  # DELETE /snakeplants/1
  def destroy
    @snakeplant.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_snakeplant
      @snakeplant = Snakeplant.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def snakeplant_params
      params.require(:snakeplant).permit(:name, :img_url, :details, :care, :water, :sun, :toxicity)
    end
end
