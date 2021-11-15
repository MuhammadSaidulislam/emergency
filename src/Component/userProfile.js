import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./userProfile.css";
import { Card } from "react-bootstrap";

const UserProfile = (props) => {
  const data = props.data;
  // state
  console.log(data);
  const [edit, setEdit] = useState(false);
  let token = localStorage.getItem("token");

  //state
  const [firstName, setFirstName] = useState(data.first_name ? data.first_name : '');
  const [email, setEmail] = useState(data.email ? data.email : '');
  const [phone, setPhone] = useState(data.phone ? data.phone : '');
  const [phoneExtra, setPhoneExtra] = useState(data.phone_extra ? data.phone_extra : '');
  const [blood, setBlood] = useState(data.blood ? data.blood : '');
  const [gender, setGender] = useState(data.gender ? data.gender : '');
  const [address, setAddress] = useState(data.address ? data.address : '');
  const [thana, setThana] = useState(data.thana ? data.thana : '');
  const [district, setDistrict] = useState(data.district ? data.district : '');

  //toggle edit button
  const toggleEdit = async () => {
    setEdit(!edit);

    try {
      const response = await fetch(
        "https://helping-backend.vercel.app/api/user/",
        {
          method: "patch",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            email: email,
            phone: phone,
            thana: thana,
            district: district,
            address: address,
            phone_extra: phoneExtra
          }),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
    } catch {
      throw Error;
    }
  };

  return (
    <>
      <section className="profileSection">
        <Container>
          <Row>
            <Col md={7} className="centerPosition" key={data.id}>
              <Row className="profile">
                <Col md={12} className="profileImg">
                  <div className="float-end">
                    {!edit && (
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => toggleEdit()}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-2 w-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          width="20px"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                        Edit
                      </button>
                    )}

                    {edit && (
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => toggleEdit()}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          width="20px"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                          />
                        </svg>
                        Save
                      </button>
                    )}
                  </div>
                </Col>
                <Col md={12}>
                  {!edit && (
                    <div className="profileInfo">
                      <h1>
                        {data.first_name} {data.last_name}
                      </h1>
                      <p>
                        <strong>Email:</strong> {data.email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {data.phone}
                      </p>
                      <p>
                        <strong>Phone Extra:</strong> {data.phone_extra}
                      </p>
                      <p>
                        <strong>Blood Group:</strong> {data.blood}
                      </p>
                      <p>
                        <strong>Gender:</strong> {data.gender}
                      </p>
                      <p>
                        <strong>Address:</strong> {data.address}
                      </p>
                      <p>
                        <strong>Thana:</strong> {data.thana}
                      </p>
                      <p>
                        <strong>District:</strong> {data.district}
                      </p>
                    </div>
                  )}

                  {edit && (
                    <div className="profileInfo">
                      <p>Name:</p>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <p>Email:</p>
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <p>Phone:</p>
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <p>Phone Extra:</p>
                      <input
                        type="text"
                        value={phoneExtra}
                        onChange={(e) => setPhoneExtra(e.target.value)}
                      />
                      <p>Blood Group:</p>
                      <input
                        type="text"
                        value={blood}
                        onChange={(e) => setBlood(e.target.value)}
                      />
                      <p>Gender:</p>
                      <input
                        type="text"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <p>Address:</p>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <p>Thana:</p>
                      <input
                        type="text"
                        value={thana}
                        onChange={(e) => setThana(e.target.value)}
                      />
                      <p>District:</p>
                      <input
                        type="text"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                      />
                    </div>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default UserProfile;
