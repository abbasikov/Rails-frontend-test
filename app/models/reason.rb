class Reason < ApplicationRecord
  acts_as_list column: :ordering
  belongs_to :storefront

  validates :code, presence: true, uniqueness: { scope: :storefront_id }
  validates :label, presence: true

  scope :ordered, -> { order(ordering: :asc) }
end
