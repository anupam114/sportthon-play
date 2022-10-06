import { Link } from "react-router-dom";

const CreateTeam = () => {
  return (
    <div className="col-lg-7">
      <div className="middle-top-head my-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="tophead-title">
            <h2 className="mb-0">
              <Link to="/dashboard" className="text-black"><i className="fas fa-arrow-left"></i> Add Team</Link>
            </h2>
          </div>
        </div>
      </div>
      <div className="shadow-sm border bg-white rounded overflow-hidden mb-4">
        <div className="p-3">
          <form>
            <h4 className="h5 text-maroon">Team Information:</h4>
            <div className="row">
              <div className="col-lg-4 order-lg-2">
                <figure className="group-dp text-center">
                  <div className="teamprofileimg text-center mb-3">
                    <img
                      id="profileIMG"
                      src="frontend/images/noimage.jpg"
                      alt=""
                    />
                  </div>
                  <label className="uploadprofileImg btn btn-sm">
                    <i className="fas fa-camera"></i> Upload Team Image
                    <input type="file" onChange="readprofile(this);" />
                  </label>
                </figure>
              </div>
              <div className="col-lg-8 order-lg-1">
                <div className="form-group mb-3">
                  <label className="mb-1">Team Name</label>
                  <input type="text" className="form-control" name="" />
                </div>
                <div className="form-group mb-3">
                  <label className="mb-1">Select Sport</label>
                  <select
                    className="form-control "
                    id="game_id"
                    name="game_id"
                    required=""
                  >
                    <option value="" selected="">
                      - Sport -
                    </option>
                    <option value="13">American Football</option>
                    <option value="23">Archery</option>
                    <option value="26">Athletics</option>
                    <option value="17">Badminton</option>
                    <option value="9">Baseball</option>
                    <option value="7">Basketball</option>
                    <option value="38">Beach Volleyball</option>
                    <option value="44">Bobsleigh</option>
                    <option value="21">Bowling</option>
                    <option value="28">Boxing</option>
                    <option value="47">Canoeing</option>
                    <option value="16">Cricket</option>
                    <option value="31">Curling</option>
                    <option value="29">Cycling</option>
                    <option value="50">E-Sports</option>
                    <option value="34">Equestrian</option>
                    <option value="24">Fencing</option>
                    <option value="10">Field Hockey</option>
                    <option value="52">gdsg</option>
                    <option value="19">Golf</option>
                    <option value="25">Gymnastics</option>
                    <option value="30">Handball</option>
                    <option value="12">Ice Hockey</option>
                    <option value="27">Kabbadi</option>
                    <option value="18">Lacrosse</option>
                    <option value="33">Marathon</option>
                    <option value="40">Martial Arts</option>
                    <option value="35">Polo</option>
                    <option value="37">Rowing</option>
                    <option value="45">Skiing</option>
                    <option value="48">Snooker</option>
                    <option value="8">Soccer / Football</option>
                    <option value="36">Softball</option>
                    <option value="46">Squash / Racquet ball</option>
                    <option value="49">Surfing</option>
                    <option value="42">Swimming</option>
                    <option value="22">Table Tennis / Ping Pong</option>
                    <option value="20">Tennis</option>
                    <option value="32">Triathlon</option>
                    <option value="43">Tug of War</option>
                    <option value="11">Volleyball</option>
                    <option value="41">Water Polo</option>
                    <option value="39">Wrestling</option>
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label className="mb-1">Team Category</label>
                  <select
                    className="form-control"
                    id=""
                    name="team_type"
                    required=""
                  >
                    <option value="" selected="">
                      - Team Category -
                    </option>
                    <option value="3">High School</option>
                    <option value="4">College</option>
                    <option value="5">Recreational</option>
                    <option value="6">Professional</option>
                    <option value="7">Competitive</option>
                    <option value="8">Semi Professional</option>
                    <option value="9">Sport / Fitness Group</option>
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label className="mb-1">Team Type</label>
                  <select
                    className="form-control"
                    id=""
                    name="team_gender"
                    required=""
                  >
                    <option selected="" label="-- Team Type --"></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="co-ed">Co-Ed</option>
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label className="mb-1">Description</label>
                  <textarea className="form-control"></textarea>
                </div>
              </div>
            </div>
            <hr />
            <h4 className="h5 text-maroon">Location:</h4>
            <div className="form-group mb-3">
              <label className="mb-1">Address</label>
              <input type="text" className="form-control" name="" />
            </div>
            <div className="form-group mb-3">
              <label className="mb-1">
                <input type="checkbox" name="" /> Public Visibility
              </label>
            </div>
            <div className="form-group text-center">
              <button className="btn btn-marooon">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateTeam;
