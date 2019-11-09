# TimesheetsSpa

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).

## Table Schemas:

Worker:
 email: string
 name: string
 password_hash: string
 belongs_to: manager

Manager:
 email: string
 name: string
 password_hash: string
 has_many: workers
 
## Seeds:

Manager:
email: alice@example.com
password: passhash123

Worker:
email: bob@example.com 
password:passhash123

## Additional Tables (Did not get to):

Job:
 jobCode: string
 budget: float
 desc: string
 name: string
 belongs_to: manager
 
 Timesheet:
  accepted: boolean
  date: string
  belongs_to: worker
  has_many: tasks
  
 Task:
  hours: float
 	jobCode: string
 	belongs_to: timesheet

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix
