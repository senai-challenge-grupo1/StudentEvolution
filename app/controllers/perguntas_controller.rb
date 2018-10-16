class PerguntasController < ApplicationController
  before_action :authenticate_user!
  before_action :set_pergunta, only: [:show, :edit, :update, :destroy]

  # GET /perguntas
  # GET /perguntas.json
  def index
    @perguntas = Pergunta.all
    @perguntas.each do |pergunta|
      case pergunta.area
        when "ce"
          pergunta.area = "Ciências Exatas"
        when "ch"
          pergunta.area = "Ciências Humanas"
        when "cb"
          pergunta.area = "Ciências Biológicas"
        when "lc"
          pergunta.area = "Linguagens e Códigos"
      end
    end
  end

  # GET /perguntas/1
  # GET /perguntas/1.json
  def show
    case @pergunta.area
      when "ce"
        @pergunta.area = "Ciências Exatas"
      when "ch"
        @pergunta.area = "Ciências Humanas"
      when "cb"
        @pergunta.area = "Ciências Biológicas"
      when "lc"
        @pergunta.area = "Linguagens e Códigos"
    end
  end

  # GET /perguntas/new
  def new
    @pergunta = Pergunta.new
    @pergunta.aprovada = true
  end

  # GET /perguntas/1/edit
  def edit
  end

  # POST /perguntas
  # POST /perguntas.json
  def create
    @pergunta = Pergunta.new(pergunta_params)
    # @pergunta.user = current_user

    respond_to do |format|
      if @pergunta.save
        format.html { redirect_to @pergunta, notice: 'Pergunta was successfully created.' }
        format.json { render :show, status: :created, location: @pergunta }
      else
        format.html { render :new }
        format.json { render json: @pergunta.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /perguntas/1
  # PATCH/PUT /perguntas/1.json
  def update
    respond_to do |format|
      if @pergunta.update(pergunta_params)
        format.html { redirect_to @pergunta, notice: 'Pergunta was successfully updated.' }
        format.json { render :show, status: :ok, location: @pergunta }
      else
        format.html { render :edit }
        format.json { render json: @pergunta.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /perguntas/1
  # DELETE /perguntas/1.json
  def destroy
    @pergunta.destroy
    respond_to do |format|
      format.html { redirect_to perguntas_url, notice: 'Pergunta was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pergunta
      @pergunta = Pergunta.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def pergunta_params
      params.require(:pergunta).permit(:area, :nivel, :texto, :resposta1, :resposta2, :resposta3, :resposta4, :resposta_correta, :aprovada)
    end
end
