# == Schema Information
#
# Table name: properties
#
#  id             :integer          not null, primary key
#  marketing_name :string
#  website        :string
#  description    :text
#  contact_email  :string
#  contact_phone  :string
#  street         :string
#  city           :string
#  state          :string
#  zip            :string
#  latitude       :float
#  longitude      :float
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Property < ApplicationRecord
  scope :by_city_state, ->(q) {
    where("city ilike ? OR state ilike ? OR zip ilike ?",
          "%#{q}%", "%#{q}%", "%#{q}%")
  }

  def full_address
    "#{street}, #{city}, #{state} #{zip}"
  end
end
