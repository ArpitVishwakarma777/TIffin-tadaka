import './Dashboard.css'
const Dashboard = () => {
  return (
    <div className="my-0 my-sm-4  ">
      {/* Header Section */}
      <div
        className="text-center mb-4"
        style={{
          fontSize: "60px",
          backgroundImage:
            "linear-gradient(45deg, #22b44e 40%, #c9d704 47%, #f22121 75%, #E23A3A 49%, #F24242 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        <span style={{ fontFamily: "Poppins, sans-serif" }}>Hello Kishan!</span>
      </div>

      {/* Admin Profile Card */}
      <div className='d-flex justify-content-center'>
      <div
        className="d-flex justify-content-center  align-items-center flex-wrap gap-4 p-4  "
        style={{boxShadow:" rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
          backgroundColor: "#eaecea",
          borderRadius:"20px",

          maxWidth: "800px",
       
        }}
      >
        <div className="text-center">
          <img
            className="rounded-circle shadow"
            width={200}
            src="https://res.cloudinary.com/drzc94rvk/image/upload/v1738401222/gswdxchx4je4qfbvxcci.jpg"
            alt="User"
          />
        </div>
        <div>
          <div className="my-2">
            <span className="fw-bold information text-secondary">Name:</span>{" "}
            <span className="information">Kishan</span>
          </div>
          <div className="my-2 ">
            <span className="fw-bold information text-secondary">Email:</span>{" "}
            <span className="information">kishanrajput4580@gmail.com</span>
          </div>
          <div className="my-2">
            <span className="fw-bold information text-secondary">Mobile:</span>{" "}
            <span className="information">8103137309</span>
          </div>
          <div className="my-2">
            <span className="fw-bold information text-secondary">Address:</span>{" "}
            <span className="information">Harda, M.P.</span>
          </div>
        </div>
      </div>
      </div>
      {/* Info Cards */}
      <div className="row  mx-xl-5 mt-5">
        <div className="col-md-3 mb-3">
          <div
            className="card text-white bg-danger shadow-sm"
            style={{
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div className="card-body text-center">
              <h5 className="card-title">Total Orders</h5>
              <p className="card-text display-6">120</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div
            className="card text-white bg-primary shadow-sm"
            style={{
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div className="card-body text-center">
              <h5 className="card-title">Revenue</h5>
              <p className="card-text display-6">₹25,000</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div
            className="card text-white bg-success shadow-sm"
            style={{
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div className="card-body text-center">
              <h5 className="card-title">Toatal Users</h5>
              <p className="card-text display-6">15</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div
            className="card text-white bg-warning shadow-sm"
            style={{
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div className="card-body text-center">
              <h5 className="card-title">Total Products</h5>
              <p className="card-text display-6">15</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
