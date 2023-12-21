class Storefront < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :reasons, inverse_of: :storefront, dependent: :destroy

  accepts_nested_attributes_for :reasons, reject_if: proc { |attributes|
    attributes['code'].blank? || attributes['label'].blank?
  }, allow_destroy: true
end
