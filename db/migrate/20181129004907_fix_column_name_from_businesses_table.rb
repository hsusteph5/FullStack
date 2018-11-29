class FixColumnNameFromBusinessesTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :businesses, :log,  :lng
  end
end
