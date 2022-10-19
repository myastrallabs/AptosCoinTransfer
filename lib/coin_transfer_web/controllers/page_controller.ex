defmodule CoinTransferWeb.PageController do
  use CoinTransferWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
