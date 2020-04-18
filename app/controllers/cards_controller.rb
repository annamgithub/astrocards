class CardsController < ApiController
    def index
      @cards = Card.all
      render json: @cards
    end
  
    def show
      @card = Card.find(params[:id])
      render json: @card
    end
  
    def new
      @card = Card.new
    end
  
    def create
      @card = Card.new(card_params)
      if @card.save
        # redirect_to @card
        render json: @card
      else
        render json: :new
      end
    end
  
    def edit
      @card = Card.find(params[:id])
    end
  
    def update
      @card = Card.find(params[:id])
      if @card.update(card_params)
        # redirect_to @card
        render json: @card
      else
        render json: :edit
      end
  
    end
  
    def destroy
      @card = Card.find(params[:id])
      @card.destroy

      render json: {message: 'Destroyed'}
      # redirect_to @card
    end
    
  
    private
    def card_params
      params.require(:card).permit(:card_question, :card_answer)
    end
end
