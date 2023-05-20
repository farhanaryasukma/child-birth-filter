import { useState } from "react";
export default function Filter() {
  const [isCheck, setIscheck] = useState(false)
  const [babyCondition, setBabyCondition] = useState(["healthy", "disabled", "stillborn"]);

  const handleCheckboxChange = () => {
    setIscheck(!isCheck)
  };
  return (
    <div className="container border-top">
      <form action="">
      <h5>baby condition</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="healthy"
            id="healthy"
            checked={isCheck}
            onChange={handleCheckboxChange}
          >
          </input>
          <label className="form-check-label" for="healthy">
            healthy
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="disabled"
            id="disabled"
          >
          </input>
          <label className="form-check-label" for="disabled">
            disabled
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="stillbirth"
            id="stillbirth"
          >
          </input>
          <label className="form-check-label" for="stillbirth">
            stillbirth
          </label>
        </div>
        <h5>Baby Gender</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="boy"
            id="boy"
            
          >
          </input>
          <label className="form-check-label" for="boy">
            boy
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="girl"
            id="girl"
            
          >
          </input>
          <label className="form-check-label" for="girl">
            girl
          </label>
        </div>
        <h5>mother's age</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="below-20"
            id="below-20"
          >
          </input>
          <label className="form-check-label" for="below-20">
            <p>below 20</p>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="20-25"
          >
          </input>
          <label className="form-check-label" for="20-25">
            <p>20-25</p>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="25-30"
          >
          </input>
          <label className="form-check-label" for="25-30">
            <p>25-30</p>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="30-35"
          >
          </input>
          <label className="form-check-label" for="30-35">
            <p>30-35</p>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="above 35"
          >
          </input>
          <label className="form-check-label" for="above 35">
            <p>above 35</p>
          </label>
        </div>
        <h5>childbirth method</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="normal"
            id="normal"
          >
          </input>
          <label className="form-check-label" for="normal">
            <p>normal</p>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="support"
            id="support"
          >
          </input>
          <label className="form-check-label" for="support">
            <p>with support</p>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="c-section"
            id="c-section"
          >
          </input>
          <label className="form-check-label" for="c-section">
            <p>c-section</p>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="waterbirth"
            id="waterbirth"
          >
          </input>
          <label className="form-check-label" for="waterbirth">
            <p>waterbirth</p>
          </label>
        </div>
        <h5>labour range</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="full"
            id="full"
          >
          </input>
          <label className="form-check-label" for="full">
            <p>full-term labour</p>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="preterm"
            id="preterm"
          >
          </input>
          <label className="form-check-label" for="preterm">
            <p>preterm labour</p>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="postterm"
            id="postterm"
          >
          </input>
          <label className="form-check-label" for="postterm">
            <p>postterm labour</p>
          </label>
        </div>
      </form>
    </div>
  );
}
