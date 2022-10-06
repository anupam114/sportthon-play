import { useReducer } from "react";
const initialState = {
  0: { display: "block" },
  1: { display: "none" },
  2: { display: "none" },
};
const reducer = (state, action) => {
  switch (action) {
    case "first":
      return {
        0: { display: "block" },
        1: { display: "none" },
        2: { display: "none" },
		3: { display: "block" },
      };
    case "second":
      return {
        0: { display: "none" },
        1: { display: "block" },
        2: { display: "none" },
		3: { display: "block" },
      };
    case "third":
      return {
        0: { display: "none" },
        1: { display: "none" },
        2: { display: "block" },
		3: { display: "block" },
      };
	  case "final":
		return {
		  0: { display: "none" },
		  1: { display: "none" },
		  2: { display: "none" },
		  3: { display: "none" },
		};
    default:
      return initialState;
  }
};
const WelcomeScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="welcome-screen" style={state[3]}>
      <form id="msform" className="formlogin">
        <fieldset style={state[0]}>
          <h2 className="fs-title">Welcome to Sportthon</h2>
          <p className="form-bottomtext">Let other players know who You are</p>
          <div className="uploadiimg">
            <img src="/assets/frontend/images/image1.jpg" />
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="form-group">
                <label>Upload a Photo</label>
                <input type="file" className="form-control" name="proflile" />
              </div>
            </div>
          </div>
          <input
            type="button"
            name="previous"
            className="previous action-button"
            value="Save"
          />
          <input
            type="button"
            name="next"S
            className="next action-button"
            value="Next"
            onClick={() => dispatch("second")}
          />
        </fieldset>

        <fieldset style={state[1]}>
          <h2 className="fs-title">Welcome to Sportthon</h2>
          <p className="form-bottomtext">
            To serve You better, We need to Know more about You
          </p>

          <ul className="genderlist">
            <li>
              <label>
                <img src="assets/frontend/images/male.png" />
                <br />
                Male
                <input type="radio" name="gender" />
              </label>
            </li>

            <li>
              <label>
                <img src="assets/frontend/images/female.png" />
                <br />
                Female
                <input type="radio" name="gender" />
              </label>
            </li>

            <li>
              <label>
                <img src="assets/frontend/images/transgender.png" />
                <br />
                Transgender
                <input type="radio" name="gender" />
              </label>
            </li>
          </ul>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Where is you Birthday ?</label>
                <input
                  type="text"
                  className="form-control datepicker"
                  name=""
                />
              </div>
              <div className="form-group">
                <label>
                  Stay in touch with your teammates, Enter phone number:
                </label>
                <div className="input-group">
                  <input type="tel" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <input
            type="button"
            name="previous"
            className="previous action-button"
            value="Previous"
            onClick={() => dispatch("first")}
          />
          <input
            type="button"
            name="next"
            className="next action-button"
            value="Next"
            onClick={() => dispatch("third")}
          />
        </fieldset>

        <fieldset style={state[2]}>
          <h2 className="fs-title">Welcome to Sportthon</h2>
          <p className="form-bottomtext">Pick Your Favourite Sport</p>
          <ul className="favouriteSport">
            <li className="active">
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1566265262Basketball.png" />
                </div>{" "}
                Basketball <input type="checkbox" name="gms[]" value="7" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565320525Soccer.png" />
                </div>{" "}
                Soccer / Football{" "}
                <input type="checkbox" name="gms[]" value="8" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565321259Baseball.png" />
                </div>{" "}
                Baseball <input type="checkbox" name="gms[]" value="9" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565320703Field-Hockey.png" />
                </div>{" "}
                Field Hockey <input type="checkbox" name="gms[]" value="10" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565320765Volleyball.png" />
                </div>{" "}
                Volleyball <input type="checkbox" name="gms[]" value="11" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565320828Ice-hockey.png" />
                </div>{" "}
                Ice Hockey <input type="checkbox" name="gms[]" value="12" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565320864American-Football.png" />
                </div>{" "}
                American Football{" "}
                <input type="checkbox" name="gms[]" value="13" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1564543802Cricket.png" />
                </div>{" "}
                Cricket <input type="checkbox" name="gms[]" value="16" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565320909Badminton.png" />
                </div>{" "}
                Badminton <input type="checkbox" name="gms[]" value="17" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565320952Lacrosse.png" />
                </div>{" "}
                Lacrosse <input type="checkbox" name="gms[]" value="18" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565057997Golf.png" />
                </div>{" "}
                Golf <input type="checkbox" name="gms[]" value="19" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565057969Tennis.png" />
                </div>{" "}
                Tennis <input type="checkbox" name="gms[]" value="20" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565057922Bowling.png" />
                </div>{" "}
                Bowling <input type="checkbox" name="gms[]" value="21" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565057901Ping-pong.png" />
                </div>{" "}
                Table Tennis / Ping Pong{" "}
                <input type="checkbox" name="gms[]" value="22" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565057863Archery.png" />
                </div>{" "}
                Archery <input type="checkbox" name="gms[]" value="23" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565057829Fencing.png" />
                </div>{" "}
                Fencing <input type="checkbox" name="gms[]" value="24" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565057808Gymnastics.png" />
                </div>{" "}
                Gymnastics <input type="checkbox" name="gms[]" value="25" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565057715Athletics.png" />
                </div>{" "}
                Athletics <input type="checkbox" name="gms[]" value="26" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565057701Kabaddi.png" />
                </div>{" "}
                Kabbadi <input type="checkbox" name="gms[]" value="27" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565058770Boxing.png" />
                </div>{" "}
                Boxing <input type="checkbox" name="gms[]" value="28" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565058936Cycling.png" />
                </div>{" "}
                Cycling <input type="checkbox" name="gms[]" value="29" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565059195Handball.png" />
                </div>{" "}
                Handball <input type="checkbox" name="gms[]" value="30" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565059306Curling.png" />
                </div>{" "}
                Curling <input type="checkbox" name="gms[]" value="31" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565059449Triathlon.png" />
                </div>{" "}
                Triathlon <input type="checkbox" name="gms[]" value="32" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565059576Marathon.png" />
                </div>{" "}
                Marathon <input type="checkbox" name="gms[]" value="33" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565059780Equestrian.png" />
                </div>{" "}
                Equestrian <input type="checkbox" name="gms[]" value="34" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565059881Polo.png" />
                </div>{" "}
                Polo <input type="checkbox" name="gms[]" value="35" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565060010Softball.png" />
                </div>{" "}
                Softball <input type="checkbox" name="gms[]" value="36" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565060095Rowing.png" />
                </div>{" "}
                Rowing <input type="checkbox" name="gms[]" value="37" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565060334Beach-VolleyBall.png" />
                </div>{" "}
                Beach Volleyball{" "}
                <input type="checkbox" name="gms[]" value="38" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565060440Wrestling.png" />
                </div>{" "}
                Wrestling <input type="checkbox" name="gms[]" value="39" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1573789329Taekwando.png" />
                </div>{" "}
                Martial Arts <input type="checkbox" name="gms[]" value="40" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565060599Waterpolo.png" />
                </div>{" "}
                Water Polo <input type="checkbox" name="gms[]" value="41" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565060804Swimming.png" />
                </div>{" "}
                Swimming <input type="checkbox" name="gms[]" value="42" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565060935Tug-of-War.png" />
                </div>{" "}
                Tug of War <input type="checkbox" name="gms[]" value="43" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565061001BOBSLEIGH.png" />
                </div>{" "}
                Bobsleigh <input type="checkbox" name="gms[]" value="44" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565061100Skiing.png" />
                </div>{" "}
                Skiing <input type="checkbox" name="gms[]" value="45" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565061283Squash.png" />
                </div>{" "}
                Squash / Racquet ball{" "}
                <input type="checkbox" name="gms[]" value="46" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565061502Canoeing.png" />
                </div>{" "}
                Canoeing <input type="checkbox" name="gms[]" value="47" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565145406snooker.png" />
                </div>{" "}
                Snooker <input type="checkbox" name="gms[]" value="48" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1565145452Surfing.png" />
                </div>{" "}
                Surfing <input type="checkbox" name="gms[]" value="49" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1574123655Esports.png" />
                </div>{" "}
                E-Sports <input type="checkbox" name="gms[]" value="50" />
              </label>
            </li>
            <li>
              <label>
                <div className="sportlogo">
                  <img src="/assets/frontend/images/games/1649159580sporthon-logo-v6.png" />
                </div>{" "}
                gdsg <input type="checkbox" name="gms[]" value="52" />
              </label>
            </li>
          </ul>

          <input
            type="button"
            name="previous"
            className="previous action-button"
            value="Previous"
			onClick={() => dispatch("second")}
          />
          <input
            type="button"
            name="submit"
            className="submit action-button"
            value="Submit"
			onClick={() => dispatch("final")}
          />
        </fieldset>
      </form>
    </div>
  );
};
export default WelcomeScreen;
