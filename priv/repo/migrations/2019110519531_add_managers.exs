defmodule TimesheetsSpa.Repo.Migrations.AddManagers do
  use Ecto.Migration

  def change do
    create table(:managers) do
      add :name, :string
      add :email, :string
      add :password_hash, :string

      timestamps()
    end

  end
end
