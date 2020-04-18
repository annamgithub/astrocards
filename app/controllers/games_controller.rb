class GamesController < ApplicationController
    def index
      @games = Game.all
      render json: @games
    end
  
    def show
      @game = Game.find(params[:id])
      render json: @game
    end
  
    def new
      @game = Game.new(game_params)
    end
  
    def create
      @game = Game.new(game_params)
      if @game.save
        redirect_to @game
      else
        render json :new
      end
    end
  
    def edit
      @game = Game.find(params[:id])
    end
  
    def update
      @game = Game.find(params[:id])
      if @game.update(game_params)
        redirect_to @game
      else
        render json :edit
      end
  
    end
  
    def destroy
      @game = Game.find(params[:id])
      @game.destroy
      redirect_to @game
    end
    
  
    private
    def game_params
      params.permit(:name)
    end
end
