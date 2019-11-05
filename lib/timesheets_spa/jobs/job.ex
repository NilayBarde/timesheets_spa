defmodule TimesheetsSpa.Jobs.Job do
  use Ecto.Schema
  import Ecto.Changeset

  schema "jobs" do
    field :budget, :float
    field :desc, :string
    field :jobCode, :string
    field :name, :string

    belongs_to :manager, TimesheetsSpa.Users.Manager

    timestamps()
  end

  @doc false
  def changeset(job, attrs) do
    job
    |> cast(attrs, [:jobCode, :name, :budget, :desc, :manager_id])
    |> validate_required([:jobCode, :name, :budget, :desc, :manager_id])
  end
end
