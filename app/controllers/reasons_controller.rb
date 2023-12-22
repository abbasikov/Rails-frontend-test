class ReasonsController < ApplicationController
  before_action :set_reason, only: %i[update_order]

  def update_order
    @reason.insert_at(params[:ordering].to_i) if @reason.present?
  end

  private

  def set_reason
    @reason = Reason.find(params[:id])
  end
end
