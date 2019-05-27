defmodule Star.Repo do
  use Ecto.Repo,
    otp_app: :star,
    adapter: Ecto.Adapters.Postgres
end
