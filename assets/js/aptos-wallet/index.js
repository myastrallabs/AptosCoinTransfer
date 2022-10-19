import { connect as connectAptosWallet } from './petra'

export const connect = async () => {
  const wallet = await connectAptosWallet()
	return wallet
}


