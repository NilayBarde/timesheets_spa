defmodule TimesheetsSpa.Repo.Migrations.AddJobs do
  use Ecto.Migration

  def change do
    create table(:jobs) do
      add :jobCode, :string
      add :name, :string
      add :budget, :float
      add :desc, :text
      add :manager_id, references(:managers, on_delete: :delete_all)

      timestamps()
    end

    create index(:jobs, [:manager_id])
  end
end
