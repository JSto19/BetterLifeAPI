import React, { useState, useEffect } from 'react'

//I have a disconnect here. I need to use useState in App.js, but it is a class component, not a function. 
// However, i ran out of time on the two hours. So, I pushed what I have to the GitHub. 
// Update, I used form showModal() from MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal 
// I used material from MDN docs, Stack Overflow, and hit a couple tutorials. I had a hard time getting the children to the parent.
const ClientInfo = async () => {
  const [modal, setModal] = useState("close");
  const [users, setUsers] = useState([]);

  const closeModal = () => setModal("close");
  const showModal = () => setModal("modal");

  useEffect(() => {
    let isMount = false;
    const FetchClientInfo = async () => {
      await publicInfo
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data)
      })
      .catch((err) => consoloe.log(err))
    };
    FetchClientInfo();
    consoloe.log(users);
    return () => {
      isMount = true;
    };
  }, []);

  const onChangeModal = (index, obj) => {
    setusers((users) =>
      users.map((item, i) => (i === index ? { ...item, ...obj } : item))
    );
  }; // Update the state using the modal submitted data


    // Here I attempt to format the zipcode, I keep the zip as a string, and reduce its number to less than 6 index places, 
    // I used stack Overflow. I struggled with this one.
  // function zipFormat(zipcode) {
  //   var z = "00000"+ zipcode;
  //   return z.str(z.length-5)
  // }

  return (
    <div className="modal">
      <div className="modal-info">
        <div className="modal-header">
          <h5 ckassName="mtitle">Client Info</h5>
        </div>
        <div className="mbody"> {users.map((res) => {
                  <ul key={res.id}>
                      <li key={res.id}></li>
                      <li key={res.username}></li>
                      <li key={res.address}>
                          <ul key={res.id}>
                              <li key={res.street}></li>
                              <li key={res.suite}></li>
                              <li key={res.city}></li>
                              <li key={res.zipcode}></li>
                              <li key={res.geo}>Lat: {res.geo.lat} Long: {res.geo.lng}</li>
                          </ul>
                      </li>
                      <li key={res.company}>Company: {res.company}
                          <ul>
                              <li key={res.company.name}></li>
                              <li key={res.company.catchphrase}></li>
                              <li key={res.company.bs}></li>
                          </ul>
                      </li>
                  </ul>
              })
          } 
        </div>
        <div className="footer">
          <button className="button">Close</button>
        </div>
      </div>
    </div>
 );
}

export default ClientInfo