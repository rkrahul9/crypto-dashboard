import axios from 'axios';

export default async (req, res) => {
  try {
    const { data } = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets',
      {
        params: { vs_currency: 'usd', order: 'market_cap_desc', per_page: 100, page: 1, sparkline: false }
      });
    res.status(200).json(data);
  } catch(e) {
    console.log('Error', e);
    res.status(500).send({ errors: e });
  }
}