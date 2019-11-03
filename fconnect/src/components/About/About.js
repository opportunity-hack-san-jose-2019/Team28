import React, { Component } from "react";

class About extends Component {
  render() {
    return (
    <div>
      <div className="py-5">
        <div className="about container" id="about">
          <div className="row">
            <div className="px-5 col-md-8 text-center mx-auto">
              <h3 className="text-primary display-4">
                <b>You are not alone!</b>
              </h3>
              <h2 className="my-3">
                Let's connect together to help each other
              </h2>
              <p className="mb-3">
                I throw myself down among the tall grass by the trickling
                stream; and, as I lie close to the earth, a thousand unknown
                plants are noticed by me: when I hear the buzz of the little
                world among the stalks, and grow familiar with the countless
                indescribable.
              </p>{" "}
              <h2 className="text-primary display-6">
                <b> Why its all started!</b>
              </h2>
              <iframe
                width="650"
                height="372"
                src="https://www.youtube.com/embed/lAyljashF2A/?controls=1"
              ></iframe>
              <h2 className="text-primary display-6">
                <b> What and How are we gonna do!</b>
              </h2>
              <iframe
                width="650"
                height="372"
                src="https://www.youtube.com/embed/AxcsTezYcoc/?controls=1"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

    </div>
    );
  }
}

export default About;
