import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { summaryProduct } from "../../common/actions/productActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
const Dashboard = () => {
  const dispatch = useDispatch();
  const productSummary = useSelector((state) => state.productSummary);
  const { loading, error, products } = productSummary;
  console.log(products);
  useEffect(() => {
    summaryProduct();
  }, [dispatch]);

  return (
    <React.Fragment>
      <div>
        <div>
          <h2 className="text-center mt-[15px]">Statistika</h2>
        </div>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <ul className="row summary">
              <li>
                <div className="summary-title color1">
                  <span>
                    <i className="fa fa-users" /> İstifadəçilər
                  </span>
                </div>
                <div className="summary-body"></div>
              </li>
              <li>
                <div className="summary-title color2">
                  <span>
                    <i className="fa fa-shopping-cart" /> Sifarişlər
                  </span>
                </div>
                fff
              </li>
              <li>
                <div className="summary-title color3">
                  <span>
                    <i className="fa fa-money" /> Qazanc
                  </span>
                </div>
                <div className="summary-body"></div>
              </li>
            </ul>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
