import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import SpotList from "./HostSpotList";

const Reservation = () => {
  const [search, setSearch] = useState();
  const location = useLocation();
  const keyword = location.state;
  // console.log(keyword[0]);

  const { isLoading, error } = useSelector((state) => state?.privateSpot);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const onChangeSearch = (e) => {
    e.preventDeafualt();
    setSearch(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDeafualt();
  };

  return (
    <>
      <Layout>
        <Header />

        <div>
          <form onSubmit={(e) => onSearch(e)}>
            <input
              type="text"
              // value={keyword[0]}
              placeholder="구를 입력하세요 예) 마포구"
              onChange={onChangeSearch}
            />
            <button type="submit">스팟 찾기</button>
            <div>
              {/* {keyword[1]}  */}
              검색 결과
            </div>
          </form>
        </div>
        <SpotList />
      </Layout>
    </>
  );
};

export default Reservation;
