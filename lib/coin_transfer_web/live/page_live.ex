defmodule CoinTransferWeb.PageLive do
  @moduledoc false

  use CoinTransferWeb, :live_view

  @impl true
  def mount(_, _session, socket) do
    {:ok, socket}
  end

  @impl true
  def handle_params(params, _url, socket) do
    {:noreply, apply_action(socket, socket.assigns.live_action, params)}
  end

  def apply_action(socket, :index, _params) do
    socket
  end

  @impl true
  def handle_event("transfer", _attrs, socket) do
    # NOTICE
    # change to_address && amount here.
    payload = %{
      to: "0xedc2501337f1c687fc2788033ddd847490b423f11dc75938cdfc696ab3deb909",
      amount: "100000000"
    }

    {:noreply, push_event(socket, "transfer", payload)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div id="page" phx-hook="Wallet">
      <button phx-click="transfer"> Transfer 1 APT to MainWallet</button>
    </div>
    """
  end
end
