class V1::CoinsController < ApplicationController
  def index
  end

  def show
  end

  def create
    new_coin = Coin.new(coin_params)
    new_coin.watchlist_id = current_user.watchlist.id

    if new_coin.save
      render json: {status:200}
    else
      render json: {status:-1}
    end
  end

  def destroy
    coin_to_kill = current_user.watchlist.coins.find(:id)
    if coin_to_kill.destroy
      render json:{status:200}
    else
      render json:{status:-1}
    end
  end


  private 
  def coin_params
    params.require(:coin).permit(:id,:name)
  end

end