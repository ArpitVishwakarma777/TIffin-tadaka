import { useSelector, useDispatch } from "react-redux";
import { setshowPopup, setHiddenPopup } from "../RTK/slices";
import "./DiscriptionPopup.css";
export function DicriptionPopup() {
  const dispatch = useDispatch();
  const contentPopup = useSelector(
    (state) => state.managePopupStatus.contentPopup
  );

  return (
    <div className="container-fluid  dicriptionPopup">
      <div className=" row d-flex justify-content-center align-items-center  ms-2 ms-lg-0 ">
        <div className=" discription-img col-4 ">
          <img className="popup-image" src={contentPopup.src} alt="" />
        </div>

        <div className="text-portion col-12  col-lg-8 ">
          <h2 className="fs-1 pt-4">{contentPopup.title}</h2>

          <p className="text-danger fs-2 text-danger font-weight-bold">
            {contentPopup.text[0].title}
          </p>
          <p className="text-success fs-4">{contentPopup.text[0].body}</p>
          <span className="fs-4 text-danger fw-bold">Staples :-</span>
          <p className="fs-5">{contentPopup.text[0].DailyMenu[0]}</p>
          <span className="fs-4 text-danger fw-bold">
            Sides & Mains List:-
          </span>
          <p className="fs-5">{contentPopup.text[0].DailyMenu[1]}</p>
          <span className="fs-4 text-danger fw-bold"> Special:- </span>
          <p className="fs-5">
            {contentPopup.text[0].DailyMenu[2]
              ? contentPopup.text[0].DailyMenu[2]
              : "Nothing Special"}
          </p>
          <div className="d-flex justify-content-between">
            <p className="fs-5">
              <span className="fs-4 text-danger fw-bold">
                Price:-{" "}
              </span>
              {`₹${contentPopup.price}`}
            </p>
            <button
              className=" my-3 mx-4 btn btn-primary"
              onClick={() => {
                dispatch(setHiddenPopup());
              }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
