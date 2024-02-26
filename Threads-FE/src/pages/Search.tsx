import FormSearch from "../features/Search/component/FormSearch";
import ResultSearch from "../features/Search/component/ResultSearch";
import Layout from "../layout/Layout";

const Search: React.FC = () => {
  return (
    <>
      <Layout>
        <FormSearch />
        <ResultSearch />
      </Layout>
    </>
  );
};
export default Search;
