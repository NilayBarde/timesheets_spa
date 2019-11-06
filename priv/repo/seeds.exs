# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     TimesheetsSpa.Repo.insert!(%TimesheetsSpa.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias TimesheetsSpa.Users.Manager
alias TimesheetsSpa.Users.Worker
alias TimesheetsSpa.Jobs.Job
alias TimesheetsSpa.Repo

pw = Argon2.hash_pwd_salt("helloworld")

Repo.insert!(%Manager{name: "Alice", email: "alice@example.com", password_hash: pw})
Repo.insert!(%Manager{name: "Bob", email: "bob@example.com", password_hash: pw})
Repo.insert!(%Worker{name: "John", email: "jon@doe.com", password_hash: pw, manager_id: 1})
Repo.insert!(%Worker{name: "Lorem", email: "lorem@ipsum.com", password_hash: pw, manager_id: 1})
Repo.insert!(%Worker{name: "Foo", email: "foo@bar.com", password_hash: pw, manager_id: 2})
Repo.insert!(%Worker{name: "Johny", email: "johny@english.com", password_hash: pw, manager_id: 2})


