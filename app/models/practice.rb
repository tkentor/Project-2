class Practice < ActiveRecord::Base
  has_many :reflections
  validates :title, presence: true,
                  length: { minimum: 5 }
end
