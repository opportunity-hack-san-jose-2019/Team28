import React,{Component} from "react";

class About extends Component{

    render() {
        return (
            <div className="py-5">
                <div className="about container">
                    <div className="row">
                        <div className="px-5 col-md-8 text-center mx-auto">
                            <h3 className="text-primary display-4"><b>Pingendo</b></h3>
                            <h2 className="my-3">I am so happy, my dear friend.</h2>
                            <p className="mb-3">I throw myself down among the tall grass by the trickling stream; and,
                                as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear
                                the buzz of the little world among the stalks, and grow familiar with the countless
                                indescribable.</p> <a href="#" className="btn btn-primary">Download</a>
                            <p className="mt-2">
                                <small>Currently v2.0.3</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
