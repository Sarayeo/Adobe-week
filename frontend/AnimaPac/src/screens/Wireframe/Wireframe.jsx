import React from "react";
import "./style.css";

export const Wireframe = () => {
  return (
    <div className="wireframe">
      <div className="div">
        <div className="overlap">
          <div className="overlap">
            <div className="overlap-group">
              <div className="rectangle" />
              <p className="keeper-tracker">
                <span className="text-wrapper">Keeper</span>
                <span className="span">&nbsp;</span>
                <span className="text-wrapper">tracker</span>
              </p>
              <img className="img" alt="Group" src="/img/group-2.svg" />
              <div className="frame">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-17.png" />
                    <div className="text-wrapper-2">Find a country</div>
                    <p className="p">How good is this country at KeeperVR ?</p>
                    <div className="group-2">
                      <img className="arrow" alt="Arrow" src="/img/arrow-1.svg" />
                      <img className="discover" alt="Discover" src="/img/discover.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-wrapper">
              <div className="div-wrapper">
                <div className="overlap-group-3">
                  <p className="text-wrapper-3">Highest scores of the world</p>
                  <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-14.png" />
                  <p className="text-wrapper-4">See the scores around the world and wich country is winng</p>
                  <div className="img-wrapper">
                    <img className="group-3" alt="Group" src="/img/group-10.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="overlap-3">
                <div className="group-4">
                  <div className="overlap-group-4">
                    <div className="rectangle-4" />
                    <img className="group-5" alt="Group" src="/img/group-8.png" />
                  </div>
                </div>
                <div className="text-wrapper-5">Let’s compare</div>
                <p className="text-wrapper-6">Wich country is the best ?</p>
              </div>
              <div className="group-6">
                <img className="arrow" alt="Arrow" src="/img/arrow-1-1.svg" />
                <img className="discover" alt="Discover" src="/img/discover-1.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-7">#FLAG COUNTRY</div>
        </div>
        <div className="group-7">
          <div className="overlap-5">
            <div className="text-wrapper-8">Leading country</div>
            <img className="line" alt="Line" src="/img/line-4.svg" />
            <img className="line-2" alt="Line" src="/img/line-5.svg" />
          </div>
        </div>
        <div className="overlap-6">
          <div className="overlap-7">
            <div className="group-8">
              <div className="overlap-5">
                <div className="text-wrapper-8">Scores of the world</div>
                <img className="line-3" alt="Line" src="/img/line-4-1.svg" />
                <img className="line-4" alt="Line" src="/img/line-5-1.svg" />
              </div>
            </div>
            <div className="text-wrapper-9">#TOPSCORE</div>
          </div>
          <div className="overlap-8">
            <img className="line-5" alt="Line" src="/img/line-6.svg" />
            <div className="text-wrapper-10">#MINSCORE</div>
          </div>
          <img className="line-6" alt="Line" src="/img/line-7.svg" />
          <img className="group-9" alt="Group" src="/img/group-16.png" />
        </div>
        <div className="group-10">
          <div className="overlap-5">
            <div className="text-wrapper-8">Score of a country</div>
            <img className="line-3" alt="Line" src="/img/line-4-2.svg" />
            <img className="line-4" alt="Line" src="/img/line-5-2.svg" />
          </div>
        </div>
        <div className="group-11">
          <div className="overlap-5">
            <div className="text-wrapper-8">Score of a country</div>
            <img className="line-3" alt="Line" src="/img/line-4-3.svg" />
            <img className="line-4" alt="Line" src="/img/line-5-3.svg" />
          </div>
        </div>
        <p className="COUNTRY-is-actually">
          <span className="text-wrapper-11">#COUNTRY </span>
          <span className="text-wrapper-12">
            is actually winning the event !<br />
          </span>
          <span className="text-wrapper-13">
            <br />
            <br />
            #COUNTRY is actually :<br />
            ##NUMBER in game played
            <br />
            ##NUMBER in average score
            <br />
            ##NUMBER in max score
            <br />
          </span>
        </p>
        <img className="group-12" alt="Group" src="/img/group-18.png" />
        <div className="overlap-9">
          <img className="group-13" alt="Group" src="/img/group-20.png" />
          <img className="line-7" alt="Line" src="/img/line-10.svg" />
        </div>
        <img className="france-FR" alt="France FR" src="/img/france-fr.svg" />
        <p className="FRANCE-is-actually">
          FRANCE is actually winning the event !<br />
          <br />
          FRANCE team played 12056 games.
          <br />
          With an average score of 12 saves,
          <br />
          The top score for FRANCE is 98 saves !
        </p>
        <div className="rectangle-5" />
      </div>
    </div>
  );
};
