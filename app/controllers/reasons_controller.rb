class ReasonsController < ApplicationController
  before_action :set_reason, only: %i[update_order show]

  def update_order
    @reason.insert_at(params[:ordering].to_i) if @reason.present?
  end

  def show
    render json: @reason
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Reason not found' }, status: :not_found
  end

  private

  def set_reason
    @reason = Reason.find(params[:id])
  end
end