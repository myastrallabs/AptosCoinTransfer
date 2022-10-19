import { connect } from '../aptos-wallet'
const COINT_TYPE = '0x1::aptos_coin::AptosCoin'

export const Wallet = {
  mounted () {
    let wallet

    window.addEventListener('load', async () => {
      console.log('load')
      wallet = await connect()
    })

    window.addEventListener('phx:connect-wallet', async () => {
      wallet = await connect()
    })

		window.addEventListener('phx:transfer', async (e) => {
      console.log('e.detail:', e.detail)

      const { to, amount } = e.detail
      if (!amount|| !to) return

      const payload = {
        type: 'entry_function_payload',
        function: `0x1::coin::transfer`,
        type_arguments: [COINT_TYPE],
        arguments: [
          to,
          `${amount}`
        ]
      }

      try {
        const address = await wallet.account()
				console.log("address:", address);

        const result = await wallet.signAndSubmitTransaction(payload)

				console.log("transfer:", result)

      } catch (error) {
        console.log('transfer: ', error)
      } finally {
        console.log('finally')
      }
    })
  }
}