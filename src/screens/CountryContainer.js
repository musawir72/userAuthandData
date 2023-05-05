import { useEffect, useState } from "react";
import Countries from "../components/Countries";
import Loader from '../components/Spinner'
export default function CountriesContainer() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    setIsLoading(true)
    const resp = await fetch('https://api.sampleapis.com/countries/countries');
    const json = await resp.json();
    setData(json);
    setIsLoading(false)
  }

  useEffect(() => {
    getData();
  }, []);

  return isLoading ? (
   <Loader/>
  ) : data ? (
    <Countries data={data} />
  ) : (
    <span>no data found</span>
  );
}