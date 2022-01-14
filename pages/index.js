import API from '../utils/fetchController';
import SearchBox from '../components/SearchBox';
import DataTable from '../components/DataTable';

export default function Home({ coinsList }) {

  return (
    <>
      <SearchBox />
      <DataTable coins={coinsList} />
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await API.request(`${process.env.APP_HOST}/api/coingeko/getMarketListings`);

  // Pass data to the page via props
  return { props: { coinsList: data } }
}
