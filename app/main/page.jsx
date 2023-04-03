import Link from "next/Link"

const departmentAPI =
  "https://collectionapi.metmuseum.org/public/collection/v1/departments";

const Main = () => {


  return (
    <div>
      <div>
        <form>
            <input
              type="search"
              placeholder="Search"/>
            <button type="submit">
               bişyler
            </button>
        </form>
      </div>
    </div>
  );
};

export default Main;
