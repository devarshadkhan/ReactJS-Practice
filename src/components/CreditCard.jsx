import React, { useContext } from "react";
import MyContext from "../context/MyContext";

const CreditCard = () => {
const {setCardNum,cardNum, cardExp, setCardExp,cvv,setCvv, phone,setPhone} = useContext(MyContext)




  return (
    <>
      <div className="box">
        <div className="head">
          <h1>Credit Card</h1>
        </div>

        <div className="cardN">
          <h2>{cardNum}</h2>
          <div className="frefew">
            <h2>name</h2>
            <div>
              <span>Expiry</span>
              <h6>{cardExp}</h6>
            </div>
            <span>CVV</span>
            <h4>{cvv}</h4>
          </div>
          <span>Phone</span>
          <p>{phone}</p>
        </div>
      </div>

      <div className="form">
        <input type="number" name="" id="" placeholder="card number" onChange={(e)=> setCardNum(e.target.value)}/>
        <input type="number" name="" id="" placeholder="card expiry"  onChange={(e)=> setCardExp(e.target.value)}/>
        <input type="number" name="" id="" placeholder="CVV" onChange={(e)=> setCvv(e.target.value)}/>
        <input type="number" name="" id="" placeholder="phone number" onChange={(e)=> setPhone(e.target.value)}/>
      </div>
    </>
  );
};

export default CreditCard;
