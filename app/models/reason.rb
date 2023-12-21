class Reason < ApplicationRecord
  belongs_to :storefront

  validates :code, presence: true, uniqueness: { scope: :storefront_id }
  validates :label, presence: true

  scope :ordered, -> { order(ordering: :asc) }
end
