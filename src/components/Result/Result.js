
import React from "react";

const Result = (props) =>  (
            <div className="panel panel-success">
                <div className="panel-heading text-center"><h3>Results</h3></div>
                <div className="panel-body">
                        {props.renderResult.map((element, index) => {
                            return (
                                    <div key={element._id} className="panel panel-info">
                                        <div className="panel-body">
                                            <div className="row">
                                            <div className="col-lg-9">
                                                <p>{element.web_url}</p>
                                            </div>
                                                <div className="col-lg-3">
                                                    <form>
                                                        <button onClick={props.handleSaveArticle} type="button" className="btn btn-info">Save Article</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            );
                        })}
                </div>
                {/* end panel body */}
            </div>
        );
 
export default Result;