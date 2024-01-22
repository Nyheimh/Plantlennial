class Snakeplant
    include Mongoid::Document
    include Mongoid::Timestamps
  
    field :name, type: String
    field :img_url, type: String
    field :details, type: String
    field :care, type: String
    field :water, type: String
    field :sun, type: String
    field :toxicity, type: Boolean
  
    validates :name, presence: true
    # Add more validations as needed
  
    # Your model logic goes here
  end
  