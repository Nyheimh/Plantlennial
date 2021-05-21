class PothosController < ApplicationController
  before_action :set_potho, only: [:show, :update, :destroy]

  # GET /pothos
  def index
    @pothos = Potho.all

    render json: @pothos
  end

  # GET /pothos/1
  def show
    render json: @potho
  end

  # POST /pothos
  def create
    @potho = Potho.new(potho_params)

    if @potho.save
      render json: @potho, status: :created, location: @potho
    else
      render json: @potho.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pothos/1
  def update
    if @potho.update(potho_params)
      render json: @potho
    else
      render json: @potho.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pothos/1
  def destroy
    @potho.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_potho
      @potho = Potho.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def potho_params
      params.require(:potho).permit(:name, :img_url, :details, :care, :water, :sun, :toxicity)
    end
end
